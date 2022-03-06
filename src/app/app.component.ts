import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetLastSearchGif, GetLocalGif } from './states/gifs/gif.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _state: Store){}

  ngOnInit(): void {
    this._state.dispatch([
      new GetLocalGif(),
      new GetLastSearchGif()
    ]);
  }
}
