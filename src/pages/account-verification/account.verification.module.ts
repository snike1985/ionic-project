import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AccountVerificationPage} from './account.verification';
import {VerifyEmailModal} from '../../modals/verify-email/verify.email';
import {VerifyIdModal} from '../../modals/verify-id/verify.id';
import {VerifyPhoneModal} from '../../modals/verify-phone/verify.phone';
import {PersonalInfoModal} from '../../modals/personal-info/personal.info';
import {PersonalInfoModalModule} from '../../modals/personal-info/personal.info.module';
import {TelMaskModule} from '../../shared/directives/tel.mask.module';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';
import {SafePipeModule} from '../../shared/pipes/safe.module';
import {VerifyAddressModal} from '../../modals/verify-address/verify.address';
import {EnterCodePageModule} from '../enter-code/enter.code.module';
import {UploadDocumentComponentModule} from '../../components/upload-document/upload.document.module';

@NgModule({
    declarations: [
        AccountVerificationPage,
        VerifyEmailModal,
        VerifyIdModal,
        VerifyPhoneModal,
        VerifyAddressModal
    ],
    imports: [
        TelMaskModule,
        InputOnfocusModule,
        SafePipeModule,
        PersonalInfoModalModule,
        UploadDocumentComponentModule,
        EnterCodePageModule,
        IonicPageModule.forChild(AccountVerificationPage),
    ],
    entryComponents: [
        VerifyEmailModal,
        VerifyIdModal,
        VerifyPhoneModal,
        PersonalInfoModal,
        VerifyAddressModal
    ]
})
export class AccountVerificationPageModule {
}
