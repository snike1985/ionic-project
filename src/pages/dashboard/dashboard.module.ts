import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {DashboardPage} from './dashboard';
import {InnerHtmlModule} from '../../shared/directives/inner.html.module';
import {BuyCoinsComponentModule} from '../../components/buy-coin/buy.coin.module';
import {ScrollControlsComponentModule} from '../../components/scroll-controls/scroll.controls.module';

@NgModule({
    declarations: [
        DashboardPage,
    ],
    imports: [
        InnerHtmlModule,
        IonicPageModule.forChild(DashboardPage),
        BuyCoinsComponentModule,
        ScrollControlsComponentModule
    ],
})
export class DashboardPageModule {
}
