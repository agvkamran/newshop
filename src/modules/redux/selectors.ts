import { IState } from "./reducer";

export const selectState = (state: any) => state.productReducer;
export const selectAllProducts = (state: any) => state.productReducer.allProducts;
export const selectProducts = (state: any) => state.productReducer.products;
export const selectProductInfo = (state: any) => state.productReducer.productInfo;
export const selectFavorites = (state: any) => state.productReducer.favorites;
export const selectSearchValue = (state: any) => state.productReducer.searchValue;
export const selectFiltered = (state: any) => state.productReducer.filtered;
export const selectisLoading = (state: any) => state.productReducer.isLoading;
export const selectBasket =(state: any) => state.productReducer.basket;