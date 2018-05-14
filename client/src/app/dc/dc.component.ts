import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
 	selector: 'app-dc',
 	templateUrl: './dc.component.html',
 	styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
 	constructor(private _httpService: HttpService){}
 	info: any;

 	ngOnInit() {
 		this.getAPIdata();
	}
	getAPIdata() {
		let observable = this._httpService.getDC()
		observable.subscribe(data => {
			console.log('DC Weather Data!', data)
			this.info = data
		})
	}

}
