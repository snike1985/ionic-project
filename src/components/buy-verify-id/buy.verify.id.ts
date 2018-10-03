import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VisibilityChanged} from '../../shared/configs/animations.config';

@Component({
    selector: 'jb-buy-verify-id',
    templateUrl: 'buy.verify.id.html',
    animations: [VisibilityChanged]
})
export class BuyVerifyIdComponent {

    @Input() public items: any[];
    @Input() public activeStep: number;

    @Output() public goNext = new EventEmitter();

    public curData: any = {
        type: 'scan',
        name: 'ID',
        value: '',
        btnText: 'Add ID Document',
        isPending: false,
        isVerified: false,
        isRejected: false
    };

    public goToNextStep() {
        this.goNext.emit();
    }
}
