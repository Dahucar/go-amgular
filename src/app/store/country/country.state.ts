import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { GetCountry, SetNewTermino, GetPrevTermino } from './countries.actions';
import { CountriesService } from '../../countries/services/countries.service';
import { Country } from './countries.interfaces';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

interface CountriesModelI {
  termino: String,
  countries: any[]
}

const DEFAULT_COUNTRIES: CountriesModelI = {
  termino: "",
  countries: []
}

@State<CountriesModelI>({
  name: 'countries',
  defaults: DEFAULT_COUNTRIES
})
@Injectable()
export class CountryState {
  constructor(
    private _store: Store,
    private _countryService: CountriesService
  ){}

  @Action(GetCountry)
  public getCountry(ctx: StateContext<CountriesModelI>, action: GetCountry) {
    return this._countryService
      .searCountryByName(action.country)
      .pipe(tap((data) => {
        ctx.setState({
          ...ctx.getState(),
          countries: data
        });
      }));
  }

  @Action(SetNewTermino)
  public setNewTermino(ctx: StateContext<CountriesModelI>, action: SetNewTermino) {
    localStorage.setItem(environment.varibles.termino, action.termino);
    return ctx.setState({
      ...ctx.getState(),
      termino: action.termino
    })
  }

  @Action(GetPrevTermino)
  public getPrevTermino(ctx: StateContext<CountriesModelI>) {
    const termino = localStorage.getItem(environment.varibles.termino) || "";
    this._store.dispatch(new GetCountry(termino));
  }

}