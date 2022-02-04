import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  // Referenciar un elemento HTML en el componente.
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>; 

  constructor() { }

  ngOnInit(): void {
  }

  public changeValue() {
    console.log(this.inputSearch.nativeElement.value);
    this.inputSearch.nativeElement.value = "";
  }

}
