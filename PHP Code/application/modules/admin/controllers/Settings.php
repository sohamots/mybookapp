<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

class Settings extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->session_checked($is_active_session = 1);
    }

    public function index() {
        $settings = $this->BlankModel->getData("settings", $conditions = array(), $from_fields = array(), $is_multy_result = 0, $join_table = array());

        common_viewloader('settings', array('settings' => $settings));
    }

    public function settings_update() {
        $saved_data = $this->input->post();
        $condition = array('id'=>'1');

        if ($this->BlankModel->updateData("settings", $saved_data, $condition)) {
            $this->session->set_flashdata('success', 'Settings updated successfully');
            $url = 'admin/settings/';
            redirect($url);
        } else {
            $this->session->set_flashdata('error', 'Settings data Not updated');
        }
    }

}
