import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'jb-page-dashboard',
    templateUrl: 'dashboard.html',
})
export class DashboardPage {
    public chartPeriods = [
        {
            title: '1 hour',
            isActive: true
        },
        {
            title: '1 day',
            isActive: false
        },
        {
            title: '1 week',
            isActive: false
        },
        {
            title: '1 month',
            isActive: false
        },
        {
            title: '1 year',
            isActive: false
        }
    ];
    public prices = [
        {
            title: 'Bitcoin price',
            currentPrice: {
                usd: 7338.31,
                eur: 6845.31,
                gbr: 7739.31
            },
            lastChangePercent: 17.13,
            isActive: true,
        },
        {
            title: 'Litecoin price',
            currentPrice: {
                usd: 78.31,
                eur: 73.31,
                gbr: 75.31
            },
            lastChangePercent: 13.02,
            isActive: false,
        },
        {
            title: 'Etherium price',
            currentPrice: {
                usd: 338.31,
                eur: 299.31,
                gbr: 371.31
            },
            lastChangePercent: -3.87,
            isActive: false,
        }
    ];
    public currentCurrency = 'usd';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController) {

    }

    public setPeriod(period: any) {
        this.chartPeriods.forEach((element) => {
            element.isActive = false;
        });

        period.isActive = true;
    }

    public calculateLastChangeValue(percent: number, price: number) {
        const result = Math.round((price - price * 100 / (100 + percent)) * 100) / 100;
        return result;
    }

    public presentActionSheet() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Price Currency',
            buttons: [
                {
                    text: 'USD',
                    handler: () => {
                        this.changeCurrentCurrency('usd');
                    }
                },
                {
                    text: 'EUR',
                    handler: () => {
                        this.changeCurrentCurrency('eur');
                    }
                },
                {
                    text: 'GBR',
                    handler: () => {
                        this.changeCurrentCurrency('gbr');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

    private changeCurrentCurrency(currentCurency: string) {
        this.currentCurrency = currentCurency;
    }
}
