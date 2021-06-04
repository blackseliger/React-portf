import {
    FETCH_ITEM_PRODUCT_FAILURE,
    FETCH_ITEM_PRODUCT_REQUEST,
    FETCH_ITEM_PRODUCT_SUCCESS,
} from './actionTypes';

export const fetchItemProductRequest = (id) => ({
    type: FETCH_ITEM_PRODUCT_REQUEST, payload: {id}
});

export const fetchItemProductFailure = (error) => ({
    type: FETCH_ITEM_PRODUCT_FAILURE, payload: {error},
});

export const fetchItemProductSuccess = (items) => ({
    type: FETCH_ITEM_PRODUCT_SUCCESS, payload: {
        items,
    }
})