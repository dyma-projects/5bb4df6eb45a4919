import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  p1:{};
  p2:{};
  public statut : boolean = true ;
  trueOrFalse(event : Event): void{
    if (this.statut=== true){
      this.statut = false;
      console.log(this.statut);
    }
    else{
      this.statut = true;

      console.log(this.statut)
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
