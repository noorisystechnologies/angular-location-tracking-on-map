import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GeolocationService {

	constructor() { }
	getPosition(): Promise<any> {
		return new Promise((resolve, reject) => {

			navigator.geolocation.getCurrentPosition(resp => {

				resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
			},
				err => {
					reject(err);
				});
		});

	}
}
