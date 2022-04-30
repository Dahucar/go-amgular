import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async/async.component';



@NgModule({
  declarations: [
    AsyncComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsyncComponent
  ]
})
export class PipesModule { }
