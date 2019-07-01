import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddinsurancePage } from '../addinsurance/addinsurance';
import { EditinsurancePage } from '../editinsurance/editinsurance';

import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the LifeinsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifeinsurance',
  templateUrl: 'lifeinsurance.html',
})
export class LifeinsurancePage {
  life_insurance_policies = [];
	gotoAddinsurancePage() {
    localStorage.setItem("insurance_type","1");
		this.navCtrl.push(AddinsurancePage);
	}

  gotoEditinsurancePage(item) {
    localStorage.setItem("insurance_type","1");
    this.navCtrl.push(EditinsurancePage,{insurance:item});
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_life_insurance_policies(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.life_insurance_policies=res["life_insurance_policies"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeinsurancePage');
  }

  populateList(refresher){
    this.auth.fetch_life_insurance_policies(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.life_insurance_policies=res["life_insurance_policies"];
      }
    })
    refresher.complete();
  }

}
