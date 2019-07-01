import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth.provider';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

/**
 * Generated class for the FamilyviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-familyview',
  templateUrl: 'familyview.html',
})
export class FamilyviewPage {

  form: FormGroup;
  family : any;
  family_id = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider,private fb: FormBuilder) {

  	if(this.navParams.data && this.navParams.data.family){
  		this.family=this.navParams.data.family;
  		this.family_id = this.family.id;
  		console.log('family_id>>'+this.family_id);
    }

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'mobile': ['', Validators.compose([Validators.required])],
      'email': [''],
      'dob': [''],
      'blood_group': [''],
      'relation': ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyviewPage');
  }

}
