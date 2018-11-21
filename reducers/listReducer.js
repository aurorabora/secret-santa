import types from '../actions/types';

const DEFAULT_STATE = {
     list: [],
}

export default ( state = DEFAULT_STATE , action ) => {
     switch( action.type ) {
          case types.ADD_TO_LIST:
               return {
                    ...state,
                    list: action.payload
               }
     }
}