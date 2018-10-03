import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';

import {NativeStorage} from '@ionic-native/native-storage';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id';

import {AccountVerificationPage} from '../account-verification/account.verification';
import {SettingsPage} from '../settings/settings';
import {RefferalPage} from '../refferal/refferal';
import {AboutPage} from '../about/about';
import {OnboardPage} from '../onboard/onboard';
import {ActivityLogPage} from '../activity-log/activity.log';
import {ContactUsPage} from '../contact-us/contact.us';
import {RateUsModal} from '../../modals/rate-us/rate.us';

interface IMenuList {
    title: string;
    subTitle?: string;
    link: string;
}

@IonicPage()
@Component({
    selector: 'jb-page-more',
    templateUrl: 'more.html',
})
export class MorePage {

    public menuList: IMenuList[] = [
        {
            title: 'Account verification',
            subTitle: 'Verify your account to maximize Jubiter capabilities',
            link: 'AccountVerification'
        },
        {
            title: 'Settings',
            subTitle: 'Password, notifications and more',
            link: 'Settings'
        },
        {
            title: 'Referral Program',
            subTitle: 'Get $25 referal fee for any verfied user that deposits $100 or more',
            link: 'ReferralProgram'
        },
        {
            title: 'Activity Log',
            subTitle: 'History of all activities on your accout',
            link: 'ActivityLog'
        },
        {
            title: 'Rate Jubiter',
            subTitle: 'Like Jubiter? Rate us on the App Store',
            link: 'RateJubiter'
        },
        {
            title: 'Contact Us',
            subTitle: 'Ask us a question',
            link: 'ContactUs'
        },
        {
            title: 'About Jubiter',
            subTitle: 'Our Vision and Mission. Information about Account, Wallet, Crypto and more',
            link: 'AboutJubiter'
        },
        {
            title: 'Log Out',
            link: 'LogOut'
        },
    ];

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                private nativeStorage: NativeStorage,
                private touchId: KeychainTouchId) {
    }

    public logOut() {

        this.touchId.delete('password')
            .then(() => {

                this.nativeStorage.remove('pin');
                this.nativeStorage.remove('email');
                this.navCtrl.push(OnboardPage);
            });

        this.navCtrl.push(OnboardPage);
    }

    public itemSelected(link: string) {

        switch (link) {
            case 'AccountVerification':

                this.navCtrl.push(AccountVerificationPage);
                break;

            case 'Settings':

                this.navCtrl.push(SettingsPage);
                break;

            case 'ReferralProgram':

                this.navCtrl.push(RefferalPage);
                break;

            case 'ActivityLog':

                this.navCtrl.push(ActivityLogPage);
                break;

            case 'RateJubiter':

                this.openRateUsModal();
                break;

            case 'ContactUs':

                this.navCtrl.push(ContactUsPage);
                break;

            case 'AboutJubiter':

                this.navCtrl.push(AboutPage);
                break;

            case 'LogOut':

                this.logOut();
                break;
        }
    }

    private openRateUsModal() {

        const modal = this.modalCtrl.create(RateUsModal);
        modal.present();
    }
}
