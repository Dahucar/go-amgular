import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AddGif } from './gif.action';
import { GifsService } from '../../services/gifs.service';

// Definir el tipo de mi estado (las propiedades y su tipado correspondiente)
export interface GifsInterface {
  url: string
}

export interface STATE_TYPE {
  gifs: GifsInterface[],
  loading: boolean
}

const defaultState: STATE_TYPE = {
  gifs: [],
  loading: true,
}

@State<STATE_TYPE>({
  name: 'gifs',
  defaults: defaultState
})
@Injectable({ providedIn: 'root' })
export class GifState {

  // Puede tener inyección de dependencias
  constructor(
    private gifService: GifsService
  ){}

  // Definir todas las acciones necesarias.
  @Action(AddGif)
  public addNewGif(ctx: StateContext<STATE_TYPE>, action: AddGif) {
    const state = ctx.getState();


    // Llamar al servicio.
    this.gifService
      .getGifByTag(action.name)
      .subscribe(response => {
        
      });

    ctx.setState({
      ...state,
      gifs: [ ...state.gifs, { url: action.name } ]
    });
  }

}