import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom modules.
import { PagesRouting } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRouting
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
