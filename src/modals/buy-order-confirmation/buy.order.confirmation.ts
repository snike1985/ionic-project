import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-buy-order-confirmation',
    templateUrl: 'buy.order.confirmation.html',
})

export class BuyOrderConfirmationModal {

    public receivedParams: any;
    public statusTexts: any = {
        received: 'Received'
    };

    constructor(public viewCtrl: ViewController,
                private statusBarService: StatusBarService,
                private params: NavParams) {
        this.receivedParams = this.params.get('data');
    }

    public closeModal() {
        this.statusBarService.toWhiteColor();
        this.viewCtrl.dismiss();
    }

    get roundedIncome() {
        return Math.round(this.receivedParams.sellAmmount * (1 - this.receivedParams.exchangeFee) / this.receivedParams.rate * 100000) / 100000;
    }
}
