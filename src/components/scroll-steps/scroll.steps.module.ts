import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {CommonModule} from '@angular/common';

import {ScrollStepsComponent} from './scroll.steps';

@NgModule({
    declarations: [
        ScrollStepsComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ScrollStepsComponent
    ]
})
export class ScrollStepsComponentModule {
}
