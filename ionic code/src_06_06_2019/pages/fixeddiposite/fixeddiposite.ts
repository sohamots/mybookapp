import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddaccountsPage } from '../addaccounts/addaccounts';
import { EditaccountsPage } from '../editaccounts/editaccounts';
import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the FixeddipositePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fixeddiposite',
  templateUrl: 'fixeddiposite.html',
})
export class FixeddipositePage {

	gotoAddaccountsPage() {
    localStorage.setItem("bank_type","2");
		this.navCtrl.push(AddaccountsPage);
	}

  gotoEditaccountsPage(item) {
    localStorage.setItem("bank_type","2");
    this.navCtrl.push(EditaccountsPage,{bank:item});
  }

   fixed_deposits = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_fixed_deposits(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.fixed_deposits=res["fixed_deposits"];
      }
    })
  }

  populateList(refresher){
    this.auth.fetch_fixed_deposits(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.fixed_deposits=res["fixed_deposits"];
      }
    })
    refresher.complete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FixeddipositePage');
  }

}
