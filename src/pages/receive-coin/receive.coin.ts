import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Clipboard} from '@ionic-native/clipboard';

import {ReceiveCoinErrorModal} from '../../modals/receive-coin-error/receive.coin.error';
import {SlideIn} from '../../shared/configs/animations.config';

@IonicPage()
@Component({
    selector: 'jb-page-receive-coin',
    templateUrl: 'receive.coin.html',
    animations: [SlideIn]
})
export class ReceiveCoinPage {

    public curData: any;
    public qrData = '399ybMTmMVPMCB9Hn5FvvoGGcXpmzv3ayB';
    public wasCopied: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                private socialSharing: SocialSharing,
                private clipboard: Clipboard) {

        this.curData = navParams.data.wallet;

        console.log('ReceiveCoinPage', this.curData);
    }

    public shareWalletAddress() {

        const qrCodeSRC = document.querySelector('.qr-code img').getAttribute('src');

        const shareOptions = {
            message: this.qrData,
            subject: `My ${this.curData.walletName} address`,
            files: [qrCodeSRC],
            url: 'http://jubiter.com/',
            chooserTitle: 'Share wallet'
        };

        this.socialSharing.shareWithOptions(shareOptions)
            .then(() => {
                this.navCtrl.pop();
            })
            .catch(() => {
                this.navCtrl.pop();
                const modal = this.modalCtrl.create(ReceiveCoinErrorModal, {type: this.curData.type});
                modal.present();
            });
    }

    public copyToClipboard(text: string) {
        this.clipboard.copy(text)
            .then(() => {
                this.wasCopied = true;
                setTimeout(() => {
                    this.wasCopied = false;
                }, 3000);
            });
    }
}
