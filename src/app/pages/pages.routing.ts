import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components.
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

// Actualizacion de rutas hijas.
/*
  Cuando se quiera acceder a alguna de las rutas aqui
  definidas, se debera acceder mediante la ruta padre
  definida en path seguido de su ruta children correspondiente.
  dashboard/progress
*/
const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting {}