import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

import {LoginPage} from './login';

import {ResetPasswordModal} from '../../modals/reset-password/reset.password';
import {PasswordComponentModule} from '../../components/password/password.module';

@NgModule({
    declarations: [
        LoginPage,
        ResetPasswordModal
    ],
    imports: [
        PasswordComponentModule,
        InputOnfocusModule,
        IonicPageModule.forChild(LoginPage),
    ],
    entryComponents: [
        ResetPasswordModal
    ],
    providers: []
})
export class LoginPageModule {
}
