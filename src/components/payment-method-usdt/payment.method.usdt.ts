import {Component} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavController} from 'ionic-angular';
import {CreditCardValidator} from 'gc-ngx-credit-cards';
import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';
import {BuyOrderConfirmationModal} from '../../modals/buy-order-confirmation/buy.order.confirmation';
import {EnterPinModal} from '../../modals/enter-pin/enter.pin';

@Component({
    selector: 'jb-payment-method-usdt',
    templateUrl: 'payment.method.usdt.html',
    animations: [SlideIn, VisibilityChanged]
})
export class PaymentMethodUsdtComponent {

    public buyWithUSDtForm: FormGroup;
    public isLoad: boolean = false;
    public exchangeData: any = {
        rate: 6836.98,
        sellAmmount: 100,
        sellBalance: 3028.3,
        sellCurrency: 'USD',
        buyCurrency: 'BTC',
        buyBalance: 0.0054,
        exchangeFee: 0.01
    };
    public isInEdit: boolean = false;

    constructor(private formBuilder: FormBuilder,
                private modalCtrl: ModalController,
                private statusBar: StatusBar,
                private navCtrl: NavController) {
        this.onInit();
    }

    private submitBuyWithUSDt() {

        if (this.isLoad) {
            return false;
        }

        const pinModal = this.modalCtrl.create(EnterPinModal);

        pinModal.onDidDismiss((pin: boolean) => {

            if (pin) {

                this.isLoad = true;

                setTimeout(
                    () => {
                        const data = this.exchangeData;

                        data.status = 'received';
                        data.date = '1537345807';
                        data.number = '#7265755632';

                        const modal = this.modalCtrl.create(BuyOrderConfirmationModal,
                            {data},
                            {leaveAnimation: 'ModalLeaveDirect'}
                        );

                        modal.onDidDismiss(() => {

                            this.navCtrl.pop();
                        });

                        this.statusBar.styleDefault();
                        modal.present();
                    }, 1000
                );
            }
        });

        pinModal.present();
    }

    get roundedIncome() {
        return Math.round(this.exchangeData.sellAmmount * (1 - this.exchangeData.exchangeFee) / this.exchangeData.rate * 100000) / 100000;
    }

    private onInit() {

        this.buyWithUSDtForm = this.formBuilder.group({

            spend: [],
            receive: [],
        });

    }

    private toggleEditAmmount() {
        this.isInEdit = !this.isInEdit;
    }
}
