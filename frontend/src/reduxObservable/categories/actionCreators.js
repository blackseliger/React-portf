import { FETCH_CATALOG_FAILURE } from '../catalog/actionTypes';
import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
} from './actionTypes';

export const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesFailure = (error) => ({
    type: FETCH_CATEGORIES_FAILURE, payload: {error},
});

export const fetchCategoriesSuccess = (items) => ({
    type: FETCH_CATEGORIES_SUCCESS, payload: {
        items,
    } 
})