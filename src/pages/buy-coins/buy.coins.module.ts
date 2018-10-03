import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BuyCoinsPage} from './buy.coins';
import {BuyCoinsComponentModule} from '../../components/buy-coin/buy.coin.module';

@NgModule({
    declarations: [
        BuyCoinsPage,
    ],
    imports: [
        BuyCoinsComponentModule,
        IonicPageModule.forChild(BuyCoinsPage),
    ],
})
export class BuyCoinsPageModule {
}
