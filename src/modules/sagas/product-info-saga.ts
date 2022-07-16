import { put, takeEvery, call } from 'redux-saga/effects';
import { setIsLoadingAC, setProductInfoAC, setProductsAC } from '../redux/action';
import { SagaActionTypes } from './saga-action-types';

async function getProductInfo(productId: string) {
    const request = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await request.json();
    return data;
}

export function* workerProductInfo(params: any) {
    //@ts-ignore
    yield put(setIsLoadingAC(false));
    //@ts-ignore
    const data = yield call(getProductInfo, params.payload);
    yield put(setProductInfoAC(data));
    //@ts-ignore
    yield put(setIsLoadingAC(true));
}

export function* watcherProductInfo() {
    yield takeEvery(SagaActionTypes.GET_PRODUCT_INFO, workerProductInfo);
}