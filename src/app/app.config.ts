import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideStore } from "@ngrx/store";
import { counterReducer } from "./store/cart.reducer";
import { provideStoreDevtools } from "@ngrx/store-devtools";
// import { cartReducer } from "./store/cart.reducer";
// import { productsFeature } from "./store/features";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideStore({ cart: counterReducer }),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
	],
};
