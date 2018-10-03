import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InnerHtmlDirective} from './inner.html.directive';
import {TelMaskDirective} from './tel.mask.directive';

@NgModule({
    declarations: [TelMaskDirective],
    exports: [TelMaskDirective]
})
export class TelMaskModule {
}
