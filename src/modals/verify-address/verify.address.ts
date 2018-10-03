import {AfterContentChecked, Component, OnDestroy} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import {VisibilityChanged} from '../../shared/configs/animations.config';

import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-verify-address',
    templateUrl: 'verify.address.html',
    animations: [VisibilityChanged]
})
export class VerifyAddressModal implements AfterContentChecked, OnDestroy {

    public curData: any;
    public address: string;

    constructor(public viewCtrl: ViewController,
                private params: NavParams,
                private statusBarService: StatusBarService) {

        this.curData = this.params.get('data');
        this.address = this.params.get('address');
    }

    public closeModal() {
        this.viewCtrl.dismiss();
    }

    public ngAfterContentChecked() {

        this.checkPending();
    }

    public ngOnDestroy() {
        this.statusBarService.toWhiteColor();
    }

    private checkPending() {

        if (this.curData.isPending) {
            this.statusBarService.toDefaultColor();
        }
    }
}
