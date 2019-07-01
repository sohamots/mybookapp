import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

import { BankaccountPage } from '../bankaccount/bankaccount';
import { LockerPage } from '../locker/locker';
import { DemataccountPage } from '../demataccount/demataccount';
import { CreditcardPage } from '../creditcard/creditcard';
import { FixeddipositePage } from '../fixeddiposite/fixeddiposite';

/**
 * Generated class for the EditaccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editaccounts',
  templateUrl: 'editaccounts.html',
})
export class EditaccountsPage {

  bank_type = '';
  form: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;

  bank : any;
  bank_id = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	this.bank_type = localStorage.getItem("bank_type");

  	if(this.navParams.data && this.navParams.data.bank){
  		this.bank=this.navParams.data.bank;
  		this.bank_id = this.bank.id;
  		console.log('bank_id>>'+this.bank_id);
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

  save1() {
    let data = this.form.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
    data.id = this.bank_id;
  
    this.auth.update_bank_accounts(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(BankaccountPage);

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
    data.id = this.bank_id;
  
    this.auth.update_fixed_deposits(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(FixeddipositePage);

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
    data.id = this.bank_id;
  
    this.auth.update_demat_accounts(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(DemataccountPage);

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
    data.id = this.bank_id;
  
    this.auth.update_credit_cards(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(CreditcardPage);

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

  save5() {
    let data = this.form4.value;
    data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;
    data.id = this.bank_id;
  
    this.auth.update_lockers(data).then((res) => {
        if (res["status"] == "1") {
            let alert = this.alert.create({
                title: 'Success',
                subTitle: res["message"],
                buttons: ['Ok']
            });
            alert.present();
            this.navCtrl.push(LockerPage);

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
