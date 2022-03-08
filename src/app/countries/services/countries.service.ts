import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private _http: HttpClient) { }

  public searCountryByName(name: string): Observable<any> {
    const url: string = `${environment.api}/name/${name}?fullText=true`;
    return this._http.get(url);
  }

}
