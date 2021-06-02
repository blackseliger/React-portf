
import {
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    // ACTUAL_CATEGORIES_ID,
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

// export const actualCategoriesID = (id) => ({
//     type: ACTUAL_CATEGORIES_ID, payload: {
//         id
//     }
// })
