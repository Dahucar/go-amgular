import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs'; 
import { GifSelector } from 'src/app/states/gifs/gif.selector';
import { Images } from 'src/app/states/gifs/gif.types';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();

  public gifs: Images[] = [];
  @Select(GifSelector.getGifs) gifs$!: Observable<any>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.gifs$
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(gifs => { this.gifs = gifs});
  }
  
  ngOnDestroy(): void {
    this.ngUnsubscribe.next(ContentComponent);
    this.ngUnsubscribe.complete();
  }
}
