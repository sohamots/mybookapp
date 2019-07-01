import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddloansPage } from '../addloans/addloans';

import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the PropertyloansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-propertyloans',
  templateUrl: 'propertyloans.html',
})
export class PropertyloansPage {

  loans = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_loans(JSON.parse(localStorage.getItem("userDetails")).id,'home').then((res)=>{
      if(res["status"]=="1"){
        this.loans=res["loans"];
      }
    })
  }

	gotoAddloansPage() {
    localStorage.setItem("loan_type","1");
		this.navCtrl.push(AddloansPage);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyloansPage');
  }

}
