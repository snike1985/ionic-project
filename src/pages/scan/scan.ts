import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'jb-page-scan',
    templateUrl: 'scan.html',
})
export class ScanPage {

    public title: string;
    public image: object;
    public duration: number = 5;

    private interval: any;
    private data: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {

        this.title = this.navParams.get('title');
        this.image = this.navParams.get('image');
        this.data = this.navParams.get('data');

        this.timer();
    }

    private timer() {

        this.interval = setInterval(() => {

            this.duration = this.duration - 1;

            if (this.duration <= 0) {

                clearInterval(this.interval);

                this.data['isPending'] = false;
                this.data['isVerified'] = true;
                this.data['value'] = 'Passport. TT 020569';

                this.navCtrl.pop();
            }
        }, 1000);
    }
}
