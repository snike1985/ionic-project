import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ValidatorService} from '../../shared/services/validator.service';
import {StoreService} from '../../shared/services/store.service';

import {SearchBarPage} from '../../pages/search-bar/search-bar';

import {phoneConfig} from '../../shared/configs/phone.config';
import {SlideIn} from '../../shared/configs/animations.config';

@Component({
    selector: 'jb-modals-personal-info',
    templateUrl: 'personal.info.html',
    animations: [SlideIn]
})
export class PersonalInfoModal {

    public personalInfoForm: FormGroup;
    public address: string;
    public locationData: any;
    public phoneData: any;
    public isLoad: boolean;

    private curData: any;
    private phoneConfig: any;

    constructor(public viewCtrl: ViewController,
                public navCtrl: NavController,
                public validatorService: ValidatorService,
                private params: NavParams,
                private store: StoreService,
                private formBuilder: FormBuilder) {

        this.onInit();
    }

    public closeModal() {
        this.viewCtrl.dismiss();
    }

    public submitPersonalInfo() {

        this.isLoad = true;

        const form = this.personalInfoForm.value;
        const controls = this.personalInfoForm.controls;

        let str = '';

        Object.keys(form).forEach((key) => {

            if (str.length && form[key]) {
                str += '/' + form[key];
            } else if (form[key]) {
                str = form[key];
            }
        });

        this.curData.value = str;
        this.curData.isVerified = true;
        this.address = controls['country'].value + ', '
            + controls['zipCode'].value + ', '
            + controls['province'].value + ', '
            + controls['city'].value + ', '
            + controls['streetAddress'].value + ', '
            + controls['suite'].value;

        setTimeout(() => {

            this.isLoad = false;
            this.viewCtrl.dismiss({address: this.address});

        }, 1000);
    }

    public toSearchBar(data: any) {

        this.navCtrl.push(
            SearchBarPage,
            {
                type: data.type,
                country: this.locationData,
                control: this.personalInfoForm.controls[data.controlName],
                phoneData: this.phoneData
            });
    }

    private setCountry() {

        this.personalInfoForm.controls['country'].setValue(this.locationData.countryName);
    }

    private setPhone() {

        const country = this.locationData.countryName;

        if (country && this.phoneConfig[country.toLowerCase()]) {

            this.phoneData.code = this.phoneConfig[country.toLowerCase()]['code'];
            this.phoneData.country = this.locationData.countryCode;

            this.personalInfoForm.controls['phoneNumber'].setValue(this.phoneData.code);
        }
    }

    private onInit() {

        this.phoneConfig = phoneConfig;
        this.phoneData = {
            code: '',
            country: ''
        };
        this.locationData = this.store.getLocationData;
        this.curData = this.params.get('data');

        this.personalInfoForm = this.formBuilder.group({

            firstName: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            lastName: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            middleName: new FormControl(
                ''),
            gender: new FormControl('male'),
            dateOfBirth: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            phoneNumber: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            country: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            zipCode: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            province: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            city: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            streetAddress: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
            suite: new FormControl(
                '', Validators.compose([
                    Validators.required
                ])),
        });

        this.setCountry();
        this.setPhone();
    }
}
