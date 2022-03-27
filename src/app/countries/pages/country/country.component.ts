import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetCountry, SetNewTermino } from '../../../store/country/countries.actions';
import { CountriesSelectors } from 'src/app/store/country/countries.selectors';
import { Observable } from 'rxjs';
import { Country } from 'src/app/store/country/countries.interfaces';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public termino: string = "";
  public countries: Country[] = [];
  constructor(private _store: Store) { }

  // stream de datos.
  @Select(CountriesSelectors.getCountries)
  private countries$!: Observable<Country[]>;

  ngOnInit(): void {
    this.countries$
      .subscribe(data => {
        this.countries = data;
      });
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
