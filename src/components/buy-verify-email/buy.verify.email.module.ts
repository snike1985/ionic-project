import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

import {BuyVerifyEmailComponent} from './buy.verify.email';

@NgModule({
    declarations: [
        BuyVerifyEmailComponent,
    ],
    imports: [
        InputOnfocusModule,
        CommonModule,
        IonicModule
    ],
    exports: [
        BuyVerifyEmailComponent
    ]
})
export class BuyVerifyEmailComponentModule {
}
