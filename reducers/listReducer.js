import types from '../actions/types';

const DEFAULT_STATE = {
     pairings: {}
}

export default ( state = DEFAULT_STATE , action ) => {
     switch( action.type ) {
          case types.CREATE_LIST:
               let { list , pairings } = action.payload;
               let referenceList = [...list];
               for (key in pairings) {
                    let randomNum = Math.floor(Math.random() * referenceList.length);
                    while (key === referenceList[randomNum]) {
                         randomNum = Math.floor(Math.random() * referenceList.length);
                    }
                    pairings[key] = list[randomNum];
                    referenceList.splice(randomNum, 1);
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