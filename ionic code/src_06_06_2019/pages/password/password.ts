import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AuthProvider } from '../../providers/auth.provider';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {

  is_show = '0';
  new_mobile = '';
  otp = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  save(){
    if(this.new_mobile==''){
      let alert = this.alert.create({
          title: 'Error',
          subTitle: 'Please enter 10 digit mobile no',
          buttons: ['Ok']
      });
      alert.present();
    }else{
      let data = {
        "id":JSON.parse(localStorage.getItem("userDetails")).id,
        "new_mobile":this.new_mobile,
      };
      this.auth.update_new_mobile(data).then((res) => {
          if (res["status"] == "1") {
            let alert = this.alert.create({
                  title: 'Success',
                  subTitle: res["message"],
                  buttons: ['Ok']
              });
              alert.present();
              this.is_show = '1';
          } else {
              let alert = this.alert.create({
                  title: 'Error',
                  subTitle: res["message"],
                  buttons: ['Ok']
              });
              alert.present();
          }
      })
    }
  	
  }

  save1(){
  	let data = {
  		"id":JSON.parse(localStorage.getItem("userDetails")).id,
  		"new_mobile":this.new_mobile,
  		"otp":this.otp,
  	};
    this.auth.verify_new_mobile(data).then((res) => {
        if (res["status"] == "1") {
        	let alert = this.alert.create({
                title: 'Success',
                subTitle: 'You have successfully updated your mobile no',
                buttons: ['Ok']
            });
            alert.present();
            
            this.navCtrl.setRoot(HomePage);
        } else {
            let alert = this.alert.create({
                title: 'Error',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
        }
    })
  }

}
