import { Selector } from "@ngxs/store";
import { GifState, STATE_TYPE } from "./gif.state";

export class GifSelector {
    @Selector([ GifState ])
    public static getGifs(state: STATE_TYPE) {
        return state.gifs;
    }
}

export class TagSelector {
    @Selector([ GifState ])
    public static getTags(state: STATE_TYPE){
        return state.tags;
    }
}
