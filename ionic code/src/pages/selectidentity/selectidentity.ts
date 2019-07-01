import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,ToastController,ActionSheetController} from 'ionic-angular';
import { PoliciesPage } from '../policies/policies';
import { LoansPage } from '../loans/loans';
import { BankdetailsPage } from '../bankdetails/bankdetails';
import { InvestmentsPage } from '../investments/investments';
import { EditprofilePage } from '../editprofile/editprofile';
import { ExtradetailsPage } from '../extradetails/extradetails';
import { UploadimpdocPage } from '../uploadimpdoc/uploadimpdoc';

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

	constructor(public navCtrl: NavController, public navParams: NavParams, private broadCaster:Broadcaster,private auth:AuthProvider, private alert:AlertController,public loadingCtrl: LoadingController,private transfer: FileTransfer, private camera: Camera,public toastCtrl: ToastController,public actionSheetCtrl: ActionSheetController) {
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
	    let actionSheet = this.actionSheetCtrl.create({
	      title: 'Select Image Source',
	      buttons: [
	        {
	          text: 'Load from Library',
	          handler: () => {
	            this.getPanImageSubmit(0);//photo library
	          }
	        },
	        {
	          text: 'Use Camera',
	          handler: () => {
	            this.getPanImageSubmit(1);//camera
	          }
	        },
	        {
	          text: 'Cancel',
	          role: 'cancel'
	        }
	      ]
	    });
	    actionSheet.present();
	}

	getPanImageSubmit(sourceType:number) {
	    const options: CameraOptions = {
	      quality: 50,
	      destinationType: this.camera.DestinationType.FILE_URI,
	      encodingType: this.camera.EncodingType.JPEG,
	      mediaType: this.camera.MediaType.PICTURE,
	      correctOrientation: true,
	      sourceType:sourceType,
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI1 = imageData;

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
			this.imageURI1='';
			this.imageURI2='';
			this.imageURI3='';
			this.imageURI4='';
			this.navCtrl.push(UploadimpdocPage);
		  }, (err) => {
			console.log(err);
			loader.dismiss();
			//this.presentToast(JSON.stringify(err));
		  });
	    }, (err) => {
	        console.log(err);
	    });

	    
	}

	getAadharImage(){
		let actionSheet = this.actionSheetCtrl.create({
	      title: 'Select Image Source',
	      buttons: [
	        {
	          text: 'Load from Library',
	          handler: () => {
	            this.getAadharImageSubmit(0);//photo library
	          }
	        },
	        {
	          text: 'Use Camera',
	          handler: () => {
	            this.getAadharImageSubmit(1);//camera
	          }
	        },
	        {
	          text: 'Cancel',
	          role: 'cancel'
	        }
	      ]
	    });
	    actionSheet.present();
	}

	getAadharImageSubmit(sourceType:number) {
	    const options: CameraOptions = {
	      quality: 50,
	      destinationType: this.camera.DestinationType.FILE_URI,
	      encodingType: this.camera.EncodingType.JPEG,
	      mediaType: this.camera.MediaType.PICTURE,
	      correctOrientation: true,
	      sourceType:sourceType,
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI2 = imageData;

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
				this.imageURI1='';
				this.imageURI2='';
				this.imageURI3='';
				this.imageURI4='';
				this.navCtrl.push(UploadimpdocPage);
			  }, (err) => {
				console.log(err);
				loader.dismiss();
				//this.presentToast(JSON.stringify(err));
			  });
		    }, (err) => {
		        console.log(err);
		    });

	    
	}

	getDrivingImage(){
		let actionSheet = this.actionSheetCtrl.create({
	      title: 'Select Image Source',
	      buttons: [
	        {
	          text: 'Load from Library',
	          handler: () => {
	            this.getDrivingImageSubmit(0);//photo library
	          }
	        },
	        {
	          text: 'Use Camera',
	          handler: () => {
	            this.getDrivingImageSubmit(1);//camera
	          }
	        },
	        {
	          text: 'Cancel',
	          role: 'cancel'
	        }
	      ]
	    });
	    actionSheet.present();
	}

	getDrivingImageSubmit(sourceType:number) {
	    const options: CameraOptions = {
	      quality: 50,
	      destinationType: this.camera.DestinationType.FILE_URI,
	      encodingType: this.camera.EncodingType.JPEG,
	      mediaType: this.camera.MediaType.PICTURE,
	      correctOrientation: true,
	      sourceType:sourceType,
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI3 = imageData;

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
				this.presentToast("Driving license uploaded successfully");
				this.imageURI1='';
				this.imageURI2='';
				this.imageURI3='';
				this.imageURI4='';
				this.navCtrl.push(UploadimpdocPage);
			  }, (err) => {
				console.log(err);
				loader.dismiss();
				//this.presentToast(JSON.stringify(err));
			  });
	    }, (err) => {
	        console.log(err);
	    });

	    
	}

	getPassportImage(){
		let actionSheet = this.actionSheetCtrl.create({
	      title: 'Select Image Source',
	      buttons: [
	        {
	          text: 'Load from Library',
	          handler: () => {
	            this.getPassportImageSubmit(0);//photo library
	          }
	        },
	        {
	          text: 'Use Camera',
	          handler: () => {
	            this.getPassportImageSubmit(1);//camera
	          }
	        },
	        {
	          text: 'Cancel',
	          role: 'cancel'
	        }
	      ]
	    });
	    actionSheet.present();
	}

	getPassportImageSubmit(sourceType:number) {
	    const options: CameraOptions = {
	      quality: 50,
	      destinationType: this.camera.DestinationType.FILE_URI,
	      encodingType: this.camera.EncodingType.JPEG,
	      mediaType: this.camera.MediaType.PICTURE,
	      correctOrientation: true,
	      sourceType:sourceType,
	    }

	    this.camera.getPicture(options).then((imageData) => {
	        this.imageURI4 = imageData;

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
			this.presentToast("Passport uploaded successfully");
			this.imageURI1='';
			this.imageURI2='';
			this.imageURI3='';
			this.imageURI4='';
			this.navCtrl.push(UploadimpdocPage);
		  }, (err) => {
			console.log(err);
			loader.dismiss();
			//this.presentToast(JSON.stringify(err));
		  });
	    }, (err) => {
	        console.log(err);
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
