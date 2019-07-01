import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';


/**
 * Generated class for the AccountviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountview',
  templateUrl: 'accountview.html',
})
export class AccountviewPage {

  bank_type = '';
  form: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;

  bank : any;
  bank_id = '';

  validity_date = '';
  maturity_date = '';
  invest_date = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	this.bank_type = localStorage.getItem("bank_type");

  	if(this.navParams.data && this.navParams.data.bank){
  		this.bank=this.navParams.data.bank;
  		this.bank_id = this.bank.id;
  		console.log('bank_id>>'+this.bank_id);
    }

    if(this.bank_type=='5'){
      this.validity_date = this.bank.validity_date;
    }else if(this.bank_type=='2'){
      this.invest_date = this.bank.invest_date;
      this.maturity_date = this.bank.maturity_date;
    }

    this.form = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'branch_address': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'acc_no': ['', Validators.compose([Validators.required])],
      'acc_type': [''],
      'ifsc_code': ['', Validators.compose([Validators.required])],
      'micr_code': [''],
      'debit_card': [''],
      'cheque_book': [''],
      'net_banking_id': [''],
      'email': [''],
      'mobile': ['', Validators.compose([Validators.required])],
      'help_line': [''],
      'rm_name': [''],
      'rm_mobile': [''],
      'manager_name': [''],
      'manager_mobile': ['']
    });

    this.form1 = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'branch_address': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'fd_no': ['', Validators.compose([Validators.required])],
      'amount': ['', Validators.compose([Validators.required])],
      'invest_date': ['', Validators.compose([Validators.required])],
      'duration': [''],
      'rate': [''],
      'maturity_date': [''],
      'maturity_amount': ['']
    });

    this.form2 = fb.group({
      'company_name': ['', Validators.compose([Validators.required])],
      'acc_no': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'helpdesk_no': [''],
      'portal_login_id': ['']
    });

    this.form3 = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'card_no': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'credit_limit': [''],
      'validity_date': ['', Validators.compose([Validators.required])],
      'login_id': ['']
    });

    this.form4 = fb.group({
      'bank_name': ['', Validators.compose([Validators.required])],
      'branch_address': ['', Validators.compose([Validators.required])],
      'locker_no': ['', Validators.compose([Validators.required])],
      'holder_name': ['', Validators.compose([Validators.required])],
      'items': ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddaccountsPage');
  }

}
