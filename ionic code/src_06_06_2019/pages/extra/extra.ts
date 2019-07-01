import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { ExtradetailsPage } from '../extradetails/extradetails';
/**
 * Generated class for the ExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {
  form: FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'mobile': ['', Validators.compose([Validators.required])],
      'email': [''],
      'dob': [''],
      'blood_group': [''],
      'relation': ['', Validators.compose([Validators.required])],
    });
  }

  save1() {
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
    
    this.auth.add_family_members(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(ExtradetailsPage);

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
  }

}
