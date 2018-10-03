import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';
import {UploadDocumentComponentModule} from '../upload-document/upload.document.module';

import {BuyVerifyIdComponent} from './buy.verify.id';

@NgModule({
    declarations: [
        BuyVerifyIdComponent
    ],
    imports: [
        UploadDocumentComponentModule,
        CommonModule,
        IonicModule,
    ],
    exports: [
        BuyVerifyIdComponent
    ]
})
export class BuyVerifyIdComponentModule {
}
