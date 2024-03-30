import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, of, switchMap } from "rxjs";
import { AppStore } from "../../types";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterLink, RouterOutlet, CommonModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	$count: Observable<number>;
	constructor(private store: Store<AppStore>) {
		this.$count = this.store.select("cart").pipe(
			switchMap((val) => {
				return of(val.length);
			})
		);
	}
}
