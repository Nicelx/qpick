import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToCart } from "../../store/cart.actions";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	constructor(private store: Store) {}

	onAddToCart(itemId: string) {
		this.store.dispatch(addToCart());
	}
}
