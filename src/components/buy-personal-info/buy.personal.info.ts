import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController} from 'ionic-angular';

import {SearchBarPage} from '../../pages/search-bar/search-bar';

import {StoreService} from '../../shared/services/store.service';
import {ValidatorService} from '../../shared/services/validator.service';

import {phoneConfig} from '../../shared/configs/phone.config';

@Component({
    selector: 'jb-buy-personal-info',
    templateUrl: 'buy.personal.info.html'
})
export class BuyPersonalInfoComponent {

    @Input() public items: any[];
    @Input() public activeStep: number;

    @Output() public goNext = new EventEmitter();

    public personalInfoForm: FormGroup;
    public locationData: any;
    public phoneData: any;
    public isLoad: boolean;

    private phoneConfig: any;

    constructor(public navCtrl: NavController,
                public validatorService: ValidatorService,
                private store: StoreService,
                private formBuilder: FormBuilder) {

        this.onInit();
    }

    public goToNextStep() {
        this.goNext.emit();
    }

    public submitForm() {

        this.isLoad = true;

        setTimeout(() => {

            this.isLoad = false;
            this.goToNextStep();

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
