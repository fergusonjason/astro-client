import { Component, OnInit } from "@angular/core";
import { AstroService } from "../astro.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { IQuery } from "../model/Query";
import { Gliese } from "./Gliese";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-gliese",
  templateUrl: "./gliese.component.html",
  styleUrls: ["./gliese.component.css"],
  providers: [AstroService]
})
export class GlieseComponent implements OnInit {

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

  displayedItems: Gliese[] = [];

  dataSource: MatTableDataSource<Gliese>;

  displayColumns: string[] = ["Name", "ProperMotion", "ProperMotionAngle", "RadialVelocity", "VisualMagnitude", "BV",
    "Parallax", "SpectralType"];

  constructor(private astroService: AstroService, private formBuilder: FormBuilder) {
    this.formBuilder.group(this.formGroupTemplate);
  }

  ngOnInit() {
    this.astroService.getPage<Gliese>("gliese", 0, 20).subscribe((data) => {
      this.displayedItems = data.result;
      this.dataSource = new MatTableDataSource<Gliese>(this.displayedItems);
    });
  }

}
