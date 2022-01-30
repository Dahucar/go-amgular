import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main-dbz.component.html',
})
export class MainDbzComponent implements OnInit {

  public character: Character = new Character(0,'', 0, false);
  public characterList: Character[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  // funcion encargada de añadir el nuevo elemento.
  public addNewCharacter(character: Character) {
    this.characterList.push(character);
  }

}
