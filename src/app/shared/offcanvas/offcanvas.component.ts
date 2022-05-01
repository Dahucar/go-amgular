import { Component, Input } from '@angular/core';
import { GroupRotesI } from 'src/app/interfaces';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
})
export class OffcanvasComponent {
  @Input() groupRoutes: Array<GroupRotesI> = [
    {
      groupTitle: "Pipes de fechas y textos",
      routes: [
        {
          name: "Fechas",
          path: "/date"
        }
      ]
    },
    {
      groupTitle: "Pipes de asincronos",
      routes: [
        {
          name: "Asincronos",
          path: "/async"
        }
      ]
    }
  ];
}
