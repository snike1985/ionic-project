import {AfterContentChecked, Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';
import {NativeStorage} from '@ionic-native/native-storage';
import {Keyboard} from '@ionic-native/keyboard';

@Component({
    selector: 'jb-modals-enter-pin',
    templateUrl: 'enter.pin.html',
    animations: [SlideIn, VisibilityChanged]
})
export class EnterPinModal implements AfterContentChecked {

    public pinForm: FormGroup;
    public tryCount: number;
    public isWrong: boolean;
    public durationValue: number = 10;
    public duration: any;

    private interval: any;
    private currentPin: any;

    constructor(public viewCtrl: ViewController,
                private nativeStorage: NativeStorage,
                private formBuilder: FormBuilder,
                private keyboard: Keyboard) {

        this.onInit();
    }

    public closeModal() {

        this.viewCtrl.dismiss();
    }

    public ngAfterContentChecked() {

        const value = this.pinForm.controls['pin'].value;

        if (value.length < 6) {
            return;
        }

        if (value.length === 6) {

            this.nextStep();
        }
    }

    private nextStep() {

        const value = this.pinForm.controls['pin'].value;

        if (this.checkPinCode(value, this.currentPin)) {

            this.viewCtrl.dismiss(true);

        } else {

            this.tryCount--;
            this.pinForm.controls['pin'].setValue('');
            this.isWrong = true;

            this.checkTry();
        }
    }

    private checkPinCode(value: string, curPin: string) {

        return value === curPin;
    }

    private checkTry() {

        if (!this.tryCount) {

            this.keyboard.close();
            this.isWrong = false;
            this.timer();
        }
    }

    private onInit() {
        this.tryCount = 3;
        this.duration = this.durationValue;

        this.nativeStorage.getItem('pin')
            .then((data: any) => {
                this.currentPin = data;
            });

        this.pinForm = this.formBuilder.group({
            pin: new FormControl(''),
        });
    }

    private timer() {

        this.interval = setInterval(() => {

            this.duration = this.duration - 1;

            if (this.duration <= 0) {

                this.duration = this.durationValue;

                clearInterval(this.interval);
                this.tryCount = 3;
            }

        }, 1000);
    }
}
