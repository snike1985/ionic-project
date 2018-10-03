import {Component} from '@angular/core';
import {ModalController, NavController, NavParams, Platform} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id';

import {ValidatorService} from '../../shared/services/validator.service';

import {SlideIn} from '../../shared/configs/animations.config';

import {BiometricAuthModal} from '../../modals/biometric-auth/biometric.auth';
import {NativeStorage} from '@ionic-native/native-storage';
import {Keyboard} from '@ionic-native/keyboard';

import {MainPage} from '../main/main';

@Component({
    selector: 'jb-page-registration',
    templateUrl: 'registration.html',
    animations: [SlideIn]
})
export class RegistrationPage {

    public registrationForm: FormGroup;
    public isConfirm: boolean;
    public isId: boolean;
    public idType: string;
    public isLoad: boolean = false;
    public isLeast: boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public validatorService: ValidatorService,
                public modalCtrl: ModalController,
                public keyboard: Keyboard,
                private touchId: KeychainTouchId,
                private formBuilder: FormBuilder,
                private nativeStorage: NativeStorage) {

        this.onInit();
    }

    public submitRegistrationForm() {

        this.isLoad = true;

        this.nativeStorage.setItem('email', this.registrationForm.controls['email'].value);
        this.nativeStorage.setItem('pin', this.registrationForm.controls['pin'].value);

        if (this.isId) {
            this.openBiometricModal();
        } else {

            setTimeout(() => {
                this.isLoad = false;
                this.navCtrl.push(MainPage);
            }, 1000);
        }
    }

    public openBiometricModal() {
        const modal = this.modalCtrl.create(
            BiometricAuthModal,
            {
                type: this.idType,
                password: this.registrationForm.controls['password'].value
            });

        modal.present();
    }

    private initForm() {

        this.registrationForm = this.formBuilder.group({
            email: new FormControl(
                '', Validators.compose([
                    Validators.required,
                    this.validatorService.validateEmail
                ])),
            password: new FormControl(
                '',
                Validators.required
            ),
            pin: new FormControl(
                '', Validators.compose([
                    Validators.required,
                    Validators.minLength(6)
                ])),
            confirm: new FormControl(
                false, Validators.compose([
                    Validators.required,
                ]))
        });
    }

    private onInit() {

        this.initForm();

        this.isConfirm = false;

        this.checkTouchId();
        this.keyboard.hideKeyboardAccessoryBar(true);
    }

    private checkTouchId() {

        this.touchId.isAvailable()
            .then((biometryType: any) => {

                this.isId = true;
                this.idType = (biometryType === 'face') ? 'face' : 'touch';
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    private ionViewWillLeave() {
        this.keyboard.hideKeyboardAccessoryBar(false);
    }
}
