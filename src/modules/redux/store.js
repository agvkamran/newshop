import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/root-saga";
import productReducer from "./reducer";
import userReducer from './user/user-reducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({
    productReducer,
    userReducer
});

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;