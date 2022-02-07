export class AddGif {
  static readonly type = '[GIF] Add new gif';
  constructor(public name: string) {}
}

export class FeedAnimals {
  static readonly type = '[GIF] Feed Animals';
}

export class UpdateLoading {
  static readonly type = '[GIF] Update Loading Gif';
  constructor(public loading: boolean) {}
}