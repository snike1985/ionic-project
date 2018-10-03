import {NgModule} from '@angular/core';

import {EnterPinModal} from './enter.pin';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {PicCodeComponentModule} from '../../components/pin-code/pin.code.module';

@NgModule({
    declarations: [
        EnterPinModal
    ],
    imports: [
        CommonModule,
        IonicModule,
        PicCodeComponentModule
    ]
})
export class EnterPinModalModule {
}
