import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
  public counterPower: number = 0;
  @Input('data') characterList: Character[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public removeLast(): void {
    this.characterList.pop();
  }

  public selectHero(hero: Character): void {
    if (!hero.isActive) {
      this.counterPower += hero.power;
      hero.isActive = true;
      return;
    }
    
    this.counterPower -= hero.power;
    hero.isActive = false;
  }

}
