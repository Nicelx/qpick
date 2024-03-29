import { Component, Input } from "@angular/core";
import { Product } from "../../../types";
import { Store } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { addToCart } from "../../../store/cart.actions";

@Component({
	selector: "app-shop-item",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./shop-item.component.html",
	styleUrl: "./shop-item.component.scss",
})
export class ShopItemComponent {
	@Input() shopItemData: Product = {
		id: "",
		title: "",
		img: "",
		price: 0,
		rate: 0,
	};
	constructor(private store: Store) {}

	onAddToCart() {
		this.store.dispatch(addToCart({ payload: this.shopItemData }));
	}
}
