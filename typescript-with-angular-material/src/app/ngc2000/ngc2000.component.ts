import { Component, OnInit } from "@angular/core";
import { AstroService } from "../astro.service";
import { FormGroup, FormBuilder } from '@angular/forms';
import { IQuery } from '../model/Query';
import { Ngc2000 } from './ngc2000';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-ngc2000",
  templateUrl: "./ngc2000.component.html",
  styleUrls: ["./ngc2000.component.css"],
  providers: [AstroService]
})
export class Ngc2000Component implements OnInit {

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

  displayedItems: Ngc2000[] = [];

  dataSource: MatTableDataSource<Ngc2000>;

  displayColumns: string[] = ["ID", "magnitude", "source", "size", "Desc", "constellation", "type"];

  constructor(private astroService: AstroService, private formBuilder: FormBuilder) {
    this.formBuilder.group(this.formGroupTemplate);
   }

  ngOnInit() {
    this.astroService.getPage<Ngc2000>("ngc2000", 0, 20).subscribe((data) => {
      this.displayedItems = data.result;
      this.dataSource = new MatTableDataSource<Ngc2000>(this.displayedItems);
    });
  }

}
