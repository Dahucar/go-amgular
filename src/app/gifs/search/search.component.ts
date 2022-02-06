import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  // Referenciar un elemento HTML en el componente.
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private gifService: GifsService
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

}
