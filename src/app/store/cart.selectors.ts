import { createSelector } from "@ngrx/store";

export interface AppState {
	cart: string[];
}

export const selectCartFeature = (state: AppState) => state.cart;

export const selectCart = createSelector(selectCartFeature, (state: any) => state);
