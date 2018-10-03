import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {IonicPage, NavController} from 'ionic-angular';

import {ValidatorService} from '../../shared/services/validator.service';

import {VisibilityChanged} from '../../shared/configs/animations.config';
import {StatusBarService} from '../../shared/services/top.bar.service';

@IonicPage()
@Component({
    selector: 'jb-page-contact-us',
    templateUrl: 'contact.us.html',
    animations: [VisibilityChanged]
})
export class ContactUsPage {

    public contactUsForm: FormGroup;
    public isLoad: boolean = false;
    public isSend: boolean = false;

    constructor(public navCtrl: NavController,
                public validatorService: ValidatorService,
                private formBuilder: FormBuilder,
                private statusBarService: StatusBarService) {

        this.initForm();
    }

    public submitForm() {

        this.isLoad = true;

        setTimeout(() => {
            this.isLoad = false;
            this.isSend = true;
            this.statusBarService.toDefaultColor();
        }, 1000);
    }

    public toPrevPage() {
        this.statusBarService.toWhiteColor();
        this.isSend = false;
        this.navCtrl.pop();
    }

    private initForm() {

        this.contactUsForm = this.formBuilder.group({
            message: new FormControl(
                '', Validators.compose([
                    Validators.required
                ]))
        });
    }
}
