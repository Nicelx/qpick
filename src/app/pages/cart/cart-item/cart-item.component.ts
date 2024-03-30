import { Component, Input } from "@angular/core";
import { CartItem } from "../../../types";
import { Store } from "@ngrx/store";
import { addToCart, removeFromCart } from "../../../store/cart.actions";
import { decreaseAmount } from "./../../../store/cart.actions";

@Component({
	selector: "app-cart-item",
	standalone: true,
	imports: [],
	templateUrl: "./cart-item.component.html",
	styleUrl: "./cart-item.component.scss",
})
export class CartItemComponent {
	@Input() cartItem: CartItem = {
		id: "",
		title: "",
		img: "",
		price: 0,
		rate: 0,
		amount: 0,
	};
	constructor(private store: Store) {}

	increaseAmount() {
		this.store.dispatch(addToCart({ payload: this.cartItem }));
	}
	decreaseAmount() {
		this.store.dispatch(decreaseAmount({ payload: this.cartItem.id }));
	}
	onRemoveFromCart() {
		this.store.dispatch(removeFromCart({ payload: this.cartItem.id }));
	}
}
