<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

class Admins extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    /**
     * This is a default method
     */
    public function index() {
        $this->session_checked($is_active_session = 1);
        $dashboard_data = array();

        
        common_viewloader('Admins/dashboard', array("dashboard_data" => $dashboard_data));
        //redirect('admin/Admins/dashboard');
    }

    /**
     * This method is for admin login
     */
    public function login() {
        $this->session_checked($is_active_session = 0);

        $this->load->library(array('form_validation'));
        $rules = array(
            array(
                'field' => 'email',
                'label' => 'Email',
                'rules' => 'required|valid_email',
                'errors' => array()
            ),
            array(
                'field' => 'password',
                'label' => 'Password',
                'rules' => 'required',
                'errors' => array()
            )
        );
        $this->form_validation->set_rules($rules);
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
        if ($this->form_validation->run() == true) {
            // db query section here
            $data = $this->input->post();
            $conditions['is_active'] = 1;
            $conditions['email'] = $data['email'];
            $conditions['password'] = md5($data['password']);
            $select_fields = '';
            $is_multy_result = 0;
            $admin = $this->BlankModel->getData('admins', $conditions, $select_fields, $is_multy_result);
            // pr($admin);
            // die();
            if (!empty($admin)) {
                //session set 
                $this->set_admin_session($admin);
                $dashboard_data = array();

                redirect('admin/admins/');
            } else {
                $this->session->set_flashdata('error', 'Email or password does not matched');
            }
        }
        admin_viewloader('Admins/login');
    }

    /**
     * This method is for admin logout
     */
    public function logout() {
        $this->destroy_admin_session();
        // redirect to the 
        $this->session->set_flashdata('success', 'You logout successfully');
        redirect('admin/admins/login');
    }

    public function profile() {
        common_viewloader('Admins/profile');
    }

}

?>