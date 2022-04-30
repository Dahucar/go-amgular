import { Component, Input } from '@angular/core';
import { RouteI } from '../../interfaces/index';

@Component({
  selector: 'app-group-container',
  templateUrl: './group-container.component.html',
})
export class GroupContainerComponent {
  @Input() title: string = "";
  @Input() rutes: Array<RouteI> = [];
}
