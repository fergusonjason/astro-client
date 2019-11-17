
export interface PagedDataResponse<T> {

    result: T[];
    start: number;
    stop: number;
    totalRecords: number;

}
