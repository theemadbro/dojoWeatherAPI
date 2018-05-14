import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	constructor(
	private _route: ActivatedRoute,
	private _router: Router
	) {}

	title = 'Dojo Weather Forecast';

	ngOnInit() {
		this._route.params.subscribe();
	}
	goHome() {
		this._router.navigate(['/home']);
	}
}
