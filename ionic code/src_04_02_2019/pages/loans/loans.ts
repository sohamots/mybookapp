import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PropertyloansPage } from '../propertyloans/propertyloans';
import { AutoloansPage } from '../autoloans/autoloans';
import { PersonalloansPage } from '../personalloans/personalloans';
import { GoldloansPage } from '../goldloans/goldloans';
/**
 * Generated class for the LoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loans',
  templateUrl: 'loans.html',
})
export class LoansPage {

	gotoPropertyloansPage() {
		this.navCtrl.push(PropertyloansPage);
	}
	gotoAutoloansPage() {
		this.navCtrl.push(AutoloansPage);
	}
	gotoPersonalloansPage() {
		this.navCtrl.push(PersonalloansPage);
	}
	gotoGoldloansPage() {
		this.navCtrl.push(GoldloansPage);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoansPage');
  }

}
