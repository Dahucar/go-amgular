import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';
import { GroupContainerComponent } from './group-container/group-container.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CardComponent,
    LogoComponent,
    GroupContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    CardComponent,
    LogoComponent,
    GroupContainerComponent
  ]
})
export class SharedModule { }
