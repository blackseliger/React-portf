import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducers';
import epic from './epic';
import { createEpicMiddleware } from "redux-observable";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(epic);

export default store;