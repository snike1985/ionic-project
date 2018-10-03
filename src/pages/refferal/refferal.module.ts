import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RefferalPage} from './refferal';
import {ReferralInviteComponentModule} from '../../components/referral-invite/referral.invite.module';
import {ReferralLinkComponentModule} from '../../components/referral-link/referral.link.module';

@NgModule({
    declarations: [
        RefferalPage,
    ],
    imports: [
        IonicPageModule,
        ReferralInviteComponentModule,
        ReferralLinkComponentModule,
        IonicPageModule.forChild(RefferalPage),
    ],
})
export class RefferalPageModule {
}
