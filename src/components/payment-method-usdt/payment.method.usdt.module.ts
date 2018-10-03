import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {PaymentMethodUsdtComponent} from './payment.method.usdt';

@NgModule({
    declarations: [
        PaymentMethodUsdtComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        PaymentMethodUsdtComponent
    ]
})
export class PaymentMethodUsdtComponentModule {
}
