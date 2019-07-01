import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddinsurancePage } from '../addinsurance/addinsurance';
import { EditinsurancePage } from '../editinsurance/editinsurance';

import { AuthProvider } from '../../providers/auth.provider';
import { LifeinsuranceviewPage } from '../lifeinsuranceview/lifeinsuranceview';

/**
 * Generated class for the HealthinsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-healthinsurance',
  templateUrl: 'healthinsurance.html',
})
export class HealthinsurancePage {

	health_insurance_policies = [];
  gotoAddinsurancePage() {
    localStorage.setItem("insurance_type","2");
    this.navCtrl.push(AddinsurancePage);
  }

  gotoEditinsurancePage(item) {
    localStorage.setItem("insurance_type","2");
    this.navCtrl.push(EditinsurancePage,{insurance:item});
  }

  gotoLifeinsuranceviewPage(item) {
    localStorage.setItem("insurance_type","2");
    this.navCtrl.push(LifeinsuranceviewPage,{insurance:item});
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_health_insurance_policies(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.health_insurance_policies=res["health_insurance_policies"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthinsurancePage');
  }

  populateList(refresher){
    this.auth.fetch_health_insurance_policies(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.health_insurance_policies=res["health_insurance_policies"];
      }
    })
    refresher.complete();
  }
}
