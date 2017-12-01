import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WsFeed } from '../model/ws-feeds';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from './http.client' ;
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';
import { IntelConstants } from '../app.constants';

@Injectable()
export class WsFeedsService
{
    private baseURL: string =  environment.apiBaseURL ;
    constructor(
        private activatedRoute: ActivatedRoute,
        private authService : AuthenticationService,
        private httpClient:HttpClient
    ){
        const params = authService.processAuthenticationDetails(activatedRoute);
    }

    getWsFeeds(): Promise<any> 
    {
        let url = this.baseURL + '/posts';
        console.log(url);
        return this.httpClient.get(url)
                  .toPromise()
                  .then(response => response.json())
                  .catch(error => Promise.reject(error.message || error));
    }
    
    private handleError(error:any): Promise<any> 
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}