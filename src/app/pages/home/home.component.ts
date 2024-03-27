import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToCart } from "../../store/cart.actions";
import { Observable } from "rxjs";
import { selectCart } from "../../store/cart.selectors";
import { CommonModule } from "@angular/common";
import { ShopItemComponent } from "./shop-item/shop-item.component";
import { Product } from "../../types";
import { headphones, wirelessHeadphones } from "../../mock-data";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [CommonModule, ShopItemComponent],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	constructor(private store: Store<{ cart: string[] }>) {}
	cart$: Observable<string[]> = new Observable();
	headphonesData: Product[] = headphones;
	wirelessData: Product[] = wirelessHeadphones;

	onAddToCart(itemId: string) {
		this.store.dispatch(addToCart());
		let selectt = this.store.select("cart");
		console.log("selectt", selectt);
		this.cart$ = this.store.select("cart");
		this.cart$.subscribe((result) => {
			console.log(result);
		});
	}
}
