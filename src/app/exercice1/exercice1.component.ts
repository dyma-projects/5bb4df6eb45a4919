import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  title = "Exercice 1";
  pseudo : string = "Écrivez votre Pseudo";
  date : string = "date";
  constructor() { }

  ngOnInit() {
  }

}
