import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {PaymentMethodPayeerComponent} from './payment.method.payeer';

@NgModule({
    declarations: [
        PaymentMethodPayeerComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        PaymentMethodPayeerComponent
    ]
})
export class PaymentMethodPayeerComponentModule {
}
