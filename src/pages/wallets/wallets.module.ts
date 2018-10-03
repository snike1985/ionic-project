import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {WalletsPage} from './wallets';
import {WalletsActionSheetComponent} from '../../modals/wallets-action-sheet/wallets.action.sheet';
import {Ng2FittextModule} from 'ng2-fittext';
import {WalletPageModule} from '../wallet/wallet.module';

@NgModule({
    declarations: [
        WalletsPage,
        WalletsActionSheetComponent,
    ],
    imports: [
        IonicPageModule.forChild(WalletsPage),
        Ng2FittextModule,
        WalletPageModule
    ],
    entryComponents: [
        WalletsActionSheetComponent
    ]
})
export class WalletsPageModule {
}
