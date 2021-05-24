import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import topSalesReducer  from '../reducers/topSales';
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchRequest } from '../epics';

const reducer = combineReducers({
    topSales: topSalesReducer,
});

const epic = combineEpics(
    fetchRequest,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(epic);

export default store;