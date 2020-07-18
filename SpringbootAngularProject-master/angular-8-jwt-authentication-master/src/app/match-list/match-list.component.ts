import { MatchDetailsComponent } from '../match-details/match-details.component';
import { Observable } from "rxjs";
import { MatchService } from "../match.service";
import { Match } from "../match";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-match-list",
  templateUrl: "./match-list.component.html",
  styleUrls: ["./match-list.component.css"]
})
export class MatchListComponent implements OnInit {
  matchs: Observable<Match[]>;

  constructor(private matchService: MatchService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.matchs = this.matchService.getMatchsList();
  }

  deleteMatch(id: number) {
    this.matchService.deleteMatch(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  matchDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateMatch(id: number){
    this.router.navigate(['update', id]);
  }
}
