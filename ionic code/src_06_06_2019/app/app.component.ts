import { Component } from '@angular/core';
import { Platform,App,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StarterPage } from '../pages/starter/starter';
import { HomePage } from '../pages/home/home';
import { Broadcaster } from '../providers/eventEmitter';
import { OneSignal } from '@ionic-native/onesignal/ngx';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StarterPage;
  IsLoggedIn=false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private broadCaster:Broadcaster, private app:App,private oneSignal: OneSignal,private alertCtrl:AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(localStorage.getItem("userDetails")) {
        this.IsLoggedIn=true;
        this.rootPage=HomePage;
      }else{
        this.rootPage=StarterPage;
      }

      this.broadCaster.on("loggedOut").subscribe((res)=>{
        this.IsLoggedIn=false;
        setTimeout(()=>{
        //this.rootPage=StarterPage;
        this.app.getRootNavs()[0].setRoot(StarterPage);
        },100)
      })

      this.oneSignal.startInit('47087ae2-763b-476b-b20b-951cea9dd34c', '294578832509');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
    });
  }
}

