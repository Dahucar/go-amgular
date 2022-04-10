import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Country } from '../../../store/country/countries.interfaces';
import { CountriesSelectors } from '../../../store/country/countries.selectors';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
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
