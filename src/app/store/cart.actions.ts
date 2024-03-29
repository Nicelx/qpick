import { createAction, props } from "@ngrx/store";
import { Product } from "../types";

// export const increment = createAction("[Counter Component] Increment");
export const increment = createAction(
	"[Counter Component] Increment",
	props<{ payload: number }>()
);
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");
export const addToCart = createAction("[Cart] Add to Cart", props<{ payload: Product }>());

// import { createAction, props } from "@ngrx/store";

// // export const addToCart = createAction("[Cart] Add", props<{ itemId: string }>);
// export const addToCart = createAction("[Cart] Add");
// export const removeFromCart = createAction("[Cart] Remove");
