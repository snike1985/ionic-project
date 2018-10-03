import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {NotificationsComponent} from './notifications';

@NgModule({
    declarations: [
        NotificationsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        NotificationsComponent
    ]
})
export class NotificationsComponentModule {
}
