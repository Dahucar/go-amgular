import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

// Components.
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { CountryComponent } from './countries/pages/country/country.component';

const routes: Routes = [
  {
    path: 'countries',
    component: CountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'capitals',
    component: CapitalComponent,
  },
  {
    path: 'regions',
    component: RegionComponent,
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}