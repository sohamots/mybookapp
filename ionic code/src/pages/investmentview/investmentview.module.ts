import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestmentviewPage } from './investmentview';

@NgModule({
  declarations: [
    InvestmentviewPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestmentviewPage),
  ],
})
export class InvestmentviewPageModule {}
