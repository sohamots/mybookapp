import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthinsurancePage } from './healthinsurance';

@NgModule({
  declarations: [
    HealthinsurancePage,
  ],
  imports: [
    IonicPageModule.forChild(HealthinsurancePage),
  ],
})
export class HealthinsurancePageModule {}
