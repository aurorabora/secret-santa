import types from "./types";

/*********** Export Functions Here ***********/
export function createList( list , pairings ) {
     return {
          type: types.CREATE_LIST,
          payload: {
               list,
               pairings
          }
     }
}