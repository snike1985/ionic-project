import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';

@Injectable()
export class CheckDeviceService {

    constructor(public platform: Platform) {}

    public isIosDevice() {

        return this.platform.is('ios');
    }
}
