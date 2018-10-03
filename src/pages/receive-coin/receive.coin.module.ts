import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiveCoinPage } from './receive.coin';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {Clipboard} from '@ionic-native/clipboard';

@NgModule({
  declarations: [
    ReceiveCoinPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiveCoinPage),
    NgxQRCodeModule
  ],
    providers: [Clipboard]
})
export class ReceiveCoinPageModule {}
