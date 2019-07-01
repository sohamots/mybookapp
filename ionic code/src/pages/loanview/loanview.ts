import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

/**
 * Generated class for the LoanviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loanview',
  templateUrl: 'loanview.html',
})
export class LoanviewPage {

  form: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  loan : any;
  loan_id = '';

  loan_type = '';
  title = '';

  start_date = '';
  end_date = '';
  date_of_ecs = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	this.loan_type = localStorage.getItem("loan_type");

    if(this.loan_type=='1'){
      this.title = 'View Property Loan';
    }else if(this.loan_type=='2'){
      this.title = 'View Auto Loan';
    }else if(this.loan_type=='3'){
      this.title = 'View Personal Loan';
    }else if(this.loan_type=='4'){
      this.title = 'View Gold Loan';
    }

  	if(this.navParams.data && this.navParams.data.loan){
  		this.loan=this.navParams.data.loan;
  		this.loan_id = this.loan.id;
  		console.log('loan_id>>'+this.loan_id);
    }

    this.start_date = this.loan.start_date;
    this.end_date = this.loan.end_date;
    this.date_of_ecs = this.loan.date_of_ecs;

  	this.form = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'loan_acc_no': ['', Validators.compose([Validators.required])],
      'loan_amount': ['', Validators.compose([Validators.required])],
      'start_date': ['', Validators.compose([Validators.required])],
      'end_date': ['', Validators.compose([Validators.required])],
      'emi_amount': ['', Validators.compose([Validators.required])],
      'contact_person_name': ['', Validators.compose([Validators.required])],
      'contact_person_mobile': ['', Validators.compose([Validators.required])],
      'bank_details_ecs': ['', Validators.compose([Validators.required])],
      'date_of_ecs': ['', Validators.compose([Validators.required])],
      'web_login_id': ['', Validators.compose([Validators.required])],
      'property_details': ['', Validators.compose([Validators.required])],
    });

    this.form1 = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'loan_acc_no': ['', Validators.compose([Validators.required])],
      'loan_amount': ['', Validators.compose([Validators.required])],
      'start_date': ['', Validators.compose([Validators.required])],
      'end_date': ['', Validators.compose([Validators.required])],
      'emi_amount': ['', Validators.compose([Validators.required])],
      'contact_person_name': ['', Validators.compose([Validators.required])],
      'contact_person_mobile': ['', Validators.compose([Validators.required])],
      'bank_details_ecs': ['', Validators.compose([Validators.required])],
      'date_of_ecs': ['', Validators.compose([Validators.required])],
      'web_login_id': ['', Validators.compose([Validators.required])],
      'vehicle_no': ['', Validators.compose([Validators.required])],
    });

    this.form2 = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'loan_acc_no': ['', Validators.compose([Validators.required])],
      'loan_amount': ['', Validators.compose([Validators.required])],
      'start_date': ['', Validators.compose([Validators.required])],
      'end_date': ['', Validators.compose([Validators.required])],
      'emi_amount': ['', Validators.compose([Validators.required])],
      'contact_person_name': ['', Validators.compose([Validators.required])],
      'contact_person_mobile': ['', Validators.compose([Validators.required])],
      'bank_details_ecs': ['', Validators.compose([Validators.required])],
      'date_of_ecs': ['', Validators.compose([Validators.required])],
      'web_login_id': ['', Validators.compose([Validators.required])],
      'loan_taken_for': ['', Validators.compose([Validators.required])],
    });

    this.form3 = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'loan_acc_no': ['', Validators.compose([Validators.required])],
      'loan_amount': ['', Validators.compose([Validators.required])],
      'start_date': ['', Validators.compose([Validators.required])],
      'end_date': ['', Validators.compose([Validators.required])],
      'emi_amount': ['', Validators.compose([Validators.required])],
      'contact_person_name': ['', Validators.compose([Validators.required])],
      'contact_person_mobile': ['', Validators.compose([Validators.required])],
      'bank_details_ecs': ['', Validators.compose([Validators.required])],
      'date_of_ecs': ['', Validators.compose([Validators.required])],
      'web_login_id': ['', Validators.compose([Validators.required])],
      'loan_taken_for': ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditloansPage');
  }

}
