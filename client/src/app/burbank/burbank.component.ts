import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
 	selector: 'app-burbank',
 	templateUrl: './burbank.component.html',
 	styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
 	constructor(private _httpService: HttpService){}
 	info: any;

 	ngOnInit() {
 		this.getAPIdata();
	}
	getAPIdata() {
		let observable = this._httpService.getBurbank()
		observable.subscribe(data => {
			console.log('Burbank Weather Data!', data)
			this.info = data
		})
	}

}
