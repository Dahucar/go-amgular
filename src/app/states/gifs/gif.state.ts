import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { AddGif, AddTag, GetGifsByTag, RemoveTagById, SetLoading } from './gif.action';
import { GifsService } from '../../services/gifs.service';
import { Gif, GIFData, Images } from './gif.types';

// Definir el tipo de mi estado (las propiedades y su tipado correspondiente)
export interface Tag {
  id: number,
  name: string,
}

export interface STATE_TYPE {
  gifsList: Gif[],
  tags: Tag[],
  loading: boolean
}

const defaultState: STATE_TYPE = {
  gifsList: [],
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

  @Action(SetLoading)
  public SetLoading(ctx: StateContext<STATE_TYPE>, action: SetLoading){
    const state = ctx.getState();
    ctx.setState({ ...state, loading: action.loading });
  }

  // Definir todas las acciones necesarias.
  @Action(AddTag)
  public addNewTag(ctx: StateContext<STATE_TYPE>, action: AddGif): void {
    const state = ctx.getState();
    let tag: Tag = { id: new Date().getTime(), name: action.name };

    if (this.inRangeTags(state.tags) && !this.isDuplicateTag(tag.name, state.tags)) {
      ctx.setState({ ...state, tags: [ ...state.tags, tag ] });
    }

  }

  @Action(RemoveTagById)
  public removeTagById(ctx: StateContext<STATE_TYPE>, action: RemoveTagById): void {
    const state = ctx.getState();
    // buscar el tag por el id y devolver una lista actualizada
    const tagsFitered = state.tags.filter(tag => tag.id !== action.id);
    ctx.setState({ ...state, tags: tagsFitered });
  }

  @Action(GetGifsByTag)
  public getGifsByTag(ctx: StateContext<STATE_TYPE>, action: GetGifsByTag){
    this.gifService.getGifByTag(action.tag).subscribe((response: GIFData) => {
      ctx.setState({ ...ctx.getState(), gifsList: response.data });
    });
  }

  private isDuplicateTag(name: string, tags: Tag[]): boolean{
    console.log("execute isDuplicateTag!");
    const isExist = tags.find(
      tag => tag.name.toLowerCase() === name.toLowerCase()
    );
    return (isExist) ? true : false;
  }

  private inRangeTags(tags: Tag[]){
    console.log("execute inRangeTags!");
    return tags.length < 10;
  }

}