import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddinsurancePage } from '../addinsurance/addinsurance';

import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the PropertyinsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-propertyinsurance',
  templateUrl: 'propertyinsurance.html',
})
export class PropertyinsurancePage {
  home_property_insurance_policies = [];
  gotoAddinsurancePage() {
    localStorage.setItem("insurance_type","3");
    this.navCtrl.push(AddinsurancePage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_home_property_insurance_policies(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.home_property_insurance_policies=res["home_property_insurance_policies"];
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyinsurancePage');
  }

}
