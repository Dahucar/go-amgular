import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {

  public name: string = "";
  public power: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
