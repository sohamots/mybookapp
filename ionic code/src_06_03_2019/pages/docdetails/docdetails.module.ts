import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocdetailsPage } from './docdetails';

@NgModule({
  declarations: [
    DocdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DocdetailsPage),
  ],
})
export class DocdetailsPageModule {}
