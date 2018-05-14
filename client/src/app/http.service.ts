import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	constructor(private _http: HttpClient){}

	getSeattle() {
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=782b609732eb0964371817c1e82e4a36')
	}
	getSanJose() {
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=95122,us&units=imperial&appid=782b609732eb0964371817c1e82e4a36')
	}
	getBurbank() {
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&units=imperial&appid=782b609732eb0964371817c1e82e4a36')
	}
	getDallas() {
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=75202,us&units=imperial&appid=782b609732eb0964371817c1e82e4a36')
	}
	getDC() {
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=22102,us&units=imperial&appid=782b609732eb0964371817c1e82e4a36')
	}
	getChicago() {
		return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=60610,us&units=imperial&appid=782b609732eb0964371817c1e82e4a36')
	}

}
