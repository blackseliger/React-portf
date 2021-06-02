import { combineReducers } from 'redux';
import catalogReducer from './catalog/catalog';
import categoriesReducer from './categories/categories';
import searchReducer from './search/search';
import topSalesReducer from './topsales/topSales';


const reducer = combineReducers({
    topSales: topSalesReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    search: searchReducer,
}
)



export default reducer;

