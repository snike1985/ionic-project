import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

import {BuyPersonalInfoComponent} from './buy.personal.info';
import {TelMaskModule} from '../../shared/directives/tel.mask.module';

@NgModule({
    declarations: [
        BuyPersonalInfoComponent
    ],
    imports: [
        TelMaskModule,
        InputOnfocusModule,
        CommonModule,
        IonicModule
    ],
    exports: [
        BuyPersonalInfoComponent
    ]
})
export class BuyPersonalInfoComponentModule {
}
