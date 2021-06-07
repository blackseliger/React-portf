/* eslint-disable default-case */
import {
    CART_ADD,
    CART_REMOVE,
    CART_REMOVE_ALL
} from './actionTypes';


// const locatStorageSet = (obj) => localStorage.setItem('cart', JSON.stringify(obj));

const initialState = JSON.parse(localStorage.getItem('cart')) || [];
console.log(initialState);

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
    case CART_REMOVE: {
      const { key } = action.payload;
      console.log(key); 
      const removeItemIndex = state.find((o) => (o.item.key === key));
      console.log(removeItemIndex);
      if (removeItemIndex.quantity === 1) {
        return state.filter((o) => o.item.key !== key );
      } return state.map((o) => {
        if (o.item.key === key) return {...o, quantity: o.quantity - 1}
        return o;
      }) 
    }
    case CART_REMOVE_ALL: {
      return [];
    }
    default:
      return state;
  }
}