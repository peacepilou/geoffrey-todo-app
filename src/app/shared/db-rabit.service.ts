import { Injectable } from '@angular/core';
import { Rabbit } from '../models/rabbit';

@Injectable({
  providedIn: 'root'
})
export class DbRabitService {

  // Propriété privée = je ne peux pas l'utiliser en dehors de la class (ici, du service)
  // Propriété en readonly = je ne peux que la lire, pas écrire par dessus.
  private readonly RABITS_FROM_DATABASE: Rabbit[] = [
    new Rabbit(1, "gris", "pampan"),
    new Rabbit(2, "blanc", "bunny"),
    new Rabbit(3, "noir", "bugs"),
  ];

  constructor() { }

  // Récupérer tous les lapins
  getAllRabbits(): Rabbit[] {
    return this.RABITS_FROM_DATABASE;
  }

  // Récupérer un lapin par ID
  getRabbitById(id: number): Rabbit | undefined {
    return this.RABITS_FROM_DATABASE.find((rabbit: Rabbit) => rabbit.id === id);
  }
}
