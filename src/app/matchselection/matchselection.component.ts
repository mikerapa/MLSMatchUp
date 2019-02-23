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
    public matchData: MatchResult[];

    columnDefs = [
        {headerName: 'Date', field: 'Date'},
        {headerName: 'Home Team', field: 'Home' },
        {headerName: 'Away Team', field: 'Away' },

    ];

    /* 
        public Country: string;
    public League : string;
    public Season : number;
    public Date: Date;
    public Time: string;
    public Home:  string;
    public Away:string;
    public HG : number;
    public AG: number;
    public Res: string; 

    */

    public rowData : MatchResult[];

    ngOnInit(): void { 
        this.teams = this.matchDataService.getTeams();
        this.matchDataService.getAllMatchData().subscribe(md=> this.rowData=md);
    }
}
