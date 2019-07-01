<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

class Users extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    public function index(){
    	//$condition['is_active']= '1';
        $conditions['is_deleted'] = '0';

        $users = $this->BlankModel->getData("users", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table=array());

        common_viewloader('Users/index', array('users' => $users));
    }

    public function add() {

        $this->load->library(array('form_validation'));
        $rules = array(
            array(
                'field' => 'name',
                'label' => 'Name',
                'rules' => 'required',
                'errors' => array()
            ),
            array(
                'field' => 'email',
                'label' => 'Email Id',
                'rules' => 'required',
                'errors' => array()
            ),
            array(
                'field' => 'mobile',
                'label' => 'Mobile No',
                'rules' => 'required',
                'errors' => array()
            ),
            array(
                'field' => 'password',
                'label' => 'Password',
                'rules' => 'required',
                'errors' => array()
            ),
        );

        $this->form_validation->set_rules($rules);
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
        if ($this->form_validation->run() == true) {
            $saved_data = $this->input->post();

            $saved_data['password'] = md5($saved_data['password']);
            $saved_data['dob'] = date("Y-m-d",strtotime($saved_data['dob']));
            $saved_data['is_active'] = '1';
            
            if ($this->BlankModel->insertData("users", $saved_data)) {
                $this->session->set_flashdata('success', 'User created successfully');
                redirect('admin/Users/add');
            } else {
                $this->session->set_flashdata('error', 'User Not created');
            }
        }

        common_viewloader('Users/add' , array());
    }

    public function edit($user_id) {
        $condition = array(
            'id' => $user_id,
        );

        $this->load->library(array('form_validation'));
        $rules = array(
            array(
                'field' => 'name',
                'label' => 'Name',
                'rules' => 'required',
                'errors' => array()
            ),
            array(
                'field' => 'mobile',
                'label' => 'Mobile No',
                'rules' => 'required',
                'errors' => array()
            ),
            array(
                'field' => 'email',
                'label' => 'Email Id',
                'rules' => 'required',
                'errors' => array()
            ),
        );

        $this->form_validation->set_rules($rules);
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        $users = $this->BlankModel->getData("users", $condition);

        if ($this->form_validation->run() == true) {
            $saved_data = $this->input->post();
            $saved_data['is_active'] = '1';

            if ($this->BlankModel->updateData("users", $saved_data, $condition)) {
                $this->session->set_flashdata('success', 'User updated successfully');
                $url = 'admin/users/edit/' . $user_id;
                redirect($url);
            } else {
                $this->session->set_flashdata('error', 'User data Not updated');
            }
        }

        common_viewloader('users/edit', array('user' => $users[0]));
    }

    public function delete($user_id) {
        $condition = array(
            'id' => $user_id,
        );

        $updatedata = array(
            'is_deleted' => '1',
        );
        if ($this->BlankModel->updateData("users", $updatedata, $condition)) {
            $this->session->set_flashdata('success', 'User deleted successfully');
        } else {
            $this->session->set_flashdata('error', 'User not deleted');
        }
        redirect('admin/users');
    }

    public function user_active($user_id,$is_active=0) {
        $condition = array(
            'id' => $user_id,
        );

        $updatedata = array(
            'is_active' => $is_active,
        );
        if ($this->BlankModel->updateData("users", $updatedata, $condition)) {
            if($is_active){
                $this->session->set_flashdata('success', 'User activated successfully');
            }else{
                $this->session->set_flashdata('error', 'User deactivated successfully');
            }
            
        } else {
            $this->session->set_flashdata('error', 'User not deleted');
        }
        redirect('admin/users');
    }
}