import {
    FETCH_ITEM_PRODUCT_FAILURE,
    FETCH_ITEM_PRODUCT_SUCCESS,
    FETCH_ITEM_PRODUCT_REQUEST,
} from './actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: null,
}

export default function itemProductReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ITEM_PRODUCT_REQUEST:
            return {
                ...state,
                items: null,
                loading: true,
                error: null,
            }
        case FETCH_ITEM_PRODUCT_SUCCESS:
            const { items } = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            }
        case FETCH_ITEM_PRODUCT_FAILURE: 
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            }
        default: 
            return state;
    }
}