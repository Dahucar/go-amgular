import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public termino: string = "";
  constructor(private _countriesService: CountriesService) { }

  ngOnInit(): void {
  }

  public startSearch(): void {
    console.log(this.termino);
    this._countriesService.searCountryByName(this.termino)
      .subscribe(resp => console.log("resp: ", resp));
  }

}
