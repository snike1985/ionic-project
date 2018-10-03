import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {AccountVerificationPageModule} from '../account-verification/account.verification.module';
import {SettingsPageModule} from '../settings/settings.module';
import {RefferalPageModule} from '../refferal/refferal.module';
import {AboutPageModule} from '../about/about.module';
import {ActivityLogPageModule} from '../activity-log/activity.log.module';
import {ContactUsPageModule} from '../contact-us/contact.us.module';

import {MorePage} from './more';
import {RateUsModal} from '../../modals/rate-us/rate.us';

import {StarsComponentModule} from '../../components/stars/stars.module';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';

@NgModule({
    declarations: [
        MorePage,
        RateUsModal
    ],
    imports: [
        InputOnfocusModule,
        AccountVerificationPageModule,
        SettingsPageModule,
        RefferalPageModule,
        AboutPageModule,
        ActivityLogPageModule,
        ContactUsPageModule,
        StarsComponentModule,
        IonicPageModule.forChild(MorePage),
    ],
    entryComponents: [
        RateUsModal
    ]
})
export class MorePageModule {
}
