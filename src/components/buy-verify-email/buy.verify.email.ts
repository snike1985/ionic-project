import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VisibilityChanged} from '../../shared/configs/animations.config';

@Component({
    selector: 'jb-buy-verify-email',
    templateUrl: 'buy.verify.email.html',
    animations: [VisibilityChanged]
})
export class BuyVerifyEmailComponent {

    public isLoad: boolean = false;
    public isSend: boolean = false;
    public isVerified: boolean = false;
    public email: string = 'rusnaq@gmail.com';

    @Input() public items: any[];
    @Input() public activeStep: number;

    @Output() public goNext = new EventEmitter();

    public getLink() {
        this.isLoad = true;

        setTimeout(() => {

            this.isLoad = false;
            this.isSend = true;

            setTimeout(() => {

                this.isVerified = true;

            }, 1000);

        }, 1000);
    }

    public goToNextStep() {
        this.goNext.emit();
    }
}
