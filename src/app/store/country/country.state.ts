import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GetCountry } from './countries.actions';

interface CountryI {
  name: string,
  descript: string
}

interface CountriesModelI {
  countries: CountryI[]
}

const DEFAULT_COUNTRIES: CountriesModelI = {
  countries: []
}

@State<CountriesModelI>({
  name: 'countries',
  defaults: DEFAULT_COUNTRIES
})
@Injectable()
export class CountryState {

  @Action(GetCountry)
  feedAnimals(ctx: StateContext<CountriesModelI>, action: GetCountry) {
    console.log({ ctx });
    console.log(action);
  }

}