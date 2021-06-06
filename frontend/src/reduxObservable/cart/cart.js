/* eslint-disable default-case */
import {
    CART_ADD,
    CART_REMOVE
} from './actionTypes';


const initialState = (localStorage.getItem('cart')) || [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD: {
      const { item, quantity } = action.payload;
      const duplicate = state.find((o) => (o.item.id === item.id) && (o.item.size === item.size));
      if (duplicate) {
        return state.map((o) => {
          if (o.item.key === duplicate.item.key) return { ...o, quantity: o.quantity + quantity };
          return o;
        });
      }
      return [
        ...state,
        {
          item: { ...item, key: `${item.id}:${item.size}` },
          quantity,
        },
      ];
    }
    default:
      return state;
  }
}