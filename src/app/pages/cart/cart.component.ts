import { Component } from "@angular/core";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { Store } from "@ngrx/store";
import { Observable, of, switchMap } from "rxjs";
import { CartItem } from "../../types";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-cart",
	standalone: true,
	imports: [CartItemComponent, CommonModule, RouterLink],
	templateUrl: "./cart.component.html",
	styleUrl: "./cart.component.scss",
})
export class CartComponent {
	$cart: Observable<CartItem[]>;
	$total: Observable<number>;
	constructor(private store: Store<{ cart: CartItem[] }>) {
		this.$cart = this.store.select("cart");
		this.$total = this.$cart.pipe(
			switchMap((val: CartItem[], i: number) => {
				let total = 0;
				val.forEach((item: CartItem) => {
					total = total + item.price * item.amount;
				});
				return of(total);
			})
		);
	}
}
