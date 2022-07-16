import { spawn } from 'redux-saga/effects';
import { watcherAllProducts } from './all-products-saga';
import { watcherCategory } from './categories-saga';
import { watcherProductInfo } from './product-info-saga';

export default function* rootSaga() {
    yield spawn(watcherAllProducts);
    yield spawn(watcherCategory);
    yield spawn(watcherProductInfo);
}