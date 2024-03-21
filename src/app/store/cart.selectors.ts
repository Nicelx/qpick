import { createSelector } from "@ngrx/store";

export interface AppState {
	cart: string[];
}

export const selectCart = (state: AppState) => state.feature;

export const selectFeatureCount = createSelector(
	selectFeature,
	(state: FeatureState) => state.counter
);
