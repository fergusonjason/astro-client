import { MatTableDataSource } from "@angular/material";

/**
 * Interface for Components that use an Angular Material Table component to display data
 */
export interface IDisplaysDataTable<T> {

    displayedItems: T[];
    displayColumns: string[];
    dataSource: MatTableDataSource<T>;
}
