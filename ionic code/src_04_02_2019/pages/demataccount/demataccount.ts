import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddaccountsPage } from '../addaccounts/addaccounts';
import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the DemataccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demataccount',
  templateUrl: 'demataccount.html',
})
export class DemataccountPage {

	gotoAddaccountsPage() {
    localStorage.setItem("bank_type","3");
		this.navCtrl.push(AddaccountsPage);
	}

  demat_accounts = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_demat_accounts(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.demat_accounts=res["demat_accounts"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemataccountPage');
  }

}
