import {
    map,
} from 'rxjs/operators';

export const cart = (state$) => state$.pipe(
    map((state) => state.cart),
    map((cart) => localStorage.setItem('cart', cart)), 
);
