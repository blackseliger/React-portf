import { FETCH_TOPSALES_FAILURE } from '../topsales/actionTypes';
import {
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS
} from './actionTypes';

// FETCH

export const fetchCatalogRequest = () => ({
    type: FETCH_CATALOG_REQUEST,
});

export const fetchCatalogFailure = (error) => ({
    type: FETCH_CATALOG_FAILURE, payload: {error}
});

export const fetchCatalogSuccess = (items) => ({
    type: FETCH_CATALOG_SUCCESS, payload: {
        items,
    }
})

