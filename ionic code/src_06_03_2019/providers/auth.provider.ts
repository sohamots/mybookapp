import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';

import {
    LoadingController
} from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
    //serviceurl = "http://localhost/my_book_app/admin/api/";
    serviceurl = "http://urque.in/dev1/my_book_app/admin/api/";

    constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
        console.log('Hello AuthProvider Provider');

    }

    register(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'name=' + data.name + '&email=' + data.email+'&mobile=' + data.mobile;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"register",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    verify_no_register(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'otp=' + data.otp +'&mobile=' + data.mobile;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"verify_no_register",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    step3_update(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'phone=' + data.phone +'&fax=' + data.fax +'&residence_address=' + data.residence_address +'&office_address=' + data.office_address +'&dob=' + data.dob +'&blood_group=' + data.blood_group +'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"step3_update",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    ask_for_otp(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'mobile=' + data.mobile;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"ask_for_otp",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    verify_no(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'otp=' + data.otp +'&mobile=' + data.mobile;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"verify_no",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_banners() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_banners/', {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_health_insurance_policies(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_health_insurance_policies/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_home_property_insurance_policies(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_home_property_insurance_policies/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_life_insurance_policies(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_life_insurance_policies/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_motor_insurance_policies(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_motor_insurance_policies/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_health_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&plan_name=' + data.plan_name +'&policy_no=' + data.policy_no +'&holder_name=' + data.holder_name +'&family_members=' + data.family_members +'&sum=' + data.sum +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk +'&customer_portal_login_id=' + data.customer_portal_login_id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_health_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_home_property_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&plan_name=' + data.plan_name +'&policy_no=' + data.policy_no +'&holder_name=' + data.holder_name +'&coverage_amount=' + data.coverage_amount +'&coverage_type=' + data.coverage_type +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date+'&renewel_amount=' + data.renewel_amount +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk +'&customer_portal_login_id=' + data.customer_portal_login_id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_home_property_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_motor_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&vehicle_reg_no=' + data.vehicle_reg_no +'&make=' + data.make +'&model=' + data.model +'&year=' + data.year +'&company_name=' + data.company_name +'&policy_no=' + data.policy_no +'&declared_amount=' + data.declared_amount  +'&coverage_type=' + data.coverage_type +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date+'&renewel_amount=' + data.renewel_amount +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_motor_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_life_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&plan_name=' + data.plan_name +'&policy_no=' + data.policy_no +'&holder_name=' + data.holder_name +'&  nominee_name=' + data.  nominee_name +'&sum=' + data.sum +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk +'&customer_portal_login_id=' + data.customer_portal_login_id+'&maturity_date=' + data.maturity_date+'&policy_term=' + data.policy_term;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_life_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_loans(user_id,type) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_loans/'+user_id+'/'+type, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_home_loans(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&type=' + data.type +'&bank_name=' + data.bank_name +'&loan_acc_no=' + data.loan_acc_no +'&loan_amount=' + data.loan_amount +'&start_date=' + data.start_date +'&end_date=' + data.end_date+'&emi_amount=' + data.emi_amount +'&contact_person_name=' + data.contact_person_name +'&contact_person_mobile=' + data.contact_person_mobile +'&bank_details_ecs=' + data.bank_details_ecs+'&date_of_ecs=' + data.date_of_ecs+'&web_login_id=' + data.web_login_id+'&property_details=' + data.property_details;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_loans",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_auto_loans(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&type=' + data.type +'&bank_name=' + data.bank_name +'&loan_acc_no=' + data.loan_acc_no +'&loan_amount=' + data.loan_amount +'&start_date=' + data.start_date +'&end_date=' + data.end_date+'&emi_amount=' + data.emi_amount +'&contact_person_name=' + data.contact_person_name +'&contact_person_mobile=' + data.contact_person_mobile +'&bank_details_ecs=' + data.bank_details_ecs+'&date_of_ecs=' + data.date_of_ecs+'&web_login_id=' + data.web_login_id+'&vehicle_no=' + data.vehicle_no;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_loans",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_personal_loans(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&type=' + data.type +'&bank_name=' + data.bank_name +'&loan_acc_no=' + data.loan_acc_no +'&loan_amount=' + data.loan_amount +'&start_date=' + data.start_date +'&end_date=' + data.end_date +'&emi_amount=' + data.emi_amount +'&contact_person_name=' + data.contact_person_name +'&contact_person_mobile=' + data.contact_person_mobile +'&bank_details_ecs=' + data.bank_details_ecs+'&date_of_ecs=' + data.date_of_ecs+'&web_login_id=' + data.web_login_id+'&loan_taken_for=' + data.loan_taken_for;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_loans",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_family_members(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_family_members/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_family_members(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&name=' + data.name +'&mobile=' + data.mobile +'&email=' + data.email +'&blood_group=' + data.blood_group +'&dob=' + data.dob +'&relation=' + data.relation ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_family_members",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_lockers(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_lockers/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_bank_accounts(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_bank_accounts/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_demat_accounts(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_demat_accounts/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_credit_cards(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_credit_cards/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_fixed_deposits(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_fixed_deposits/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_bank_accounts(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&holder_name=' + data.holder_name +'&acc_no=' + data.acc_no +'&acc_type=' + data.acc_type +'&ifsc_code=' + data.ifsc_code +'&micr_code=' + data.micr_code +'&debit_card=' + data.debit_card +'&cheque_book=' + data.cheque_book +'&net_banking_id=' + data.net_banking_id +'&email=' + data.email +'&mobile=' + data.mobile +'&help_line=' + data.help_line +'&rm_name=' + data.rm_name +'&rm_mobile=' + data.rm_mobile +'&manager_name=' + data.manager_name +'&manager_mobile=' + data.manager_mobile  ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_bank_accounts",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_fixed_deposits(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&holder_name=' + data.holder_name +'&fd_no=' + data.fd_no +'&amount=' + data.amount +'&invest_date=' + data.invest_date +'&duration=' + data.duration +'&rate=' + data.rate +'&maturity_date=' + data.maturity_date +'&maturity_amount=' + data.maturity_amount ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_fixed_deposits",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_demat_accounts(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&acc_no=' + data.acc_no +'&holder_name=' + data.holder_name +'&helpdesk_no=' + data.helpdesk_no +'&portal_login_id=' + data.portal_login_id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_demat_accounts",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_credit_cards(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&card_no=' + data.card_no +'&holder_name=' + data.holder_name +'&credit_limit=' + data.credit_limit +'&validity_date=' + data.validity_date +'&login_id=' + data.login_id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_credit_cards",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_lockers(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&locker_no=' + data.locker_no +'&holder_name=' + data.holder_name +'&items=' + data.items ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_lockers",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_mutual_funds(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_mutual_funds/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_ppf_investments(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_ppf_investments/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    add_mutual_funds(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&scheme_name=' + data.scheme_name +'&folio_no=' + data.folio_no +'&fund_opted=' + data.fund_opted +'&fund_type=' + data.fund_type +'&payout_option=' + data.payout_option +'&sip_sum=' + data.sip_sum +'&sip_tenure=' + data.sip_tenure +'&portal_login_id=' + data.portal_login_id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_mutual_funds",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }


    add_ppf_investments(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&acc_no=' + data.acc_no +'&payment_date=' + data.payment_date +'&deposit_made=' + data.deposit_made +'&payment_made=' + data.payment_made ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"add_ppf_investments",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_life_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&plan_name=' + data.plan_name +'&policy_no=' + data.policy_no +'&holder_name=' + data.holder_name +'&  nominee_name=' + data.  nominee_name +'&sum=' + data.sum +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk +'&customer_portal_login_id=' + data.customer_portal_login_id+'&maturity_date=' + data.maturity_date+'&policy_term=' + data.policy_term+'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_life_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_health_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&plan_name=' + data.plan_name +'&policy_no=' + data.policy_no +'&holder_name=' + data.holder_name +'&family_members=' + data.family_members +'&sum=' + data.sum +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk +'&customer_portal_login_id=' + data.customer_portal_login_id +'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_health_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_home_property_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&plan_name=' + data.plan_name +'&policy_no=' + data.policy_no +'&holder_name=' + data.holder_name +'&coverage_amount=' + data.coverage_amount +'&coverage_type=' + data.coverage_type +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date+'&renewel_amount=' + data.renewel_amount +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk +'&customer_portal_login_id=' + data.customer_portal_login_id +'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_home_property_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_motor_insurance_policies(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&vehicle_reg_no=' + data.vehicle_reg_no +'&make=' + data.make +'&model=' + data.model +'&year=' + data.year +'&company_name=' + data.company_name +'&policy_no=' + data.policy_no +'&declared_amount=' + data.declared_amount  +'&coverage_type=' + data.coverage_type +'&start_date=' + data.start_date +'&premium_amount=' + data.premium_amount +'&renewel_date=' + data.renewel_date+'&renewel_amount=' + data.renewel_amount +'&adviser_name=' + data.adviser_name +'&adviser_mobile=' + data.adviser_mobile +'&company_help_desk=' + data.company_help_desk +'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_motor_insurance_policies",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_home_loans(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&type=' + data.type +'&bank_name=' + data.bank_name +'&loan_acc_no=' + data.loan_acc_no +'&loan_amount=' + data.loan_amount +'&start_date=' + data.start_date +'&end_date=' + data.end_date+'&emi_amount=' + data.emi_amount +'&contact_person_name=' + data.contact_person_name +'&contact_person_mobile=' + data.contact_person_mobile +'&bank_details_ecs=' + data.bank_details_ecs+'&date_of_ecs=' + data.date_of_ecs+'&web_login_id=' + data.web_login_id+'&property_details=' + data.property_details +'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_loans",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_auto_loans(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&type=' + data.type +'&bank_name=' + data.bank_name +'&loan_acc_no=' + data.loan_acc_no +'&loan_amount=' + data.loan_amount +'&start_date=' + data.start_date +'&end_date=' + data.end_date+'&emi_amount=' + data.emi_amount +'&contact_person_name=' + data.contact_person_name +'&contact_person_mobile=' + data.contact_person_mobile +'&bank_details_ecs=' + data.bank_details_ecs+'&date_of_ecs=' + data.date_of_ecs+'&web_login_id=' + data.web_login_id+'&vehicle_no=' + data.vehicle_no +'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_loans",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_personal_loans(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&type=' + data.type +'&bank_name=' + data.bank_name +'&loan_acc_no=' + data.loan_acc_no +'&loan_amount=' + data.loan_amount +'&start_date=' + data.start_date +'&end_date=' + data.end_date +'&emi_amount=' + data.emi_amount +'&contact_person_name=' + data.contact_person_name +'&contact_person_mobile=' + data.contact_person_mobile +'&bank_details_ecs=' + data.bank_details_ecs+'&date_of_ecs=' + data.date_of_ecs+'&web_login_id=' + data.web_login_id+'&loan_taken_for=' + data.loan_taken_for +'&id=' + data.id;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_loans",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_mutual_funds(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&scheme_name=' + data.scheme_name +'&folio_no=' + data.folio_no +'&fund_opted=' + data.fund_opted +'&fund_type=' + data.fund_type +'&payout_option=' + data.payout_option +'&sip_sum=' + data.sip_sum +'&sip_tenure=' + data.sip_tenure +'&portal_login_id=' + data.portal_login_id +'&id=' + data.id  ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_mutual_funds",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }


    update_ppf_investments(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&acc_no=' + data.acc_no +'&payment_date=' + data.payment_date +'&deposit_made=' + data.deposit_made +'&payment_made=' + data.payment_made +'&id=' + data.id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_ppf_investments",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_bank_accounts(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&holder_name=' + data.holder_name +'&acc_no=' + data.acc_no +'&acc_type=' + data.acc_type +'&ifsc_code=' + data.ifsc_code +'&micr_code=' + data.micr_code +'&debit_card=' + data.debit_card +'&cheque_book=' + data.cheque_book +'&net_banking_id=' + data.net_banking_id +'&email=' + data.email +'&mobile=' + data.mobile +'&help_line=' + data.help_line +'&rm_name=' + data.rm_name +'&rm_mobile=' + data.rm_mobile +'&manager_name=' + data.manager_name +'&manager_mobile=' + data.manager_mobile +'&id=' + data.id  ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_bank_accounts",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_fixed_deposits(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&holder_name=' + data.holder_name +'&fd_no=' + data.fd_no +'&amount=' + data.amount +'&invest_date=' + data.invest_date +'&duration=' + data.duration +'&rate=' + data.rate +'&maturity_date=' + data.maturity_date +'&maturity_amount=' + data.maturity_amount +'&id=' + data.id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_fixed_deposits",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_demat_accounts(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&company_name=' + data.company_name +'&acc_no=' + data.acc_no +'&holder_name=' + data.holder_name +'&helpdesk_no=' + data.helpdesk_no +'&portal_login_id=' + data.portal_login_id +'&id=' + data.id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_demat_accounts",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_credit_cards(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&card_no=' + data.card_no +'&holder_name=' + data.holder_name +'&credit_limit=' + data.credit_limit +'&validity_date=' + data.validity_date +'&login_id=' + data.login_id+'&id=' + data.id  ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_credit_cards",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_lockers(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&bank_name=' + data.bank_name +'&branch_address=' + data.branch_address +'&locker_no=' + data.locker_no +'&holder_name=' + data.holder_name +'&items=' + data.items +'&id=' + data.id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_lockers",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    update_family_members(data) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'user_id=' + data.user_id +'&name=' + data.name +'&mobile=' + data.mobile +'&email=' + data.email +'&blood_group=' + data.blood_group +'&dob=' + data.dob +'&relation=' + data.relation +'&id='+data.id ;


        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl+"update_family_members",body, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }

    fetch_documents(user_id) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        let headers = new HttpHeaders({

        });

        return new Promise((resolve, reject) => {
            this.http.get(this.serviceurl + '/fetch_documents/'+user_id, {
                    headers
                })
                .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
        });
    }
}