import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
 	selector: 'app-dallas',
 	templateUrl: './dallas.component.html',
 	styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
 	constructor(private _httpService: HttpService){}
 	info: any;

 	ngOnInit() {
 		this.getAPIdata();
	}
	getAPIdata() {
		let observable = this._httpService.getDallas()
		observable.subscribe(data => {
			console.log('Dallas Weather Data!', data)
			this.info = data
		})
	}

}
