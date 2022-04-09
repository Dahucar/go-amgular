import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetPrevTermino, GetCountry } from './store/country/countries.actions';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _store: Store
  ){}

  ngOnInit(): void {
    this._store.dispatch(new GetPrevTermino());
  }

}
