import { combineEpics } from 'redux-observable';
import { catalog } from './catalog';
import { topSalesfetchRequest } from './topsales';



 const epic = combineEpics(
    topSalesfetchRequest,
    catalog,
);



export default epic;