import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  title = "Exercice 2" ;
  consoleClick(event : Event): void{
    console.log("clic");
  }

  constructor() { }

  ngOnInit() {
  }

}
