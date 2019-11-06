/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CarModelDetail } from '../models/car-model-detail';
import { CarModelSummary } from '../models/car-model-summary';

@Injectable({
  providedIn: 'root',
})
export class CarModelService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllCarModels
   */
  static readonly GetAllCarModelsPath = '/api/CarModel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCarModels$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  getAllCarModels$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarModelSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.GetAllCarModelsPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CarModelSummary>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllCarModels$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getAllCarModels$Plain(params?: {

  }): Observable<Array<CarModelSummary>> {

    return this.getAllCarModels$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarModelSummary>>) => r.body as Array<CarModelSummary>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCarModels$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  getAllCarModels$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarModelSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.GetAllCarModelsPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CarModelSummary>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllCarModels$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getAllCarModels$Json(params?: {

  }): Observable<Array<CarModelSummary>> {

    return this.getAllCarModels$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarModelSummary>>) => r.body as Array<CarModelSummary>)
    );
  }

  /**
   * Path part for operation createCarModel
   */
  static readonly CreateCarModelPath = '/api/CarModel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCarModel$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCarModel$Json$Plain$Response(params?: {

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.CreateCarModelPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarModelSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCarModel$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCarModel$Json$Plain(params?: {

    body?: CarModelDetail
  }): Observable<CarModelSummary> {

    return this.createCarModel$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelSummary>) => r.body as CarModelSummary)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCarModel$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCarModel$Json$Json$Response(params?: {

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.CreateCarModelPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarModelSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCarModel$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  createCarModel$Json$Json(params?: {

    body?: CarModelDetail
  }): Observable<CarModelSummary> {

    return this.createCarModel$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelSummary>) => r.body as CarModelSummary)
    );
  }

  /**
   * Path part for operation getCarModel
   */
  static readonly GetCarModelPath = '/api/CarModel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCarModel$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  getCarModel$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.GetCarModelPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarModelDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCarModel$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getCarModel$Plain(params: {
    id: number;

  }): Observable<CarModelDetail> {

    return this.getCarModel$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCarModel$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  getCarModel$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.GetCarModelPath, 'get');
    if (params) {

      rb.path('id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CarModelDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCarModel$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getCarModel$Json(params: {
    id: number;

  }): Observable<CarModelDetail> {

    return this.getCarModel$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * Path part for operation updateCarModel
   */
  static readonly UpdateCarModelPath = '/api/CarModel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCarModel$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCarModel$Json$Plain$Response(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.UpdateCarModelPath, 'put');
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
        return r as StrictHttpResponse<CarModelDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCarModel$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCarModel$Json$Plain(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<CarModelDetail> {

    return this.updateCarModel$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCarModel$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCarModel$Json$Json$Response(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.UpdateCarModelPath, 'put');
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
        return r as StrictHttpResponse<CarModelDetail>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCarModel$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  updateCarModel$Json$Json(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<CarModelDetail> {

    return this.updateCarModel$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * Path part for operation deleteCarModel
   */
  static readonly DeleteCarModelPath = '/api/CarModel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCarModel()` instead.
   *
   * This method doesn't expect any response body
   */
  deleteCarModel$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.DeleteCarModelPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteCarModel$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  deleteCarModel(params: {
    id: number;

  }): Observable<void> {

    return this.deleteCarModel$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
