import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {ReferralInviteComponent} from './referral.invite';

@NgModule({
    declarations: [
        ReferralInviteComponent,
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        ReferralInviteComponent
    ]
})
export class ReferralInviteComponentModule {
}
