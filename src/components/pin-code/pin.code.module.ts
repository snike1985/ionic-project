import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';

import {PinCodeComponent} from './pin.code';

@NgModule({
    declarations: [
        PinCodeComponent,
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        PinCodeComponent
    ]
})
export class PicCodeComponentModule {
}
