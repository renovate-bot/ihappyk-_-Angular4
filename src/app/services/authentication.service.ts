import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { S4Authentication } from '../model/S4Authentication';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Headers } from '@angular/http';
import { IntelConstants } from '../app.constants'
//import { LocaleConfigService } from './locale.config.service';
import { HttpClient } from './http.client';

@Injectable()
export class AuthenticationService {

    private authDetails: S4Authentication;

    constructor(private httpClient: HttpClient) {

    }

    getAuthenticationDetails(): S4Authentication {
        return this.authDetails;
    }

    setAuthenticationDetails(authDetails: S4Authentication) {
        this.authDetails = authDetails;
    }

    getUser(): string {
        return this.authDetails != undefined ? this.authDetails.getUser() : '';
    }

    getToken() {
        return this.authDetails != undefined ? this.authDetails.getToken() : '';
    }

    getRealm() {
        return this.authDetails != undefined ? this.authDetails.getRealm() : '';
    }
    processAuthenticationDetails(activatedRoute: ActivatedRoute): any {
        console.log('processing .....')
        var url = window.location.href
        console.log('URL :' + url);
        url = decodeURIComponent(url);
        console.log(url);
        var regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2];
        }
        this.authDetails = new S4Authentication(
            params[IntelConstants.S4_PARAM_USER],
            params[IntelConstants.S4_PARAM_REALM],
            //params[IntelConstants.S4_PARAM_TOKEN],
            params[IntelConstants.S4_PARAM_LOCALE]
        );
        //if (params[RetailConstants.S4_PARAM_TOKEN]) {
        //    this.httpClient.setToken(params[RetailConstants.S4_PARAM_TOKEN]);
        //}
        console.log(this.authDetails);
        return params;
    }
}