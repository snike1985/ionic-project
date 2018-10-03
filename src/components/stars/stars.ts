import {Component, Input} from '@angular/core';

@Component({
    selector: 'jb-stars',
    templateUrl: 'stars.html'
})
export class StarsComponent {

    @Input() public rateModel: any;

    public stars: any = [];
    public step: number = 0;

    private starsCount: number = 5;

    constructor() {

        this.setStars();
    }

    public setRate(curIndex: number) {

        function drawRate(value: any, index: number, current: boolean, active: boolean) {

            setTimeout(() => {
                value.active = active;
                value.current = current;
            }, index * 100);
        }

        this.stars.forEach((value: any, index: number) => {

            if (index < curIndex) {

                drawRate(value, index, false, true);

            } else if (index === curIndex) {

                drawRate(value, index, true, true);

            }
        });

        this.rateModel.value = curIndex + 1;

        setTimeout(() => {
            this.rateModel.step = 1;
        }, 1500);
    }

    private setStars() {

        for (let i = 0; i < this.starsCount; i++) {

            this.stars.push({active: false, current: false});
        }
    }
}
