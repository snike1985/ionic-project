import {Component, ViewChild} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {Content} from 'ionic-angular';

import {StatusBarService} from '../../shared/services/top.bar.service';

interface IBuySteps {
    title: string;
    name: string;
}

@Component({
    selector: 'jb-modals-buy-coins',
    templateUrl: 'buy.coins.html',
})

export class BuyCoinsModal {

    @ViewChild(Content) public content: Content;

    public recievedParams: {
        ammount: number
    };
    public buyCoinSteps: IBuySteps[] = [
        {
            title: 'Email Verification',
            name: 'email'
        },
        {
            title: 'Personal Information',
            name: 'personal'
        },
        {
            title: 'ID Verification',
            name: 'id'
        },
        {
            title: 'Payment Details',
            name: 'payment'
        }
    ];
    public currentStep: number = 0;

    constructor(public viewCtrl: ViewController,
                private statusBarService: StatusBarService,
                private params: NavParams) {

        this.recievedParams = this.params.get('data');
    }

    public closeModal() {
        if (confirm('Are you sure you want to cancel buy flow?')) {
            this.statusBarService.toWhiteColor();
            this.viewCtrl.dismiss();
        }
    }

    public incStep() {
        this.currentStep++;
        this.content.scrollToTop();
    }

}
