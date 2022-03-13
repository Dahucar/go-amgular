import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// States.
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CountryState, RegionsState } from './store/index';

// Custom Modules.
import { CountriesModule } from './countries/countries.module';
import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsModule.forRoot([RegionsState, CountryState], {
      developmentMode: !environment.production
    }),
    CountriesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
