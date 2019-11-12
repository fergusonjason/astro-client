import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";

import { AstroService } from "../astro.service";

import { IDisplaysDataTable } from "../model/DisplaysColumns";
import { IQuery } from "../model/Query";
import { HD } from "./hd";



@Component({
  selector: "app-hd",
  templateUrl: "./hd.component.html",
  styleUrls: ["./hd.component.css"],
  providers: [AstroService]
})
export class HdComponent implements OnInit, IDisplaysDataTable<HD> {

  queryForm: FormGroup;

  queryObj: IQuery = { offset: 0, limit: 20, filter: {}};

  private formGroupTemplate: object = {
    queryField: "ID",
    queryOp: "$eq",
    queryParam: "",
    sortField: "ID",
    sortDir: 1,
    offset: 0,
    limit: 20
  };

  displayedItems: HD[] = [];

  dataSource: MatTableDataSource<HD>;

  displayColumns: string[] = ["ID", "Ptm", "Ptg", "Intensity", "SpectralType", "Rem"];

  queryableFields: any[] = ["ID"];

  allowedOperations: string[] = ["$eq", "$ne"];

  constructor(private astroService: AstroService, private formBuilder: FormBuilder) {
    this.formBuilder.group(this.formGroupTemplate);
  }

  ngOnInit() {
    this.astroService.getPage<HD>("hd", 0, 20).subscribe((data) => {
      this.displayedItems = data.result;
      this.dataSource = new MatTableDataSource<HD>(this.displayedItems);
    });

  }

}
