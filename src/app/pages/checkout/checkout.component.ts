import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable, of, switchMap } from "rxjs";
import { AppStore, CartItem } from "../../types";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
	selector: "app-checkout",
	standalone: true,
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: "./checkout.component.html",
	styleUrl: "./checkout.component.scss",
})
export class CheckoutComponent {
	$cart: Observable<CartItem[]>;
	$total: Observable<number>;
	isLoading: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private store: Store<AppStore>,
		private router: Router
	) {
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
	public checkoutForm = this.formBuilder.group({
		firstName: ["", Validators.required],
		lastName: ["", Validators.required],
		phone: [0, Validators.required],
		delivery: ["pickup"],
		pickupPoint: ["1"],
		deliveryAddress: [""],
	});

	onSendOrder(total: number) {
		const {
			delivery: deliveryType,
			firstName,
			lastName,
			phone,
			deliveryAddress,
		} = this.checkoutForm.value;

		if (!firstName || !lastName || !phone) throw new Error("not all field filled");
		if (deliveryType === "delivery") {
			if (!deliveryAddress) throw new Error("fill delivery Address field");
		}

		const delivery = {
			type: deliveryType,
			delivery:
				deliveryType === "pickup"
					? this.checkoutForm.value.pickupPoint
					: this.checkoutForm.value.deliveryAddress,
		};
		const requestObj = {
			firstName,
			lastName,
			phone,
			total,
			delivery,
		};
		console.log(requestObj);
		this.isLoading = true;
		setTimeout(() => {
			this.isLoading = false;
			this.router.navigate([""]);
		}, 1000);
	}
}
