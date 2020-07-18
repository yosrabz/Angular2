import { Match } from '../match';
import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from '../match.service';
import { MatchListComponent } from '../match-list/match-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  id: number;
  match: Match;

  constructor(private route: ActivatedRoute,private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {
    this.match = new Match();

    this.id = this.route.snapshot.params['id'];
    
    this.matchService.getMatch(this.id)
      .subscribe(data => {
        console.log(data)
        this.match = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['matchs']);
  }
}
