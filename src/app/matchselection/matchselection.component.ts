import { Component, OnInit } from '@angular/core';
import { MatchDataService } from 'src/services/matchdataservice';
import { MatchResult } from 'src/services/matchResult';

@Component({
    selector: 'match-selection',
    templateUrl: './matchselection.component.html',
    styleUrls: ['./matchselection.component.css']
})
export class MatchSelectionComponent implements OnInit {
    constructor(private matchDataService: MatchDataService) { }
    public teams : string[];
    public matchData: MatchResult[];
    ngOnInit(): void { 
        this.teams = this.matchDataService.getTeams();
        this.matchDataService.getAllMatchData().subscribe(md=> this.matchData=md);
    }
}
