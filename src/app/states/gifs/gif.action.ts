export class AddTag {
  static readonly type = '[GIF] Add new tag';
  constructor(public name: string) {}
}

export class RemoveTagById {
  static readonly type = '[GIF] Remove tag by id';
  constructor(public id: number) {}
}

export class AddGif {
  static readonly type = '[GIF] Add new gif';
  constructor(public name: string) {}
}

export class UpdateLoading {
  static readonly type = '[GIF] Update Loading Gif';
  constructor(public loading: boolean) {}
}