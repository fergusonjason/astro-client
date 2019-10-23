import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { HD } from "./hd";
import { PagedDataResponse } from "../models/PagedDataResponse";

import { AstroService } from "../astro.service";

@Component({
  selector: 'app-hd',
  templateUrl: './hd.component.html',
  styleUrls: ['./hd.component.css']
})
export class HdComponent implements OnInit, AfterViewInit {

  @Input()
  id: number;

  displayedItems: HD[];

  start: number = 0;
  stop: number = 20;

  constructor(private astroService: AstroService) { }

  ngOnInit() {
    // displayedItems needs to be set to the first default "page" of results upon display
    // this.astroService.getPage<HD>("hd", 0, 20).subscribe((data) => {
    //   this.displayedItems = data.result;
    // });
  }

  ngAfterViewInit() {
    this.astroService.getPage<HD>("hd", 0, 20).subscribe((data) => {
      this.displayedItems = data.result;
    });
  }

  searchCatalog() {
    console.log("Entered searchCatalog()");
    this.astroService.get<HD>("hd", this.id).subscribe((data) => {
      this.displayedItems = [data];
    });
  }

  clearInput() {
    this.displayedItems = [];
  }
}
