import {NgModule} from '@angular/core';
import {InnerHtmlDirective} from './inner.html.directive';

@NgModule({
    declarations: [InnerHtmlDirective],
    exports: [InnerHtmlDirective]
})
export class InnerHtmlModule {
}
