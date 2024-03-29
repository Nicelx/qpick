import { createFeature, createReducer, on } from "@ngrx/store";
import { createAction } from "@ngrx/store";

export const increment = createAction("[Counter Component] Increment");
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");

// interface CounterState {
// 	counter: number;
// }

// const initialState: CounterState = {
// 	counter: 0,
// };

// export const productsFeature = createFeature({
// 	name: "counter",
// 	reducer: createReducer(
// 		initialState,
// 		on(increment, (state) => {
// 			return {
// 				...state,
// 				counter: state.counter++,
// 			};
// 		}),
// 		on(decrement, (state) => {
// 			return {
// 				...state,
// 				counter: state.counter--,
// 			};
// 		})
// 		// on(reset, (state) => 0)
// 	),
// });

// const {
// 	name,
// 	reducer,
// 	// feature selector
// 	selectProductsState, // type: MemoizedSelector<Record<string, any>, ProductsState>
// 	// feature state properties selectors
// 	selectProducts, // type: MemoizedSelector<Record<string, any>, Product[]>
// 	selectSelectedId, // type: MemoizedSelector<Record<string, any>, string | null>
// } = productsFeature;
