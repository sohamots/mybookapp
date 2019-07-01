import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddaccountsPage } from '../addaccounts/addaccounts';
import { EditaccountsPage } from '../editaccounts/editaccounts';
import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the CreditcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creditcard',
  templateUrl: 'creditcard.html',
})
export class CreditcardPage {

	gotoAddaccountsPage() {
    localStorage.setItem("bank_type","4");
		this.navCtrl.push(AddaccountsPage);
	}

  gotoEditaccountsPage(item) {
    localStorage.setItem("bank_type","4");
    this.navCtrl.push(EditaccountsPage,{bank:item});
  }

  credit_cards = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_credit_cards(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.credit_cards=res["credit_cards"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditcardPage');
  }

}
