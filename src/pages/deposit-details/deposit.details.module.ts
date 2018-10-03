import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {DepositDetailsPage} from './deposit.details';

@NgModule({
    declarations: [
        DepositDetailsPage,
    ],
    imports: [
        IonicPageModule.forChild(DepositDetailsPage),
    ],
})
export class DepositDetailsPageModule {
}
