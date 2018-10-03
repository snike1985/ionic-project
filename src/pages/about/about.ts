import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'jb-page-about',
    templateUrl: 'about.html',
})
export class AboutPage {

    public menuList = [
        {
            title: 'About Us',
            link: 'AboutUs'
        },
        {
            title: 'Knowlage Base',
            link: 'KnowlageBase'
        },
        {
            title: 'AML and KYC',
            link: 'AMLandKYC'
        },
        {
            title: 'Terms and Conditions',
            link: 'TermsAndConditions'
        },
        {
            title: 'Privacy Policy',
            link: 'PrivacyPolicy'
        },
        {
            title: 'Refund Policy',
            link: 'RefundPolicy'
        },
    ];
}
