import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({selector: '[jbInnerHTML]'})
export class InnerHtmlDirective implements OnInit {

    @Input('jbInnerHTML') public html: string;

    constructor(private el: ElementRef) {}

    public ngOnInit(): void {

        this.el.nativeElement.innerHTML = this.html;

    }
}
