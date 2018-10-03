import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PasswordComponentModule} from '../../components/password/password.module';
import {PicCodeComponentModule} from '../../components/pin-code/pin.code.module';

import {SettingsPage} from './settings';

import {ChangePasswordModal} from '../../modals/change-password/change.password';
import {ChangePinModal} from '../../modals/change-pin/change.pin';
import {NotificationsComponentModule} from '../../components/notifications/notifications.module';
import {EnableBiometricModal} from '../../modals/enable-biometric/enable.biometric';

@NgModule({
    declarations: [
        SettingsPage,
        ChangePinModal,
        ChangePasswordModal,
        EnableBiometricModal
    ],
    imports: [
        PasswordComponentModule,
        PicCodeComponentModule,
        NotificationsComponentModule,
        IonicPageModule.forChild(SettingsPage),
    ],
    entryComponents: [
        ChangePinModal,
        ChangePasswordModal,
        EnableBiometricModal
    ],
})
export class SettingsPageModule {
}
