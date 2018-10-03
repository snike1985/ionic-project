import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavController} from 'ionic-angular';

import {CreditCardValidator} from 'gc-ngx-credit-cards';

import {BuyOrderConfirmationModal} from '../../modals/buy-order-confirmation/buy.order.confirmation';

import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';

import {ValidatorService} from '../../shared/services/validator.service';
import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-payment-method-card',
    templateUrl: 'payment.method.card.html',
    animations: [SlideIn, VisibilityChanged]
})
export class PaymentMethodCardComponent {

    public buyWithCardForm: FormGroup;
    public isLoad: boolean = false;
    public uloadedImageLength: number = 0;
    public selfieData: any = {
        type: 'selfie'
    };
    public exchangeData: any = {
        rate: 6836.98,
        sellAmmount: 100,
        sellCurrency: 'USD',
        buyCurrency: 'BTC',
        exchangeFee: 0.01
    };
    public isInEdit: boolean = false;

    constructor(public validatorService: ValidatorService,
                private formBuilder: FormBuilder,
                private modalCtrl: ModalController,
                private statusBarService: StatusBarService,
                private navCtrl: NavController) {
        this.onInit();
    }

    public setUloadedImageLength(count: number) {
        this.uloadedImageLength = count;
    }

    get roundedIncome() {
        return Math.round(this.exchangeData.sellAmmount * (1 - this.exchangeData.exchangeFee) / this.exchangeData.rate * 100000) / 100000;
    }

    private submitBuyWithCard() {

        if (this.isLoad) {
            return false;
        }

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

                this.statusBarService.toDefaultColor();
                modal.present();
            }, 1000
        );
    }

    private onInit() {

        this.buyWithCardForm = this.formBuilder.group({

            cardNumber: new FormControl(
                '', Validators.compose([
                    Validators.required,
                    CreditCardValidator.validateCardNumber
                ])),
            cardName: ['', Validators.compose([
                Validators.required,
                Validators.minLength(2)
            ])],
            cardExpDate: ['', Validators.compose([
                CreditCardValidator.validateCardExpiry
            ])],
            cardCvv: ['', Validators.compose([
                CreditCardValidator.validateCardCvc
            ])],
            spend: [],
            receive: [],
        });

    }

    private toggleEditAmmount() {
        this.isInEdit = !this.isInEdit;
    }

}
