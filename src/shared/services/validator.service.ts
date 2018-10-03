import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable()
export class ValidatorService {

    // unamePattern = "^[a-z0-9_-]{8,15}$";
    // pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
    // mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    // lowerCase = '/^(?=.*?[a-z])/'
    // upperCase = '/^(?=.*?[A-Z])/'
    // oneNumber = '/^(?=.*?[0-9])/'
    // oneSpecial = '/\W+/g'
    // minChar = '/^.{8,}/'

    public validateEmail(c: FormControl) {

        const emailReg = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');

        return emailReg.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    }

    public validatePassword(value: string) {

        const checkModel = {
            lowerCase: false,
            upperCase: false,
            oneNumber: false,
            oneSpecial: false,
            minChar: false
        };

        /^(?=.*?[a-z])/.test(value) ? checkModel.lowerCase = true : checkModel.lowerCase = false;
        /^(?=.*?[A-Z])/.test(value) ? checkModel.upperCase = true : checkModel.upperCase = false;
        /^(?=.*?[0-9])/.test(value) ? checkModel.oneNumber = true : checkModel.oneNumber = false;
        /\W+/g.test(value) ? checkModel.oneSpecial = true : checkModel.oneSpecial = false;
        /^.{8,}/.test(value) ? checkModel.minChar = true : checkModel.minChar = false;

        return checkModel;
    }

    public isErrored(control: any) {

        return !control.valid && control.touched;
    }
}
