import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddinvestmentsPage } from '../addinvestments/addinvestments';
import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the PffinvestmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pffinvestment',
  templateUrl: 'pffinvestment.html',
})
export class PffinvestmentPage {

	gotoAddaccountsPage() {
    localStorage.setItem("invest_type","2");
		this.navCtrl.push(AddinvestmentsPage);
	}

  ppf_investments = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_ppf_investments(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.ppf_investments=res["ppf_investments"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PffinvestmentPage');
  }

}
