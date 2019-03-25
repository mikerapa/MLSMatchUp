import { Component, OnInit } from '@angular/core';
import { MatchDataService } from 'src/services/matchdataservice';
import { MatchResult } from 'src/services/matchResult';


@Component({
    selector: 'match-selection',
    templateUrl: './matchselection.component.html',
    styleUrls: ['./matchselection.component.scss']
})
export class MatchSelectionComponent implements OnInit {
    constructor(private matchDataService: MatchDataService) { }
    public teams : string[];
    public filterTeam1Name : string;
    public filterTeam2Name: string;
    public selectedTeams: {[teamName: string] : boolean} = {};

    //public matchData: MatchResult[];

    columnDefs = [
        {headerName: 'Date', field: 'Date', sortable: true, sort: 'desc', comparator: this.dateComparison},
        // {headerName: 'Home Team', field: 'Home' },
        // {headerName: 'Away Team', field: 'Away' },
        {headerName: 'Result', field: 'ResultString', resizable: true, width: '350'}

    ];


    public rowData : MatchResult[];

    ngOnInit(): void { 
        this.matchDataService.getTeamNames().subscribe(tn=>this.teams=tn);

        this.matchDataService.getAllMatchData().subscribe(md=> this.rowData=md.map(mr=>{
            mr.ResultString = `${mr.Home} ${mr.HG}- ${mr.AG} ${mr.Away}`;
            return mr;
        }));

    }

    public dateComparison(date1string:string, date2string:string){
        let date1 : Date = new Date(date1string);
        let date2 : Date = new Date(date2string);
        return (date1>date2);
    }    

    public teamFilterSelection(teamName: string){
        if (this.selectedTeams[teamName]) {
            this.selectedTeams[teamName] = false;
        }
        else {this.selectedTeams[teamName] = true;}
        console.log(teamName, this.selectedTeams[teamName])
        console.log("got to teamFilterSelection", teamName);
    }

    public filterChanged(changedValue: any){
        console.log("changedValue", changedValue);
        console.log(this.filterTeam1Name);

    }

}
