import {Component, ElementRef, Self, ViewChild, ViewContainerRef} from '@angular/core';
import {Content, ModalController} from 'ionic-angular';

import {BuyCoinsModal} from '../../modals/buy-coins/buy.coins';

@Component({
    selector: 'jb-buy-coin',
    templateUrl: 'buy.coin.html'
})
export class BuyCoinComponent {

    public currencies = [
        {
            title: 'usd',
            isActive: true
        },
        {
            title: 'eur',
            isActive: false
        },
        {
            title: 'gbr',
            isActive: false
        }
    ];
    public quickBuy = [
        {
            value: 0.0489,
            name: 'Bitcoins for',
            price: 200,
            currency: 'usd'
        },
        {
            value: 0.0489,
            name: 'Bitcoins for',
            price: 300,
            currency: 'usd'
        },
        {
            value: 0.0489,
            name: 'Bitcoins for',
            price: 500,
            currency: 'usd'
        },
        {
            value: 0.0489,
            name: 'Bitcoins for',
            price: 1000,
            currency: 'usd'
        }
    ];
    public buyCoins = [
        {
            title: 'Buy Bitcoin',
            isActive: true,
        },
        {
            title: 'Buy Litecoin',
            isActive: false,
        },
        {
            title: 'Buy Etherium',
            isActive: false,
        }
    ];

    constructor(public modalCtrl: ModalController,
                private ref: ElementRef) {
    }

    public openBuyModal(ammount: number) {

        const modal = this.modalCtrl.create(BuyCoinsModal, {data: {ammount}});

        modal.present();

        setTimeout(() => {
            this.scrollToTop();
        }, 1000);
    }

    private scrollToTop() {

        const scroller = this.ref.nativeElement.closest('.scroll-content');

        scroller.scrollTo(
            {
                left: 0,
                top: 0
            });
    }
}
