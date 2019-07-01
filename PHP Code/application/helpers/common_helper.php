<?php

if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

if (!function_exists('common_viewloader')) {

    function common_viewloader($viewfilepath = '', $param = array(),$title='') {
        $CI = &get_instance();
        $data = array();
        $data['title'] = $title;
        $CI->load->view('header',$data);
        //$CI->load->view('leftpanel');

        //die($viewfilepath);
        if ($viewfilepath != '') {
            $CI->load->view($viewfilepath, $param);
        }
        //$CI->load->view('footer2');
        $CI->load->view('footer');
    }

    function common_viewloader1($viewfilepath = '', $param = array(),$title='') {
        $CI = &get_instance();
        $data = array();
        $data['title'] = $title;
        $CI->load->view('header1',$data);
        //$CI->load->view('leftpanel');

        //die($viewfilepath);
        if ($viewfilepath != '') {
            $CI->load->view($viewfilepath, $param);
        }
        //$CI->load->view('footer2');
        $CI->load->view('footer1');
    }
    
    function admin_viewloader($viewfilepath = '', $param = array()) {
        $CI = &get_instance();
        //$CI->load->view('header');
        //$CI->load->view('leftpanel');

        //die($viewfilepath);
        if ($viewfilepath != '') {
            $CI->load->view($viewfilepath, $param);
        }
        //$CI->load->view('footer2');
        //$CI->load->view('footer');
    }
    
    function load_login($viewfilepath = '', $param = array()){
        $CI = &get_instance();
        
        if ($viewfilepath != '') {
            $CI->load->view($viewfilepath, $param);
        }
    }

}
// display function 
if (!function_exists('pr')) {

    function pr($display_data = array()) {
        if (!empty($display_data)) {
            echo "<pre>";
            print_r($display_data);
            echo "</pre>";
        }
    }

}


?>