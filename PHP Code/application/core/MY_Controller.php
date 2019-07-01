<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

class MY_Controller extends CI_Controller {

    protected $create_date_formate = '';
    protected $cart_arr = array();
    public $total_amm = 0;
    public $tax_amm = 0;
    public $grand_total_amm = 0;

    function __construct() {
        parent::__construct();
        $this->create_date_formate = date("Y-m-d H:i:s");
        $this->load->model('admin/Blank_model', 'BlankModel');
//die("called");
//Start session
        $this->load->library('session');
         $this -> load -> library('form_validation');
    }

    public function set_admin_session($admindata = array()) {
//pr($admindata);
        $admin_id = 0;
        if (!empty($admindata)) {
            if (is_object($admindata)) {
                $admin_id = $admindata->id;
            } elseif (is_array($admindata)) {
                $admin_id = $admindata['admin_id'];
            }
            if ($admin_id > 0) {
//$this->session->set_userdata('admin_id', $admin_id);
                $this->session->set_userdata('admin', $admindata);
            }
        }
    }

    public function destroy_admin_session() {
        if ($this->session->has_userdata('admin')) {
            $this->session->unset_userdata('admin');
        }
    }

    public function session_checked($is_active_session = 1) {
        if ($is_active_session) {
            if (!$this->session->has_userdata('admin')) {
                redirect('admin/Admins/login');
            }
        } else {
            if ($this->session->has_userdata('admin')) {
                redirect('admin/Admins/');
            }
        }
    }

    public function GetMAC(){
        ob_start();
        system('getmac');
        $Content = ob_get_contents();
        ob_clean();
        return substr($Content, strpos($Content,'\\')-20, 17);
    }

//=========================User Section ============================//
    public function set_user_session($user_data = array()) {
//pr($admindata);
        $user_id = 0;
        if (!empty($user_data)) {
            if (is_object($user_data)) {
                $user_id = $user_data->id;
            } elseif (is_array($user_data)) {
                $user_id = $user_data['id'];
            }
            if ($user_id > 0) {
//$this->session->set_userdata('admin_id', $admin_id);
                $this->session->set_userdata('user', $user_data);
            }
        }
    }

    public function destroy_user_session() {
        if ($this->session->has_userdata('user')) {
            $this->session->unset_userdata('user');
        }
    }

    public function user_session_checked($is_active_session = 1) {
        if ($is_active_session) {
            if (!$this->session->has_userdata('tpadmin')) {
                redirect('');
            }
        } else {
            if ($this->session->has_userdata('tpadmin')) {
                redirect('');
            }
        }
    }

//=========================Advisor Section ============================//

    public function set_advisor_session($user_data = array()) {
//pr($admindata);
        $user_id = 0;
        if (!empty($user_data)) {
            if (is_object($user_data)) {
                $user_id = $user_data->id;
            } elseif (is_array($user_data)) {
                $user_id = $user_data['id'];
            }
            if ($user_id > 0) {
//$this->session->set_userdata('admin_id', $admin_id);
                $this->session->set_userdata('advisor', $user_data);
            }
        }
    }

    public function destroy_advisor_session() {
        if ($this->session->has_userdata('advisor')) {
            $this->session->unset_userdata('advisor');
        }
    }

    public function advisor_session_checked($is_active_session = 1) {
        if ($is_active_session) {
            if (!$this->session->has_userdata('advisor')) {
                redirect('');
            }
        } else {
            if ($this->session->has_userdata('advisor')) {
                redirect('');
            }
        }
    }

//============================== End Section ====================================//
}

?>