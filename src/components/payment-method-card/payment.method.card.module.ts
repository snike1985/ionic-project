import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';
import {NgXCreditCardsModule} from 'gc-ngx-credit-cards';

import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';
import {PaymentMethodCardComponent} from './payment.method.card';
import {UploadDocumentComponentOnchangeModule} from '../upload-document-onchange/upload.document.onchange.module';
import {EnterPinModalModule} from '../../modals/enter-pin/enter.pin.module';

@NgModule({
    declarations: [
        PaymentMethodCardComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        NgXCreditCardsModule,
        InputOnfocusModule,
        UploadDocumentComponentOnchangeModule
    ],
    exports: [
        PaymentMethodCardComponent
    ]
})
export class PaymentMethodCardComponentModule {
}
