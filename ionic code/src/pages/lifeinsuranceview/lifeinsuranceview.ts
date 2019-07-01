import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { EditinsurancePage } from '../editinsurance/editinsurance';
/**
 * Generated class for the LifeinsuranceviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifeinsuranceview',
  templateUrl: 'lifeinsuranceview.html',
})
export class LifeinsuranceviewPage {

	gotoEditinsurancePage(item) {
    localStorage.setItem("insurance_type","1");
    this.navCtrl.push(EditinsurancePage,{insurance:item});
  }

	insurance : any;
  insurance_id = '';
  form: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  insurance_type = '';
  title = '';

  start_date = '';
  maturity_date = '';
  renewel_date = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	this.insurance_type = localStorage.getItem("insurance_type");

  	if(this.navParams.data && this.navParams.data.insurance){
  		this.insurance=this.navParams.data.insurance;
  		this.insurance_id = this.insurance.id;
  		console.log('insurance_id>>'+this.insurance_id);
    }

    if(this.insurance_type=='1'){
      this.title = 'View Life Insurance';
      this.start_date = this.insurance.start_date;
      this.maturity_date = this.insurance.maturity_date;
      this.renewel_date = this.insurance.renewel_date;
    }else if(this.insurance_type=='2'){
      this.title = 'View Health Insurance';
      this.start_date = this.insurance.start_date;
      this.renewel_date = this.insurance.renewel_date;
    }else if(this.insurance_type=='3'){
      this.title = 'View Property Insurance';
      this.start_date = this.insurance.start_date;
      this.renewel_date = this.insurance.renewel_date;
    }else if(this.insurance_type=='4'){
      this.title = 'View Motor Insurance';
       this.start_date = this.insurance.start_date;
      this.renewel_date = this.insurance.renewel_date;
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
    console.log('ionViewDidLoad LifeinsuranceviewPage');
  }

}
