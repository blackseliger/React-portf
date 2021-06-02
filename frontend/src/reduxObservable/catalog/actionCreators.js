import {
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS
} from './actionTypes';

// FETCH

export const fetchCatalogRequest = (payload) => ({
    type: FETCH_CATALOG_REQUEST, payload,
});

export const fetchCatalogFailure = (error) => ({
    type: FETCH_CATALOG_FAILURE, payload: {error}
});

export const fetchCatalogSuccess = (items) => ({
    type: FETCH_CATALOG_SUCCESS, payload: {
        items,
    }
})

