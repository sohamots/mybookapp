import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { StarterPage } from '../pages/starter/starter';
import { Step1Page } from '../pages/step1/step1';
import { Step2Page } from '../pages/step2/step2';
import { Step3Page } from '../pages/step3/step3';
import { ExtraPage } from '../pages/extra/extra';

import { PoliciesPage } from '../pages/policies/policies';
import { LoansPage } from '../pages/loans/loans';
import { BankdetailsPage } from '../pages/bankdetails/bankdetails';
import { InvestmentsPage } from '../pages/investments/investments';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ExtradetailsPage } from '../pages/extradetails/extradetails';

import { LifeinsurancePage } from '../pages/lifeinsurance/lifeinsurance';
import { HealthinsurancePage } from '../pages/healthinsurance/healthinsurance';
import { MotorinsurancePage } from '../pages/motorinsurance/motorinsurance';
import { PropertyinsurancePage } from '../pages/propertyinsurance/propertyinsurance';

import { AddinsurancePage } from '../pages/addinsurance/addinsurance';

import { PropertyloansPage } from '../pages/propertyloans/propertyloans';
import { AutoloansPage } from '../pages/autoloans/autoloans';
import { PersonalloansPage } from '../pages/personalloans/personalloans';
import { GoldloansPage } from '../pages/goldloans/goldloans';
import { AddloansPage } from '../pages/addloans/addloans';

import { SelectindentityPage } from '../pages/selectidentity/selectidentity';

import { BankaccountPage } from '../pages/bankaccount/bankaccount';
import { LockerPage } from '../pages/locker/locker';
import { DemataccountPage } from '../pages/demataccount/demataccount';
import { CreditcardPage } from '../pages/creditcard/creditcard';
import { FixeddipositePage } from '../pages/fixeddiposite/fixeddiposite';
import { AddaccountsPage } from '../pages/addaccounts/addaccounts';

import { MutualfundPage } from '../pages/mutualfund/mutualfund';
import { PropertyPage } from '../pages/property/property';
import { PffinvestmentPage } from '../pages/pffinvestment/pffinvestment';
import { OtherinvestmentPage } from '../pages/otherinvestment/otherinvestment';
import { AddinvestmentsPage } from '../pages/addinvestments/addinvestments';

import { WhyusPage } from '../pages/whyus/whyus';
import { QueryPage } from '../pages/query/query';
import { UploaddocPage } from '../pages/uploaddoc/uploaddoc';


import { EditinsurancePage } from '../pages/editinsurance/editinsurance';
import { EditloansPage } from '../pages/editloans/editloans';
import { EditinvestmentsPage } from '../pages/editinvestments/editinvestments';
import { EditaccountsPage } from '../pages/editaccounts/editaccounts';
import { Extra1Page } from '../pages/extra1/extra1';
import { DocsPage } from '../pages/docs/docs';


import { HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth.provider';
import { Broadcaster } from '../providers/eventEmitter';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';

import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StarterPage,
    Step1Page,
    Step2Page,
    Step3Page,
    ExtraPage,
    PoliciesPage,
    LoansPage,
    BankdetailsPage,
    InvestmentsPage,
    EditprofilePage,
    ExtradetailsPage,
    LifeinsurancePage,
    HealthinsurancePage,
    MotorinsurancePage,
    PropertyinsurancePage,
    AddinsurancePage,
    PropertyloansPage,
    AutoloansPage,
    PersonalloansPage,
    GoldloansPage,
    AddloansPage,
    LoginPage,
    OtpPage,
    SelectindentityPage,
    BankaccountPage,
    LockerPage,
    DemataccountPage,
    CreditcardPage,
    AddaccountsPage,
    FixeddipositePage,
    MutualfundPage,
    PropertyPage,
    PffinvestmentPage,
    OtherinvestmentPage,
    AddinvestmentsPage,
    WhyusPage,
    QueryPage,
    EditinsurancePage,
    EditloansPage,
    EditinvestmentsPage,
    EditaccountsPage,
    Extra1Page,
    UploaddocPage,
    DocsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StarterPage,
    Step1Page,
    Step2Page,
    Step3Page,
    ExtraPage,
    PoliciesPage,
    LoansPage,
    BankdetailsPage,
    InvestmentsPage,
    EditprofilePage,
    ExtradetailsPage,
    LifeinsurancePage,
    HealthinsurancePage,
    MotorinsurancePage,
    PropertyinsurancePage,
    AddinsurancePage,
    PropertyloansPage,
    AutoloansPage,
    PersonalloansPage,
    GoldloansPage,
    AddloansPage,
    LoginPage,
    OtpPage,
    SelectindentityPage,
    BankaccountPage,
    LockerPage,
    DemataccountPage,
    CreditcardPage,
    AddaccountsPage,
    FixeddipositePage,
    MutualfundPage,
    PropertyPage,
    PffinvestmentPage,
    OtherinvestmentPage,
    AddinvestmentsPage,
    WhyusPage,
    QueryPage,
    EditinsurancePage,
    EditloansPage,
    EditinvestmentsPage,
    EditaccountsPage,
    Extra1Page,
    UploaddocPage,
    DocsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Broadcaster,
    FileTransfer,
      Camera,
      File,
Transfer,
FilePath,
Base64
  ]
})
export class AppModule {}
