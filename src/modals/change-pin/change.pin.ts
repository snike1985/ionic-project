import {AfterContentChecked, Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {NativeStorage} from '@ionic-native/native-storage';
import {Keyboard} from '@ionic-native/keyboard';

import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';

import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-change-pin',
    templateUrl: 'change.pin.html',
    animations: [SlideIn, VisibilityChanged]
})
export class ChangePinModal implements AfterContentChecked {

    public pinForm: FormGroup;
    public step: string = 'current';
    public tryCount: number;
    public isLoad: boolean;
    public isWrong: boolean;
    public isSuccess: boolean;
    public labelConfig: any = {
        current: 'Current PIN Code',
        new: 'New PIN Code',
        confirm: 'Confirm New PIN Code'
    };
    public isNewCode: boolean;
    public durationValue: number = 10;
    public duration: any;

    private interval: any;
    private currentPin: any;
    private newPin: string;

    constructor(public viewCtrl: ViewController,
                private nativeStorage: NativeStorage,
                private formBuilder: FormBuilder,
                private keyboard: Keyboard,
                private statusBarService: StatusBarService) {

        this.onInit();
    }

    public closeModal() {

        this.statusBarService.toWhiteColor();
        this.viewCtrl.dismiss();
    }

    public ngAfterContentChecked() {

        const value = this.pinForm.controls['pin'].value;

        if (value.length < 6) {
            return;
        }

        if (value.length === 6 && !this.isSuccess) {

            this.nextStep();
        }
    }

    private nextStep() {

        const value = this.pinForm.controls['pin'].value;

        if (this.step === 'current' && this.checkPinCode(value, this.currentPin)) {

            this.sendPinCode( false );
            this.keyboard.close();

            this.pinForm.controls['pin'].setValue('');

            setTimeout(() => {
                this.step = 'new';
            }, 1000);

        } else if (this.step === 'new') {

            this.step = 'confirm';
            this.newPin = value;
            this.pinForm.controls['pin'].setValue('');
            this.isWrong = false;

        } else if (this.step === 'confirm' && this.checkPinCode(value, this.newPin)) {

            this.sendPinCode( true );

        } else if (this.step === 'current') {

            this.tryCount--;
            this.pinForm.controls['pin'].setValue('');
            this.isWrong = true;

            this.checkTry();

        } else {

            this.pinForm.controls['pin'].setValue('');
            this.isWrong = true;
            this.step = 'new';
        }
    }

    private checkPinCode(value: string, curPin: string) {
        this.isWrong = false;

        return value === curPin;
    }

    private checkTry() {

        if (!this.tryCount) {

            this.keyboard.close();
            this.isWrong = false;
            this.timer();
        }
    }

    private sendPinCode(success: any) {

        this.isLoad = true;

        setTimeout(() => {

            this.isLoad = false;
            this.tryCount = 3;
            this.keyboard.close();

            if (success) {

                this.isSuccess = true;
                this.nativeStorage.setItem('pin', this.pinForm.controls['pin'].value);
                this.statusBarService.toDefaultColor();
            }

        }, 1000);
    }

    private onInit() {
        this.isSuccess = false;
        this.tryCount = 3;
        this.duration = this.durationValue;
        this.isNewCode = false;

        this.nativeStorage.getItem('pin')
            .then((data: any) => {
                this.currentPin = data;
            });

        this.pinForm = this.formBuilder.group({
            pin: new FormControl(
                ''),
        });
    }

    private timer() {

        this.interval = setInterval(() => {

            this.duration = this.duration - 1;

            if (this.duration <= 0) {

                clearInterval(this.interval);
                this.tryCount = 3;
                this.isNewCode = true;
                this.duration = this.durationValue;
            }

        }, 1000);
    }
}
