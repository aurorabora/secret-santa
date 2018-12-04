import types from "../actions/types";

const DEFAULT_STATE = {
	pairings: {},
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case types.CREATE_LIST:
			return {
				...state,
				list: action.payload.list,
				pairings: action.payload.pairings,
			};
		case types.UPDATE_LIST:
			return {
				...state,
				list: action.payload.list,
				pairings: action.payload.pairings,
			};
        case types.CREATE_SECTIONS:
            return {
                ...state,
                sections: action.payload.sections
            }
		default:
			return state;
	}
};
