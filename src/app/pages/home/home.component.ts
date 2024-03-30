import { Component } from "@angular/core";
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
	headphonesData: Product[] = headphones;
	wirelessData: Product[] = wirelessHeadphones;
	constructor() {}
}
