/*
    {
        "identity": 487,
        "labels": [
            "Module",
            "TreasuryEdge"
        ],
        "properties": {
        "Type": "module",
        "Count": 3453,
        "AipId": "99999991",
        "Color": "rgb(34, 199, 214)",
        "Name": "com"
        }
    }
}*/

export default interface IModule {
    _id?: number;
    hidden?: boolean;
    concept: boolean;
    alternateDrilldown?: boolean;
    color: string;
    count: number;
    name: string;
}
