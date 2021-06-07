import {
    CART_ADD,
    CART_REMOVE,
    CART_REMOVE_ALL,
} from './actionTypes';

export const cartAdd = ({item, quantity}) => ({
    type: CART_ADD, payload: {item, quantity}
})

export const cartRemove = (key) => ({
    type: CART_REMOVE, payload: {key}
});

export const cartRemoveAll = () => ({
    type: CART_REMOVE_ALL
})