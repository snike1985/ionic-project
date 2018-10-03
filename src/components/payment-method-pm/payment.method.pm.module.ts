import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {PaymentMethodPmComponent} from './payment.method.pm';

@NgModule({
    declarations: [
        PaymentMethodPmComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        PaymentMethodPmComponent
    ]
})
export class PaymentMethodPmComponentModule {
}
