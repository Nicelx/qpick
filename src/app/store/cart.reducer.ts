import { createReducer, on } from "@ngrx/store";
import { addToCart } from "./cart.actions";

export const initialState = {
	cart: [""],
};

export const counterReducer = createReducer(
	initialState,
	on(addToCart, (state) => state.cart.push("string"))
);
