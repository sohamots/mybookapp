import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,ToastController} from 'ionic-angular';
import { PoliciesPage } from '../policies/policies';
import { LoansPage } from '../loans/loans';
import { BankdetailsPage } from '../bankdetails/bankdetails';
import { InvestmentsPage } from '../investments/investments';
import { EditprofilePage } from '../editprofile/editprofile';
import { ExtradetailsPage } from '../extradetails/extradetails';

import { Broadcaster } from '../../providers/eventEmitter';
import { AuthProvider } from '../../providers/auth.provider';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-selectidentity',
  templateUrl: 'selectidentity.html'
})
export class SelectindentityPage {
	userDetails:any;
	imageURI1:any;
	imageURI2:any;
	imageURI3:any;
	imageURI4:any;

	imageFileName1:any;
	imageFileName2:any;
	imageFileName3:any;
	imageFileName4:any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private broadCaster:Broadcaster,private auth:AuthProvider, private alert:AlertController,public loadingCtrl: LoadingController,private transfer: FileTransfer, private camera: Camera,public toastCtrl: ToastController) {
	  	if(localStorage.getItem("userDetails")){
	    	this.userDetails=JSON.parse(localStorage.getItem("userDetails"))

	    	if(JSON.parse(localStorage.getItem("userDetails")).pan_no!=''){
	    		this.imageFileName1 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+JSON.parse(localStorage.getItem("userDetails")).pan_no;
	    	}

	    	if(JSON.parse(localStorage.getItem("userDetails")).aadhar_no!=''){
	    		this.imageFileName2 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+JSON.parse(localStorage.getItem("userDetails")).aadhar_no;
	    	}

	    	if(JSON.parse(localStorage.getItem("userDetails")).driving_license_no!=''){
	    		this.imageFileName3 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+JSON.parse(localStorage.getItem("userDetails")).driving_license_no;
	    	}

	    	if(JSON.parse(localStorage.getItem("userDetails")).passport_no!=''){
	    		this.imageFileName4 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+JSON.parse(localStorage.getItem("userDetails")).passport_no;
	    	}
	    }
	}

  	getPanImage() {
	    const options: CameraOptions = {
	        quality: 100,
	        destinationType: this.camera.DestinationType.FILE_URI,
	        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI1 = imageData;
	    }, (err) => {
	        console.log(err);
	    });

	    let loader = this.loadingCtrl.create({
			content: "Uploading..."
		  });
		  loader.present();
		  const fileTransfer: FileTransferObject = this.transfer.create();

		  let options1: FileUploadOptions = {
			fileKey: 'image',
			fileName: this.userDetails.id+'_pan.jpg',
			chunkedMode: false,
			mimeType: "multipart/form-data", // add mimeType
			params : {'user_id':this.userDetails.id},
			 headers: {}
		  }

		  fileTransfer.upload(this.imageURI1, 'http://urque.in/dev1/my_book_app/admin/api/upload_pan', options1)
			.then((data) => {
			console.log(data+" Uploaded Successfully");
			this.imageFileName1 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+this.userDetails.id+'_pan.jpg'
			loader.dismiss();
			this.presentToast("Pan card uploaded successfully");
		  }, (err) => {
			console.log(err);
			loader.dismiss();
			//this.presentToast(JSON.stringify(err));
		  });
	}

	getAadharImage() {
	    const options: CameraOptions = {
	        quality: 100,
	        destinationType: this.camera.DestinationType.FILE_URI,
	        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI2 = imageData;
	    }, (err) => {
	        console.log(err);
	    });

	    let loader = this.loadingCtrl.create({
			content: "Uploading..."
		  });
		  loader.present();
		  const fileTransfer: FileTransferObject = this.transfer.create();

		  let options1: FileUploadOptions = {
			fileKey: 'image',
			fileName: this.userDetails.id+'_aadhar.jpg',
			chunkedMode: false,
			mimeType: "multipart/form-data", // add mimeType
			params : {'user_id':this.userDetails.id},
			 headers: {}
		  }

		  fileTransfer.upload(this.imageURI2, 'http://urque.in/dev1/my_book_app/admin/api/upload_aadhar', options1)
			.then((data) => {
			console.log(data+" Uploaded Successfully");
			this.imageFileName2 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+this.userDetails.id+'_aadhar.jpg'
			loader.dismiss();
			this.presentToast("Aadhar card uploaded successfully");
		  }, (err) => {
			console.log(err);
			loader.dismiss();
			//this.presentToast(JSON.stringify(err));
		  });
	}

	getDrivingImage() {
	    const options: CameraOptions = {
	        quality: 100,
	        destinationType: this.camera.DestinationType.FILE_URI,
	        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI3 = imageData;
	    }, (err) => {
	        console.log(err);
	    });

	    let loader = this.loadingCtrl.create({
			content: "Uploading..."
		  });
		  loader.present();
		  const fileTransfer: FileTransferObject = this.transfer.create();

		  let options1: FileUploadOptions = {
			fileKey: 'image',
			fileName: this.userDetails.id+'_driving.jpg',
			chunkedMode: false,
			mimeType: "multipart/form-data", // add mimeType
			params : {'user_id':this.userDetails.id},
			 headers: {}
		  }

		  fileTransfer.upload(this.imageURI3, 'http://urque.in/dev1/my_book_app/admin/api/upload_driving', options1)
			.then((data) => {
			console.log(data+" Uploaded Successfully");
			this.imageFileName3 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+this.userDetails.id+'_driving.jpg'
			loader.dismiss();
			this.presentToast("Aadhar card uploaded successfully");
		  }, (err) => {
			console.log(err);
			loader.dismiss();
			//this.presentToast(JSON.stringify(err));
		  });
	}

	getPassportImage() {
	    const options: CameraOptions = {
	        quality: 100,
	        destinationType: this.camera.DestinationType.FILE_URI,
	        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI4 = imageData;
	    }, (err) => {
	        console.log(err);
	    });

	    let loader = this.loadingCtrl.create({
			content: "Uploading..."
		  });
		  loader.present();
		  const fileTransfer: FileTransferObject = this.transfer.create();

		  let options1: FileUploadOptions = {
			fileKey: 'image',
			fileName: this.userDetails.id+'_passport.jpg',
			chunkedMode: false,
			mimeType: "multipart/form-data", // add mimeType
			params : {'user_id':this.userDetails.id},
			 headers: {}
		  }

		  fileTransfer.upload(this.imageURI4, 'http://urque.in/dev1/my_book_app/admin/api/upload_passport', options1)
			.then((data) => {
			console.log(data+" Uploaded Successfully");
			this.imageFileName4 = "http://urque.in/dev1/my_book_app/assets/upload/users/"+this.userDetails.id+'_passport.jpg'
			loader.dismiss();
			this.presentToast("Aadhar card uploaded successfully");
		  }, (err) => {
			console.log(err);
			loader.dismiss();
			//this.presentToast(JSON.stringify(err));
		  });
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountPage');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
        message: msg,
        duration: 10000,
        position: 'bottom'
    });

    toast.onDidDismiss(() => {
        console.log('Dismissed toast');
    });

    toast.present();
	}

}
