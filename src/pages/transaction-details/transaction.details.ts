import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransactionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'jb-page-transaction-details',
  templateUrl: 'transaction.details.html',
})
export class TransactionDetailsPage {
  public transaction = {
    name: '',
    value: 0,
    valueInfo: {
      value: 0,
      currency: ''
    },
    icon: '',
    status: '',
    listInfo: [
      {
        title: '',
        value: ''
      }
    ]
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.transaction = navParams.data;
  }

  private ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionDetailsPage');
  }

}
