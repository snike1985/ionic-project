import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {WalletPage} from './wallet';
import {Ng2FittextModule} from 'ng2-fittext';
import {TransactionDetailsPageModule} from '../transaction-details/transaction.details.module';
import {ReceiveCoinModal} from '../../modals/receive-coin/receive.coin';
import {ReceiveCoinPageModule} from '../receive-coin/receive.coin.module';
import {ReceiveCoinErrorModal} from '../../modals/receive-coin-error/receive.coin.error';
import {BuyCoinsComponentModule} from '../../components/buy-coin/buy.coin.module';
import {DepositModal} from '../../modals/deposit/deposit';
import {DepositModalModule} from '../../modals/deposit/deposit.module';

@NgModule({
    declarations: [
        WalletPage,
        ReceiveCoinModal,
        ReceiveCoinErrorModal
    ],
    imports: [
        IonicPageModule.forChild(WalletPage),
        Ng2FittextModule,
        TransactionDetailsPageModule,
        ReceiveCoinPageModule,
        BuyCoinsComponentModule,
        // DepositModalModule
    ],
    entryComponents: [
        ReceiveCoinModal,
        ReceiveCoinErrorModal
    ]
})
export class WalletPageModule {
}
