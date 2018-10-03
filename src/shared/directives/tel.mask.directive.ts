import {Directive, HostListener, Input, OnChanges} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[jbTelMask]'
})
export class TelMaskDirective implements OnChanges {

    @Input('jbTelMask') public mask: string;

    constructor(private control: NgControl) {
    }

    /* when loading dynamically data to the input, without this
    the mask will only work on keyup event changes */
    @HostListener('change') public ngOnChanges() {
        const value = this.control.control.value;
        if (value) {
            this.control.control.setValue(this.format(value));
        }
    }

    @HostListener('keypress', ['$event']) public onKeyUp($event: any) {
        if ($event.keyCode !== 13 && $event.keyCode !== 9) {
            const value = this.control.control.value;

            this.control.control.setValue(this.format(value));
        }
    }

    private format(v: string): string {
        let s: string = '';

        const matches = v.match(/[a-zA-Z0-9]+/g);

        if (matches !== null) {
            let value = matches.join('').split('');

            const chars = this.mask.split('');
            for (const c of chars) {
                if (value.length === 0) {
                    break;
                }

                switch (c) {
                    case '#':
                        s += value[0];
                        value = value.slice(1);
                        break;

                    case '9':
                        if (value[0].match(/\d/) !== null) {
                            s += value[0];
                            value = value.slice(1);
                        }
                        break;

                    case 'A':
                        if (value[0].match(/[a-zA-Z]/) !== null) {
                            s += value[0];
                            value = value.slice(1);
                        }
                        break;

                    default:
                        s += c;
                }
            }
        }

        return s;
    }

}
