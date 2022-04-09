import { Selector } from "@ngxs/store";
import { Country } from "./countries.interfaces";
import { CountriesModelI, CountryState } from "./country.state";

export class CountriesSelectors {
  @Selector([ CountryState ])
  static getCountries(state: CountriesModelI): Country[] {
    return state.countries;
  }
}