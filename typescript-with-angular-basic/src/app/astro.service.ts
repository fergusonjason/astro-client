import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { HD } from "./hd/hd";
import { PagedDataResponse } from "./models/PagedDataResponse";
import { IQuery } from "./models/Query";
import { keyframes } from '@angular/animations';
import { FormGroup } from '@angular/forms';
import { FileDetector } from 'selenium-webdriver/remote';

@Injectable({
  providedIn: "root"
})
export class AstroService {

  private _apiVersion: string;

  constructor(private http: HttpClient) {
    this._apiVersion = "v1";
   }

  get<T>(catalog: string, id: string | number): Observable<T> | null {

    console.log("Entered get()");
    alert("Entered get()");

    const url = `http://172.17.0.1:3000/${this._apiVersion}/${catalog}?id=${id}`;
    const result = this.http.get<T>(url);

    return result;
  }

  get2<T>(catalog: string, queryString: string): Observable<PagedDataResponse<T[]>> {

    console.log(`Entered get2(), catalog: ${catalog}, queryString: ${queryString}`);

    const url = `http://172.17.0.1:3000/${this._apiVersion}/${catalog}/page?${queryString}`;
    const result: Observable<PagedDataResponse<T[]>> = this.http.get<PagedDataResponse<T[]>>(url);

    return result;
  }

  getPage<T>(catalog: string, start: number, stop: number): Observable<PagedDataResponse<T[]>> {

    console.log("Entered getPage()");

    const url = `http://172.17.0.1:3000/${this._apiVersion}/${catalog}/page?start=${start}&end=${stop}`;
    const result = this.http.get<PagedDataResponse<T[]>>(url);

    return result;
  }

  /**
   * Transform IQuery object to a URL query param which can be appended to the URL.
   */
  transformFormGroupToUrlQueryString = (form: FormGroup): string => {

    // console.log(`FormGroup: ${JSON.stringify(form.controls)}`);
    const paramArray: string[] = [];
    if (form.contains("sortField") && form.contains("sortDir")) {
      const numericSortDir = parseInt(form.controls.sortDir.value, 10);
      const sortModifier = numericSortDir < 0 ? "-" : "";
      paramArray.push(`sort=${sortModifier}${form.controls.sortField.value}`);
    }

    if (form.contains("offset") && form.controls.offset.value !== "") {
      const offsetValue = parseInt(form.controls.offset.value, 10);
      if (offsetValue !== 0) {
        paramArray.push(`offset=${offsetValue}`);
      }
    }

    if (form.contains("limit")) {
      const limit = parseInt(form.controls.limit.value, 10);
      if (limit !== 0) {
        paramArray.push(`limit=${limit}`);
      }
    }

    if (form.contains("queryField") && form.contains("queryOp") && form.contains("queryParam")) {

      const queryField = form.controls.queryField.value;
      const queryOp = form.controls.queryOp.value;
      const queryParam = form.controls.queryParam.value;

      console.log(`${queryField}:${queryOp}:${queryParam}`);
      if (queryField !== "" && queryParam !== "") {
        paramArray.push(`filter=${queryField}_${queryOp}_${queryParam}`);
      }

    }

    console.log(`ParamArray: ${JSON.stringify(paramArray)}`);
    return paramArray.join("&");
  }

  convertObjectToQuery = (obj: IQuery): string => {

    const paramArray: string[] = [];

    if (obj.limit) {
      paramArray.push(`limit=${obj.limit}`);
    }

    if (obj.offset) {
      paramArray.push(`offset=${obj.offset}`);
    }

    // TODO: support > 1 sort field
    if (obj.sort) {
      for (const [key, value] of Object.entries(obj.sort)) {
        if (value > 0) {
          paramArray.push(`sort_${key}`);
        } else {
          paramArray.push(`sort_-${key}`);
        }
      }
    }

    if (obj.filter) {
      Object.entries(obj.filter).forEach((key, value) => {
        paramArray.push(`filter_`);
      });
    }
    return "?" + paramArray.join("&");
  }

}
