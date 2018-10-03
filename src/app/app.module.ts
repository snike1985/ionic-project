import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IonicApp, IonicErrorHandler, IonicModule, IonicPageModule} from 'ionic-angular';

import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id';
import {NativeStorage} from '@ionic-native/native-storage';
import {ActionSheet} from '@ionic-native/action-sheet';

import {OnboardPageModule} from '../pages/onboard/onboard.module';
import {RegistrationPageModule} from '../pages/registration/registration.module';
import {LoginPageModule} from '../pages/login/login.module';
import {OnboardPage} from '../pages/onboard/onboard';
import {MainPageModule} from '../pages/main/main.module';
import {BuyCoinsPageModule} from '../pages/buy-coins/buy.coins.module';

import {StoreService} from '../shared/services/store.service';
import {ValidatorService} from '../shared/services/validator.service';

import {MyApp} from './app.component';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {Keyboard} from '@ionic-native/keyboard';
import {DepositModalModule} from '../modals/deposit/deposit.module';
import {ExchangeCoinsModule} from '../modals/exchange-coins/exchange.coins.module';
import {CheckDeviceService} from '../shared/services/check.device.service';
import {StatusBarService} from '../shared/services/top.bar.service';
import {ExchangeCoinsModal} from '../modals/exchange-coins/exchange.coins';

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        IonicPageModule,
        OnboardPageModule,
        RegistrationPageModule,
        LoginPageModule,
        MainPageModule,
        BuyCoinsPageModule,
        ExchangeCoinsModule,
        IonicModule.forRoot(MyApp,
            {
                locationStrategy: 'path',
                scrollPadding: true,
                scrollAssist: true,
                autoFocusAssist: true,
                tabsPlacement: 'bottom',
                tabsHideOnSubPages: true,
                platforms: {
                    android: {tabsPlacement: 'bottom'},
                    ios: {tabsPlacement: 'bottom'}
                }
            }
        )
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ExchangeCoinsModal
    ],
    providers: [
        StoreService,
        StatusBar,
        SplashScreen,
        ValidatorService,
        StatusBarService,
        CheckDeviceService,
        KeychainTouchId,
        NativeStorage,
        ActionSheet,
        ScreenOrientation,
        Keyboard
    ]
})
export class AppModule {
}
