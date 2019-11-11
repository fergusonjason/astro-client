import { Component, OnInit } from "@angular/core";
import { AstroService } from "../astro.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { IQuery } from "../model/Query";
import { Yale } from "./yale";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-yale",
  templateUrl: "./yale.component.html",
  styleUrls: ["./yale.component.css"],
  providers: [AstroService ]
})
export class YaleComponent implements OnInit {

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

  displayedItems: Yale[] = [];

  dataSource: MatTableDataSource<Yale>;

  displayColumns: string[] = ["ID", "name", "VisualMagnitude", "BV", "SpectralType", "NoteFlag"];

  constructor(private astroService: AstroService, private formBuilder: FormBuilder) {
    this.formBuilder.group(this.formGroupTemplate);
   }

  ngOnInit() {
    this.astroService.getPage<Yale>("yale", 0, 20).subscribe((data) => {
      this.displayedItems = data.result;
      this.dataSource = new MatTableDataSource<Yale>(this.displayedItems);
    });
  }

}
