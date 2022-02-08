import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AddGif, AddTag, RemoveTagById } from './gif.action';
import { GifsService } from '../../services/gifs.service';

// Definir el tipo de mi estado (las propiedades y su tipado correspondiente)
export interface GifsInterface {
  url: string
}

export interface Tag {
  id: number,
  name: string,
}

export interface STATE_TYPE {
  gifs: GifsInterface[],
  tags: Tag[],
  loading: boolean
}

const defaultState: STATE_TYPE = {
  gifs: [],
  tags: [],
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
  @Action(AddTag)
  public addNewTag(ctx: StateContext<STATE_TYPE>, action: AddGif): void {
    const state = ctx.getState();
    let tag: Tag = { id: new Date().getTime(), name: action.name };
    ctx.setState({ ...state, tags: [ ...state.tags, tag ] });
  }

  @Action(RemoveTagById)
  public removeTagById(ctx: StateContext<STATE_TYPE>, action: RemoveTagById): void {
    const state = ctx.getState();
    // buscar el tag por el id y devolver una lista actualizada
    const tagsFitered = state.tags.filter(tag => tag.id !== action.id);
    ctx.setState({ ...state, tags: tagsFitered });
  }

}