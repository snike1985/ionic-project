import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

import {ReceiveCoinPage} from '../../pages/receive-coin/receive.coin';

import {cryptoNamesConfig} from '../../shared/configs/crypto.names';

@Component({
    selector: 'jb-modal-receive-coin',
    templateUrl: 'receive.coin.html',
})
export class ReceiveCoinModal implements OnInit {

    public curData: object;
    public namesConfig = cryptoNamesConfig;

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                private params: NavParams) {
    }

    public closeModal() {
        this.viewCtrl.dismiss();
    }

    public receiveCoin() {
        this.navCtrl.push(ReceiveCoinPage, {wallet: this.curData});
        this.viewCtrl.dismiss();
    }

    public ngOnInit() {
        this.curData = this.params.get('wallet');
    }
}
