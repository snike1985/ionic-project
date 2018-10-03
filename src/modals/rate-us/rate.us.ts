import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {NavController, ViewController} from 'ionic-angular';

import {VisibilityChanged} from '../../shared/configs/animations.config';

@Component({
    selector: 'jb-modals-rate-us',
    templateUrl: 'rate.us.html',
    animations: [VisibilityChanged]
})
export class RateUsModal {

    public feedbackForm: FormGroup;
    public isLoad: boolean = false;
    public rateModel: any = {
        message: '',
        value: '',
        step: 0
    };

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                private formBuilder: FormBuilder) {

        this.initForm();
    }

    public submitForm() {

        this.isLoad = true;

        setTimeout(() => {

            this.isLoad = false;
            this.rateModel.step = 2;
            this.rateModel.message = this.feedbackForm.controls['message'].value;

        }, 1000);
    }

    public closeModal() {
        this.viewCtrl.dismiss();
    }

    private initForm() {

        this.feedbackForm = this.formBuilder.group({
            message: new FormControl(
                '', Validators.compose([
                    Validators.required
                ]))
        });
    }
}
