import {NgModule} from '@angular/core';

import {IonicPageModule} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder} from '@ionic-native/native-geocoder';
import {ScanPageModule} from '../scan/scan.module';
import {SocialSharing} from '@ionic-native/social-sharing';

import {MainPage} from './main';
import {DashboardPageModule} from '../dashboard/dashboard.module';
import {MorePageModule} from '../more/more.module';
import {WalletsPageModule} from '../wallets/wallets.module';
import {CardPageModule} from '../card/card.module';
import {InnerHtmlModule} from '../../shared/directives/inner.html.module';
import {MainActionSheet} from '../../modals/main-action-sheet/main.action';

@NgModule({
    declarations: [
        MainPage,
        MainActionSheet
    ],
    imports: [
        InnerHtmlModule,
        DashboardPageModule,
        MorePageModule,
        WalletsPageModule,
        CardPageModule,
        ScanPageModule,
        IonicPageModule.forChild(MainPage),
    ],
    entryComponents: [
        MainActionSheet
    ],
    providers: [
        Geolocation,
        NativeGeocoder,
        Camera,
        SocialSharing,
    ]
})
export class MainPageModule {
}
