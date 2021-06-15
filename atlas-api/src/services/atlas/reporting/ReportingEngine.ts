import path from "path";
import glob from "glob";
import * as excel from "exceljs";


import {logger} from "@shared/logger";
import * as fs from "fs";
import {Neo4JAccessLayer} from "@database/neo4jAccessLayer";
import {ReportInterface, ReportResultsInterface} from "@interfaces/report/Report.interface";
import {int} from "neo4j-driver";


export default class ReportingEngine {

    private static INSTANCE: ReportingEngine = null;
    private static APPLICATION_NAME_PROP = /%APPLICATION_NAME%/g;
    private static NEO4JAL = Neo4JAccessLayer.getInstance();

    private reportFolder: string;
    private tempFolder: string;
    private reports: ReportInterface[] = [];

    private constructor() {
        const appDir = path.dirname(require.main.filename);
        this.reportFolder = path.join(appDir, "../serialization/reports");
        this.tempFolder = path.join(appDir, "../temp");
        this.listReports();
    }

    /**
     * Get the instance of the singleton
     */
    public static getInstance(): ReportingEngine {
        if (ReportingEngine.INSTANCE == null) {
            ReportingEngine.INSTANCE = new ReportingEngine();
        }

        return ReportingEngine.INSTANCE;
    }

    /**
     * Get the list of the reports
     * @private
     */
    public getReports(): ReportInterface[] {
        return this.reports;
    }

    /**
     * Get a report using its id
     * @param id Id of the report
     */
    public getReportById(id: number): ReportInterface | null {
        for (let i = 0; i < this.reports.length; i++) {
            if (this.reports[i].id == id) return this.reports[i];
        }
        return null;
    }

    /**
     * Get the list of the report
     * @param category Category to search
     */
    public getReportsByCategory(category: string): ReportInterface[] {
        const reportList: ReportInterface[] = [];
        this.reports.forEach(x => {
            if (category in x.categories) reportList.push(x);
        });
        return reportList;
    }


    /**
     * Get the categories of the reports
     */
    public getCategories(): string[] {
        const categoriesSet = new Set();
        this.reports.forEach(x => {
            x.categories.forEach(x => categoriesSet.add(x));
        });

        return [...categoriesSet] as string[];
    }

    /**
     * Generate a report for on application
     * @param idDoc Id of the report to generate
     * @param application Name of the application
     * @param parameters Parameters
     */
    public async generateReport(idDoc: number, application: string, parameters: any): Promise<ReportResultsInterface> {

        const report: ReportInterface = this.getReportById(idDoc);
        if (report == null) throw new Error(`No report with id ${idDoc} was found.`)

        // Verify the parameters, throw an error if parameters are not present
        const keys: string[] = Object.keys(parameters);
        report.parameters.forEach(x => {
            let found = false;
            keys.forEach(k => {
                if (k == x.name) {
                    found = true;
                }
            });
            if (!found)
                throw new Error(`Parameter with name ${x.name} was not found. Please provide all the parameters : [${report.parameters.map(x => x.name).join(", ")}]}]`)
        });

        // Replace the application name in the query
        const req = report.request.replace(ReportingEngine.APPLICATION_NAME_PROP, application);

        // Launch the query
        const result = await ReportingEngine.NEO4JAL.executeWithParameters(req, parameters);
        const columns = report.returnValues;

        const reportResults: ReportResultsInterface = {
            id: report.id,
            nickname: report.nickname,
            name: report.name,
            description: report.description,
            columns: columns,
            records: []
        };

        // Iterate over the result
        for (let i = 0; i < result.records.length; i++) {
            const r = result.records[i];
            const record: any[] = [];
            columns.forEach(col => {
                // if the column if not in the results, put "undefined"
                if (!r.has(col)) record.push("undefined")
                else {
                    let obj = r.get(col);
                    if (obj.low) obj = int(obj).toNumber(); // Cheapest way to check if it's an integer
                    record.push(obj)
                }
            });

            reportResults.records.push(record);
        }

        return reportResults;
    }

    /**
     * Generate a report and export it to the temp folder
     * @param idDoc Id of the documentation
     * @param application Name of the application
     * @param parameters Parameters of the document
     */
    public async generateReportAndExport(idDoc: number, application: string, parameters: any): Promise<string> {
        const reportResults = await this.generateReport(idDoc, application, parameters);
        const filepath = await this.generateExcel(reportResults);
        return filepath;
    }

    /**
     * Generate an excel from the resutls of a report
     * @param results Results of the Reports
     */
    public async generateExcel(results: ReportResultsInterface): Promise<string> {
        try {
            const timestamp = Date.now();
            const reportName = `Report_${results.nickname}_${timestamp}.xlsx`;
            const fullPath = path.join(this.tempFolder, reportName);

            const workbook = new excel.Workbook();
            workbook.creator = 'Atlas';
            workbook.lastModifiedBy = 'Atlas';
            workbook.created = new Date();
            workbook.modified = new Date();
            workbook.lastPrinted = new Date();

            // eslint-disable-next-line max-len
            const worksheet = workbook.addWorksheet(results.nickname, {properties: {tabColor: {argb: 'FFC0000'}}});
            // Put name in merged first column
            worksheet.mergeCells('A1:H1');
            worksheet.getCell('A1').value = "Name: " + results.name;

            // Put the description
            worksheet.mergeCells('A2:H2');
            worksheet.getCell('A2').value = "Description: " + results.description;

            // Format columns
            const cols = results.columns.map(x => {
                return {name: x, filterButton: true}
            })

            worksheet.addRow(results.columns);

            results.records.forEach(x => {
                worksheet.addRow(x);
            });
            //
            // // Create a table
            // const table = worksheet.addTable({
            //     name: 'MainTable',
            //     ref: 'A3',
            //     headerRow: true,
            //     totalsRow: true,
            //     columns: cols,
            //     rows: results.records,
            // });
            //
            // // turn header row on
            // table.headerRow = true;
            // table.totalsRow = false;
            // table.commit();


            await workbook.xlsx.writeFile(fullPath);
            return fullPath;
        } catch (err) {
            logger.error(`The generation of excel related to report with ${results.id} failed.`, err);
            throw new Error(`Excel generation failed for report ${results.id}`);
        }
    }

    /**
     * Process a file to a JSON
     * @param path Path of the file to treat
     * @private
     */
    private processFile(path: string): ReportInterface {
        const rawdata = fs.readFileSync(path, {encoding: "utf-8"});
        const report = JSON.parse(rawdata);
        return report as ReportInterface;
    }

    /**
     * List the reports in the report directory and store them as a list
     * @private
     */
    private listReports(): void {
        const fileList: string[] = glob.sync(`${this.reportFolder}/*.json`);
        let it = 0;
        fileList.forEach(x => {
            try {
                const report = this.processFile(x);
                report.id = it;
                this.reports.push(report);
                it = it + 1;
            } catch (err) {
                logger.error(`Failed to open the report: ${x}.`, err);
            }
        })
    }


}