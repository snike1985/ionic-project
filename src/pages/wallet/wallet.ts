import {Component, ViewChild, HostListener} from '@angular/core';
import {ActionSheetController, Content, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {TransactionDetailsPage} from '../transaction-details/transaction.details';
import {ReceiveCoinModal} from '../../modals/receive-coin/receive.coin';
import {DepositModal} from '../../modals/deposit/deposit';
import {BuyCoinsPage} from '../buy-coins/buy.coins';
import {ReceiveCoinPage} from '../receive-coin/receive.coin';
import {ExchangeCoinsModal} from '../../modals/exchange-coins/exchange.coins';

@IonicPage()
@Component({
    selector: 'jb-page-wallet',
    templateUrl: 'wallet.html',
})
export class WalletPage {
    public fixedFilterTop: number;
    public contentFilterFixed = false;
    public buyCoinsPage: any = BuyCoinsPage;
    public exchangeCoinsModal: any = ExchangeCoinsModal;
    public transactionsFilter = {
        period: 'All',
        operation: 'All'
    };
    public wallet: any = {};
    public transactions = [
        {
            date: 1508803200,
            operations: [
                {
                    name: 'Exchange',
                    value: 0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'LTC',
                        info: '0.0567 Bitcoins to'
                    },
                    icon: 'exchange',
                    status: 'completed',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508803200
                        },
                        {
                            title: 'Exchange rate',
                            value: '1.0000 BTC/ 345.0045 LTC'
                        },
                        {
                            title: 'Commission',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total payed',
                            value: '0.0588 BTC'
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        }
                    ]
                },
                {
                    name: 'Send Bitcoin',
                    value: 0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'BTC'
                    },
                    icon: 'send',
                    status: 'pending',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508803200
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        },
                        {
                            title: 'Send',
                            value: '0.0567 BTC (367.07 USD)'
                        },
                        {
                            title: 'To',
                            value: 'LXEtHZnPC6xDs1MdYedDo1RxMAPLG4uKDS'
                        },
                        {
                            title: 'Network fees:',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total paid:',
                            value: '0.0568 BTC (369.57 USD)'
                        }
                    ]
                },
                {
                    name: 'Buy Bitcoins',
                    value: -0.00008557,
                    valueInfo: {
                        value: 100,
                        currency: 'USD',
                        info: '0.0162 Bitcoins for',
                    },
                    icon: 'buy',
                    status: 'completed',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508803200
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        },
                        {
                            title: 'Processing fee',
                            value: '6,836.98 USD'
                        },
                        {
                            title: 'Commission',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total spend',
                            value: '100.00 USD'
                        },
                        {
                            title: 'Total receive',
                            value: '0.01628907 BTC'
                        }
                    ]
                },
                {
                    name: 'Receive Bitcoin',
                    value: -0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'BTC'
                    },
                    icon: 'buy',
                    status: 'pending',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508803200
                        },
                        {
                            title: 'Transaction ID',
                            value: 'From:'
                        },
                        {
                            title: 'From',
                            value: 'product@bitrates.com'
                        }
                    ]
                }
            ]
        },
        {
            date: 1508716800,
            operations: [
                {
                    name: 'Exchange',
                    value: 0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'LTC',
                        info: '0.0567 Bitcoins to'
                    },
                    icon: 'exchange',
                    status: 'completed',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508716800
                        },
                        {
                            title: 'Exchange rate',
                            value: '1.0000 BTC/ 345.0045 LTC'
                        },
                        {
                            title: 'Commission',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total payed',
                            value: '0.0588 BTC'
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        }
                    ]
                },
                {
                    name: 'Send Bitcoin',
                    value: 0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'BTC'
                    },
                    icon: 'send',
                    status: 'pending',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508716800
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        },
                        {
                            title: 'Send',
                            value: '0.0567 BTC (367.07 USD)'
                        },
                        {
                            title: 'To',
                            value: 'LXEtHZnPC6xDs1MdYedDo1RxMAPLG4uKDS'
                        },
                        {
                            title: 'Network fees:',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total paid:',
                            value: '0.0568 BTC (369.57 USD)'
                        }
                    ]
                },
                {
                    name: 'Buy Bitcoins',
                    value: -0.00008557,
                    valueInfo: {
                        value: 100,
                        currency: 'USD',
                        info: '0.0162 Bitcoins for',
                    },
                    icon: 'buy',
                    status: 'completed',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508716800
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        },
                        {
                            title: 'Processing fee',
                            value: '6,836.98 USD'
                        },
                        {
                            title: 'Commission',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total spend',
                            value: '100.00 USD'
                        },
                        {
                            title: 'Total receive',
                            value: '0.01628907 BTC'
                        }
                    ]
                },
                {
                    name: 'Receive Bitcoin',
                    value: -0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'BTC'
                    },
                    icon: 'buy',
                    status: 'pending',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508716800
                        },
                        {
                            title: 'Transaction ID',
                            value: 'From:'
                        },
                        {
                            title: 'From',
                            value: 'product@bitrates.com'
                        }
                    ]
                }
            ]
        },
        {
            date: 1508630400,
            operations: [
                {
                    name: 'Exchange',
                    value: 0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'LTC',
                        info: '0.0567 Bitcoins to'
                    },
                    icon: 'exchange',
                    status: 'completed',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508630400
                        },
                        {
                            title: 'Exchange rate',
                            value: '1.0000 BTC/ 345.0045 LTC'
                        },
                        {
                            title: 'Commission',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total payed',
                            value: '0.0588 BTC'
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        }
                    ]
                },
                {
                    name: 'Send Bitcoin',
                    value: 0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'BTC'
                    },
                    icon: 'send',
                    status: 'pending',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508630400
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        },
                        {
                            title: 'Send',
                            value: '0.0567 BTC (367.07 USD)'
                        },
                        {
                            title: 'To',
                            value: 'LXEtHZnPC6xDs1MdYedDo1RxMAPLG4uKDS'
                        },
                        {
                            title: 'Network fees:',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total paid:',
                            value: '0.0568 BTC (369.57 USD)'
                        }
                    ]
                },
                {
                    name: 'Buy Bitcoins',
                    value: -0.00008557,
                    valueInfo: {
                        value: 100,
                        currency: 'USD',
                        info: '0.0162 Bitcoins for',
                    },
                    icon: 'buy',
                    status: 'completed',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508630400
                        },
                        {
                            title: 'Transaction ID',
                            value: '44895202'
                        },
                        {
                            title: 'Processing fee',
                            value: '6,836.98 USD'
                        },
                        {
                            title: 'Commission',
                            value: '2.50 USD'
                        },
                        {
                            title: 'Total spend',
                            value: '100.00 USD'
                        },
                        {
                            title: 'Total receive',
                            value: '0.01628907 BTC'
                        }
                    ]
                },
                {
                    name: 'Receive Bitcoin',
                    value: -0.00008557,
                    valueInfo: {
                        value: 0.0567,
                        currency: 'BTC'
                    },
                    icon: 'buy',
                    status: 'pending',
                    listInfo: [
                        {
                            title: 'Date',
                            value: 1508630400
                        },
                        {
                            title: 'Transaction ID',
                            value: 'From:'
                        },
                        {
                            title: 'From',
                            value: 'product@bitrates.com'
                        }
                    ]
                }
            ]
        }
    ];
    public tabs = [
        {
            name: 'wallet',
            isActive: true
        },
        {
            name: 'transactions',
            isActive: false
        }
    ];
    public walletTab: string = 'wallet';

    @ViewChild(Content) private content: Content;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                public modalCtrl: ModalController) {
        this.wallet = navParams.data;

        console.log(navParams.data);
    }

    public toggleTab(activeTab: any) {

        this.tabs.forEach((element) => {
            element.isActive = false;
        });
        activeTab.isActive = true;
        this.walletTab = activeTab.name;

        if (this.walletTab !== 'transactions') {
            this.contentFilterFixed = false;
        }
    }

    public showTransactionDetails(transaction: any) {
        this.navCtrl.push(TransactionDetailsPage, transaction);
    }

    public toReciveCoin() {

        console.log('toReciveCoin.toReciveCoin', this.wallet);

        if (this.wallet.walletType === 'crypto') {

            const modal = this.modalCtrl.create(ReceiveCoinModal, {wallet: this.wallet});

            modal.present();

        } else {

            this.navCtrl.push(ReceiveCoinPage, {wallet: this.wallet});
        }
    }

    public changePeriod() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Transactions Period',
            buttons: [
                {
                    text: 'All',
                    handler: () => {
                        this.transactionsFilter.period = 'All';
                    }
                },
                {
                    text: 'Last Week',
                    handler: () => {
                        this.transactionsFilter.period = 'Last Week';
                    }
                },
                {
                    text: 'Last Month',
                    handler: () => {
                        this.transactionsFilter.period = 'Last Month';
                    }
                },
                {
                    text: 'Last Year',
                    handler: () => {
                        this.transactionsFilter.period = 'Last Year';
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

    public changeOperation() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Transactions Operation',
            buttons: [
                {
                    text: 'All',
                    handler: () => {
                        this.transactionsFilter.operation = 'All';
                        this.filterData('All');
                    }
                },
                {
                    text: 'Exchange',
                    handler: () => {
                        this.transactionsFilter.operation = 'Exchange';
                        this.filterData('Exchange');
                    }
                },
                {
                    text: 'Send',
                    handler: () => {
                        this.transactionsFilter.operation = 'Send';
                        this.filterData('Send');
                    }
                },
                {
                    text: 'Receive',
                    handler: () => {
                        this.transactionsFilter.operation = 'Receive';
                        this.filterData('Receive');
                    }
                },
                {
                    text: 'Sell',
                    handler: () => {
                        this.transactionsFilter.operation = 'Sell';
                        this.filterData('Sell');
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

    public filterData(param: string) {
        console.log('filterData', param);
    }

    public onScroll() {
        if (this.walletTab === 'transactions') {
            this.fixedFilterTop = this.content.contentTop;
            if (this.content.scrollTop >= this.fixedFilterTop && !this.contentFilterFixed) {
                this.contentFilterFixed = true;
            }
            if (this.content.scrollTop < this.fixedFilterTop && this.contentFilterFixed) {
                this.contentFilterFixed = false;
            }
        }
    }

    public openDepositModal() {

        const modal = this.modalCtrl.create(DepositModal, {wallet: this.wallet});

        modal.present();
    }

    public openModal(modalComponent: any) {
        const modal = this.modalCtrl.create(modalComponent,
        );
        modal.present();
    }

    @HostListener('window:resize', ['$event'])
    private onResize() {
        if (this.walletTab === 'transactions') {
            this.content.resize();
            setTimeout(() => {
                this.fixedFilterTop = this.content.contentTop;
            }, 100);
        }
    }

    private setActiveTab() {
        this.walletTab = this.tabs[0].name;

        this.tabs.forEach((element) => {
             if (element.isActive) {
                 this.walletTab = element.name;
             }
        });
    }

    private ionViewDidLoad() {
        this.setActiveTab();
    }
}
