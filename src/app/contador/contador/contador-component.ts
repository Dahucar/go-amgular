import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h2>La base es <strong>{{ base }}</strong></h2>

        <button (click)="acumular(base)" >incrementar {{ base }}</button>
        <p>{{ contador }}</p>
        <button (click)="acumular(-base)">decrementar {{ base }}</button>
    `
})
export class ContadorComponent {
    public title: string = 'bases';
    public contador: number = 5;
    public base: number = 5;
  
    public acumular(valor: number): void {
      this.contador += valor;
    }
}