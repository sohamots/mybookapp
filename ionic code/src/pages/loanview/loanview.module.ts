import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanviewPage } from './loanview';

@NgModule({
  declarations: [
    LoanviewPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanviewPage),
  ],
})
export class LoanviewPageModule {}
