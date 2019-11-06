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
   * Path part for operation apiCarsGet
   */
  static readonly ApiCarsGetPath = '/api/Cars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsGet$Plain(params?: {

  }): Observable<Array<CarSummary>> {

    return this.apiCarsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarSummary>>) => r.body as Array<CarSummary>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CarSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarsGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsGet$Json(params?: {

  }): Observable<Array<CarSummary>> {

    return this.apiCarsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CarSummary>>) => r.body as Array<CarSummary>)
    );
  }

  /**
   * Path part for operation apiCarsPost
   */
  static readonly ApiCarsPostPath = '/api/Cars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsPost$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsPost$Json$Plain$Response(params?: {

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCarsPost$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsPost$Json$Plain(params?: {

    body?: CarDetail
  }): Observable<CarSummary> {

    return this.apiCarsPost$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarSummary>) => r.body as CarSummary)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsPost$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsPost$Json$Json$Response(params?: {

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCarsPost$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsPost$Json$Json(params?: {

    body?: CarDetail
  }): Observable<CarSummary> {

    return this.apiCarsPost$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarSummary>) => r.body as CarSummary)
    );
  }

  /**
   * Path part for operation apiCarsIdGet
   */
  static readonly ApiCarsIdGetPath = '/api/Cars/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsIdGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsIdGet$Plain$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsIdGet$Plain(params: {
    id: number;

  }): Observable<CarDetail> {

    return this.apiCarsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsIdGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsIdGet$Json$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiCarsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsIdGet$Json(params: {
    id: number;

  }): Observable<CarDetail> {

    return this.apiCarsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * Path part for operation apiCarsIdPut
   */
  static readonly ApiCarsIdPutPath = '/api/Cars/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsIdPut$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsIdPut$Json$Plain$Response(params: {
    id: number;

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCarsIdPut$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsIdPut$Json$Plain(params: {
    id: number;

    body?: CarDetail
  }): Observable<CarDetail> {

    return this.apiCarsIdPut$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsIdPut$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsIdPut$Json$Json$Response(params: {
    id: number;

    body?: CarDetail
  }): Observable<StrictHttpResponse<CarDetail>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiCarsIdPut$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  apiCarsIdPut$Json$Json(params: {
    id: number;

    body?: CarDetail
  }): Observable<CarDetail> {

    return this.apiCarsIdPut$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CarDetail>) => r.body as CarDetail)
    );
  }

  /**
   * Path part for operation apiCarsIdDelete
   */
  static readonly ApiCarsIdDeletePath = '/api/Cars/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCarsIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CarsService.ApiCarsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCarsIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  apiCarsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.apiCarsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
