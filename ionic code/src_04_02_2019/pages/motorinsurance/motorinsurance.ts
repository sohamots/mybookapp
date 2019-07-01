import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AddinsurancePage } from '../addinsurance/addinsurance';

import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the MotorinsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-motorinsurance',
  templateUrl: 'motorinsurance.html',
})
export class MotorinsurancePage {
	motor_insurance_policies = [];
  gotoAddinsurancePage() {
    localStorage.setItem("insurance_type","4");
    this.navCtrl.push(AddinsurancePage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_motor_insurance_policies(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.motor_insurance_policies=res["motor_insurance_policies"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotorinsurancePage');
  }

}
