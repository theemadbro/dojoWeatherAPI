import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
 	selector: 'app-sanjose',
 	templateUrl: './sanjose.component.html',
 	styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
 	constructor(private _httpService: HttpService){}
 	info: any;

 	ngOnInit() {
 		this.getAPIdata();
	}
	getAPIdata() {
		let observable = this._httpService.getSanJose()
		observable.subscribe(data => {
			console.log('San Jose Weather Data!', data)
			this.info = data
		})
	}

}
