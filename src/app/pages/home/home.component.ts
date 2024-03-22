import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToCart } from "../../store/cart.actions";
import { Observable } from "rxjs";
import { selectCart } from "../../store/cart.selectors";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	constructor(private store: Store<{ cart: string[] }>) {}
	cart$: Observable<string[]> = new Observable();

	onAddToCart(itemId: string) {
		this.store.dispatch(addToCart());
		this.cart$ = this.store.select("cart");
		this.cart$.subscribe((result) => {
			console.log(result);
		});
	}
}
