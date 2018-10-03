import {NgModule} from '@angular/core';
import {SearchBarPageModule} from '../../pages/search-bar/search-bar.module';
import {SearchBarPage} from '../../pages/search-bar/search-bar';
import {PersonalInfoModal} from './personal.info';
import {IonicPageModule} from 'ionic-angular';
import {InputOnfocusModule} from '../../shared/directives/input.onfocus.module';
import {TelMaskModule} from '../../shared/directives/tel.mask.module';

@NgModule({
    declarations: [PersonalInfoModal],
    imports: [
        TelMaskModule,
        InputOnfocusModule,
        SearchBarPageModule,
        IonicPageModule.forChild(PersonalInfoModal),
    ],
    entryComponents: [SearchBarPage]
})
export class PersonalInfoModalModule {}
