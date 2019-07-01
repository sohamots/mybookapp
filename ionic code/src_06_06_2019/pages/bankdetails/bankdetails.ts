import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BankaccountPage } from '../bankaccount/bankaccount';
import { LockerPage } from '../locker/locker';
import { DemataccountPage } from '../demataccount/demataccount';
import { CreditcardPage } from '../creditcard/creditcard';
import { FixeddipositePage } from '../fixeddiposite/fixeddiposite';
/**
 * Generated class for the BankdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bankdetails',
  templateUrl: 'bankdetails.html',
})
export class BankdetailsPage {

	gotoBankaccountPage () {
		this.navCtrl.push(BankaccountPage);
	}
	gotoLockerPage () {
		this.navCtrl.push(LockerPage);
	}
	gotoDemataccountPage () {
		this.navCtrl.push(DemataccountPage);
	}
	gotoCreditcardPage () {
		this.navCtrl.push(CreditcardPage);
	}
	gotoFixeddipositePage() {
		this.navCtrl.push(FixeddipositePage);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankdetailsPage');
  }

}
