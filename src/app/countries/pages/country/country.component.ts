import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CountriesService } from '../../services/countries.service';
import { GetCountry, SetNewTermino } from '../../../store/country/countries.actions';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public termino: string = "";
  constructor(private _store: Store) { }

  ngOnInit(): void {
    if (this.termino) {
      this._store.dispatch([
        new GetCountry(this.termino)
      ]);
    }
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
