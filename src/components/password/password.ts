import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {SlideIn} from '../../shared/configs/animations.config';
import {ValidatorService} from '../../shared/services/validator.service';

@Component({
    selector: 'jb-password',
    templateUrl: 'password.html',
    animations: [SlideIn]
})
export class PasswordComponent implements OnChanges {

    @Input() public control: any;
    @Input() public isLeast: any;

    @Output() public isLeastChange = new EventEmitter();

    public passwordChecker: any;

    constructor(public validatorService: ValidatorService) {
    }

    public ngOnChanges() {

        this.checkPassword();
    }

    public checkPassword() {

        const val = this.control.value;

        if (!val) {
            this.isLeast = false;
            this.isLeastChange.emit(this.isLeast);
        }

        this.passwordChecker = this.validatorService.validatePassword(val);

        this.checkPasswordLeast();
    }

    public checkPasswordLeast() {

        let countLeast = 0;
        let checked = 0;

        for (const k of Object.keys(this.passwordChecker)) {

            countLeast++;

            if (this.passwordChecker.hasOwnProperty(k) && this.passwordChecker[k]) {
                checked++;
            }
        }

        if (checked === countLeast) {
            this.isLeast = true;
            this.isLeastChange.emit(this.isLeast);
        } else {
            this.isLeast = false;
            this.isLeastChange.emit(this.isLeast);
        }

        return checked === countLeast;
    }
}
