/**
 *  Interface for Parameters in reports
 */
export interface ReportParameter {
    name: string,
    description: string,
    type: string,
    values?: string[]
}

/**
 * Interface for the report generation
 */
export interface ReportInterface {
    id?: number,
    nickname: string,
    name: string,
    description: string,
    categories : string[],
    parameters: ReportParameter[],
    request: string,
    returnValues: string[]
}


/**
 * Results of the report
 */
export interface ReportResultsInterface {
    id: number,
    nickname: string,
    name: string,
    description: string;
    columns: string[]
    records: any[][]
}