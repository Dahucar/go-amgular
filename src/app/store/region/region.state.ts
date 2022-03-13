import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<string[]>({
  name: 'regions',
  defaults: []
})
@Injectable()
export class RegionsState {}