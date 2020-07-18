import { EquipeDetailsComponent } from '../equipe-details/equipe-details.component';
import { Observable } from "rxjs";
import { EquipeService } from "../equipe.service";
import { Equipe } from "../equipe";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-equipe-list",
  templateUrl: "./equipe-list.component.html",
  styleUrls: ["./equipe-list.component.css"]
})
export class EquipeListComponent implements OnInit {
  equipes: Observable<Equipe[]>;

  constructor(private equipeService: EquipeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.equipes = this.equipeService.getEquipesList();
  }

  deleteEquipe(id: number) {
    this.equipeService.deleteEquipe(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  equipeDetails(id: number){
    this.router.navigate(['details2', id]);
  }

  updateEquipe(id: number){
    this.router.navigate(['update2', id]);
  }
}
