import { uuid } from "./shared/utils";
import { Product } from "./types";

export const headphones: Product[] = [
	{
		id: uuid(),
		title: "Apple BYZ S852I",
		img: "./assets/images/image-1.png",
		price: 2927,
		oldPrice: 3527,
		rate: 4.7,
	},
	{
		id: uuid(),
		title: "Apple EarPods",
		img: "./assets/images/image-2.png",
		price: 2327,
		rate: 4.5,
	},
	{
		id: uuid(),
		title: "Apple EarPods SP",
		img: "./assets/images/image-3.png",
		price: 2327,
		rate: 4.5,
	},
	{
		id: uuid(),
		title: "Apple BYCX R952I",
		img: "./assets/images/image-1.png",
		price: 3337,
		rate: 4.2,
	},
	{
		id: uuid(),
		title: "Apple EarPods RX",
		img: "./assets/images/image-2.png",
		price: 2599,
		rate: 4.8,
	},
	{
		id: uuid(),
		title: "Apple EarPods XZ",
		img: "./assets/images/image-3.png",
		price: 1999,
		rate: 5,
	},
];
export const wirelessHeadphones: Product[] = [
	{
		id: uuid(),
		title: "Apple AirPods",
		img: "./assets/images/image-4.png",
		price: 9527,
		rate: 4.7,
	},
	{
		id: uuid(),
		title: "GERLAX GH-04",
		img: "./assets/images/image-5.png",
		price: 6527,
		rate: 4.7,
	},
	{
		id: uuid(),
		title: "BOROFONE BO4",
		img: "./assets/images/image-6.png",
		price: 7577,
		rate: 4.8,
	},
];
