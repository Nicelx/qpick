import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToCart } from "../../store/cart.actions";
import { Observable } from "rxjs";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	constructor(private store: Store) {}
	// cart$: Observable<string[]>;

	onAddToCart(itemId: string) {
		this.store.dispatch(addToCart());
		console.log(this.store.select("cart"));
	}
}
