import { SEARCH_CHANGE_INPUT, SEARCH_VISIBILITY_CATALOG } from "./actionTypes";

const initialState = {
    searchStr: '',
    visibility: false,
};

export default function searchReducer(state = initialState, action ) {
    switch( action.type) {
        case SEARCH_CHANGE_INPUT:
            const { items } = action.payload;
            return {
                searchStr: items
            }
        case SEARCH_VISIBILITY_CATALOG:
            const { bool } = action.payload;
            return {
                visibility: bool,
            }
        default:
            return state;
    }
}