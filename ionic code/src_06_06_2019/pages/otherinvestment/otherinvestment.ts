import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddinvestmentsPage } from '../addinvestments/addinvestments';
/**
 * Generated class for the OtherinvestmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otherinvestment',
  templateUrl: 'otherinvestment.html',
})
export class OtherinvestmentPage {

	gotoAddinvestmentsPage() {
		this.navCtrl.push(AddinvestmentsPage);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherinvestmentPage');
  }

}
