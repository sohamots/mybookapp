import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
/**
 * Generated class for the Step3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-step3',
  templateUrl: 'step3.html',
})
export class Step3Page {
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {
  this.form = fb.group({
      'residence_address': ['', Validators.compose([Validators.required])],
      'phone': [''],
      'office_address': [''],
      'fax': [''],
      'dob': [''],
      'blood_group': [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Step3Page');
  }

  step3_update() {
    let data = this.form.value;
    data.id = localStorage.getItem("user_id");
  
    this.auth.step3_update(data).then((res) => {
        if (res["status"] == "1") {
            localStorage.setItem("user_id","");
            localStorage.setItem("userDetails", JSON.stringify(res["user"]));
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Dismiss']
            });
            alert.present();
            this.navCtrl.push(HomePage);

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
