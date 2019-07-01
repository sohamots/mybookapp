<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

class Banners extends MY_Controller{
    function __construct() {
        parent::__construct();
    }
    
    public function index() {
        //$condition['is_active']= '1';
        $conditions['is_deleted'] = '0';

        $banners = $this->BlankModel->getData("banners", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table = array());

        common_viewloader('Banners/index', array('banners' => $banners));
    }

    public function add() {

        $this->load->library(array('form_validation'));
        $rules = array(
            array(
                'field' => 'title',
                'label' => 'Title',
                'rules' => 'required',
                'errors' => array()
            ),
        );

        $this->form_validation->set_rules($rules);
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');
        if ($this->form_validation->run() == true) {
            $saved_data = $this->input->post();

            $saved_data['created_at'] = date("Y-m-d G:i:a");

            $saved_data['is_active'] = '1';

            $image = $_FILES['image'];
            $filename = time() . "_" . trim($image['name']);
            if (!move_uploaded_file($image['tmp_name'], './assets/upload/banners/' . $filename)) {
                $filename = '';
            }
            //image name 
            $saved_data['name'] = $filename;

            if ($this->BlankModel->insertData("banners", $saved_data)) {
                $this->session->set_flashdata('success', 'Banner created successfully');
                redirect('admin/Banners/add');
            } else {
                $this->session->set_flashdata('error', 'Banner Not created');
            }
        }

        common_viewloader('Banners/add', array());
    }

    public function edit($banner_id) {
        $condition = array(
            'id' => $banner_id,
        );

        $this->load->library(array('form_validation'));
        $rules = array(
            array(
                'field' => 'title',
                'label' => 'Title',
                'rules' => 'required',
                'errors' => array()
            ),
        );

        $this->form_validation->set_rules($rules);
        $this->form_validation->set_error_delimiters('<div class="error">', '</div>');

        $banners = $this->BlankModel->getData("banners", $condition);

        if ($this->form_validation->run() == true) {
            $saved_data = $this->input->post();
            $saved_data['is_active'] = '1';

            $image = $_FILES['image'];
            $filename = time() . "_" . trim($image['name']);
            if (!move_uploaded_file($image['tmp_name'], './assets/upload/banners/' . $filename)) {
                $filename = '';
            }
            //image name 
            if ($filename != '') {
                $saved_data['name'] = $filename;
            }

            if ($this->BlankModel->updateData("banners", $saved_data, $condition)) {
                $this->session->set_flashdata('success', 'Banner updated successfully');
                $url = 'admin/Banners/edit/' . $banner_id;
                redirect($url);
            } else {
                $this->session->set_flashdata('error', 'Banner data Not updated');
            }
        }

        common_viewloader('Banners/edit', array('banner' => $banners[0]));
    }

    public function delete($banner_id) {
        $condition = array(
            'id' => $banner_id,
        );

        $updatedata = array(
            'is_deleted' => '1',
        );
        if ($this->BlankModel->updateData("banners", $updatedata, $condition)) {
            $this->session->set_flashdata('success', 'Banner deleted successfully');
        } else {
            $this->session->set_flashdata('error', 'Banner not deleted');
        }
        redirect('admin/banners/');
    }

    public function banner_active($banner_id, $is_active = 0) {
        $condition = array(
            'id' => $banner_id,
        );

        $updatedata = array(
            'is_active' => $is_active,
        );
        if ($this->BlankModel->updateData("banners", $updatedata, $condition)) {
            if ($is_active) {
                $this->session->set_flashdata('success', 'Banner activated successfully');
            } else {
                $this->session->set_flashdata('error', 'Banner deactivated successfully');
            }
        } else {
            $this->session->set_flashdata('error', 'Banner not updated');
        }
        redirect('admin/banners');
    }
}
