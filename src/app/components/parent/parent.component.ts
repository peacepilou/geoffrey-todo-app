import { Component, OnInit } from '@angular/core';
import { Rabbit } from 'src/app/models/rabbit';
import { DbRabitService } from 'src/app/shared/db-rabit.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // Création de l'attribut et initialisation
  rabbitList: Rabbit[] = [];

  // Injection du service dans le composant
  constructor(private rabbitService: DbRabitService) {}

  ngOnInit(): void {
    // Tout ce que j'écris ici va s'exécuter automatiquement lorsque le composant est initialisé.
    // Généralement, permet de lancer des méthodes / d'attribuer des valeurs aux attributs

    // Appel de la méthode du service afin de récupérer les lapins
    this.rabbitList = this.rabbitService.getAllRabbits();
  }

}
