import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';

import {VerifyEmailModal} from '../../modals/verify-email/verify.email';
import {PersonalInfoModal} from '../../modals/personal-info/personal.info';
import {VerifyPhoneModal} from '../../modals/verify-phone/verify.phone';
import {VerifyIdModal} from '../../modals/verify-id/verify.id';
import {VerifyAddressModal} from '../../modals/verify-address/verify.address';

import {SlideIn} from '../../shared/configs/animations.config';

@IonicPage()
@Component({
    selector: 'jb-page-account-verification',
    templateUrl: 'account.verification.html',
    animations: [SlideIn]
})
export class AccountVerificationPage {

    public address: string;
    public verificatonModel: any[] = [
        {
            title: 'Level 1',
            text: 'Store, send, receive, and exchange cryptocurrencies',
            disclose: false,
            allSet: false,
            verificatonItems: [
                {
                    type: 'email',
                    name: 'Email',
                    value: 'rusnaq@gmail.com',
                    btnText: 'Verify',
                    isPending: false,
                    isVerified: false,
                    isRejected: false
                }
            ]
        },
        {
            title: 'Level 2',
            text: 'Buy crypto using credit card',
            disclose: false,
            allSet: false,
            verificatonItems: [
                {
                    type: 'personalInfo',
                    name: 'Personal information',
                    value: '',
                    btnText: 'Add',
                    isPending: false,
                    isVerified: false,
                    isRejected: false
                },
                {
                    type: 'id',
                    name: 'ID',
                    value: '',
                    btnText: 'Upload and verify',
                    isPending: false,
                    isVerified: false,
                    isRejected: false
                }
            ]
        },
        {
            title: 'Level 3',
            text: 'Enhanced verification',
            disclose: false,
            allSet: false,
            verificatonItems: [
                {
                    type: 'phone',
                    name: 'Telephone',
                    value: '',
                    btnText: 'Add and verify',
                    isPending: false,
                    isVerified: false,
                    isRejected: false
                },
                {
                    type: 'address',
                    name: 'Proof of address',
                    value: '',
                    btnText: 'Upload and verify',
                    isPending: false,
                    isVerified: false,
                    isRejected: false
                }
            ]
        }
    ];

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController) {
    }

    public checkAllSet(vereficationLevel: any) {

        let count = 0;

        const verificatonItems = vereficationLevel.verificatonItems;

        for (const item of verificatonItems) {

            if (item.isVerified) {
                count++;
            }
        }
        return count === verificatonItems.length;
    }

    public toVerified(type: string) {

        const card = this.getCurrentCard(type);

        switch (type) {

            case 'email':
                this.openVerifyEmailModal(card);
                break;
            case 'personalInfo':
                this.openPersonalInfoModal(card);
                break;
            case 'id':
                this.openVerifyIdModal(card);
                break;
            case 'phone':
                this.openVerifyPhoneModal(card);
                break;
            case 'address':
                this.openVerifyAddressModal(card);
                break;
        }
    }

    private getCurrentCard(type: string) {

        for (const item of this.verificatonModel) {

            const curCard = this.getType(item.verificatonItems, type);

            if (curCard) {
                return curCard;
            }
        }
    }

    private getType(items: any[], type: string) {

        for (const item of items) {

            if (item.type === type) {
                return item;
            }
        }
    }

    private openVerifyEmailModal(card: any) {

        const modal = this.modalCtrl.create(VerifyEmailModal, {data: card});

        modal.onDidDismiss((data: any) => {

            if (data) {
                this.toVerified(data.nextStep);
            }
        });

        modal.present();
    }

    private openPersonalInfoModal(card: any) {

        const modal = this.modalCtrl.create(PersonalInfoModal, {data: card});

        modal.onDidDismiss((data: any) => {

            if (data && data.address) {
                this.address = data.address;
            }
        });

        modal.present();
    }

    private openVerifyPhoneModal(card: any) {

        const modal = this.modalCtrl.create(VerifyPhoneModal, {data: card});

        modal.onDidDismiss((data: any) => {

            if (data) {
                this.toVerified(data.nextStep);
            }
        });

        modal.present();
    }

    private openVerifyIdModal(card: any) {

        const modal = this.modalCtrl.create(VerifyIdModal, {data: card});

        modal.onDidDismiss((data: any) => {

            if (data) {
                this.toVerified(data.nextStep);
            }
        });

        modal.present();
    }

    private openVerifyAddressModal(card: any) {

        const modal = this.modalCtrl.create(VerifyAddressModal, {data: card, address: this.address});

        modal.present();
    }
}
