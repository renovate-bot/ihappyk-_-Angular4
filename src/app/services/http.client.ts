import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
//import {RetailConstants} from '../app.constants' ;
//import {AuthenticationService} from './authentication.service';

@Injectable()
export class HttpClient {
    private token: string ;
    constructor(private http: Http) {}

    createAuthorizationHeader(headers: Headers) {
        //headers.append(RetailConstants.RETAIL_AUTHORIZATION_HEADER, this.token);
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
        headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
        headers: headers
        });
    }
    
    delete(url) {
      let headers = new Headers();
      this.createAuthorizationHeader(headers);
      return this.http.delete(url, {
      headers: headers
      });
    }
    setToken(token: string) {
        this.token = token ;
    }
}