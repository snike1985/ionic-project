import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from 'ionic-angular';
import {ReferralLinkComponent} from './referral.link';

@NgModule({
    declarations: [
        ReferralLinkComponent,
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        ReferralLinkComponent
    ]
})
export class ReferralLinkComponentModule {
}
