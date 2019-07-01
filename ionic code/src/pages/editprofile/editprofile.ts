import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth.provider';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  userDetails:any;
 	constructor(public navCtrl: NavController, public navParams: NavParams, private alert:AlertController, private auth:AuthProvider) {
  }


  ionViewDidLoad() {
  	if(localStorage.getItem("userDetails")){
    	this.userDetails=JSON.parse(localStorage.getItem("userDetails"))
    }
    console.log('ionViewDidLoad EditprofilePage');
  }

  save() {
    if (this.userDetails && this.userDetails.name) {
        const data = {
            id: this.userDetails.id,
            name: this.userDetails.name,
            email: this.userDetails.email,
            phone: this.userDetails.phone,
            dob: this.userDetails.dob,
            residence_address: this.userDetails.residence_address,
            office_address: this.userDetails.office_address,
            fax: this.userDetails.fax,
            bloog_group: this.userDetails.bloog_group,
        };
        this.auth.step3_update(data).then((res) => {

            if (res["status"] == "1") {
                let toUpdateData = JSON.parse(localStorage.getItem("userDetails"));
                toUpdateData.name = this.userDetails.name;
                toUpdateData.email = this.userDetails.email;
                toUpdateData.phone = this.userDetails.phone;
                toUpdateData.dob = this.userDetails.dob;
                toUpdateData.residence_address = this.userDetails.residence_address;
                toUpdateData.office_address = this.userDetails.office_address;
                toUpdateData.fax = this.userDetails.fax;
                toUpdateData.bloog_group = this.userDetails.bloog_group;
                localStorage.setItem("userDetails", JSON.stringify(toUpdateData));
                let alert = this.alert.create({
                    title: 'Success',
                    subTitle: "Thank you for updating your profile",
                    buttons: ['Ok']
                });
                alert.present();
                this.navCtrl.setRoot(HomePage);

            } else {
                let alert = this.alert.create({
                    title: 'Error',
                    subTitle: res["message"],
                    buttons: ['Ok']
                });
                alert.present();
            }

        }).catch((err) => {
            let alert = this.alert.create({
                title: 'Error',
                subTitle: "Please try again later.",
                buttons: ['Ok']
            });
            alert.present();
        })
    } else {
        let alert = this.alert.create({
            title: 'Error',
            subTitle: "Name and mobile are required.",
            buttons: ['Ok']
        });
        alert.present();
    }
   }

}
