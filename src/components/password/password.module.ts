import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

import {PasswordComponent} from './password';

@NgModule({
    declarations: [
        PasswordComponent,
    ],
    imports: [
        InputOnfocusModule,
        CommonModule,
        IonicModule
    ],
    exports: [
        PasswordComponent
    ]
})
export class PasswordComponentModule {
}
