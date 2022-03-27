import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetPrevTermino } from './store/country/countries.actions';

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
