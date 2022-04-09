import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetCountry, SetNewTermino } from 'src/app/store/country/countries.actions';

@Component({
  selector: 'app-input-seach',
  templateUrl: './input-seach.component.html',
})
export class InputSeachComponent implements OnInit {

  public termino: string = "";
  constructor(private _store: Store) { }

  ngOnInit(): void {
  }

  public startSearch(): void {
    if (this.termino) {
      this._store.dispatch([
        new SetNewTermino(this.termino),
        new GetCountry(this.termino)
      ]);
    }
  }

}
