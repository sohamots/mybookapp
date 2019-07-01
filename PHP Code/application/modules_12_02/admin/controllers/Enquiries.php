<?php
if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

class Enquiries extends MY_Controller{
    function __construct() {
        parent::__construct();
        $this->session_checked($is_active_session = 1);
    }
    
    public function index(){
    	//$condition['is_active']= '1';
        $conditions['is_deleted'] = '0';

        $enquiries = $this->BlankModel->getData("enquiries", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table=array());

        common_viewloader('Enquiries/index', array('enquiries' => $enquiries));
    }
}
