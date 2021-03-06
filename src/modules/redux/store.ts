import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root-saga";
import productReducer from "./reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    productReducer
});

const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;