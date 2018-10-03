import {Component, ViewChild} from '@angular/core';
import {Config, NavController, Platform} from 'ionic-angular';

import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ModalLeaveDirect} from '../shared/transitions/custom.transitions';
import {StatusBarService} from '../shared/services/top.bar.service';

import {OnboardPage} from '../pages/onboard/onboard';
import {MorePage} from '../pages/more/more';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    public rootPage: any;

    @ViewChild('myNav') public navCtrl: NavController;

    constructor(private platform: Platform,
                private statusBarService: StatusBarService,
                private splashScreen: SplashScreen,
                public config: Config,
                private keyboard: Keyboard) {

        this.statusBarService.toWhiteColor();
        this.setCustomTransitions();

        platform.ready().then(() => {

            this.keyboard.disableScroll(true);
            this.keyboard.hideKeyboardAccessoryBar(false);

            this.rootPage = OnboardPage;
            // this.rootPage = MorePage;

            setTimeout(() => {
                this.splashScreen.hide();
            }, 100);
        });
    }

    private setCustomTransitions() {
        this.config.setTransition('ModalLeaveDirect', ModalLeaveDirect);
    }
}
