import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CountriesService } from '../../services/countries.service';
import { GetCountry } from '../../../store/country/countries.actions';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public termino: string = "";
  constructor(
    private _countriesService: CountriesService,
    private _store: Store
  ) { }

  ngOnInit(): void {
    this._store.dispatch([
      new GetCountry({ test: 'Es un test' })
    ]);
  }

  public startSearch(): void {
    console.log(this.termino);
    this._countriesService.searCountryByName(this.termino)
      .subscribe(resp => console.log("resp: ", resp));
  }

}
