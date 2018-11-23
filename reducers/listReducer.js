import types from '../actions/types';

const DEFAULT_STATE = {
     pairings: {}
}

export default ( state = DEFAULT_STATE , action ) => {
     switch( action.type ) {
          case types.CREATE_LIST:
               let { list , pairings } = action.payload;
               for (key in pairings) {
                    let randomNum = Math.floor(Math.random() * list.length);
                    while (key === list[randomNum]) {
                         randomNum = Math.floor(Math.random() * list.length);
                    }
                    pairings[key] = list[randomNum];
                    list.splice(randomNum, 1);
               }
               return {
                    ...state,
                    list: list,
                    pairings: pairings
               }
          default:
               return state
     }
}