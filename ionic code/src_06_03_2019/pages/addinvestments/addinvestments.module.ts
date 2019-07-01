import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddinvestmentsPage } from './addinvestments';

@NgModule({
  declarations: [
    AddinvestmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddinvestmentsPage),
  ],
})
export class AddinvestmentsPageModule {}
