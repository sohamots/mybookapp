import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MutualfundPage } from '../mutualfund/mutualfund';
import { PropertyPage } from '../property/property';
import { PffinvestmentPage } from '../pffinvestment/pffinvestment';
import { OtherinvestmentPage } from '../otherinvestment/otherinvestment';
/**
 * Generated class for the InvestmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-investments',
  templateUrl: 'investments.html',
})
export class InvestmentsPage {

	gotoMutualfundPage() {
		this.navCtrl.push(MutualfundPage);
	}
	gotoPropertyPage() {
		this.navCtrl.push(PropertyPage);
	}
	gotoPffinvestmentPage() {
		this.navCtrl.push(PffinvestmentPage);
	}
	gotoOtherinvestmentPage() {
		this.navCtrl.push(OtherinvestmentPage);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestmentsPage');
  }

}
