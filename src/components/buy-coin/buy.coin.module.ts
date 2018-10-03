import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {ScrollControlsComponentModule} from '../scroll-controls/scroll.controls.module';
import {ScrollStepsComponentModule} from '../scroll-steps/scroll.steps.module';
import {BuyVerifyEmailComponentModule} from '../buy-verify-email/buy.verify.email.module';
import {BuyPaymentDetailsComponentModule} from '../buy-payment-details/buy.payment.details.module';
import {InnerHtmlModule} from '../../shared/directives/inner.html.module';
import {BuyPersonalInfoComponentModule} from '../buy-personal-info/buy.personal.info.module';
import {SearchBarPageModule} from '../../pages/search-bar/search-bar.module';
import {BuyVerifyIdComponentModule} from '../buy-verify-id/buy.verify.id.module';

import {BuyCoinComponent} from './buy.coin';
import {BuyCoinsModal} from '../../modals/buy-coins/buy.coins';
import {BuyOrderConfirmationModal} from '../../modals/buy-order-confirmation/buy.order.confirmation';
import {EnterPinModalModule} from '../../modals/enter-pin/enter.pin.module';
import {EnterPinModal} from '../../modals/enter-pin/enter.pin';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

@NgModule({
    declarations: [
        BuyCoinComponent,
        BuyCoinsModal,
        BuyOrderConfirmationModal
    ],
    imports: [
        InnerHtmlModule,
        CommonModule,
        IonicModule,
        InputOnfocusModule,
        ScrollControlsComponentModule,
        ScrollStepsComponentModule,
        BuyPersonalInfoComponentModule,
        BuyVerifyEmailComponentModule,
        BuyVerifyIdComponentModule,
        BuyPaymentDetailsComponentModule,
        EnterPinModalModule,
        SearchBarPageModule
    ],
    exports: [
        BuyCoinComponent
    ],
    entryComponents: [
        BuyCoinsModal,
        EnterPinModal,
        BuyOrderConfirmationModal
    ]
})
export class BuyCoinsComponentModule {
}
