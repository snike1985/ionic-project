import {Component, Input, OnChanges, SimpleChange, SimpleChanges, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'jb-scroll-steps',
    templateUrl: 'scroll.steps.html'
})
export class ScrollStepsComponent implements OnChanges {
    @Input() public items: any[];
    @Input() public activeStep: number;
    @ViewChild('scrollStepsContainer') private scrollStepsContainer: ElementRef;

    public ngOnChanges(changes: SimpleChanges) {
        const activeStep: SimpleChange = changes.activeStep;
        if (activeStep.previousValue !== activeStep.currentValue) {
            setTimeout(
                () => {
                    this.scrollToActive();
                }, 1
            );
        }
    }

    private scrollToActive() {
        const parentEl = this.scrollStepsContainer.nativeElement;
        const el = parentEl.getElementsByClassName('active')[0];
        if (el) {
            const eltLeft = el.offsetLeft;
            const elWidth = el.offsetWidth;
            const parentElWidth = parentEl.clientWidth;
            const way = parentElWidth - (eltLeft + elWidth) - 16;
            if ((eltLeft + elWidth) > parentElWidth) {
                parentEl.style.transform = `translate(${way}px, 0)`;
            }
        }
    }
}
