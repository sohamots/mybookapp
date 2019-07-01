import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

/**
 * Generated class for the InvestmentviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-investmentview',
  templateUrl: 'investmentview.html',
})
export class InvestmentviewPage {

  form: FormGroup;
  form1: FormGroup;

  invest_type = '';
  invest : any;
  invest_id = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	this.invest_type = localStorage.getItem("invest_type");

  	if(this.navParams.data && this.navParams.data.invest){
  		this.invest=this.navParams.data.invest;
  		this.invest_id = this.invest.id;
  		console.log('invest_id>>'+this.invest_id);
    }

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
    console.log('ionViewDidLoad EditinvestmentsPage');
  }

}
