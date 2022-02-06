import { Injectable } from '@angular/core';

export interface tag {
  id: number,
  name: string
}

@Injectable({ providedIn: 'root' })
export class GifsService {
  private tagsSearch: tag[] = [];
  private MAX_LENGTH: number = 10;
  constructor(
  ) { }

  get tagsSearchws(): tag[] {
    return [ ...this.tagsSearch ];
  }

  public addNewSearchTag(tag: string): void {
    console.log("execute addNewSearchTag!");
    if (this.inRangeLength() && !this.isDuplicateTag(tag)) {
      this.tagsSearch.unshift({
        name: tag,
        id: new Date().getTime()
      });
    }
  }

  public isDuplicateTag(tagName: string): boolean{
    console.log("execute isDuplicateTag!");
    let isExist = this.tagsSearch.find(
      (tagItem: tag) => tagItem.name.toLowerCase() === tagName.toLowerCase()
    );
    return (isExist) ? true : false;
  }

  public inRangeLength(): boolean{
    console.log("execute inRangeLength!");
    return this.tagsSearch.length < this.MAX_LENGTH
  }

  public removeTagById(tagId: number): void {
    console.log("execute removeTagById!");
    this.tagsSearch = this.tagsSearch
      .filter(tag => tag.id !== tagId);
  }

}
