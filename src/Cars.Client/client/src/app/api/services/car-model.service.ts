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
   * Path part for operation apiCarModelGet
   */
  static readonly ApiCarModelGetPath = '/api/CarModel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarModelSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarModelGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelGet$Plain(params?: {

  }): Observable<Array<CarModelSummary>> {

    return this.apiCarModelGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarModelSummary>>) => r.body as Array<CarModelSummary>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarModelSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarModelGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelGet$Json(params?: {

  }): Observable<Array<CarModelSummary>> {

    return this.apiCarModelGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarModelSummary>>) => r.body as Array<CarModelSummary>)
    );
  }

  /**
   * Path part for operation apiCarModelPost
   */
  static readonly ApiCarModelPostPath = '/api/CarModel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelPost$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelPost$Json$Plain$Response(params?: {

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCarModelPost$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelPost$Json$Plain(params?: {

    body?: CarModelDetail
  }): Observable<CarModelSummary> {

    return this.apiCarModelPost$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelSummary>) => r.body as CarModelSummary)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelPost$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelPost$Json$Json$Response(params?: {

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCarModelPost$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelPost$Json$Json(params?: {

    body?: CarModelDetail
  }): Observable<CarModelSummary> {

    return this.apiCarModelPost$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelSummary>) => r.body as CarModelSummary)
    );
  }

  /**
   * Path part for operation apiCarModelIdGet
   */
  static readonly ApiCarModelIdGetPath = '/api/CarModel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelIdGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarModelIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelIdGet$Plain(params: {
    id: number;

  }): Observable<CarModelDetail> {

    return this.apiCarModelIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelIdGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarModelIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelIdGet$Json(params: {
    id: number;

  }): Observable<CarModelDetail> {

    return this.apiCarModelIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * Path part for operation apiCarModelIdPut
   */
  static readonly ApiCarModelIdPutPath = '/api/CarModel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelIdPut$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelIdPut$Json$Plain$Response(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCarModelIdPut$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelIdPut$Json$Plain(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<CarModelDetail> {

    return this.apiCarModelIdPut$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelIdPut$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelIdPut$Json$Json$Response(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<StrictHttpResponse<CarModelDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCarModelIdPut$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarModelIdPut$Json$Json(params: {
    id: number;

    body?: CarModelDetail
  }): Observable<CarModelDetail> {

    return this.apiCarModelIdPut$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarModelDetail>) => r.body as CarModelDetail)
    );
  }

  /**
   * Path part for operation apiCarModelIdDelete
   */
  static readonly ApiCarModelIdDeletePath = '/api/CarModel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarModelIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CarModelService.ApiCarModelIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCarModelIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarModelIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.apiCarModelIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
