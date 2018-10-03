import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id';
import {NativeStorage} from '@ionic-native/native-storage';
import {MainPage} from '../../pages/main/main';
import {StoreService} from '../../shared/services/store.service';

@Component({
    selector: 'jb-modals-biometric-auth',
    templateUrl: 'biometric.auth.html'
})
export class BiometricAuthModal {

    public isFaceId: string;

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                private params: NavParams,
                private store: StoreService,
                private touchId: KeychainTouchId,
                private nativeStorage: NativeStorage) {

        this.onInit();
    }

    public checkBiometric() {

        const password = this.params.get('password');

        this.touchId.save('password', password)
            .then(() => {

                this.store.setBiometricAuthData = {
                    isActive: true,
                    isFaceId: this.isFaceId
                };

                this.nativeStorage.setItem('isBiometricAuth', true);
                this.navCtrl.push(MainPage);

            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    public closeModal() {
        this.navCtrl.push(MainPage);
    }

    public setBiometricText() {

        return this.isFaceId === 'face' ? 'Face ID' : 'Touch ID';
    }

    private onInit() {

        this.isFaceId = this.params.get('type') === 'face' ? 'face' : 'touch';
    }
}
