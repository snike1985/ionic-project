import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {PicCodeComponentModule} from '../../components/pin-code/pin.code.module';
import {ExchangeCoinsModal} from './exchange.coins';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

@NgModule({
    declarations: [
        ExchangeCoinsModal
    ],
    imports: [
        CommonModule,
        IonicModule,
        InputOnfocusModule,
        PicCodeComponentModule
    ],
    exports: [
        ExchangeCoinsModal
    ]
})
export class ExchangeCoinsModule {
}
