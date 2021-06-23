import {Neo4JAccessLayer} from "@database/Neo4jAccessLayer";
import path from "path";

import {logger} from "@shared/Logger";
import fs from "fs";
import glob from "glob";
import StatisticResultInterface from "@interfaces/statistics/statisticResult.interface";
import StatisticInterface from "@interfaces/statistics/statistic.interface";
import {Integer, QueryResult} from "neo4j-driver";


export default class StatisticsEngine {

    private static INSTANCE: StatisticsEngine = null;
    private static APPLICATION_NAME_PROP = /%APPLICATION_NAME%/g;
    private static NEO4JAL = Neo4JAccessLayer.getInstance();

    private readonly statisticsFolder: string;
    private statList: StatisticInterface[] = [];
    private filesLoaded: string[] = [];

    private constructor() {
        const appDir = path.dirname(require.main.filename);
        this.statisticsFolder = path.join(appDir, "../serialization/statistics");
        this.loadStatistics();
    }

    /**
     * Get the instance of the singleton
     */
    public static getInstance(): StatisticsEngine {
        if (StatisticsEngine.INSTANCE == null) {
            StatisticsEngine.INSTANCE = new StatisticsEngine();
        }

        return StatisticsEngine.INSTANCE;
    }

    /**
     * convert a Neo4j type to a number
     * @param value
     * @private
     */
    private static toNumber(value: Integer | number | string | { low: number; high: number }): number {
        if (typeof (value) == 'string') return parseFloat(value);
        if (typeof (value) == 'number') return value;
        if (value.low && value.high) {
            let res = value.high
            for (let i = 0; i < 32; i++) {
                res *= 2
            }
            return value.low + res
        }
    }

    /**
     * Process a json file in the Action directory
     * @param path Path of the file
     * @return The Action found in the file, or an empty array if something went wrong
     * @private
     */
    private static processFile(path: string): StatisticInterface[] {
        try {
            const actionList: StatisticInterface[] = [];
            const content: string = fs.readFileSync(path, {encoding: 'utf8'});
            return JSON.parse(content) as StatisticInterface[];
        } catch (err) {
            logger.error(`Failed to load file with path ${path}.`, err);
            return [];
        }
    }

    /**
     * Get the list of the report by category
     * @param category Category to search
     */
    public async getStatisticsByCategory(category: string, application: string):
        Promise<StatisticResultInterface[]> {
        const statResults: StatisticResultInterface[] = [];
        for (const x of this.statList) {
            try {
                if (category in x.categories)
                    statResults.push(await this.executeStatistic(x, application));
            } catch (ignored) {
                // Ignored
            }
        }
        return statResults;
    }

    /**
     * Get the results of all the statistics
     * @param application
     */
    public async getStatistics(application: string): Promise<StatisticResultInterface[]> {
        const statResults: StatisticResultInterface[] = [];
        for (const x of this.statList) {
            try {
                statResults.push(await this.executeStatistic(x, application));
            } catch (ignored) {
                // Ignored
            }
        }
        return statResults;
    }

    /**
     * Get the categories of the actions
     */
    public getCategories(): string[] {
        const categoriesSet = new Set();
        this.statList.forEach(x => {
            x.categories.forEach(x => categoriesSet.add(x));
        });

        return [...categoriesSet] as string[];
    }

    /**
     * Execute a statistic on a specific application
     * @param stat Statistic to be exeuted
     * @param application Name of the application
     */
    public async executeStatistic(stat: StatisticInterface, application: string): Promise<StatisticResultInterface> {
        try {
            const req = stat.request.replace(StatisticsEngine.APPLICATION_NAME_PROP, application);
            const results: QueryResult = await StatisticsEngine.NEO4JAL.execute(req);
            if (!results.records || results.records.length === 0)
                throw new Error(`The statistic with title '${stat.title}', failed to return results.`)

            const result = StatisticsEngine.toNumber(results.records[0].get("percentage"));
            return {
                title: stat.title,
                description: stat.description,
                percentage: result,
                categories: stat.categories,
                inverseResults: stat.inverseResults
            };

        } catch (err) {
            logger.error(`Failed to execute Statistic with title '${stat.title}'.`, err);
            throw new Error(`Failed to execute Statistic with title '${stat.title}'.`);
        }

    }

    /**
     * Get a statistic using its id
     * @param id Id of the report
     */
    private getStatisticById(id: number): StatisticInterface | null {
        for (let i = 0; i < this.statList.length; i++) {
            if (this.statList[i].id == id) return this.statList[i];
        }
        return null;
    }

    /**
     * List the actions files  in the actions directory and store them as a list
     * @private
     */
    private loadStatistics(): void {
        const fileList: string[] = glob.sync(`${this.statisticsFolder}/*.json`);
        let it = 0;
        fileList.forEach(x => {
            try {
                const sList: StatisticInterface[] = StatisticsEngine.processFile(x);
                for (let i = 0; i < sList.length; i++) {
                    sList[i].id = it;
                    it = it + 1;
                    this.statList.push(sList[i]);
                }

                this.filesLoaded.push(x);
            } catch (err) {
                logger.error(`Failed to open the action file: ${x}.`, err);
            }
        })
    }


}