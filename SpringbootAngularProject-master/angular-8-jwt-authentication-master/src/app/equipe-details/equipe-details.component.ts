import { Equipe } from '../equipe';
import { Component, OnInit, Input } from '@angular/core';
import { EquipeService } from '../equipe.service';
import { EquipeListComponent } from '../equipe-list/equipe-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipe-details',
  templateUrl: './equipe-details.component.html',
  styleUrls: ['./equipe-details.component.css']
})
export class EquipeDetailsComponent implements OnInit {

  id: number;
  equipe: Equipe;

  constructor(private route: ActivatedRoute,private router: Router,
    private equipeService: EquipeService) { }

  ngOnInit() {
    this.equipe = new Equipe();

    this.id = this.route.snapshot.params['id'];
    
    this.equipeService.getEquipe(this.id)
      .subscribe(data => {
        console.log(data)
        this.equipe = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['equipes']);
  }
}
