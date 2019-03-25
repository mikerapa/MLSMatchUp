// export class MatchResult {
//     public Country: string;
//     public League : string;
//     public Season : number;
//     public Date: Date;
//     public Time: string;
//     public Home:  string;
//     public Away:string;
//     public HG : number;
//     public AG: number;
//     public Res: string; 

// }

export interface MatchResult {
     Country: string;
     League : string;
     Season : number;
     Date: Date;
     Time: string;
     Home:  string;
     Away:string;
     HG : number;
     AG: number;
     Res: string; 
     ResultString: string; // not data that came from the raw data

}