export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    progress: number;
    status: string;
    createdAt: Date;
    subRows?: Person[] | null;
};
export declare function makeData(...lens: number[]): Person[];
export type LimitRequestStatus = {
    id: string;
    accountName: string;
    code: string;
    requestLimit: number;
    status: string;
    progress?: Progress[] | null;
};
export type Progress = {
    id: string;
    remarks: string;
    createdAt: Date;
};
export declare const newRequestStatus: () => LimitRequestStatus;
export declare function makeRequestStatusData(...lens: number[]): LimitRequestStatus[];
