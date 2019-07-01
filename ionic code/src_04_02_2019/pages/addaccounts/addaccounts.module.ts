import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddaccountsPage } from './addaccounts';

@NgModule({
  declarations: [
    AddaccountsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddaccountsPage),
  ],
})
export class AddaccountsPageModule {}
