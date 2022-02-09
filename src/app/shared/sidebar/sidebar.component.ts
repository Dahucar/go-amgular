import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RemoveTagById } from 'src/app/states/gifs/gif.action';
import { TagSelector } from 'src/app/states/gifs/gif.selector';
import { Tag } from 'src/app/states/gifs/gif.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  @Select(TagSelector.getTags) tags$!: Observable<any>;

  public tags: Tag[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tags$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(tags => { this.tags = tags});
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(SidebarComponent);
    this.ngUnsubscribe.complete();
  }

  public deleteTag(tagId: number): void {
    this.store.dispatch([ new RemoveTagById(tagId) ]);
  }
}
