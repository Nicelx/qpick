import { createReducer, on } from "@ngrx/store";
import { addToCart } from "./cart.actions";
import { Product } from "./../types";

export const initialState: Product[] = [];

export const counterReducer = createReducer(
	initialState,
	on(addToCart, (state, { payload }) => {
		return [...state, payload];
	})
);
