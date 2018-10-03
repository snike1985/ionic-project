import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {SlideIn} from '../../shared/configs/animations.config';

import {ValidatorService} from '../../shared/services/validator.service';
import {StatusBarService} from '../../shared/services/top.bar.service';

@IonicPage()
@Component({
    selector: 'jb-page-enter-code',
    templateUrl: 'enter.code.html',
    animations: [SlideIn]
})
export class EnterCodePage implements OnInit {

    public codeForm: FormGroup;
    public codeIsFocus: boolean;
    public isLoad: boolean;
    public curData: any;
    public isNewCode: boolean;
    public duration: any;

    private interval: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public validatorService: ValidatorService,
                private formBuilder: FormBuilder,
                private params: NavParams,
                private statusBarService: StatusBarService) {
    }

    public checkMaxLength(max: number, value: any) {

        if (value.length < max) {
            return;
        }

        if (value.length === max) {
            this.sendToVerify();
        }

        this.codeForm.controls['code'].setValue(value.substr(0, max));
    }

    public checkCode(index: number) {

        const value = this.codeForm.controls['code'].value.toString();

        return value[index];
    }

    public sendToVerify() {

        this.curData.isVerified = true;

        if (this.curData.finalStep) {
            this.statusBarService.toDefaultColor();
        }

        this.navCtrl.pop();
    }

    public getNewCode() {

        this.isLoad = true;

        setTimeout(() => {

            this.isLoad = false;
            this.isNewCode = false;
            this.duration = 60;

            this.timer();

        }, 500);
    }

    public ngOnInit() {

        this.onInit();
    }

    private initForm() {

        this.codeForm = this.formBuilder.group({

            code: new FormControl(
                '', Validators.compose([
                    Validators.required,
                    Validators.minLength(6)
                ]))
        });
    }

    private onInit() {

        this.duration = 15;
        this.isNewCode = false;
        this.curData = this.params.get('data');

        this.initForm();
        this.timer();

        this.codeIsFocus = false;
    }

    private timer() {

        this.interval = setInterval(() => {

            this.duration = this.duration - 1;

            if (this.duration <= 0) {

                clearInterval(this.interval);
                this.isNewCode = true;
            }

        }, 1000);
    }
}
