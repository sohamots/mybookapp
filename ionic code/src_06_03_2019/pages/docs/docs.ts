import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { UploaddocPage } from '../uploaddoc/uploaddoc';
/**
 * Generated class for the DocsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docs',
  templateUrl: 'docs.html',
})
export class DocsPage {
	documents = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController, private auth:AuthProvider) {
  	this.auth.fetch_documents(JSON.parse(localStorage.getItem("userDetails")).id).then((res)=>{
      if(res["status"]=="1"){
        this.documents=res["documents"];
      }
    })
  }

  addDoc(){
  	this.navCtrl.push(UploaddocPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocsPage');
  }

}
