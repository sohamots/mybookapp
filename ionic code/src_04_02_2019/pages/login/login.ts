import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { OtpPage } from '../otp/otp';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {
  this.form = fb.group({
      'mobile': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let data = this.form.value;
  
    this.auth.ask_for_otp(data).then((res) => {
        if (res["status"] == "1") {
            localStorage.setItem("user_mobile",data.mobile);
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(OtpPage);

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
