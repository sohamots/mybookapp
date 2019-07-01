import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddinsurancePage } from '../addinsurance/addinsurance';

import { AuthProvider } from '../../providers/auth.provider';

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

}
