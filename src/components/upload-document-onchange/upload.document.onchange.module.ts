import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import {SafePipeModule} from '../../shared/pipes/safe.module';

import {UploadDocumentComponentOnchange} from './upload.document.onchange';

@NgModule({
    declarations: [
        UploadDocumentComponentOnchange
    ],
    imports: [
        CommonModule,
        SafePipeModule,
        IonicModule,
    ],
    exports: [
        UploadDocumentComponentOnchange
    ]
})
export class UploadDocumentComponentOnchangeModule {
}
