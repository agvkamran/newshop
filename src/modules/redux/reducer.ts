import { stat } from "fs";
import { Favorites } from "../../components/Favorites";
import { ActionTypes } from "./action-types";

export interface IState {
    allProducts: any,
    products: string[],
    productInfo: null,
    favorites: any,
    searchValue: string,
    filtered: any,
    isLoading: boolean
}

const initialState: IState = {
    allProducts: [],
    products: [],
    productInfo: null,
    favorites: [],
    searchValue: '',
    filtered: [],
    isLoading: false
};

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.SET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload
            }
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case ActionTypes.REMOVE_PRODUCTS:
            return {
                ...state,
                products: []
            }
        case ActionTypes.SET_PRODUCT_INFO:
            return {
                ...state,
                productInfo: action.payload
            }
        case ActionTypes.REMOVE_PRODUCT_INFO:
            return {
                ...state,
                productInfo: null
            }
        case ActionTypes.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, ...state.allProducts.filter((i: any) => {
                    return i.id === action.payload
                })]
            }
        case ActionTypes.SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            }
        case ActionTypes.SET_FILTERED:
            return {
                ...state,
                filtered: [...state.allProducts.filter((product: any) => {
                    return product.title.toLowerCase().includes((state.searchValue).toLowerCase())
                })]
            }
        case ActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default: return state
    }
}

export default productReducer;