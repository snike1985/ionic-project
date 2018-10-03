import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {ScrollIconedControlsComponent} from './scroll.iconed.controls';

@NgModule({
    declarations: [
        ScrollIconedControlsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ScrollIconedControlsComponent
    ]
})
export class ScrollIconedControlsComponentModule {
}
