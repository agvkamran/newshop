import { put, takeEvery, call } from 'redux-saga/effects';
import { setIsLoadingAC, setProductsAC } from '../redux/action';
import { SagaActionTypes } from './saga-action-types';

async function getCategory(name: string) {
    const request = await fetch(`https://fakestoreapi.com/products/category/${name}`);
    const data = await request.json();
    return data;
}

export function* workerCategory(params: any) {
    //@ts-ignore
    yield put(setIsLoadingAC(false));
    //@ts-ignore
    const data = yield call(getCategory, params.payload);
    yield put(setProductsAC(data));
    //@ts-ignore
    yield put(setIsLoadingAC(true));
}

export function* watcherCategory() {
    yield takeEvery(SagaActionTypes.LOAD_CATEGORY, workerCategory);
}