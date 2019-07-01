import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddaccountsPage } from '../addaccounts/addaccounts';
import { EditaccountsPage } from '../editaccounts/editaccounts';
import { AuthProvider } from '../../providers/auth.provider';

import { AccountviewPage } from '../accountview/accountview';

/**
 * Generated class for the BankaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bankaccount',
  templateUrl: 'bankaccount.html',
})
export class BankaccountPage {

	gotoAddaccountsPage() {
    localStorage.setItem("bank_type","1");
		this.navCtrl.push(AddaccountsPage);
	}

  gotoEditaccountsPage(item) {
    localStorage.setItem("bank_type","1");
    this.navCtrl.push(EditaccountsPage,{bank:item});
  }

   gotoAccountviewPage(item) {
    localStorage.setItem("bank_type","1");
    this.navCtrl.push(AccountviewPage,{bank:item});
  }

  bank_accounts = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_bank_accounts(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.bank_accounts=res["bank_accounts"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankaccountPage');
  }

  populateList(refresher){
    this.auth.fetch_bank_accounts(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.bank_accounts=res["bank_accounts"];
      }
    })
    refresher.complete();
  }

}
