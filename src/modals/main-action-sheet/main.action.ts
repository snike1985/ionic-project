import {Component, Renderer2} from '@angular/core';
import {ModalController, NavController, ViewController} from 'ionic-angular';

import {BuyCoinsPage} from '../../pages/buy-coins/buy.coins';
import {ExchangeCoinsModal} from '../exchange-coins/exchange.coins';

@Component({
    selector: 'jb-modals-main-action',
    templateUrl: 'main.action.html'
})
export class MainActionSheet {
    public buyCoinsPage: any = BuyCoinsPage;
    public exchangeCoinsModal: any = ExchangeCoinsModal;

    constructor(public viewCtrl: ViewController,
                public navCtrl: NavController,
                private modalCtrl: ModalController,
                public renderer: Renderer2) {

        this.renderer.addClass(viewCtrl.pageRef().nativeElement, 'main-action-modal');
    }

    public stopPropagationEvent(event: any) {
        event.stopPropagation();
    }

    public closeModal() {
        this.viewCtrl.dismiss();
    }

    public openModal(modalComponent: any) {
        const modal = this.modalCtrl.create(modalComponent,
        );
        modal.present();
    }

}
