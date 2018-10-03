import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VisibilityChanged} from '../../shared/configs/animations.config';
import {IPaymentMethods} from '../../shared/interfaces/tab.controls.interfaces';

@Component({
    selector: 'jb-buy-payment-details',
    templateUrl: 'buy.payment.details.html',
    animations: [VisibilityChanged]
})
export class BuyPaymentDetailsComponent {

    public activeTab: number = 0;

    public buyCoinTabs: IPaymentMethods[] = [
        {
            title: 'Credit /Debit Card',
            name: 'card',
        },
        {
            title: 'Perfect Money',
            name: 'pm'
        },
        {
            title: 'Payeer',
            name: 'payeer'
        },
        {
            title: 'USDt Wallet',
            name: 'usdt',
            subtitle: '3,028 USD'
        }
    ];

    @Input() public items: any[];
    @Input() public activeStep: number;

    @Output() public goNext = new EventEmitter();

    public goToNextStep() {
        this.goNext.emit();
    }

    public setActiveState(index: number) {
        this.activeTab = index;
    }
}
