import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {StarsComponent} from './stars';

@NgModule({
    declarations: [
        StarsComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        StarsComponent
    ]
})
export class StarsComponentModule {
}
