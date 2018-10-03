import {Component, OnInit, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {countries} from '../../shared/configs/countries.config';
import {phoneConfig} from '../../shared/configs/phone.config';

@IonicPage()
@Component({
    selector: 'jb-page-search-bar',
    templateUrl: 'search-bar.html',
})
export class SearchBarPage implements OnInit {

    public countriesList: any[];
    public curValue: string;
    public curControl: any;
    public curCountry: any;

    private curType: string;
    private phoneConfig: any;
    private phoneData: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    public checkItems(ev: any) {

        this.countriesList = countries;
        const val = ev.target.value;

        this.curValue = val;

        if (val && val.trim() !== '') {

            this.filterItems(val);
        }
    }

    public selectValue(item: any) {

        this.curValue = item;

        this.filterItems(item);

        if ( this.curType === 'country') {

            this.curControl.setValue(this.curValue);

        } else if ( this.curType === 'phone') {

            const value = this.curValue.toLowerCase();

            this.curControl.setValue(this.phoneConfig[value]['code']);

            this.phoneData['country'] = this.phoneConfig[value][ 'abbr' ];
            this.phoneData['code'] = this.phoneConfig[value][ 'code' ];
        }
        this.curCountry.countryName = item;
        this.navCtrl.pop();
    }

    public ngOnInit() {

        this.curType = this.navParams.get('type');
        this.curControl = this.navParams.get('control');
        this.phoneData = this.navParams.get('phoneData');
        this.curCountry = this.navParams.get('country');

        this.countriesList = countries;
        this.phoneConfig = phoneConfig;
    }

    private filterItems(val: string) {

        this.countriesList = this.countriesList.filter((item: any) => {
            return item.toLowerCase().includes(val.toLowerCase());
        });
    }

}
