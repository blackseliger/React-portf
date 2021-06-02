import { combineEpics } from 'redux-observable';
import { catalog } from './catalog';
import { categories } from './categories';
import { topSalesfetchRequest } from './topsales';



 const epic = combineEpics(
    topSalesfetchRequest,
    catalog,
    categories,
);



export default epic;