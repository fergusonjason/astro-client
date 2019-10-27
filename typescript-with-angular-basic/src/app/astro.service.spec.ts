import { TestBed } from "@angular/core/testing";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { AstroService } from "./astro.service";
import { FormBuilder, FormGroup } from "@angular/forms";

describe("AstroService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  // it("should be created", () => {
  //   const service: AstroService = TestBed.get(AstroService);
  //   expect(service).toBeTruthy();
  // });

  describe("transformQueryObjectToUrlQueryString", () => {

    let httpClient: HttpClient;
    let service: AstroService;
    // let queryForm: FormGroup;
    // let formBuilder: FormBuilder;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [FormBuilder]
      });

      const formBuilder1 = TestBed.get(FormBuilder);
      const httpClient1 = TestBed.get(HttpClient);
      service = TestBed.get(AstroService);

    });

    it("correctly transforms a sort parameter in asc order", () => {

      const formGroupTemplate: any = {
        queryField: "HD",
        queryOp: "$eq",
        queryParam: "",
        sortField: "HD",
        sortDir: 1,
        offset: 0,
        limit: 20
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).toContain("sort=HD");
    });

    it("correctly transforms a sort parameter in desc order", () => {

      const formGroupTemplate: any = {
        queryField: "HD",
        queryOp: "$eq",
        queryParam: "",
        sortField: "HD",
        sortDir: -1,
        offset: 0,
        limit: 20
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).toContain("sort=-HD");
    });

    it("correctly sets a non-zero offset", () => {

      const formGroupTemplate: any = {
        queryField: "HD",
        queryOp: "$eq",
        queryParam: "",
        sortField: "HD",
        sortDir: -1,
        offset: 20,
        limit: 20
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).toContain("offset=20");
    });

    it("correctly doesn't set a zero offset", () => {

      const formGroupTemplate: any = {
        queryField: "HD",
        queryOp: "$eq",
        queryParam: "",
        sortField: "HD",
        sortDir: -1,
        offset: 0,
        limit: 20
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).not.toContain("offset=20");
    });

    it("correctly sets a non-zero limit", () => {
      const formGroupTemplate: any = {
        queryField: "HD",
        queryOp: "$eq",
        queryParam: "",
        sortField: "HD",
        sortDir: -1,
        offset: 0,
        limit: 20
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).toContain("limit=");
    });

    it("correctly doesn't set a non-zero limit", () => {

      const formGroupTemplate: any = {
        queryField: "HD",
        queryOp: "$eq",
        queryParam: "",
        sortField: "HD",
        sortDir: -1,
        offset: 0,
        limit: 0
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).not.toContain("limit=");
    });

    it("correctly processes a valid filter", () => {

      const formGroupTemplate: any = {
        queryField: "HD",
        queryOp: "$eq",
        queryParam: "1",
        sortField: "HD",
        sortDir: -1,
        offset: 0,
        limit: 0
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).toContain("filter_HD_$eq_1");

    });

    it("doesn't process invalid filter", () => {

      const formGroupTemplate: any = {
        queryField: "",
        queryOp: "$eq",
        queryParam: "",
        sortField: "HD",
        sortDir: -1,
        offset: 0,
        limit: 0
      };

      const formBuilder = TestBed.get(FormBuilder);
      const queryForm = formBuilder.group(formGroupTemplate);
      const queryString: string = service.transformFormGroupToUrlQueryString(queryForm);

      expect(queryString).not.toContain("filter");

    });
  });
});
