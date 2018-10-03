import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

import {BuyPaymentDetailsComponent} from './buy.payment.details';
import {ScrollIconedControlsComponentModule} from '../scroll-iconed-controls/scroll.iconed.controls.module';
import {PaymentMethodCardComponentModule} from '../payment-method-card/payment.method.card.module';
import {PaymentMethodPayeerComponentModule} from '../payment-method-payeer/payment.method.payeer.module';
import {PaymentMethodPmComponentModule} from '../payment-method-pm/payment.method.pm.module';
import {PaymentMethodUsdtComponentModule} from '../payment-method-usdt/payment.method.usdt.module';

@NgModule({
    declarations: [
        BuyPaymentDetailsComponent,
    ],
    imports: [
        InputOnfocusModule,
        CommonModule,
        IonicModule,
        ScrollIconedControlsComponentModule,
        PaymentMethodCardComponentModule,
        PaymentMethodPayeerComponentModule,
        PaymentMethodPmComponentModule,
        PaymentMethodUsdtComponentModule
    ],
    exports: [
        BuyPaymentDetailsComponent
    ]
})
export class BuyPaymentDetailsComponentModule {
}
