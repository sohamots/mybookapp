<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

class Events extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    public function index(){
    	//$condition['is_active']= '1';
        $conditions['is_deleted'] = '0';

        $join_table = array(
            'in' => array(
                'users' => array(
                    'on' => array(
                        'user_id' => 'id'
                    ),
                    'fields' => array('name', 'mobile'),
                ),
            )
        );

        $events = $this->BlankModel->getData("events", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table);

        common_viewloader('Events/index', array('events' => $events));
    }

    public function partcipents($event_id){
        $conditions['is_deleted'] = '0';
        $conditions['event_id'] = $event_id;

        $event_users = $this->BlankModel->getData("event_users", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table=array());

        common_viewloader('Events/event_users', array('event_users' => $event_users));
    }

    public function bills($event_id){
        $conditions['is_deleted'] = '0';
        $conditions['event_id'] = $event_id;

        $event_bills = $this->BlankModel->getData("event_bills", $conditions, $from_fields = array(), $is_multy_result = 1, $join_table=array());

        common_viewloader('Events/event_bills', array('event_bills' => $event_bills));
    }
}

?>