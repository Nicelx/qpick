import { Component, Input } from "@angular/core";
import { Product } from "../../../types";
import { CommonModule } from "@angular/common";

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
}
