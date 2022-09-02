import { ActionTypes } from "./action-types"

export const setAllProductsAC = (allProducts: string[]) => {
    return {
        type: ActionTypes.SET_ALL_PRODUCTS,
        payload: allProducts
    }
}

export const setProductsAC = (products: string[]) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const removeProductsAC = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCTS
    }
}

export const setProductInfoAC = (productInfo: string[]) => {
    return {
        type: ActionTypes.SET_PRODUCT_INFO,
        payload: productInfo
    }
}

export const removeProductInfoAC = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCT_INFO
    }
}

export const addToFavoritesAC = (productId: any) => {
    return {
        type: ActionTypes.ADD_TO_FAVORITES,
        payload: productId
    }
}

export const removeFromFavoritesAC = (productId: any) => {
    return {
        type: ActionTypes.REMOVE_FROM_FAVORITES,
        payload: productId
    }
}

export const setSearchValueAC = (searchValue: string) => {
    return {
        type: ActionTypes.SET_SEARCH_VALUE,
        payload: searchValue
    }
}

export const setFilteredAC = () => {
    return {
        type: ActionTypes.SET_FILTERED
    }
}

export const setIsLoadingAC = (isLoading: boolean) => {
    return {
        type: ActionTypes.SET_IS_LOADING,
        payload: isLoading
    }
}

export const addToBasketAC = (productId: any) => {
    return {
        type: ActionTypes.ADD_TO_BASKET,
        payload: productId
    }
}

export const removeFromBasketAC = (productId: any) => {
    return {
        type: ActionTypes.REMOVE_FROM_BASKET,
        payload: productId
    }
}