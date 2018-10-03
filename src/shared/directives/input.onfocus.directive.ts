import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[jbInputOnFocus]'
})
export class InputOnfocusDirective {

    constructor(private el: ElementRef) {
    }

    @HostListener('ionFocus', ['$event'])
    public onFocus() {

        const elem = this.el.nativeElement;
        const scroller = elem.closest('.scroll-content');
        const offsetTop = elem.closest('fieldset').offsetTop;

        elem.classList.add('focus');

        if (scroller) {

            scroller.scrollTo(
                {
                    left: 0,
                    top: offsetTop - 100,
                    behavior: 'smooth'
                });
        }
    }

    @HostListener('ionBlur', ['$event'])
    public onBlur() {
        this.el.nativeElement.classList.remove('focus');
    }
}
