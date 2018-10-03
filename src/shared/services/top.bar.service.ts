import {Injectable} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {CheckDeviceService} from './check.device.service';

@Injectable()
export class StatusBarService {

    constructor(private statusBar: StatusBar,
                private device: CheckDeviceService) {}

    public toWhiteColor() {

        if (this.device.isIosDevice()) {
            this.statusBar.styleBlackTranslucent();
        }
    }

    public toDefaultColor() {

        if (this.device.isIosDevice()) {
            this.statusBar.styleDefault();
        }
    }
}
