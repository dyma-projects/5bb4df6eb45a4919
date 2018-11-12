import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styleUrls: ['./exercice4.component.css']
})
export class Exercice4Component implements OnInit {
  public nombres : Array<{ nombre }> = [];
  constructor() {
    this.nombres.push({nombre :"un"});
    this.nombres.push({nombre : "deux"});
    this.nombres.push({nombre : "trois"});
  }

  ngOnInit() {
  }

}
