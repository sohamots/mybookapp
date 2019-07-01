import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Step1Page } from '../step1/step1';
import { LoginPage } from '../login/login';
import { WhyusPage } from '../whyus/whyus';
import { QueryPage } from '../query/query';
/**
 * Generated class for the StarterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html',
})
export class StarterPage {

	gotoStep1Page() {
		this.navCtrl.push(Step1Page)
	}

  gotoLoginPage() {
    this.navCtrl.push(LoginPage)
  }

  gotoWhyusPage() {
    this.navCtrl.push(WhyusPage)
  }

  gotoQueryPage() {
    this.navCtrl.push(QueryPage)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarterPage');
  }

}
