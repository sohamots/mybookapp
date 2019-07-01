import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ToastController, Platform, LoadingController, Loading ,AlertController} from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { DomSanitizer } from '@angular/platform-browser';
import { Base64 } from '@ionic-native/base64/ngx';

import { DocsPage } from '../docs/docs';
 
declare var cordova: any;

/**
 * Generated class for the UploaddocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uploaddoc',
  templateUrl: 'uploaddoc.html',
})
export class UploaddocPage {

  lastImage: string = null;
  loading: Loading;
  base64Image = '';
  title = '';
  type = '';
  imageURI = '';
  userDetails:any;
  img = '';

  constructor(public navCtrl: NavController, private camera: Camera, public actionSheetCtrl: ActionSheetController,public loadingCtrl: LoadingController,private transfer: FileTransfer,private alert:AlertController,public domSanitizer: DomSanitizer,private base64: Base64) { 
    if(localStorage.getItem("userDetails")){
      this.userDetails=JSON.parse(localStorage.getItem("userDetails"))
    }
  }
 
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePhoto(0);//photo library
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePhoto(1);//camera
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

  takePhoto(sourceType:number) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
      this.img ="data:Image/*;base64,"+imageData;
      //alert(this.base64Image);
      this.base64.encodeFile(imageData).then((base64File: string) => {
        
        
        this.base64Image ="data:Image/*;base64,"+base64File;
        console.log(this.base64Image);
      }, (err) => {
        alert(err);
        console.log(err);
      });
    }, (err) => {
      // Handle error
    });
  }

  // Always get the accurate path to your apps folder
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  save(){
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options1: FileUploadOptions = {
      fileKey: 'image',
      fileName: this.userDetails.id+'_doc.jpg',
      chunkedMode: false,
      mimeType: "multipart/form-data", // add mimeType
      params : {'user_id':this.userDetails.id, 'title':this.title,'type':this.type},
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://urque.in/dev1/my_book_app/admin/api/upload_doc', options1)
      .then((data) => {
        console.log(data+" Uploaded Successfully");
        loader.dismiss();
        let alert = this.alert.create({
            title: 'Success',
            subTitle: "You document is uploaded successfully",
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.push(DocsPage);
      }, (err) => {
        console.log(err);
        loader.dismiss();
        //this.presentToast(JSON.stringify(err));
    });
  }

}
