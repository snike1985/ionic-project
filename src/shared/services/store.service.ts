import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StoreService {

    public locationData: any;
    public biometricAuthData: any;

    constructor(public http: HttpClient) {

        this.locationData = {
            countryName: '',
            curLocation: '',
            countryCode: ''
        };

        this.biometricAuthData = {
            isActive: false,
            isFaceId: null
        };
    }

    // public getProducts() {
    //     return this.http.get<IProduct[]>(
    //         `/api/orders/stations/${this.sessionService.stationId}/store/products`
    //     );
    // }

    // BIOMETRIC AUTH DATA
    get getBiometricAuthData() {
        return this.biometricAuthData;
    }
    set setBiometricAuthData(data: any) {
        this.biometricAuthData = data;
    }

    // LOCATION DATA
    get getLocationData() {
        return this.locationData;
    }
    set setLocationData(data: any) {
        this.locationData = data;
    }
}
