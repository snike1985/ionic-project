import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

import {VisibilityChanged} from '../../shared/configs/animations.config';

@Component({
    selector: 'jb-modals-verify-id',
    templateUrl: 'verify.id.html',
    animations: [VisibilityChanged]
})
export class VerifyIdModal implements OnInit {
    public curData: any;

    constructor(public viewCtrl: ViewController,
                private navCtrl: NavController,
                private params: NavParams) {
    }

    public closeModal() {
        this.viewCtrl.dismiss();
    }

    public ngOnInit() {

        this.curData = this.params.get('data');
    }

    public nextStep() {

        this.curData.isPending = false;
        this.viewCtrl.dismiss({ nextStep: 'phone'});
    }
}
