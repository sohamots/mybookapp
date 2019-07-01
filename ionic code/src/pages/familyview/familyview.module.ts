import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamilyviewPage } from './familyview';

@NgModule({
  declarations: [
    FamilyviewPage,
  ],
  imports: [
    IonicPageModule.forChild(FamilyviewPage),
  ],
})
export class FamilyviewPageModule {}
