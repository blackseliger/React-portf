import { combineEpics } from 'redux-observable';
import catalogReducer from './catalog/catalog';
import { topSalesfetchRequest } from './topsales';



 const epic = combineEpics(
    topSalesfetchRequest,
    catalogReducer,
);



export default epic;