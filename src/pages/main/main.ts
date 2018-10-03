import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {DashboardPage} from '../dashboard/dashboard';
import {CardPage} from '../card/card';
import {WalletsPage} from '../wallets/wallets';
import {MorePage} from '../more/more';
import {MainActionSheet} from '../../modals/main-action-sheet/main.action';
import {NativeGeocoder, NativeGeocoderOptions, NativeGeocoderReverseResult} from '@ionic-native/native-geocoder';
import {Geolocation} from '@ionic-native/geolocation';
import {StoreService} from '../../shared/services/store.service';

@Component({
    selector: 'jb-page-main',
    templateUrl: 'main.html',
})
export class MainPage implements OnInit {

    public rootPage: any;
    public dashboard: any;
    public more: any;
    public wallets: any;
    public card: any;
    public actionSheetModal: any;

    @ViewChild('mainNav') public navCtrl: NavController;

    private scrollContent: any;

    constructor(public navParams: NavParams,
                public modalCtrl: ModalController,
                private store: StoreService,
                private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder) {

        this.dashboard = DashboardPage;
        this.more = MorePage;
        this.wallets = WalletsPage;
        this.card = CardPage;
    }

    public closeActionSheet() {

        if (this.actionSheetModal) {
            this.closeModal();
        }
    }

    public ngOnInit() {
        this.getLocation();
    }

    public toggleActionSheet() {

        if (this.actionSheetModal) {

            this.closeModal();

        } else {

            this.actionSheetModal = this.modalCtrl.create(MainActionSheet);

            this.toggleScroll(true);

            this.actionSheetModal.onDidDismiss(() => {

                this.actionSheetModal = false;
                this.toggleScroll();

            });

            this.actionSheetModal.present();
        }
    }

    private closeModal() {
        this.actionSheetModal.dismiss();
        this.actionSheetModal = false;
    }

    private getLocation() {

        const options = {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 20000
        };

        this.geolocation.getCurrentPosition(options)
            .then((resp: any) => {

                this.getCountry({lat: resp.coords.latitude, long: resp.coords.longitude});
            })
            .catch((error: any) => {
                console.log('Error getting location', error);
            });
    }

    private getCountry(coordinates: any) {

        const options: NativeGeocoderOptions = {
            useLocale: false,
            maxResults: 1
        };
        let locationData = {};

        this.nativeGeocoder.reverseGeocode(coordinates.lat, coordinates.long, options)
            .then((result: NativeGeocoderReverseResult[]) => {

                const country = result[0].countryName;

                console.log(result[0]);

                locationData = {
                    countryName: country,
                    curLocation: country,
                    countryCode: result[0].countryCode.toLowerCase()
                };

                this.store.setLocationData = locationData;

            })
            .catch((error: any) => {
                console.log('reverseGeocodeErr', error);
            });
    }

    private toggleScroll(disable?: boolean) {

        this.scrollContent = document.querySelectorAll('.scroll-content');

        this.scrollContent.forEach((item: any) => {

            const classes = item.classList;

            if (!disable) {

                classes.remove('no-scroll');

            } else {

                classes.add('no-scroll');
            }
        });
    }
}
