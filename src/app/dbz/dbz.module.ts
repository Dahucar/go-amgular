import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Custom components.
import { MainDbzComponent } from './main-dbz/main-dbz.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { NewCharacterComponent } from './new-character/new-character.component';

@NgModule({
  declarations: [
    MainDbzComponent,
    CharacterComponent,
    CharactersComponent,
    NewCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainDbzComponent
  ]
})
export class DbzModule { }
