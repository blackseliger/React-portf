import { combineEpics } from 'redux-observable';
import { catalog } from './catalog';
import { categories } from './categories';
import { itemProduct } from './itemproduct/itemproduct';
import { topSalesfetchRequest } from './topsales';



 const epic = combineEpics(
    topSalesfetchRequest,
    catalog,
    categories,
    itemProduct,
);



export default epic;