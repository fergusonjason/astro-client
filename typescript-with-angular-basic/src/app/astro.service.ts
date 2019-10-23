import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { HD } from './hd/hd';
import { PagedDataResponse } from './models/PagedDataResponse';

@Injectable({
  providedIn: 'root'
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

  getPage<T>(catalog: string, start: number, stop: number): Observable<PagedDataResponse<T[]>> {

    console.log("Entered getPage()");

    const url = `http://172.17.0.1:3000/${this._apiVersion}/${catalog}/page?start=${start}&end=${stop}`;
    const result = this.http.get<PagedDataResponse<T[]>>(url);

    return result;
  }

}
