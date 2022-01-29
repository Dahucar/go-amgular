import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  public message: string = "ON WAY DATA BINDING";
  public heroName: string = "Batman";
  public heroText: string = "El caballero de la noche.";
  public heroAge: number = 44;
  constructor() { }

  ngOnInit(): void {
  }

  get heroAgeList () {
    return `this is the age of hero: ${this.heroAge}`;
  }

  public showHeroInfo() {
    return `${this.heroName}: sey "${this.heroText}"`;
  }

  public cambiarNombre() {
    this.heroName = "Superman";
    this.heroAge = 10000;
    this.heroText = "esta no me la se";
  }

}
