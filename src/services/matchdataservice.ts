import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MatchResult} from './matchResult'
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class MatchDataService {
    // private teamNames :string[];
    constructor(private http:HttpClient){

    }


    getAllMatchData(){
        let response = this.http.get<MatchResult[]>("./assets/data/mls results.json");
        return response;

    }

    getTeamNames(){
        return this.http.get<string[]>("./assets/data/teams.json");
    }


}