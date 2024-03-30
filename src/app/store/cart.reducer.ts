import { createReducer, on } from "@ngrx/store";
import { addToCart, decreaseAmount, removeFromCart } from "./cart.actions";
import { CartItem } from "./../types";
import { isAlreadyExist, insertItem, removeItem } from "../shared/utils";

export const initialState: CartItem[] = [];

export const counterReducer = createReducer(
	initialState,
	on(addToCart, (state, { payload }) => {
		let index = isAlreadyExist(state, payload.id);
		let item;

		if (index >= 0) {
			item = { ...state[index], amount: state[index].amount + 1 };

			return [...insertItem(state, item, index)];
		}
		item = {
			...payload,
			amount: 1,
		};
		return [...state, item];
	}),
	on(decreaseAmount, (state, { payload }) => {
		let index = isAlreadyExist(state, payload);
		let item;
		let currentAmount = state[index].amount;

		if (currentAmount <= 1) return state;

		if (index >= 0) {
			item = { ...state[index], amount: currentAmount - 1 };

			return [...insertItem(state, item, index)];
		}
		return state;
	}),
	on(removeFromCart, (state, { payload }) => {
		let index = isAlreadyExist(state, payload);
		if (index >= 0) {
			return [...removeItem(state, index)];
		}
		return state;
	})
);
