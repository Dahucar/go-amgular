export class GetCountry {
  static readonly type = '[COUNTRIES] Get countries by name';
  constructor(public country: string) {}
}

export class SetNewTermino {
  static readonly type = '[COUNTRIES] Set new termino';
  constructor(public termino: string) {}
}

export class GetPrevTermino {
  static readonly type = '[COUNTRIES] Get termino';
  constructor() {}
}
