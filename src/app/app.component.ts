import { Component } from '@angular/core';
import { RouteI } from './interfaces/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesAngular';
  dateTextPipesRoutes: Array<RouteI> = [
    {
      name: "data-pipe",
      path: "/date"
    },
    {
      name: "async-pipe",
      path: "/async"
    },
    {
      name: "number-pipe",
      path: "/number"
    }
  ];
}
