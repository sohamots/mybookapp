import { Component } from '@angular/core';
import { Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StarterPage } from '../pages/starter/starter';
import { HomePage } from '../pages/home/home';
import { Broadcaster } from '../providers/eventEmitter';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StarterPage;
  IsLoggedIn=false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private broadCaster:Broadcaster, private app:App) {
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
    });
  }
}

