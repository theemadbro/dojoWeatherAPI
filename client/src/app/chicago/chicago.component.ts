import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
 	selector: 'app-chicago',
 	templateUrl: './chicago.component.html',
 	styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
 	constructor(private _httpService: HttpService){}
 	info: any;

 	ngOnInit() {
 		this.getAPIdata();
	}
	getAPIdata() {
		let observable = this._httpService.getChicago()
		observable.subscribe(data => {
			console.log('Chicago Weather Data!', data)
			this.info = data
		})
	}

}