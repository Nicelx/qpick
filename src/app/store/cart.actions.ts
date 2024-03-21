import { createAction, props } from "@ngrx/store";

// export const addToCart = createAction("[Cart] Add", props<{ itemId: string }>);
export const addToCart = createAction("[Cart] Add");
export const removeFromCart = createAction("[Cart] Remove");
