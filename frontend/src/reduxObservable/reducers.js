import { combineReducers } from 'redux';
import cartReducer from './cart/cart';
import catalogReducer from './catalog/catalog';
import categoriesReducer from './categories/categories';
import itemProductReducer from './itemproduct';
import { orderReducer } from './order/order';
import searchReducer from './search/search';
import topSalesReducer from './topsales/topSales';



const reducer = combineReducers({
    topSales: topSalesReducer,
    catalog: catalogReducer,
    categories: categoriesReducer,
    search: searchReducer,
    itemProduct: itemProductReducer,
    cart: cartReducer,
    order: orderReducer,
}
)



export default reducer;

