import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddaccountsPage } from '../addaccounts/addaccounts';
import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the LockerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locker',
  templateUrl: 'locker.html',
})
export class LockerPage {

	gotoAddaccountsPage() {
    localStorage.setItem("bank_type","5");
		this.navCtrl.push(AddaccountsPage);
	}

  lockers = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_lockers(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.lockers=res["lockers"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockerPage');
  }

}
