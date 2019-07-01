import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Step3Page } from '../step3/step3';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

/**
 * Generated class for the Step2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step2',
  templateUrl: 'step2.html',
})
export class Step2Page {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {
  this.form = fb.group({
      'otp': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step2Page');
  }

  verify_no_register() {
    let data = this.form.value;
    data.mobile = localStorage.getItem("user_mobile");
  
    this.auth.verify_no_register(data).then((res) => {
        if (res["status"] == "1") {
            localStorage.setItem("user_mobile","");
            localStorage.setItem("user_id",res["user_id"]);
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Dismiss']
            });
            alert.present();
            this.navCtrl.push(Step3Page);

        } else {
            let alert = this.alert.create({
                title: 'Error',
                subTitle: res["message"],
                buttons: ['Dismiss']
            });
            alert.present();
        }
    })
  }
}
