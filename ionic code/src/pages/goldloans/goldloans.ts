import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddloansPage } from '../addloans/addloans';
import { EditloansPage } from '../editloans/editloans';
import { AuthProvider } from '../../providers/auth.provider';

import { LoanviewPage } from '../loanview/loanview';

/**
 * Generated class for the GoldloansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goldloans',
  templateUrl: 'goldloans.html',
})
export class GoldloansPage {

  loans = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_loans(JSON.parse(localStorage.getItem("userDetails")).id,'gold').then((res)=>{
      if(res["status"]=="1"){
        this.loans=res["loans"];
      }
    })
  }

  populateList(refresher){
    this.auth.fetch_loans(JSON.parse(localStorage.getItem("userDetails")).id,'gold').then((res)=>{
      if(res["status"]=="1"){
        this.loans=res["loans"];
      }
    })
    refresher.complete();
  }

	gotoAddloansPage() {
  localStorage.setItem("loan_type","4");
		this.navCtrl.push(AddloansPage);
	}

  gotoLoanviewPage(item) {
    localStorage.setItem("loan_type","4");
    this.navCtrl.push(LoanviewPage,{loan:item});
  }

  gotoEditloansPage(item) {
    localStorage.setItem("loan_type","4");
    this.navCtrl.push(EditloansPage,{loan:item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoldloansPage');
  }

}
