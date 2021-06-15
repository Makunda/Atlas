export default interface StatisticInterface {
    id?: number;
    title: string;
    description: string;
    categories: string[];
    request: string;
    inverseResults: boolean;
}