import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { CountriesSelectors } from 'src/app/store/country/countries.selectors';
import { Observable } from 'rxjs';
import { Country } from 'src/app/store/country/countries.interfaces';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public countries: Country[] = [];
  // stream de datos.
  @Select(CountriesSelectors.getCountries)
  private countries$!: Observable<Country[]>;
  constructor() { }

  ngOnInit(): void {
    this.countries$
      .subscribe(data => {
        this.countries = data;
      });
  }
}
