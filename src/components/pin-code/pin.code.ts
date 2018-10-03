import {Component, Input, OnChanges} from '@angular/core';
import {SlideIn} from '../../shared/configs/animations.config';
import {ValidatorService} from '../../shared/services/validator.service';

@Component({
    selector: 'jb-pin-code',
    templateUrl: 'pin.code.html',
    animations: [SlideIn]
})
export class PinCodeComponent implements OnChanges {

    @Input() public control: any;
    @Input() public isLocked: boolean;

    public pinIsFocus: boolean;

    constructor(public validatorService: ValidatorService) {

        this.pinIsFocus = false;
    }

    public ngOnChanges() {

        if (this.isLocked) {

            this.pinIsFocus = false;
        }
    }

    public checkPin(index: number) {

        const value = this.control.value.toString();

        return value[index];
    }

    public checkMaxLength(max: number, value: any) {

        if (value.length < max) {
            return;
        }

        this.control.setValue(value.substr(0, max));

    }
}
