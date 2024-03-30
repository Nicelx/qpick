import { createSelector } from "@ngrx/store";
import { CartItem, Product } from "../types";

export interface AppState {
	cart: CartItem[];
}

export const selectCartFeature = (state: AppState) => state;

export const selectCart = createSelector(selectCartFeature, (state: AppState) => state.cart);
