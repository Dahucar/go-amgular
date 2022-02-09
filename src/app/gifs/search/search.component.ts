import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
// Store.
import { Store, Select } from '@ngxs/store';
import { AddGif, AddTag, GetGifsByTag, SetLoading } from 'src/app/states/gifs/gif.action';
import { GifSelector } from 'src/app/states/gifs/gif.selector';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  // Referenciar un elemento HTML en el componente.
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;
  @Select(GifSelector.getGifs) gifs$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public findGifByTag(): void {
    let tag = this.inputSearch.nativeElement.value;
    if (tag) {
      this.store.dispatch([
        new AddTag(tag),
        new SetLoading(true),
        new GetGifsByTag(tag),
        new SetLoading(false)
      ]);
      this.inputSearch.nativeElement.value = "";
    }
  }

  /*
    addAnimal(name: string) {
      this.store
        .dispatch(new AddAnimal(name))
        .pipe(withLatestFrom(this.animals$))
        .subscribe(([_, animals]) => {
          // do something with animals
          this.form.reset();
        });
    }
  */

}
