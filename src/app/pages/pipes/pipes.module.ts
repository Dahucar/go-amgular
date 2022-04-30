import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async/async.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AsyncComponent,
    DateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsyncComponent,
    DateComponent
  ]
})
export class PipesModule { }
