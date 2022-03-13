export class GetCountry {
  static readonly type = '[COUNTRIES] Get countries by name';
  constructor(public payload: any) {}
}
