import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';

import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-reset-password',
    templateUrl: 'reset.password.html',
    animations: [SlideIn, VisibilityChanged]
})
export class ResetPasswordModal {

    public passwordForm: FormGroup;
    public isLink: boolean;
    public isSendLink: boolean;
    public isSendedLink: boolean;
    public isLeast: boolean;
    public isLoad: boolean = false;

    constructor(public viewCtrl: ViewController,
                private formBuilder: FormBuilder,
                private statusBarService: StatusBarService) {

        this.onInit();
    }

    public closeModal() {
        this.viewCtrl.dismiss();
    }

    public submitPasswordForm() {

        this.isLoad = true;

        setTimeout(() => {
            this.isLoad = false;
            this.closeModal();
        }, 1000);
    }

    public sendLink() {

        this.isSendedLink = true;
        this.isSendLink = false;

        this.statusBarService.toDefaultColor();

        setTimeout(() => {

            this.isSendedLink = false;
            this.isLink = true;

            this.statusBarService.toWhiteColor();

        }, 2000);
    }

    private onInit() {

        this.passwordForm = this.formBuilder.group({
            password: new FormControl('', Validators.required)
        });

        this.isLeast = false;
        this.isLink = false;
        this.isSendLink = true;
        this.isSendedLink = false;
    }
}
