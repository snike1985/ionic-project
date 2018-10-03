import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id';
import {NativeStorage} from '@ionic-native/native-storage';

import {ChangePinModal} from '../../modals/change-pin/change.pin';
import {ChangePasswordModal} from '../../modals/change-password/change.password';
import {VerifyPhoneModal} from '../../modals/verify-phone/verify.phone';
import {EnableBiometricModal} from '../../modals/enable-biometric/enable.biometric';

import {SlideIn} from '../../shared/configs/animations.config';

import {StoreService} from '../../shared/services/store.service';

@IonicPage()
@Component({
    selector: 'jb-page-settings',
    templateUrl: 'settings.html',
    animations: [SlideIn]
})
export class SettingsPage {

    public tabs = [
        {
            name: 'Security',
            isActive: true
        },
        {
            name: 'Notifications',
            isActive: false
        }
    ];

    public curTab: string;
    public phoneData: any = {
        finalStep: true,
        title: 'Add Phone Number',
        value: '',
        isPending: false,
        isVerified: false
    };
    public isAuth: boolean = false;
    public isBiometricAuth: boolean = false;
    public biometricAuthData: any = {};

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                private nativeStorage: NativeStorage,
                private touchId: KeychainTouchId,
                private store: StoreService) {
    }

    public toggleTwoFactorAuth() {

        console.log(this.isAuth);
    }

    public toggleBiometricAuth() {

        if (this.biometricAuthData[ 'isActive' ]) {

            const modal = this.modalCtrl.create(EnableBiometricModal, {data: this.biometricAuthData});

            modal.onDidDismiss((isSave) => {

                if (!isSave) {
                    this.biometricAuthData[ 'isActive' ] = this.biometricAuthData[ 'isActive' ];
                }
            });
            modal.present();

        } else {

            this.nativeStorage.remove('isBiometricAuth');
            this.touchId.delete('password');
        }
    }

    public toggleTab(activeTab: any) {

        this.tabs.forEach((element) => {
            element.isActive = false;
        });

        activeTab.isActive = true;

        this.curTab = activeTab.name;
    }

    public ionViewDidLoad() {

        this.biometricAuthData = this.store.getBiometricAuthData;

        console.log('this.biometricAuthData', this.biometricAuthData);

        this.setActiveTab();
    }

    public openChangePinModal() {

        const modal = this.modalCtrl.create(ChangePinModal);

        modal.present();
    }

    public openChangePasswordModal() {

        const modal = this.modalCtrl.create(ChangePasswordModal);

        modal.present();
    }

    public openAddPhoneModal() {

        const modal = this.modalCtrl.create(
            VerifyPhoneModal,
            {
                data: this.phoneData,
                title: 'Add Phone Number'
            }
        );

        modal.present();
    }

    private setActiveTab() {

        this.tabs.forEach((element) => {

            if (element.isActive) {

                this.curTab = element.name;
            }
        });
    }
}
