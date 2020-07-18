import { EquipeService} from '../equipe.service';
import { Equipe } from '../equipe';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.css']
})
export class CreateEquipeComponent implements OnInit {

  equipe: Equipe = new Equipe();
  submitted = false;

  constructor(private equipeService: EquipeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEquipe(): void {
    this.submitted = false;
    this.equipe = new Equipe();
  }

  save() {
    this.equipe.drapeau="/assets/images/"+this.equipe.drapeau+".png"
    this.equipeService.createEquipe(this.equipe)
      .subscribe(data => console.log(data), error => console.log(error));
    this.equipe = new Equipe();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/equipes']);
  }
}
