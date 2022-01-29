import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  public listado: string[] = ["Thor", "Capitan America", "IronMan"];
  public heroesBorrados: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  public deleteHero() {
    let deletedHero = this.listado.pop();
    if (deletedHero) this.heroesBorrados.push(deletedHero);
  }

  public returnDeletedHero () {
    let deletedHero = this.heroesBorrados.pop();
    if (deletedHero) this.listado.push(deletedHero);
  }

}
