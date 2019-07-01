<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

date_default_timezone_set('Asia/Kolkata');

/*
 * Add error_reporting to track error in code
 */
error_reporting(E_ALL);

/*
 * Specify domains from which requests are allowed
 */
header('Access-Control-Allow-Origin: *');

/*
 * Specify which request methods are allowed
 */
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

/*
 * Additional headers which may be sent along with the CORS request
 * The X-Requested-With header allows jQuery requests to go through
 */
header('Access-Control-Allow-Headers: X-Requested-With');
/*
 * Additional header for app
 */
header('Content-Type:application/json');

class Api extends MY_Controller {

	public function index(){
		die(json_encode(array("status"=>"0","message"=>"Invalid function")));
	}

	public function ask_for_otp(){
		$data = $this->input->post();

		$conditions['is_active'] = 1;
        $conditions['is_deleted'] = 0;
        $conditions['mobile'] = $data['mobile'];

        $user = $this->BlankModel->getData('users', $conditions);

        if (count($user) > 0) {
            $otp = 123456;

            $mobile = $data['mobile'];
            $msg = 'Your OTP is '.$otp;
             $ch = curl_init();
            // Set query data here with the URL
            curl_setopt($ch, CURLOPT_URL, 'http://ishika.poweredsms.com/unified.php?usr=sanjay@supertroninfotech.in&pwd=sanjay230&ph='.$mobile.'&sndr=WEBSMS&text='.$msg);

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 3);
            $content = curl_exec($ch);
            //echo $content;
            //die();
            curl_close($ch);

        	$updatedata = array(
                'otp' => $otp,
                'is_verified'=>0
            );

            $this->BlankModel->updateData("users", $updatedata, $conditions);

            die(json_encode(array("status"=>"1","message"=>"OTP has been sent to your registered mobile no.")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Your mobile no is not present in our database. Please register to continue")));
        }
	}

    public function verify_no(){
        $data = $this->input->post();

        $conditions['is_active'] = 1;
        $conditions['is_deleted'] = 0;
        $conditions['mobile'] = $data['mobile'];
        $conditions['otp'] = $data['otp'];

        $user = $this->BlankModel->getData('users', $conditions);

        if (count($user) > 0) {
            $updatedata = array(
            'is_verified'=>1
        );

            $this->BlankModel->updateData("users", $updatedata, $conditions);

            die(json_encode(array("status"=>"1","message"=>"Success","user"=>$user[0])));
        } else {
            die(json_encode(array("status"=>"0","message"=>"You have entered an wrong otp. Please try with the correct one")));
        }
    }

    public function register(){
        //$otp = rand(100000,999999);
        $otp = 123456;

        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';

        $saved_data['otp'] = $otp;

        if ($this->BlankModel->insertData("users", $saved_data)) {
            $mobile = $saved_data['mobile'];
            $msg = 'Your%20OTP%20is%20'.$otp;
             $ch = curl_init();
            // Set query data here with the URL
            curl_setopt($ch, CURLOPT_URL, 'http://ishika.poweredsms.com/unified.php?usr=sanjay@supertroninfotech.in&pwd=sanjay230&ph='.$mobile.'&sndr=WEBSMS&text='.$msg);

            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 3);
            $content = curl_exec($ch);
            // echo $content;
            // die();
            curl_close($ch);
            die(json_encode(array("status"=>"1","message"=>"OTP has been sent to your registered mobile no. Please verify your no to continue")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        }
    }

    public function verify_no_register(){
        $data = $this->input->post();

        $conditions['is_active'] = 1;
        $conditions['is_deleted'] = 0;
        $conditions['mobile'] = $data['mobile'];
        $conditions['otp'] = $data['otp'];

        $updatedata = array(
            'is_verified'=>1
        );

        if ($this->BlankModel->updateData("users", $updatedata, $conditions)) {
            $conditions['is_active'] = 1;
            $conditions['is_deleted'] = 0;
            $conditions['mobile'] = $data['mobile'];

            $user = $this->BlankModel->getData('users', $conditions);

            die(json_encode(array("status"=>"1","message"=>"Success","user_id"=>$user[0]->id)));
        } else {
            die(json_encode(array("status"=>"0","message"=>"You have entered an wrong otp. Please try with the correct one")));
        }
    }

    public function step3_update(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("users", $data, $conditions)) {
            $user = $this->BlankModel->getData('users', $conditions);

            die(json_encode(array("status"=>"1","message"=>"Success","user"=>$user[0])));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function step4_update(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("users", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Suucess","user_id"=>$data['id'])));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_banners(){
        $banner_basepath = base_url("assets/upload/banners/");
        $banners = array();

        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $banner_datas = $this->BlankModel->getData("banners", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());

        foreach ($banner_datas as $b) {
            $b->name = $banner_basepath.$b->name;
            array_push($banners, $b);
        }

        die(json_encode(array("status"=>"1","message"=>"Success","banners"=>$banners)));
    }

    public function fetch_health_insurance_policies($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $health_insurance_policies = $this->BlankModel->getData("health_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","health_insurance_policies"=>$health_insurance_policies))); 
    }

    public function add_health_insurance_policies(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';

        if ($this->BlankModel->insertData("health_insurance_policies", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_health_insurance_policies(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("health_insurance_policies", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy data has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_home_property_insurance_policies($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $home_property_insurance_policies = $this->BlankModel->getData("home_property_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","home_property_insurance_policies"=>$home_property_insurance_policies))); 
    }

    public function add_home_property_insurance_policies(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("home_property_insurance_policies", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_home_property_insurance_policies(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("home_property_insurance_policies", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy data has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_life_insurance_policies($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $life_insurance_policies = $this->BlankModel->getData("life_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","life_insurance_policies"=>$life_insurance_policies))); 
    }

    public function add_life_insurance_policies(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("life_insurance_policies", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_life_insurance_policies(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("life_insurance_policies", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy data has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_motor_insurance_policies($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $motor_insurance_policies = $this->BlankModel->getData("motor_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","motor_insurance_policies"=>$motor_insurance_policies))); 
    }

    public function add_motor_insurance_policies(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("motor_insurance_policies", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_motor_insurance_policies(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("motor_insurance_policies", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy data has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_loans($user_id,$type){
        $conditions['user_id'] = $user_id;
        $conditions['type'] = $type;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $loans = $this->BlankModel->getData("loans", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","loans"=>$loans))); 
    }

    public function add_loans(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("loans", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your policy has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_loans(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("loans", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your loan data has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }    

    public function upload_pan(){
        $image = $_FILES['image'];
        $filename = trim($image['name']);
        if (!move_uploaded_file($image['tmp_name'], './assets/upload/users/' . $filename)) {
            $filename = '';
        }
        $data = $this->input->post();
        $conditions['id'] = $data['user_id'];

        if ($filename != '') {
            $updatedata['pan_no'] = $filename;
        }

        if ($this->BlankModel->updateData("users", $updatedata, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Pan card photo uploaded successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function upload_aadhar(){
        $image = $_FILES['image'];
        $filename = trim($image['name']);
        if (!move_uploaded_file($image['tmp_name'], './assets/upload/users/' . $filename)) {
            $filename = '';
        }
        $data = $this->input->post();
        $conditions['id'] = $data['user_id'];

        if ($filename != '') {
            $updatedata['aadhar_no'] = $filename;
        }

        if ($this->BlankModel->updateData("users", $updatedata, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Aadhar card photo uploaded successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function upload_driving(){
        $image = $_FILES['image'];
        $filename = trim($image['name']);
        if (!move_uploaded_file($image['tmp_name'], './assets/upload/users/' . $filename)) {
            $filename = '';
        }
        $data = $this->input->post();
        $conditions['id'] = $data['user_id'];

        if ($filename != '') {
            $updatedata['driving_license_no'] = $filename;
        }

        if ($this->BlankModel->updateData("users", $updatedata, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Driving license photo uploaded successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function upload_passport(){
        $image = $_FILES['image'];
        $filename = trim($image['name']);
        if (!move_uploaded_file($image['tmp_name'], './assets/upload/users/' . $filename)) {
            $filename = '';
        }
        $data = $this->input->post();
        $conditions['id'] = $data['user_id'];

        if ($filename != '') {
            $updatedata['passport_no'] = $filename;
        }

        if ($this->BlankModel->updateData("users", $updatedata, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Passport photo uploaded successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_family_members($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $family_members = $this->BlankModel->getData("family_members", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","family_members"=>$family_members))); 
    }

    public function add_family_members(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("family_members", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your family member details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_family_members(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("family_members", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your family member details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_bank_accounts($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $bank_accounts = $this->BlankModel->getData("bank_accounts", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","bank_accounts"=>$bank_accounts))); 
    }

    public function add_bank_accounts(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("bank_accounts", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your account details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_bank_accounts(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("bank_accounts", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your account details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_lockers($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $lockers = $this->BlankModel->getData("lockers", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","lockers"=>$lockers))); 
    }

    public function add_lockers(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("lockers", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your locker details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_lockers(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("lockers", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your locker details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_demat_accounts($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $demat_accounts = $this->BlankModel->getData("demat_accounts", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","demat_accounts"=>$demat_accounts))); 
    }

    public function add_demat_accounts(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("demat_accounts", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your account details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_demat_accounts(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("demat_accounts", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your account details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_credit_cards($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $credit_cards = $this->BlankModel->getData("credit_cards", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","credit_cards"=>$credit_cards))); 
    }

    public function add_credit_cards(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("credit_cards", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your card details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_credit_cards(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("credit_cards", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your card details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_fixed_deposits($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $fixed_deposits = $this->BlankModel->getData("fixed_deposits", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","fixed_deposits"=>$fixed_deposits))); 
    }

    public function add_fixed_deposits(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("fixed_deposits", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your deposit details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_fixed_deposits(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("fixed_deposits", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your deposit details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_mutual_funds($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $mutual_funds = $this->BlankModel->getData("mutual_funds", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","mutual_funds"=>$mutual_funds))); 
    }

    public function add_mutual_funds(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("mutual_funds", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your mututal fund details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_mutual_funds(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("mutual_funds", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your mututal fund details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_ppf_investments($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $ppf_investments = $this->BlankModel->getData("ppf_investments", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","ppf_investments"=>$ppf_investments))); 
    }

    public function add_ppf_investments(){
        $saved_data = $this->input->post();
        $saved_data['is_active'] = '1';
        
        if ($this->BlankModel->insertData("ppf_investments", $saved_data)) {
            die(json_encode(array("status"=>"1","message"=>"Your investment details has been saved successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Some error occurred. Please try again")));
        } 
    }

    public function update_ppf_investments(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        if ($this->BlankModel->updateData("ppf_investments", $data, $conditions)) {
            die(json_encode(array("status"=>"1","message"=>"Your investment details has been updated successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function upload_doc(){
        $image = $_FILES['image'];
        $filename = time() . "_" . trim($image['name']);
        if (!move_uploaded_file($image['tmp_name'], './assets/upload/users/' . $filename)) {
            $filename = '';
        }
        $data = $this->input->post();
    
        if ($filename != '') {
            $data['image'] = $filename;
        }

        $data['is_active'] = 1;
        $data['created_at'] = date("Y-m-d G:i:s");

        if ($this->BlankModel->insertData("documents", $data)) {
            die(json_encode(array("status"=>"1","message"=>"Your document uploaded successfully")));
        } else {
            die(json_encode(array("status"=>"0","message"=>"Failed to update")));
        }
    }

    public function fetch_documents($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $documents = $this->BlankModel->getData("documents", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","documents"=>$documents))); 
    }

    public function check_life_insurance_notify(){
        $tomorrow = date("Y-m-d", strtotime("+1 day"));

        $conditions['renewel_date'] = $tomorrow;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $life_insurance_policies = $this->BlankModel->getData("life_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());

        foreach ($life_insurance_policies as $l) {
            $user_id = $l->user_id;
            $n = "You have life insurance policy to be renewed on tomorrow. policy no : $l->policy_no, plan : $l->plan_name, Amount: $l->premium_amount";

            $data['user_id'] = $user_id;
            $data['notification'] = $n;
            $data['created_at'] = date("Y-m-d G:i:s");
            $data['is_active'] = 1;

            $this->BlankModel->insertData("notifications", $data);
        }
        echo "Success";
    }

    public function check_health_insurance_notify(){
        $tomorrow = date("Y-m-d", strtotime("+1 day"));

        $conditions['renewel_date'] = $tomorrow;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $health_insurance_policies = $this->BlankModel->getData("health_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());

        foreach ($health_insurance_policies as $l) {
            $user_id = $l->user_id;
            $n = "You have health insurance policy to be renewed on tomorrow. policy no : $l->policy_no, plan : $l->plan_name, Amount: $l->premium_amount";

            $data['user_id'] = $user_id;
            $data['notification'] = $n;
            $data['created_at'] = date("Y-m-d G:i:s");
            $data['is_active'] = 1;

            $this->BlankModel->insertData("notifications", $data);
        }
        echo "Success";
    }

    public function check_motor_insurance_notify(){
        $tomorrow = date("Y-m-d", strtotime("+1 day"));

        $conditions['renewel_date'] = $tomorrow;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $motor_insurance_policies = $this->BlankModel->getData("motor_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());

        foreach ($motor_insurance_policies as $l) {
            $user_id = $l->user_id;
            $n = "You have motor insurance policy to be renewed on tomorrow. policy no : $l->policy_no, Amount: $l->premium_amount";

            $data['user_id'] = $user_id;
            $data['notification'] = $n;
            $data['created_at'] = date("Y-m-d G:i:s");
            $data['is_active'] = 1;

            $this->BlankModel->insertData("notifications", $data);
        }
        echo "Success";
    }

    public function check_property_insurance_notify(){
        $tomorrow = date("Y-m-d", strtotime("+1 day"));

        $conditions['renewel_date'] = $tomorrow;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $home_property_insurance_policies = $this->BlankModel->getData("home_property_insurance_policies", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());

        foreach ($home_property_insurance_policies as $l) {
            $user_id = $l->user_id;
            $n = "You have property insurance policy to be renewed on tomorrow. policy no : $l->policy_no, plan : $l->plan_name, Amount: $l->premium_amount";

            $data['user_id'] = $user_id;
            $data['notification'] = $n;
            $data['created_at'] = date("Y-m-d G:i:s");
            $data['is_active'] = 1;

            $this->BlankModel->insertData("notifications", $data);
        }
        echo "Success";
    }

    public function dob_notify(){
        $today = date("m-d");
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $family_members = $this->BlankModel->getData("family_members", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());

        foreach ($family_members as $l) {
            $user_id = $l->user_id;
            $d = date("m-d",strtotime($l->dob));

            if($today==$d){
                $f_name = $l->name;
                $n = "Today is $f_name's birth day. Do not forget to wish him.";

                $data['user_id'] = $user_id;
                $data['notification'] = $n;
                $data['created_at'] = date("Y-m-d G:i:s");
                $data['is_active'] = 1;

                $this->BlankModel->insertData("notifications", $data);
            }
            
        }
        echo "Success";
    }

    public function fetch_notifications($user_id){
        $conditions['user_id'] = $user_id;
        $conditions['is_active'] = '1';
        $conditions['is_deleted'] = '0';

        $notifications = $this->BlankModel->getData("notifications", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        die(json_encode(array("status"=>"1","message"=>"Success","notifications"=>$notifications))); 
    }

    public function update_new_mobile(){
        $data = $this->input->post();

        $conditions['id'] = $data['id'];

        //$conditions1['id!='] = $data['id'];
        $conditions1['mobile'] = $data['new_mobile'];
        $conditions1['is_deleted'] = '0';

        $users = $this->BlankModel->getData("users", $conditions1, $from_fields = array(), $is_multy_result = 1, $join_table = array());  

        if(count($users)>0){
            die(json_encode(array("status"=>"0","message"=>"This mobile no already exists. Please try with a different no")));
        }else{
            $data['otp'] = 123456;

            if ($this->BlankModel->updateData("users", $data, $conditions)) {
                die(json_encode(array("status"=>"1","message"=>"An OTP is sent to this mobile no. Please verify to update your no")));
            } else {
                die(json_encode(array("status"=>"0","message"=>"Failed to update")));
            }
        }
    }

    public function verify_new_mobile(){
        $data = $this->input->post();

        $conditions['is_active'] = 1;
        $conditions['is_deleted'] = 0;
        $conditions['new_mobile'] = $data['new_mobile'];
        $conditions['otp'] = $data['otp'];

        $user = $this->BlankModel->getData('users', $conditions);

        if (count($user) > 0) {
            $updatedata = array(
                'mobile'=>$data['new_mobile']
            );

            $this->BlankModel->updateData("users", $updatedata, $conditions);

            die(json_encode(array("status"=>"1","message"=>"Success","user"=>$user[0])));
        } else {
            die(json_encode(array("status"=>"0","message"=>"You have entered an wrong otp. Please try with the correct one")));
        }
    }
}

?>