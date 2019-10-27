import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, SimpleChange } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { HD } from "./hd";
import { IQuery } from "../models/Query";
import { PagedDataResponse } from "../models/PagedDataResponse";

import { AstroService } from "../astro.service";

@Component({
  selector: "app-hd",
  templateUrl: "./hd.component.html",
  styleUrls: ["./hd.component.css","../../assets/grid.css"]
})
export class HdComponent implements OnInit, AfterViewInit {

  // @Input()
  // _queryField: string = "HD";

  queryForm: FormGroup;

  queryObj: IQuery = {offset: 0, limit: 20};

  displayedItems: HD[] = [];

  // start: number = 0;
  // stop: number = 20;

  private formGroupTemplate: object = {
    queryField: "ID",
    queryOp: "$eq",
    queryParam: "",
    sortField: "ID",
    sortDir: 1,
    offset: 0,
    limit: 20
  };

  constructor(private astroService: AstroService, private formBuilder: FormBuilder) {
    this.queryForm = this.formBuilder.group(this.formGroupTemplate);
  }

  ngOnInit() {

    this.queryObj.filter = {};
  }

  ngAfterViewInit() {
    this.astroService.getPage<HD>("hd", 0, 20).subscribe((data) => {
      this.displayedItems = data.result;
    });
  }

  searchCatalog() {
    console.log("Entered searchCatalog()");

    const urlString: string = this.astroService.transformFormGroupToUrlQueryString(this.queryForm);

    this.astroService.get2<HD>("hd", urlString).subscribe((data) => {
      this.displayedItems = data.result;
    });
  }

  clearInput() {
    this.displayedItems = [];
  }

  resetInput() {
    this.queryForm = this.formBuilder.group(this.formGroupTemplate);

    const urlString: string = this.astroService.transformFormGroupToUrlQueryString(this.queryForm);

    this.astroService.get2<HD>("hd", urlString).subscribe((data) => {
      this.displayedItems = data.result;
    });
  }
}
