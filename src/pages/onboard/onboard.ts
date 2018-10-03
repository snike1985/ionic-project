import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TitleService} from '../../shared/services/title.service';
import {RegistrationPage} from '../registration/registration';
import {LoginPage} from '../login/login';
import {ScreenOrientation} from '@ionic-native/screen-orientation';

@Component({
    selector: 'jb-page-onboard',
    templateUrl: 'onboard.html',
})
export class OnboardPage {

    public title: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public titleService: TitleService,
                private screenOrientation: ScreenOrientation) {

        this.screenOrientation.lock('portrait-primary');
        this.setTitle();
    }

    public toRegistrationPage() {
        this.navCtrl.push(RegistrationPage);
    }

    public toLoginPage() {
        this.navCtrl.push(LoginPage);
    }

    private setTitle() {

        const titlesArr = this.titleService.getTitle();

        let counter = 0;

        setInterval(() => {

            this.title = titlesArr[counter];
            counter++;
            if (counter >= titlesArr.length) {
                counter = 0;
            }
        }, 60);

    }
}
