
import { number } from 'prop-types';
import {
    ACTUAL_CATEGORIES_ID,
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS,
} from './actionTypes';

const initialState = {
    items: [],
    loading: false,
    actualCount: number,
    error: null,
    id: null,
    
};

export default function catalogReducer(state = initialState, action) {
    switch (action.type) {
        case ACTUAL_CATEGORIES_ID: 
        const { id } = action.payload;
        return {
            ...state,
            id,
        }
        case FETCH_CATALOG_REQUEST:
            const offSet = action.payload && action.payload.offSet; 
            return {
                ...state,
                items: offSet ? state.items : [],
                // проверка чтоб не накапливался повторами постояно при нажатии кнопки "еще" 
                loading: true,
                error: null,
        };
        case FETCH_CATALOG_SUCCESS:
            const { items } = action.payload; 
            return {
                ...state,
                items: [...state.items, ...items],
                actualCount: items.length,
                //  items.length  items берется из payload => приходит либо 6 либо меньше 6
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