import {
    CART_ADD,
    CART_REMOVE,
} from './actionTypes';

export const cartAdd = (item, quantity) => ({
    type: CART_ADD, payload: {item, quantity}
})

export const cartRemove = (item) => ({
    type: CART_REMOVE, payload: {item}
});