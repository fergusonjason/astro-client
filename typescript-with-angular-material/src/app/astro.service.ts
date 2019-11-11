import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { Observable} from "rxjs";

import { environment } from "../environments/environment";

import { PagedDataResponse } from "src/app/model/PagedDataResponse";



@Injectable({
  providedIn: "root"
})
export class AstroService {

  private baseUrl = `http://${environment.host}:${environment.port}/${environment.apiVersion}`;

  constructor(private http: HttpClient) { }

  getPage<T>(catalog: string, start: number, stop: number): Observable<PagedDataResponse<T>> {

    console.log("Entered getPage()");

    const url = `${this.baseUrl}/${catalog}/page?start=${start}&end=${stop}/page?start=${start}&end=${stop}`;
    const result = this.http.get<PagedDataResponse<T>>(url);

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

}
