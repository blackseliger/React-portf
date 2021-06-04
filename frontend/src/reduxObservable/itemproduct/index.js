import {
    FETCH_ITEM_PRODUCT_FAILURE,
    FETCH_ITEM_PRODUCT_SUCCESS,
    FETCH_ITEM_PRODUCT_REQUEST,
    ITEM_PRODUCT_SELECTED,
    ITEM_PRODUCT_QUANTITY,
} from './actionTypes';

const initialState = {
    items: null,
    loading: false,
    error: null,
    selected: 0,
    quantity: 1,
}

export default function itemProductReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ITEM_PRODUCT_REQUEST:
            return {
                ...state,
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
        case ITEM_PRODUCT_SELECTED: 
            const { index } = action.payload;
            return {
                ...state,
                selected: index,
            }
        case ITEM_PRODUCT_QUANTITY: 
            const { amount } = action.payload;
            return {
                ...state,
                quantity: amount,
            }
        default: 
            return state;
    }
}