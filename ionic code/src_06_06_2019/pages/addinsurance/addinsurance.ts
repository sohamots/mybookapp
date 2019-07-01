import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

import { LifeinsurancePage } from '../lifeinsurance/lifeinsurance';
import { HealthinsurancePage } from '../healthinsurance/healthinsurance';
import { MotorinsurancePage } from '../motorinsurance/motorinsurance';
import { PropertyinsurancePage } from '../propertyinsurance/propertyinsurance';

/**
 * Generated class for the AddinsurancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addinsurance',
  templateUrl: 'addinsurance.html',
})
export class AddinsurancePage {

  form: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  today = '';

  insurance_type = '';
  title = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

    this.today = new Date().toISOString();
    console.log("today>>"+this.today);

  	this.insurance_type = localStorage.getItem("insurance_type");

    if(this.insurance_type=='1'){
      this.title = 'Add Life Insurance';
    }else if(this.insurance_type=='2'){
      this.title = 'Add Health Insurance';
    }else if(this.insurance_type=='3'){
      this.title = 'Add Property Insurance';
    }else if(this.insurance_type=='4'){
      this.title = 'Add Motor Insurance';
    }

  	this.form = fb.group({
      'company_name': ['', Validators.compose([Validators.required])],
      'plan_name': ['', Validators.compose([Validators.required])],
      'policy_no': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'nominee_name': [''],
      'sum': ['', Validators.compose([Validators.required])],
      'start_date': [''],
      'maturity_date': [''],
      'policy_term': [''],
      'premium_amount': ['', Validators.compose([Validators.required])],
      'renewel_date': ['', Validators.compose([Validators.required])],
      'adviser_name': ['', Validators.compose([Validators.required])],
      'adviser_mobile': ['', Validators.compose([Validators.required])],
      'company_help_desk': [''],
      'customer_portal_login_id': ['']
    });

    this.form1 = fb.group({
      'company_name': ['', Validators.compose([Validators.required])],
      'plan_name': ['', Validators.compose([Validators.required])],
      'policy_no': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'family_members': [''],
      'sum': ['', Validators.compose([Validators.required])],
      'start_date': [''],
      'premium_amount': ['', Validators.compose([Validators.required])],
      'renewel_date': ['', Validators.compose([Validators.required])],
      'adviser_name': ['', Validators.compose([Validators.required])],
      'adviser_mobile': ['', Validators.compose([Validators.required])],
      'company_help_desk': [''],
      'customer_portal_login_id': ['']
    });

    this.form2 = fb.group({
      'company_name': ['', Validators.compose([Validators.required])],
      'plan_name': ['', Validators.compose([Validators.required])],
      'policy_no': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'property_details': [''],
      'coverage_amount': ['', Validators.compose([Validators.required])],
      'coverage_type': ['', Validators.compose([Validators.required])],
      'start_date': [''],
      'premium_amount': ['', Validators.compose([Validators.required])],
      'renewel_date': ['', Validators.compose([Validators.required])],
      'renewel_amount': ['', Validators.compose([Validators.required])],
      'adviser_name': ['', Validators.compose([Validators.required])],
      'adviser_mobile': ['', Validators.compose([Validators.required])],
      'company_help_desk': [''],
      'customer_portal_login_id': ['']
    });

    this.form3 = fb.group({
      'company_name': ['', Validators.compose([Validators.required])],
      'policy_no': ['', Validators.compose([Validators.required])],
      'declared_amount': ['', Validators.compose([Validators.required])],
      'coverage_type': ['', Validators.compose([Validators.required])],
      'start_date': [''],
      'premium_amount': ['', Validators.compose([Validators.required])],
      'renewel_date': ['', Validators.compose([Validators.required])],
      'renewel_amount': ['', Validators.compose([Validators.required])],
      'adviser_name': ['', Validators.compose([Validators.required])],
      'adviser_mobile': ['', Validators.compose([Validators.required])],
      'company_help_desk': [''],
      'customer_portal_login_id': [''],
      'vehicle_reg_no': [''],
      'make': [''],
      'model': [''],
      'year': ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddinsurancePage');
  }

  save1() {
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
  
    this.auth.add_life_insurance_policies(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(LifeinsurancePage);

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
  
    this.auth.add_health_insurance_policies(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(HealthinsurancePage);

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

  save3() {
    let data = this.form2.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
  
    this.auth.add_home_property_insurance_policies(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(PropertyinsurancePage);

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

  save4() {
    let data = this.form3.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
  
    this.auth.add_motor_insurance_policies(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(MotorinsurancePage);

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
