import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';
import { ByCountryComponent } from './components/by-country/by-country.component';
import { InputSeachComponent } from './components/input-seach/input-seach.component';

@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent,
    ByCountryComponent,
    InputSeachComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountriesModule { }
