import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CardComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    CardComponent,
    LogoComponent
  ]
})
export class SharedModule { }
