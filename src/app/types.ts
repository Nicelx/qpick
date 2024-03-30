export interface Product {
	id: string;
	img: string;
	title: string;
	price: number;
	oldPrice?: number;
	rate: number;
}
export interface CartItem extends Product {
	amount: number;
}
export interface AppStore {
	cart: CartItem[];
}
