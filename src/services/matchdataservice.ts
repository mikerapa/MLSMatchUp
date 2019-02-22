import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {MatchResult} from './matchResult'

@Injectable()
export class MatchDataService {
    constructor(private http:HttpClient){

    }

    getTeams(){
        var teams: string[]=['Philadelphia Union', 'LA Galaxy']
        return teams; 
    } 

    getAllMatchData(){
        console.log("getting all match data")
        let response = this.http.get<MatchResult[]>("./assets/data/mls results.json");
        console.log("Response", response)
        return response;
        
        //console.log(response[0].Country)
        //console.log("response.body", response.)
        
    }
}