import { createAction, props } from "@ngrx/store";
import { Product } from "../types";

export const addToCart = createAction("[Cart] Add to Cart", props<{ payload: Product }>());
export const increaseAmount = createAction("[Cart] Add amount", props<{ payload: string }>());
export const decreaseAmount = createAction("[Cart] Decrease amount", props<{ payload: string }>());
export const removeFromCart = createAction("[Cart] Remove from cart", props<{ payload: string }>());
