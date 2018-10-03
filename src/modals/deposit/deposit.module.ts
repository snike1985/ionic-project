import {NgModule} from '@angular/core';
import {ScrollIconedControlsComponentModule} from '../../components/scroll-iconed-controls/scroll.iconed.controls.module';

import {IonicPageModule} from 'ionic-angular';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';
import {DepositDetailsPageModule} from '../../pages/deposit-details/deposit.details.module';
import {NgXCreditCardsModule} from 'gc-ngx-credit-cards';

import {DepositModal} from './deposit';
import {DecimalPipe} from '@angular/common';

@NgModule({
    declarations: [
        DepositModal
    ],
    imports: [
        InputOnfocusModule,
        ScrollIconedControlsComponentModule,
        DepositDetailsPageModule,
        NgXCreditCardsModule,
        IonicPageModule.forChild(DepositModal),
    ],
    providers: [
        DecimalPipe
    ]
})
export class DepositModalModule {
}
