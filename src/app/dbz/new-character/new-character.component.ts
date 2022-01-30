import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html'
})
export class NewCharacterComponent implements OnInit {
  public onError: Boolean = false;
  public messageError: String = "";
  public counterPower: number = 0;
  
  public character: Character = new Character(0,'', 0, false);
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  constructor(
    private _dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  public addNew(): void {
    if (!this.character.name || !this.character.power) {
      this.messageError = "Propiedades incorrectar";
      this.onError = true;
      return;
    }

    this.onError = false;
    this.messageError = "";

    this._dbzService.addNewCharacter(
      new Character(
        new Date().getTime(),
        this.character.name,
        this.character.power,
        this.character.isActive
      )
    );
    // emitir un valor hacia fuera de este componente.
    // this.onNewCharacter.emit(new Character(
    //   new Date().getTime(),
    //   this.character.name,
    //   this.character.power,
    //   this.character.isActive
    // ));
  }

}
