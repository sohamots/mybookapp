import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { PoliciesPage } from '../policies/policies';
import { LoansPage } from '../loans/loans';
import { BankdetailsPage } from '../bankdetails/bankdetails';
import { InvestmentsPage } from '../investments/investments';
import { EditprofilePage } from '../editprofile/editprofile';
import { ExtradetailsPage } from '../extradetails/extradetails';
import { SelectindentityPage } from '../selectidentity/selectidentity';
import { UploaddocPage } from '../uploaddoc/uploaddoc';
import { DocsPage } from '../docs/docs';
import { NotificationPage } from '../notification/notification';
import { PasswordPage } from '../password/password';

import { Broadcaster } from '../../providers/eventEmitter';
import { AuthProvider } from '../../providers/auth.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	userDetails:any;
	bannerDatas=[];

  gotoPasswordPage() {
    this.navCtrl.push(PasswordPage);
  }
  gotoNotificationPage() {
    this.navCtrl.push(NotificationPage);
  }
	gotoPoliciesPage() {
		this.navCtrl.push(PoliciesPage);
	}
	gotoLoansPage() {
		this.navCtrl.push(LoansPage);
	}
	gotoBankdetailsPage() {
		this.navCtrl.push(BankdetailsPage);
	}
	gotoInvestmentsPage() {
		this.navCtrl.push(InvestmentsPage);
	}
	gotoEditprofilePage() {
		this.navCtrl.push(EditprofilePage);
	}
	gotoExtradetailsPage() {
		this.navCtrl.push(ExtradetailsPage);
	}
	gotoSelectidentityPage() {
		this.navCtrl.push(SelectindentityPage);
    
	}
  gotoSelectidentityPage1(){
    //this.navCtrl.push(UploaddocPage);
    this.navCtrl.push(DocsPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private broadCaster:Broadcaster,private auth:AuthProvider, private alert:AlertController) {
  	if(localStorage.getItem("userDetails")){
    	this.userDetails=JSON.parse(localStorage.getItem("userDetails"))
    }

    this.auth.fetch_banners().then((res)=>{
	    if(res["status"]=="1"){
	      this.bannerDatas=res["banners"];
	    }
	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountPage');
  }

  logOut(){
   //localStorage.clear();
   //this.broadCaster.broadcast("loggedOut", true);
   let confirm = this.alert.create({
        title: 'Logout Confirmation',
        message: "Do you want to logout?",
        buttons: [
            {
                text: 'No',
            },
            {
                text: 'Yes',
                handler: data => {
                    confirm.dismiss()
                    .then(() => {
                        localStorage.clear();
                        this.broadCaster.broadcast("loggedOut", true);
                    });

                    return false;
                }
            }
        ]
    });

    confirm.present();
  }

}
