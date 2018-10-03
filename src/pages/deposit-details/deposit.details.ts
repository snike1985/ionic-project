import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'jb-page-deposit-details',
    templateUrl: 'deposit.details.html',
})
export class DepositDetailsPage {

    public objectKeys = Object.keys;
    public isLoad: boolean = false;
    public successModel: any;
    public curData: any = {
        bankName: {
            title: 'Bank Name',
            value: 'BNP Paribas'
        },
        bankAddress: {
            title: 'Bank Address',
            value: '21, Knyzhyi Zaton str, Kyiv, Ukraine, 02095'
        },
        swiftCode: {
            title: 'Swift Code',
            value: '4789888939472'
        },
        beneficiary: {
            title: 'Beneficiary',
            value: 'Volodymyr Rusnak'
        },
        accountNumber: {
            title: 'Account Number',
            value: '34785830'
        },
        iban: {
            title: 'IBAN',
            value: '743984934234'
        },
        referenceNumber: {
            title: 'Reference Number',
            value: 'VR99453'
        },
        depositAmount: {
            title: 'Deposit amount',
            value: ''
        }
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {

        this.setCurData();
    }

    public toSuccess() {

        this.isLoad = true;

        setTimeout(() => {

            this.successModel.isSuccess = true;
            this.isLoad = false;
            this.navCtrl.pop();

        }, 1000);
    }

    public downloadPdf() {
        console.log('downloadPdf');
    }

    public setCurData() {

        const data = this.navParams.data;

        this.successModel = data.successModel;

        this.curData.depositAmount.value = `${data.amount} ${data.currency}`;
    }
}
