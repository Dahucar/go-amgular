import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom modules.
import { PagesRouting } from './pages/pages.routing';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { AuthRouting } from './auth/auth.routing';

const routes: Routes = [
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRouting,
    AuthRouting
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
