import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface tag {
  id: number,
  name: string
}

@Injectable({ providedIn: 'root' })
export class GifsService {
  private tagsSearch: tag[] = [];
  private gifsList: string[] = [];

  private MAX_LENGTH: number = 10;
  constructor(
    private http: HttpClient
  ) { }

  get tagsSearchws(): tag[] {
    return [ ...this.tagsSearch ];
  }

  public getGifByTag(tag: string): Observable<any>{
    return this.http.get(`${environment.API_GIFS_URL}&q=${tag}&limit=${this.MAX_LENGTH}`);
  }

  public getGifs(tag: string){
    this.http.get(`${environment.API_GIFS_URL}&q=${tag}&limit=${this.MAX_LENGTH}`).subscribe((response: any) => console.log(response.data));
  }

  public addNewSearchTag(tag: string): void {
    console.log("execute addNewSearchTag!");
    if (this.inRangeLength() && !this.isDuplicateTag(tag)) {
      this.tagsSearch.unshift({
        name: tag,
        id: new Date().getTime()
      });

      this.getGifs(tag);
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
