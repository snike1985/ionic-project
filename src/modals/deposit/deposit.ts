import {AfterContentChecked, Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {CreditCardValidator} from 'gc-ngx-credit-cards';

import {DepositDetailsPage} from '../../pages/deposit-details/deposit.details';

import {ValidatorService} from '../../shared/services/validator.service';
import {StatusBarService} from '../../shared/services/top.bar.service';

import {IPaymentMethods} from '../../shared/interfaces/tab.controls.interfaces';

import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';

@Component({
    selector: 'jb-modals-deposit',
    templateUrl: 'deposit.html',
    animations: [SlideIn, VisibilityChanged]
})
export class DepositModal implements AfterContentChecked {

    public depositForm: FormGroup;
    public cardForm: FormGroup;
    public successModel: any = {
        isError: false,
        isSuccess: false
    };
    public currentCurrency: string;
    public activeTab: number = 0;
    public buyCoinTabs: IPaymentMethods[] = [
        {
            title: 'Bank Transfer',
            name: 'bank'
        },
        {
            title: 'Credit /Debit Card',
            name: 'card',
        }
    ];
    public currencyList: any[] = [
        {
            value: 'USD'
        },
        {
            value: 'EUR'
        },
        {
            value: 'GBR'
        },
        {
            value: 'UAH'
        }
    ];

    private curData: any;

    constructor(public viewCtrl: ViewController,
                public navCtrl: NavController,
                public validatorService: ValidatorService,
                private params: NavParams,
                private formBuilder: FormBuilder,
                private statusBarService: StatusBarService) {

        this.onInit();
    }

    public closeModal() {
        this.successModel.isSuccess = false;
        this.setStatusBar();
        this.viewCtrl.dismiss();
    }

    public setActiveState(index: number) {
        this.activeTab = index;
    }

    public toDepositDetails() {

        this.successModel.isError = false;

        if (this.buyCoinTabs[this.activeTab].name === 'card') {

            this.successModel.isSuccess = true;

        } else {

            const data = {
                currency: this.currentCurrency,
                amount: this.depositForm.controls['amount'].value,
                successModel: this.successModel
            };

            this.navCtrl.push(DepositDetailsPage, data);
        }
    }

    public setTotal() {

        const value = parseFloat(this.depositForm.controls['amount'].value);
        const fee = value * 0.005;

        return value + fee;
    }

    public ngAfterContentChecked() {

        this.setStatusBar();
    }

    public checkDisabled() {

        if (this.buyCoinTabs[this.activeTab].name === 'card') {
            return !(this.depositForm.valid && this.cardForm.valid);
        } else {
            return !this.depositForm.valid;
        }
    }

    private onInit() {

        this.curData = this.params.get('wallet');

        this.currentCurrency = this.curData.price.name;

        this.depositForm = this.formBuilder.group({
            amount: new FormControl(
                this.curData.price.count, Validators.compose([
                    Validators.required
                ])),
        });

        this.cardForm = this.formBuilder.group({

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
        });
    }

    private setStatusBar() {

        if (this.successModel.isSuccess) {
            this.statusBarService.toDefaultColor();
        } else {
            this.statusBarService.toWhiteColor();
        }
    }
}
