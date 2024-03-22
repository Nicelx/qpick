import { createReducer, on } from "@ngrx/store";
import { addToCart } from "./cart.actions";

export const initialState = {
	cart: [""],
};

export const cartReducer = createReducer(
	initialState,
	on(addToCart, (state) => {
		state.cart.push("string");
		console.log("reducer log", state);
		return state;
	})
);
