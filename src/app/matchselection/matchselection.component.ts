import { Component, OnInit } from '@angular/core';
import { MatchDataService } from 'src/services/matchdataservice';
import { MatchResult } from 'src/services/matchResult';
import {map, filter, catchError} from 'rxjs/operators';


@Component({
    selector: 'match-selection',
    templateUrl: './matchselection.component.html',
    styleUrls: ['./matchselection.component.scss']
})
export class MatchSelectionComponent implements OnInit {
    constructor(private matchDataService: MatchDataService) { }
    public teams : string[];
    public selectedTeams: {[teamName: string] : boolean} = {};
    public rowData : MatchResult[];


    columnDefs = [
        {headerName: 'Date', field: 'Date', sortable: true, sort: 'desc', comparator: this.dateComparison},

        {headerName: 'Result', field: 'ResultString', resizable: true, width: 350}

    ];


    

    ngOnInit(): void { 
        this.matchDataService.getTeamNames().subscribe(tn=>this.teams=tn);

        this.matchDataService.getAllMatchData().subscribe(md=> this.rowData=md.map(mr=>{
            mr.ResultString = `${mr.Home} ${mr.HG}- ${mr.AG} ${mr.Away}`;
            return mr;
        }));

    }

    public getRowData(){
        //return this.rowData;
        if (this.rowData){
            //console.log("getRowData");
            return this.rowData.filter(mr=>this.selectedTeams[mr.Home] || this.selectedTeams[mr.Away]);
        }
    }

    public dateComparison(date1string:string, date2string:string){
        let date1 : Date = new Date(date1string);
        let date2 : Date = new Date(date2string);
        return (date1>date2);
    }    

    public teamFilterSelection(teamName: string){
        this.selectedTeams[teamName] = (!this.selectedTeams[teamName])
        console.log(teamName, this.selectedTeams[teamName])
    }

    public filterChanged(changedValue: any){
        console.log("changedValue", changedValue);
    }

}
