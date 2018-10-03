import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from '../../shared/services/validator.service';
import {SocialSharing} from '@ionic-native/social-sharing';
import {ReceiveCoinErrorModal} from '../../modals/receive-coin-error/receive.coin.error';
import {SlideIn} from '../../shared/configs/animations.config';
import {ModalController} from 'ionic-angular';

@Component({
    selector: 'jb-referral-link',
    templateUrl: 'referral.link.html',
    animations: [SlideIn]
})
export class ReferralLinkComponent {

    @Input() public linksModel: any[];

    public isCreateState: boolean = false;
    public isCreateStateDisable: boolean = false;
    public linkForm: FormGroup;
    public isLinkCreate: boolean = false;

    constructor(public validatorService: ValidatorService,
                public modalCtrl: ModalController,
                private socialSharing: SocialSharing,
                private formBuilder: FormBuilder) {

        this.onInit();
    }

    public generateLink() {

        const newLink = {
            url: 'https://jubiter.com/referral/facebook/cryptoman',
            name: this.linkForm.controls[ 'link' ].value,
            clicks: '0',
            regs: '0',
            deposits: '0',
            earned: '0',
        };

        this.linksModel.push( newLink );
        this.isCreateState = false;
        this.isCreateStateDisable = true;
    }

    public toggleFormVisible() {
        this.isCreateState = !this.isCreateState;
    }

    public shareLink(link: string) {

        console.log(link);

        const shareOptions = {
            message: 'Lets Invite To Jubiter',
            subject: `Dev`,
            url: link,
            chooserTitle: 'Lets Invite To Jubiter'
        };

        this.socialSharing.shareWithOptions(shareOptions)
            .then((res) => {
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
                const modal = this.modalCtrl.create(ReceiveCoinErrorModal, {type: 'referrals'});
                modal.present();
            });
    }

    private onInit() {

        this.linkForm = this.formBuilder.group({
            link: new FormControl(
                '', Validators.compose([
                    Validators.required
                ]))
        });
    }
}
