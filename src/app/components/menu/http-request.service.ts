import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpRequestService {
  constructor(private http: HttpClient) { }
  request(url: string, options: object = {}) {
    return this.http.get(url, options);
  }
}
