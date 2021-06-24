/**
 * Imaging module interface
 */
export default interface Module {
    _id: number;
    hidden?: boolean;
    concept: boolean;
    alternateDrilldown?: boolean;
    color: string;
    count: number;
    name: string;
}