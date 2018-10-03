import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id';
import {NativeStorage} from '@ionic-native/native-storage';
import {StoreService} from '../../shared/services/store.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'jb-modals-enable-biometric',
    templateUrl: 'enable.biometric.html'
})
export class EnableBiometricModal {

    public passwordForm: FormGroup;
    public isLeast: boolean;
    public isLoad: boolean = false;
    public isFaceId: boolean;
    public biometricAuthData: any = {};

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                private formBuilder: FormBuilder,
                private store: StoreService,
                private params: NavParams,
                private touchId: KeychainTouchId,
                private nativeStorage: NativeStorage) {

        this.onInit();
    }

    public setBiometric() {

        const password = this.passwordForm.controls['password'].value;

        this.isLoad = true;

        this.touchId.save('password', password)
            .then(() => {

                this.nativeStorage.setItem('isBiometricAuth', true);

                this.biometricAuthData.isActive = true;
                this.store.setBiometricAuthData = this.biometricAuthData;

                setTimeout(() => {
                    this.closeModal(true);
                    this.isLoad = true;
                });
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    public closeModal(save: any) {

        this.viewCtrl.dismiss({isSave: save});
    }

    public setBiometricText() {

        return this.biometricAuthData['isFaceId'] === 'face' ? 'Face ID' : 'Touch ID';
    }

    private onInit() {

        this.biometricAuthData = this.params.get('data');
        this.isLeast = false;

        this.passwordForm = this.formBuilder.group({
            password: new FormControl('')
        });
    }
}
