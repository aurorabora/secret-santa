import types from "./types";

/*********** Export Functions Here ***********/
export function createList( list ) {
     return {
          type: types.CREATE_LIST,
          payload: list
     }
}