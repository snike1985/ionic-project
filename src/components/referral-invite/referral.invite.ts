import {Component, Input} from '@angular/core';
import {SocialSharing} from '@ionic-native/social-sharing';
import {SlideIn} from '../../shared/configs/animations.config';
import {ReceiveCoinErrorModal} from '../../modals/receive-coin-error/receive.coin.error';
import {ModalController} from 'ionic-angular';

@Component({
  selector: 'jb-referral-invite',
  templateUrl: 'referral.invite.html',
    animations: [SlideIn]
})
export class ReferralInviteComponent {

    @Input() public invitedModel: any[];
    @Input() public isLoad: boolean;

    constructor(public modalCtrl: ModalController,
                private socialSharing: SocialSharing) {
    }

    public shareInvitation() {

        const shareOptions = {
            message: 'Lets Invite To Jubiter',
            subject: `Dev`,
            url: 'http://jubiter.com/',
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
}
