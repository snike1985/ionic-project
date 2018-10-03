import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {ScrollControlsComponent} from './scroll.controls';

@NgModule({
    declarations: [
        ScrollControlsComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ScrollControlsComponent
    ]
})
export class ScrollControlsComponentModule {
}
