import { Component, OnInit, AfterViewInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { AstroService } from "../astro.service";
import { IQuery } from "../models/Query";
import { Yale } from "./yale";

@Component({
  selector: "app-yale",
  templateUrl: "./yale.component.html",
  styleUrls: ["./yale.component.css", "../../assets/grid.css"]
})
export class YaleComponent implements OnInit, AfterViewInit {

  queryForm: FormGroup;

  queryObj: IQuery = {offset: 0, limit: 20};

  displayedItems: Yale[] = [];

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
    this.queryObj.filter = {};
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.astroService.getPage<Yale>("yale", 0, 20).subscribe((data) => {
      this.displayedItems = data.result;
    });
  }

  searchCatalog() {
    const urlString: string = this.astroService.transformFormGroupToUrlQueryString(this.queryForm);

    this.astroService.get2<Yale>("yale", urlString).subscribe((data) => {
      this.displayedItems = data.result;
    });
  }

  resetInput() {
    this.queryForm = this.formBuilder.group(this.formGroupTemplate);

    const urlString: string = this.astroService.transformFormGroupToUrlQueryString(this.queryForm);

    this.astroService.get2<Yale>("yale", urlString).subscribe((data) => {
      this.displayedItems = data.result;
    });
  }

}
