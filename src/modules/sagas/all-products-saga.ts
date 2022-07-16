import { put, takeEvery, call } from 'redux-saga/effects';
import { setAllProductsAC, setIsLoadingAC, setProductsAC } from '../redux/action';
import { SagaActionTypes } from './saga-action-types';

async function getAllProducts() {
    const request = await fetch(`https://fakestoreapi.com/products`);
    const data = await request.json();
    return data;
}

export function* workerAllProducts() {
    //@ts-ignore
    yield put(setIsLoadingAC(false));
    //@ts-ignore
    const data = yield call(getAllProducts);
    yield put(setAllProductsAC(data));
    //@ts-ignore
    yield put(setIsLoadingAC(true));
}

export function* watcherAllProducts() {
    yield takeEvery(SagaActionTypes.GET_ALL_PRODUCTS, workerAllProducts);
}