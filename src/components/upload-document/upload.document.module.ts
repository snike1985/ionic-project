import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import {SafePipeModule} from '../../shared/pipes/safe.module';

import {UploadDocumentComponent} from './upload.document';

@NgModule({
    declarations: [
        UploadDocumentComponent
    ],
    imports: [
        CommonModule,
        SafePipeModule,
        IonicModule,
        IonicPageModule.forChild(UploadDocumentComponent),
    ],
    exports: [
        UploadDocumentComponent
    ]
})
export class UploadDocumentComponentModule {
}
