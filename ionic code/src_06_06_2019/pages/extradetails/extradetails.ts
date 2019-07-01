import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ExtraPage } from '../extra/extra';
import { Extra1Page } from '../extra1/extra1';
import { AuthProvider } from '../../providers/auth.provider';
/**
 * Generated class for the ExtradetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extradetails',
  templateUrl: 'extradetails.html',
})
export class ExtradetailsPage {

	family_members = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
    this.auth.fetch_family_members(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.family_members=res["family_members"];
      }
    })
  }

  goToAdextra() {
    this.navCtrl.push(ExtraPage);
  }

  goToAdextra1(item) {
    this.navCtrl.push(Extra1Page,{family:item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtradetailsPage');
  }

}
