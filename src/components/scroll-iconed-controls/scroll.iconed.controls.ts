import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'jb-scroll-iconed-controls',
    templateUrl: 'scroll.iconed.controls.html'
})
export class ScrollIconedControlsComponent {

    @Input() public items: any[];
    @Input() public activeTab: number;

    @Output() public setActiveState = new EventEmitter();

    private clientX = 0;
    private currentScrollWay = 0;
    private currentScrollPos = 0;

    public clickItem(event: any, index: number) {
        this.setActiveState.emit(index);

        this.scrollToElement(event);
    }

    public touchstart(event: any) {

        this.clientX = event.touches[0].clientX;
    }

    public touchend(event: any) {
        let deltaX = 0;

        deltaX = event.changedTouches[0].clientX - this.clientX;
        this.moveScroll(event, deltaX);

        this.currentScrollWay = this.currentScrollPos;
    }

    public touchMove(event: any) {

        let deltaX = 0;

        deltaX = event.changedTouches[0].clientX - this.clientX;
        this.moveScroll(event, deltaX);
    }

    private moveScroll(event: any, way: number) {

        const el = event.target;
        const parentEl = el.parentNode;
        const parentElWidth = parentEl.clientWidth;
        const parentElScrollWidth = parentEl.scrollWidth;
        const maxWay = parentElScrollWidth - parentElWidth;
        const currentWay = way + this.currentScrollWay;

        if (-currentWay > maxWay) {

            parentEl.style.transform = `translate(${-maxWay}px, 0)`;

        } else if (currentWay > -1) {

            parentEl.style.transform = `translate(0, 0)`;
            this.currentScrollPos = 0;

        } else {

            parentEl.style.transform = `translate(${currentWay}px, 0)`;
            this.currentScrollPos = currentWay;

        }
    }

    private scrollToElement(event: any) {

        const el = event.target;
        const elStyle = el.currentStyle || window.getComputedStyle(el);
        const marRight = Number(elStyle.marginRight.replace('px', ''));
        const eltLeft = el.offsetLeft;
        const elWidth = el.offsetWidth;
        const parentEl = el.parentNode;
        const parentElWidth = parentEl.clientWidth;
        const way = parentElWidth - (eltLeft + elWidth) - marRight;

        if ((eltLeft + elWidth + marRight) > parentElWidth) {

            if (this.currentScrollWay - way > 0) {
                parentEl.style.transform = `translate(${way}px, 0)`;
                this.currentScrollWay = way;
            }

        } else {
            parentEl.style.transform = `translate(0, 0)`;
            this.currentScrollWay = 0;
        }
    }
}
