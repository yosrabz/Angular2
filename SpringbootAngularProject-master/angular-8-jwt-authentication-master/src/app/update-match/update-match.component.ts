import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {

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

  updateMatch() {
    this.matchService.updateMatch(this.id, this.match)
      .subscribe(data => console.log(data), error => console.log(error));
    this.match = new Match();
    this.gotoList();
  }

  onSubmit() {
    this.updateMatch();    
  }

  gotoList() {
    this.router.navigate(['/matchs']);
  }
}
