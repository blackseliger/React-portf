import { FETCH_TOPSALES_REQUEST, FETCH_TOPSALES_SUCCESS } from '../topsales/actionTypes';
import {
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS,
} from './actionTypes';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default function catalogReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATALOG_REQUEST: 
            return {
                ...state,
                loading: true,
                error: null,
        };
        case FETCH_CATALOG_SUCCESS:
            const { items } = action.payload; 
            return {
                ...state,
                items,
                loading: false,
                error: null, 
            }
        case FETCH_CATALOG_FAILURE:
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