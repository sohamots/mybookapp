import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LifeinsurancePage } from '../lifeinsurance/lifeinsurance';
import { HealthinsurancePage } from '../healthinsurance/healthinsurance';
import { MotorinsurancePage } from '../motorinsurance/motorinsurance';
import { PropertyinsurancePage } from '../propertyinsurance/propertyinsurance';
/**
 * Generated class for the PoliciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policies',
  templateUrl: 'policies.html',
})
export class PoliciesPage {

	gotoLifeinsurancePage(){
		this.navCtrl.push(LifeinsurancePage);
	}
	gotoHealthinsurancePage(){
		this.navCtrl.push(HealthinsurancePage);
	}
	gotoMotorinsurancePage(){
		this.navCtrl.push(MotorinsurancePage);
	}
	gotoPropertyinsurancePage(){
		this.navCtrl.push(PropertyinsurancePage);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoliciesPage');
  }

}
