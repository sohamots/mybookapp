import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeinsurancePage } from './lifeinsurance';

@NgModule({
  declarations: [
    LifeinsurancePage,
  ],
  imports: [
    IonicPageModule.forChild(LifeinsurancePage),
  ],
})
export class LifeinsurancePageModule {}
