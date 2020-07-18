import { MatchService} from '../match.service';
import { Match } from '../match';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {

  match: Match = new Match();
  submitted = false;

  constructor(private matchService: MatchService,
    private router: Router) { }

  ngOnInit() {
  }

  newMatch(): void {
    this.submitted = false;
    this.match = new Match();
  }

  save() {
    this.matchService.createMatch(this.match)
      .subscribe(data => console.log(data), error => console.log(error));
    this.match = new Match();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/matchs']);
  }
}
