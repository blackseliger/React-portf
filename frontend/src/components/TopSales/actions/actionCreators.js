import {
    // FETCH
    FETCH_TOPSALES_REQUEST,
    FETCH_TOPSALES_SUCCESS,
    FETCH_TOPSALES_FAILURE,
} from './actionTypes';


// FETCH 
export const fetchTopSalesRequest = () => ({
    type: FETCH_TOPSALES_REQUEST,
});

export const fetchTopSalesFailure = (error) => ({
    type: FETCH_TOPSALES_FAILURE, payload: {error}
});

export const fetchTopSalesSuccess = (items) => ({
    type: FETCH_TOPSALES_SUCCESS, payload: {
        items,
    },
})

