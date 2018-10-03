import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {WalletsActionSheetComponent} from '../../modals/wallets-action-sheet/wallets.action.sheet';
import {WalletPage} from '../wallet/wallet';
import {ReceiveCoinModal} from '../../modals/receive-coin/receive.coin';
import {ReceiveCoinPage} from '../receive-coin/receive.coin';

@IonicPage()
@Component({
    selector: 'jb-page-wallet',
    templateUrl: 'wallets.html',
})
export class WalletsPage {
    public actionSheetModal: any;
    public prices = [
        {
            priceName: 'Bitcoin',
            currentPrice: {
                usd: 7338.31,
                eur: 6845.31,
                gbr: 7739.31
            },
            lastChangePercent: 17.13,
            isActive: true,
        },
        {
            priceName: 'Litecoin',
            currentPrice: {
                usd: 78.31,
                eur: 73.31,
                gbr: 75.31
            },
            lastChangePercent: 13.02,
            isActive: false,
        },
        {
            priceName: 'Etherium',
            currentPrice: {
                usd: 338.31,
                eur: 299.31,
                gbr: 371.31
            },
            lastChangePercent: -3.87,
            isActive: false,
        }
    ];
    public wallets = [
        {
            walletName: 'Bitcoin Wallet',
            walletType: 'crypto',
            currency: 'BTC',
            type: 'BTC',
            price: {
                count: 0.0054,
                name: 'BTC'
            },
            subPrice: {
                count: 359.04,
                name: 'USD'
            }
        },
        {
            walletName: 'Litecoin Wallet',
            walletType: 'crypto',
            currency: 'LTC',
            type: 'LTC',
            price: {
                count: 3.5472,
                name: 'LTC'
            },
            subPrice: {
                count: 1359.04,
                name: 'USD'
            },
            lastChangePercent: - 0.0162
        },
        {
            walletName: 'USDT Wallet',
            walletType: 'fiat',
            currency: 'USD',
            type: 'USDT',
            price: {
                count: 143032250.4,
                name: 'USD'
            },
            subPrice: {
                count: 359.04,
                name: 'BTC'
            }
        },
        {
            walletName: 'UAHT Wallet',
            walletType: 'fiat',
            currency: 'UAH',
            type: 'UAHT',
            price: {
                count: 250.40,
                name: 'UAH'
            },
            subPrice: {
                count: 0.000000009,
                name: 'BTC'
            }
        }
    ];
    public currentCurrency = 'usd';
    private scrollContent: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public actionSheetCtrl: ActionSheetController,
                public modalCtrl: ModalController) {
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

    public closeActionSheet() {

        if (this.actionSheetModal) {
            this.closeModal();
        }
    }

    public toggleActionSheet() {

        if (this.actionSheetModal) {
            this.closeModal();
        } else {

            this.actionSheetModal = this.modalCtrl.create(WalletsActionSheetComponent);

            this.toggleScroll();

            this.actionSheetModal.onDidDismiss(() => {
                this.actionSheetModal = false;
                this.toggleScroll();
            });

            this.actionSheetModal.present();
        }
    }

    public clickItem(event: any, wallet: object) {
        const target = event.target;

        if (target.classList.contains('wallet-card__more')) {
            this.toggleActionSheet();
        } else {
            this.navCtrl.push(WalletPage, wallet);
        }
    }

    public shareWallet(event: any, curWallet: any) {

        event.stopPropagation();

        if (curWallet.walletType === 'crypto') {

            const modal = this.modalCtrl.create(ReceiveCoinModal, {wallet: curWallet});

            modal.present();

        } else {

            this.navCtrl.push(ReceiveCoinPage, {wallet: curWallet});
        }
    }

    private closeModal() {
        this.actionSheetModal.dismiss();
        this.actionSheetModal = false;
    }

    private changeCurrentCurrency(currentCurency: string) {
        this.currentCurrency = currentCurency;
    }

    private toggleScroll() {

        this.scrollContent = document.querySelectorAll('.scroll-content');

        this.scrollContent.forEach((item: any) => {

            const classes = item.classList;

            if (classes.contains('no-scroll')) {

                classes.remove('no-scroll');

            } else {

                classes.add('no-scroll');
            }
        });
    }

}
