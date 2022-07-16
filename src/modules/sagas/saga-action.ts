import { SagaActionTypes } from "./saga-action-types";

export const loadCategoryASC = (name: string) => {
    return {
        type: SagaActionTypes.LOAD_CATEGORY,
        payload: name
    }
};

export const getProductInfoACS = (productId: string) => {
    return {
        type: SagaActionTypes.GET_PRODUCT_INFO,
        payload: productId
    }
}

export const getAllProductsACS = () => {
    return {
        type: SagaActionTypes.GET_ALL_PRODUCTS,
        // payload: allProducts
    }
}