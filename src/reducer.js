import { CHANGE_SEARCH_FIELD } from './constants';

// state
const initialState = {
    searchField: ''
}

// reducer
export const searchRobos = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}