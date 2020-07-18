import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

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

  updateEquipe() {
    this.equipeService.updateEquipe(this.id, this.equipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.equipe = new Equipe();
    this.gotoList();
  }

  onSubmit() {
    this.updateEquipe();    
  }

  gotoList() {
    this.router.navigate(['/equipes']);
  }
}
