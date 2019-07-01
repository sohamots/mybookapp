import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddinvestmentsPage } from '../addinvestments/addinvestments';
/**
 * Generated class for the PropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property',
  templateUrl: 'property.html',
})
export class PropertyPage {

	gotoAddinvestmentsPage() {
		this.navCtrl.push(AddinvestmentsPage);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyPage');
  }

}
