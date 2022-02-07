import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';
// Store.
import { Store } from '@ngxs/store';
import { AddGif } from 'src/app/states/gifs/gif.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  // Referenciar un elemento HTML en el componente.
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private gifService: GifsService,
    private store: Store
  ) {}

  ngOnInit(): void {
  }

  public changeValue() {
    let tag = this.inputSearch.nativeElement.value;
    if (tag) {
      this.gifService.addNewSearchTag(tag);
      this.inputSearch.nativeElement.value = "";
    }
  }

  public findGifByTag(){
    let tag = this.inputSearch.nativeElement.value;
    if (tag) {
      // this.gifService.addNewSearchTag(tag);
      this.store.dispatch([new AddGif(tag)]).subscribe(() => console.log("Se termina el dispatch"));
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
