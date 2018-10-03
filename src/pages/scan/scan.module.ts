import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ScanPage} from './scan';
import {SafePipeModule} from '../../shared/pipes/safe.module';

@NgModule({
    declarations: [
        ScanPage,
    ],
    imports: [
        SafePipeModule,
        IonicPageModule.forChild(ScanPage),
    ],
})
export class ScanPageModule {
}
