import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddloansPage } from '../addloans/addloans';
import { EditloansPage } from '../editloans/editloans';

import { LoanviewPage } from '../loanview/loanview';

import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the PersonalloansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personalloans',
  templateUrl: 'personalloans.html',
})
export class PersonalloansPage {

  loans = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_loans(JSON.parse(localStorage.getItem("userDetails")).id,'personal').then((res)=>{
      if(res["status"]=="1"){
        this.loans=res["loans"];
      }
    })
  }

	gotoAddloansPage() {
    localStorage.setItem("loan_type","3");
		this.navCtrl.push(AddloansPage);
	}

  gotoEditloansPage(item) {
    localStorage.setItem("loan_type","3");
    this.navCtrl.push(EditloansPage,{loan:item});
  }

  gotoLoanviewPage(item) {
    localStorage.setItem("loan_type","3");
    this.navCtrl.push(LoanviewPage,{loan:item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalloansPage');
  }

  populateList(refresher){
    this.auth.fetch_loans(JSON.parse(localStorage.getItem("userDetails")).id,'personal').then((res)=>{
      if(res["status"]=="1"){
        this.loans=res["loans"];
      }
    })
    refresher.complete();
  }

}
