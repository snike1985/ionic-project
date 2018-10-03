import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ViewController} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';

import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';

import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-change-password',
    templateUrl: 'change.password.html',
    animations: [SlideIn, VisibilityChanged]
})
export class ChangePasswordModal {

    public passwordForm: FormGroup;
    public isConfirm: boolean;
    public isSuccess: boolean;
    public isWrong: boolean;
    public isLoad: boolean;
    public isLeast: boolean;
    public step: string = 'current';

    public labelConfig: any = {
        current: 'Current password',
        new: 'New password',
        confirm: 'Confirm New password'
    };

    private currentPassword: string;

    constructor(public viewCtrl: ViewController,
                private formBuilder: FormBuilder,
                private statusBarService: StatusBarService,
                private keyboard: Keyboard) {

        this.onInit();
    }

    public closeModal() {
        this.statusBarService.toWhiteColor();
        this.viewCtrl.dismiss();
    }

    public nextStep() {

        const value = this.passwordForm.controls['password'].value;

        if (this.step === 'current') {

            this.sendPassword(false);
            this.keyboard.close();

            setTimeout(() => {

                this.step = 'new';

                this.passwordForm.controls['password'].setValue('');

            }, 1000);

        } else if (this.step === 'new') {

            this.step = 'confirm';
            this.currentPassword = value;
            this.passwordForm.controls['password'].setValue('');

        } else if (this.step === 'confirm' && this.checkPassword(value, this.currentPassword)) {

            this.sendPassword(true);

        }  else {

            this.passwordForm.controls['password'].setValue('');
            this.isWrong = true;
            this.step = 'new';
        }
    }

    private checkPassword(value: string, curPassword: string) {

        return value === curPassword;
    }

    private sendPassword(success: any) {

        this.isLoad = true;

        setTimeout(() => {

            this.isLoad = false;

            if (success) {
                this.isSuccess = true;
                this.statusBarService.toDefaultColor();
            }

        }, 1000);
    }

    private onInit() {

        this.isLeast = false;

        this.passwordForm = this.formBuilder.group({
            password: new FormControl('')
        });
    }
}
