import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Step2Page } from '../step2/step2';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
/**
 * Generated class for the Step1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step1',
  templateUrl: 'step1.html',
})
export class Step1Page {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {
  this.form = fb.group({
      'email': ['', Validators.compose([Validators.email, Validators.required])],
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'mobile': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step1Page');
  }

  register() {
    let data = this.form.value;
  
    this.auth.register(data).then((res) => {
        if (res["status"] == "1") {
            localStorage.setItem("user_mobile",data.mobile);
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Dismiss']
            });
            alert.present();
            this.navCtrl.push(Step2Page);

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
