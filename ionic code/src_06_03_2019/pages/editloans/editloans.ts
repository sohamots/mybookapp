import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

import { PropertyloansPage } from '../propertyloans/propertyloans';
import { AutoloansPage } from '../autoloans/autoloans';
import { PersonalloansPage } from '../personalloans/personalloans';
import { GoldloansPage } from '../goldloans/goldloans';

/**
 * Generated class for the EditloansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editloans',
  templateUrl: 'editloans.html',
})
export class EditloansPage {

  form: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  loan : any;
  loan_id = '';

  loan_type = '';
  title = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	this.loan_type = localStorage.getItem("loan_type");

    if(this.loan_type=='1'){
      this.title = 'Update Property Loan';
    }else if(this.loan_type=='2'){
      this.title = 'Update Auto Loan';
    }else if(this.loan_type=='3'){
      this.title = 'Update Personal Loan';
    }else if(this.loan_type=='4'){
      this.title = 'Update Gold Loan';
    }

  	if(this.navParams.data && this.navParams.data.loan){
  		this.loan=this.navParams.data.loan;
  		this.loan_id = this.loan.id;
  		console.log('loan_id>>'+this.loan_id);
    }

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

  save1() {
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
    data.id = this.loan_id;
    data.type = 'home';
  
    this.auth.update_home_loans(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(PropertyloansPage);

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
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
    data.id = this.loan_id;
    data.type = 'home';
  
    this.auth.update_auto_loans(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(AutoloansPage);

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
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
    data.id = this.loan_id;
    data.type = 'personal';
  
    this.auth.update_personal_loans(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(PersonalloansPage);

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
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
    data.id = this.loan_id;
    data.type = 'gold';
  
    this.auth.update_personal_loans(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(GoldloansPage);

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
