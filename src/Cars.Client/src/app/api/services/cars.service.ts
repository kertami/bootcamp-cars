/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CarDetail } from '../models/car-detail';
import { CarSummary } from '../models/car-summary';

@Injectable({
  providedIn: 'root',
})
export class CarsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll
   */
  static readonly GetAllPath = '/api/Cars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  getAll$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.GetAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CarSummary>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAll$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getAll$Plain(params?: {

  }): Observable<Array<CarSummary>> {

    return this.getAll$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarSummary>>) => r.body as Array<CarSummary>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  getAll$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.GetAllPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CarSummary>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAll$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getAll$Json(params?: {

  }): Observable<Array<CarSummary>> {

    return this.getAll$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarSummary>>) => r.body as Array<CarSummary>)
    );
  }

  /**
   * Path part for operation createCar
   */
  static readonly CreateCarPath = '/api/Cars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCar$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCar$Json$Plain$Response(params?: {

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.CreateCarPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCar$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCar$Json$Plain(params?: {

    body?: CarDetail
  }): Observable<CarSummary> {

    return this.createCar$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarSummary>) => r.body as CarSummary)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCar$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCar$Json$Json$Response(params?: {

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.CreateCarPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCar$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCar$Json$Json(params?: {

    body?: CarDetail
  }): Observable<CarSummary> {

    return this.createCar$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarSummary>) => r.body as CarSummary)
    );
  }

  /**
   * Path part for operation getCar
   */
  static readonly GetCarPath = '/api/Cars/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCar$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  getCar$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.GetCarPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCar$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getCar$Plain(params: {
    id: number;

  }): Observable<CarDetail> {

    return this.getCar$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCar$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  getCar$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.GetCarPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCar$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getCar$Json(params: {
    id: number;

  }): Observable<CarDetail> {

    return this.getCar$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * Path part for operation updateCar
   */
  static readonly UpdateCarPath = '/api/Cars/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCar$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCar$Json$Plain$Response(params: {
    id: number;

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.UpdateCarPath, 'put');
    if (params) {

      rb.path('id', params.id);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCar$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCar$Json$Plain(params: {
    id: number;

    body?: CarDetail
  }): Observable<CarDetail> {

    return this.updateCar$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCar$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCar$Json$Json$Response(params: {
    id: number;

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.UpdateCarPath, 'put');
    if (params) {

      rb.path('id', params.id);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCar$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCar$Json$Json(params: {
    id: number;

    body?: CarDetail
  }): Observable<CarDetail> {

    return this.updateCar$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * Path part for operation deleteCar
   */
  static readonly DeleteCarPath = '/api/Cars/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCar()` instead.
   *
   * This method doesn't expect any response body
   */
  deleteCar$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.DeleteCarPath, 'delete');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCar$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  deleteCar(params: {
    id: number;

  }): Observable<void> {

    return this.deleteCar$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
