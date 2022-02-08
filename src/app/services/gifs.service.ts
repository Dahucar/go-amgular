import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private MAX_LENGTH: number = 10;
  constructor(private http: HttpClient) { }

  public getGifByTag(tag: string): Observable<any>{
    return this.http.get(`${environment.API_GIFS_URL}&q=${tag}&limit=${this.MAX_LENGTH}`);
  }

  public getGifs(tag: string){
    this.http.get(`${environment.API_GIFS_URL}&q=${tag}&limit=${this.MAX_LENGTH}`).subscribe((response: any) => console.log(response.data));
  }
}
