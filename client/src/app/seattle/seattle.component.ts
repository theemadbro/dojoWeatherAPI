import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
 	selector: 'app-seattle',
 	templateUrl: './seattle.component.html',
 	styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
 	constructor(private _httpService: HttpService){}
 	info: any;

 	ngOnInit() {
 		this.getAPIdata();
	}
	getAPIdata() {
		let observable = this._httpService.getSeattle()
		observable.subscribe(data => {
			console.log('Seattle Weather Data!', data)
			this.info = data
		})
	}

}
