import { combineReducers } from 'redux';
import catalogReducer from './catalog/catalog';
import topSalesReducer from './topsales/topSales';


const reducer = combineReducers({
    topSales: topSalesReducer,
    catalog: catalogReducer,
}
)



export default reducer;

