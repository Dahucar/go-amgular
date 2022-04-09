import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/store/country/countries.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent implements OnInit {

  @Input() countries: Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
