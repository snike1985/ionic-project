import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {WalletPage} from '../../pages/wallet/wallet';

@Component({
    selector: 'jb-modal-receive-coin-error',
    templateUrl: 'receive.coin.error.html',
})
export class ReceiveCoinErrorModal implements OnInit {

    public curType: any;

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                private params: NavParams) {
    }
    public ngOnInit() {
        this.curType = this.params.get('type');

        console.log(this.curType);
    }
    public closeModal() {
        this.viewCtrl.dismiss();
    }
}
