import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SearchBarPage} from './search-bar';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        SearchBarPage,
    ],
    imports: [
        CommonModule,
        IonicPageModule.forChild(SearchBarPage),
    ],
    exports: [
        SearchBarPage,
    ]
})
export class SearchBarPageModule {
}
