import { Component, Input, OnInit } from '@angular/core';
import { Rabbit } from 'src/app/models/rabbit';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // Je ne veux pas intialiser ma propriété car c'est relou à faire
  
  @Input()
  rabbitChild!: Rabbit;

  constructor() { }

  ngOnInit(): void {
  }

}
