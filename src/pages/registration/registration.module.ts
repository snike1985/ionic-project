import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';

import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';
import {PasswordComponentModule} from '../../components/password/password.module';
import {PicCodeComponentModule} from '../../components/pin-code/pin.code.module';

import {BiometricAuthModal} from '../../modals/biometric-auth/biometric.auth';
import {RegistrationPage} from './registration';

@NgModule({
    declarations: [
        RegistrationPage,
        BiometricAuthModal
    ],
    imports: [
        PasswordComponentModule,
        PicCodeComponentModule,
        InputOnfocusModule,
        IonicPageModule.forChild(RegistrationPage),
    ],
    entryComponents: [BiometricAuthModal],
    providers: []
})
export class RegistrationPageModule {
}
