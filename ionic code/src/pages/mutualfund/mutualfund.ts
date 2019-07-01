import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddinvestmentsPage } from '../addinvestments/addinvestments';
import { AuthProvider } from '../../providers/auth.provider';
import { EditinvestmentsPage } from '../editinvestments/editinvestments';
import { InvestmentviewPage } from '../investmentview/investmentview';

/**
 * Generated class for the MutualfundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mutualfund',
  templateUrl: 'mutualfund.html',
})
export class MutualfundPage {

	gotoAddaccountsPage() {
    localStorage.setItem("invest_type","1");
		this.navCtrl.push(AddinvestmentsPage);
	}

  gotoEditAccountPage(item) {
    localStorage.setItem("invest_type","1");
    this.navCtrl.push(EditinvestmentsPage,{invest:item});
  }

  gotoInvestmentviewPage(item) {
    localStorage.setItem("invest_type","1");
    this.navCtrl.push(InvestmentviewPage,{invest:item});
  }

  mutual_funds = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_mutual_funds(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.mutual_funds=res["mutual_funds"];
      }
    })
  }

  populateList(refresher){
    this.auth.fetch_mutual_funds(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.mutual_funds=res["mutual_funds"];
      }
    })
    refresher.complete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MutualfundPage');
  }

}
