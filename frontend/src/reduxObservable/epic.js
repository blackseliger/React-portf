import { combineEpics } from 'redux-observable';
import { cart } from './cart';
import { catalog } from './catalog';
import { categories } from './categories';
import { itemProduct } from './itemproduct/itemproduct';
import { topSalesfetchRequest } from './topsales';



 const epic = combineEpics(
    topSalesfetchRequest,
    catalog,
    categories,
    itemProduct,
    cart,
);



export default epic;