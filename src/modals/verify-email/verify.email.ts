import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import {VisibilityChanged} from '../../shared/configs/animations.config';

import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-verify-email',
    templateUrl: 'verify.email.html',
    animations: [VisibilityChanged]
})
export class VerifyEmailModal {

    public curData: any;
    public isLoad: boolean;
    public isSend: boolean;

    constructor(public viewCtrl: ViewController,
                private params: NavParams,
                private statusBarService: StatusBarService) {

        this.curData = this.params.get('data');
        this.isLoad = false;
        this.isSend = false;
    }

    public closeModal() {
        this.statusBarService.toWhiteColor();
        this.viewCtrl.dismiss();
    }

    public getLink() {
        this.isLoad = true;

        setTimeout(() => {

            this.isLoad = false;
            this.isSend = true;
            this.curData.isVerified = true;

            this.checkSend();

        }, 1000);
    }

    public nextStep() {
        this.statusBarService.toWhiteColor();
        this.viewCtrl.dismiss({ nextStep: 'personalInfo'});
    }

    private checkSend() {

        if (this.isSend) {
            this.statusBarService.toDefaultColor();
        }
    }
}
