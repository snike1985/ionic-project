import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TransactionDetailsPage} from './transaction.details';
import {Ng2FittextModule} from 'ng2-fittext';

@NgModule({
    declarations: [
        TransactionDetailsPage,
    ],
    imports: [
        IonicPageModule.forChild(TransactionDetailsPage),
        Ng2FittextModule
    ],
})
export class TransactionDetailsPageModule {
}
