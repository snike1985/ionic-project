import {AfterContentChecked, Component} from '@angular/core';
import {ModalController, NavController, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StatusBar} from '@ionic-native/status-bar';

import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';
import {ValidatorService} from '../../shared/services/validator.service';
import {EnterPinModal} from '../enter-pin/enter.pin';
import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-exchange-coins',
    templateUrl: 'exchange.coins.html',
    animations: [SlideIn, VisibilityChanged]
})
export class ExchangeCoinsModal  implements AfterContentChecked {

    public exchangeCoinsForm: FormGroup;
    public isLoad: boolean = false;
    public isSuccess: boolean = false;
    public currencyList: any[] = [
        {
            value: 'BTC',
            amount: 0.0054,
            name: 'Bitcoin Wallet (0.0054 BTC)'
        },
        {
            value: 'ETH',
            amount: 1.0054,
            name: 'Etherium Wallet (1.0054 ETH)'
        },
        {
            value: 'USDT',
            amount: 500,
            name: 'USDT Wallet (500 USD)'
        }
    ];

    constructor(public viewCtrl: ViewController,
                public validatorService: ValidatorService,
                private statusBar: StatusBar,
                private modalCtrl: ModalController,
                private navCtrl: NavController,
                private formBuilder: FormBuilder,
                private statusBarService: StatusBarService) {

        this.onInit();
    }

    public closeModal() {
        this.isSuccess = false;
        this.viewCtrl.dismiss();
    }

    public submitExchangeCoinsForm() {

        if (this.isLoad) {
            return false;
        }

        const pinModal = this.modalCtrl.create(EnterPinModal);

        pinModal.onDidDismiss((pin: boolean) => {

            if (pin) {

                this.isLoad = true;

                setTimeout(
                    () => {
                        this.isSuccess = true;
                    }, 1000
                );
            }
        });

        pinModal.present();
    }

    public ngAfterContentChecked() {

        this.setStatusBar();
    }

    public sellMaxCoins() {
        this.exchangeCoinsForm.controls['payAmount'].setValue(this.maxCoins);
    }

    get maxCoins() {
        const currentWalletName = this.exchangeCoinsForm.controls['payWallet'].value;

        const currentWallet = this.currencyList.find((obj) => {
            return obj.value === currentWalletName;
        });
        return currentWallet.amount;
    }

    private onInit() {

        this.exchangeCoinsForm = this.formBuilder.group({
            payWallet: new FormControl(this.currencyList[0].value),
            receiveWallet: new FormControl(this.currencyList[1].value),
            payAmount: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            receiveAmount: new FormControl(
                '', Validators.compose([
                    Validators.required
                ]))
        });
    }

    private setStatusBar() {

        if (this.isSuccess) {
            this.statusBarService.toDefaultColor();
        } else {
            this.statusBarService.toWhiteColor();
        }
    }
}
