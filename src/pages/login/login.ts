import {Component, OnInit} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id';
import {NativeStorage} from '@ionic-native/native-storage';
import {Keyboard} from '@ionic-native/keyboard';

import {ValidatorService} from '../../shared/services/validator.service';

import {MainPage} from '../main/main';
import {ResetPasswordModal} from '../../modals/reset-password/reset.password';

import {SlideIn} from '../../shared/configs/animations.config';

import {StoreService} from '../../shared/services/store.service';

@Component({
    selector: 'jb-page-login',
    templateUrl: 'login.html',
    animations: [SlideIn]
})
export class LoginPage implements OnInit {

    public loginForm: FormGroup;
    public isId: boolean;
    public idType: string;
    public showPassword: boolean = false;
    public isLoad: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public validatorService: ValidatorService,
                public modalCtrl: ModalController,
                public keyboard: Keyboard,
                private store: StoreService,
                private touchId: KeychainTouchId,
                private formBuilder: FormBuilder,
                private nativeStorage: NativeStorage) {
    }

    public submitLoginForm() {

        this.isLoad = true;

        setTimeout(() => {
            this.isLoad = false;
            this.navCtrl.push(MainPage);
        }, 1000);
    }

    public openPaswordModal() {

        const modal = this.modalCtrl.create(ResetPasswordModal);

        modal.present();
    }

    public ngOnInit() {

        this.onInit();
    }

    public biometricLogin() {

        this.touchId.verify('password', 'Touch Id')
            .then((res: any) => {

                this.loginForm.controls['password'].setValue(res);

                this.submitLoginForm();
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    private checkTouchId() {

        this.touchId.isAvailable()
            .then((biometryType: any) => {

                this.idType = (biometryType === 'face') ? 'face' : 'touch';

                this.store.setBiometricAuthData = {
                    isActive: false,
                    isFaceId: this.idType
                };
                this.getFromStorage();
            })
            .catch(() => {
                console.log('isAvailable --err');
            });
    }

    private getFromStorage() {

        this.nativeStorage.getItem('isBiometricAuth')
            .then(() => {

                this.isId = true;

                this.store.setBiometricAuthData = {
                    isActive: this.isId,
                    isFaceId: this.idType
                };

                this.biometricLogin();
            })
            .catch(() => {
                console.log('nativeStorage --err');
            });
    }

    private onInit() {

        this.loginForm = this.formBuilder.group({
            email: new FormControl(
                'test@te.co', Validators.compose([
                    Validators.required,
                    this.validatorService.validateEmail
                ])),
            password: new FormControl(
                'tesT@555',
                Validators.required
            )
        });

        this.nativeStorage.getItem('email')
            .then((data: any) => {
                this.loginForm.controls['email'].setValue(data);
            });

        this.isId = false;

        this.checkTouchId();
        this.keyboard.hideKeyboardAccessoryBar(true);
    }

    private ionViewWillLeave() {
        this.keyboard.hideKeyboardAccessoryBar(false);
    }
}
