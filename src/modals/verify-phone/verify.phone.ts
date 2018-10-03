import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {StoreService} from '../../shared/services/store.service';

import {SearchBarPage} from '../../pages/search-bar/search-bar';
import {EnterCodePage} from '../../pages/enter-code/enter.code';

import {phoneConfig} from '../../shared/configs/phone.config';
import {SlideIn, VisibilityChanged} from '../../shared/configs/animations.config';

import {ValidatorService} from '../../shared/services/validator.service';
import {StatusBarService} from '../../shared/services/top.bar.service';

@Component({
    selector: 'jb-modals-verify-phone',
    templateUrl: 'verify.phone.html',
    animations: [SlideIn, VisibilityChanged]
})
export class VerifyPhoneModal {

    public phoneVereficationForm: FormGroup;
    public curData: any;
    public isLoad: boolean;
    public isVerified: boolean;
    public locationData: any;
    public phoneData: any;

    private phoneConfig: any;

    constructor(public viewCtrl: ViewController,
                public navCtrl: NavController,
                public validatorService: ValidatorService,
                private params: NavParams,
                private store: StoreService,
                private statusBarService: StatusBarService,
                private formBuilder: FormBuilder) {

        this.onInit();
    }

    public closeModal() {

        this.statusBarService.toWhiteColor();
        this.viewCtrl.dismiss();
    }

    public nextStep() {

        this.curData.isVerified = true;
        this.curData.value = this.phoneVereficationForm.value['phoneNumber'];

        this.statusBarService.toWhiteColor();

        this.viewCtrl.dismiss({nextStep: 'address'});
    }

    public getCode() {

        this.isLoad = true;
        this.curData.value = this.phoneVereficationForm.value['phoneNumber'];

        setTimeout(() => {
            this.navCtrl.push(EnterCodePage,
                {
                    data: this.curData
                });
        }, 1000);
    }

    public toSearchBar(data: any) {

        this.navCtrl.push(
            SearchBarPage,
            {
                type: data.type,
                country: this.locationData,
                control: this.phoneVereficationForm.controls[data.controlName],
                phoneData: this.phoneData
            });
    }

    private setPhone() {

        const country = this.locationData.countryName;

        if (country && this.phoneConfig[country.toLowerCase()]) {

            this.phoneData.code = this.phoneConfig[country.toLowerCase()]['code'];
            this.phoneData.country = this.phoneConfig[country.toLowerCase()]['abbr'];

            this.phoneVereficationForm.controls['phoneNumber'].setValue(this.phoneData.code);
        }
    }

    private onInit() {

        this.curData = this.params.get('data');
        this.isLoad = false;
        this.isVerified = false;
        this.phoneConfig = phoneConfig;
        this.phoneData = {
            code: '',
            country: ''
        };
        this.locationData = this.store.getLocationData;

        this.phoneVereficationForm = this.formBuilder.group({

            phoneNumber: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
        });

        this.setPhone();
    }
}
