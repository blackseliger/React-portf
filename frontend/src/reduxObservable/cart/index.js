// import {
//     map,
// } from 'rxjs/operators';

// export const cart = (_, state$) => state$.pipe(
//     map((state) => state.cart),
//     map((cart) => localStorage.setItem('cart', cart)), 
// );


import {
    map,
    ignoreElements,
  } from 'rxjs/operators';
  
  export const cart = (_, state$) => state$.pipe(
    map((state) => state.cart),
    map((cart) => localStorage.setItem('cart', JSON.stringify(cart))),
    ignoreElements(),
  );
  