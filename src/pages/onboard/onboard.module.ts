import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OnboardPage} from './onboard';
import {TitleService} from '../../shared/services/title.service';

@NgModule({
    declarations: [
        OnboardPage
    ],
    imports: [
        IonicPageModule.forChild(OnboardPage),
    ],
    providers: [
        TitleService
    ]
})
export class OnboardPageModule {
}
