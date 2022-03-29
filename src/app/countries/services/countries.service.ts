import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../../store/country/countries.interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private _http: HttpClient) { }

  public searCountryByName(name: string): Observable<[Country]> {
    const url: string = `${environment.api}/name/${name}?fullText=false`;
    return this._http.get<[Country]>(url);
  }

}
