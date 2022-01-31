import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    SearchComponent,
    MainComponent,
    ContentComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
