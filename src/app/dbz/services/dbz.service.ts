import { Injectable } from "@angular/core";
import { Character } from "src/app/models/character";

@Injectable()
export class DbzService {
    private characterList: Character[] = [];

    constructor(){
        console.log("DbzService created!!!.");
    }

    get characters(): Character[] {
        return [ ...this.characterList ];
    }

    public addNewCharacter(newCharacter: Character): void {
        this.characterList.push(newCharacter);
    }
}