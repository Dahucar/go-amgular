import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CountriesService } from '../../services/countries.service';
import { GetCountry, SetNewTermino } from '../../../store/country/countries.actions';
import { Country } from '../../../store/country/countries.interfaces';
import { Observable } from 'rxjs';
import { CountryState } from '../../../store/country/country.state';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public termino: string = "";
  public countries: Country[] = [];

  constructor(private _store: Store) { }

  ngOnInit(): void {
    if (this.termino) {
      this._store.dispatch(new GetCountry(this.termino));
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
