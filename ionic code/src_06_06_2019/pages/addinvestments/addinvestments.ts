import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

import { MutualfundPage } from '../mutualfund/mutualfund';
import { PffinvestmentPage } from '../pffinvestment/pffinvestment';

/**
 * Generated class for the AddinvestmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addinvestments',
  templateUrl: 'addinvestments.html',
})
export class AddinvestmentsPage {

  form: FormGroup;
  form1: FormGroup;

  invest_type = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	this.invest_type = localStorage.getItem("invest_type");

  	this.form = fb.group({
      'scheme_name': ['', Validators.compose([Validators.required])],
      'folio_no': ['', Validators.compose([Validators.required])],
      'fund_opted': [''],
      'fund_type': [''],
      'payout_option': [''],
      'sip_sum': [''],
      'sip_tenure': [''],
      'portal_login_id': ['']
    });

    this.form1 = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'branch_address': [''],
      'acc_no': ['', Validators.compose([Validators.required])],
      'payment_date': [''],
      'deposit_made': [''],
      'payment_made': ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddinvestmentsPage');
  }

  save1() {
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
  
    this.auth.add_mutual_funds(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(MutualfundPage);

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

  save2() {
    let data = this.form1.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
  
    this.auth.add_ppf_investments(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(PffinvestmentPage);

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
