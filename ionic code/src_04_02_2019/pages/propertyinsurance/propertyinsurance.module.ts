import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyinsurancePage } from './propertyinsurance';

@NgModule({
  declarations: [
    PropertyinsurancePage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyinsurancePage),
  ],
})
export class PropertyinsurancePageModule {}
