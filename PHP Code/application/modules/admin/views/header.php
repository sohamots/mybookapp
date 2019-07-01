<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$basepath = base_url('assets/');
?>

<!DOCTYPE html>
<!-- Template Name: Clip-One - Responsive Admin Template build with Twitter Bootstrap 3.x Version: 1.4 Author: ClipTheme -->
<!--[if IE 8]><html class="ie8 no-js" lang="en"><![endif]-->
<!--[if IE 9]><html class="ie9 no-js" lang="en"><![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
  <!--<![endif]-->
  <!-- start: HEAD -->
  <head>
    <title>My Book App Control Panel</title>
    <!-- start: META -->
    <meta charset="utf-8" />
    <!--[if IE]><meta http-equiv='X-UA-Compatible' content="IE=edge,IE=9,IE=8,chrome=1" /><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- end: META -->
    <!-- start: MAIN CSS -->
    <link rel="icon" href="<?=$basepath?>/images/fav.png" type="image/x-icon">
    <link rel="stylesheet" href="<?=$basepath?>plugins/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?=$basepath?>plugins/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?=$basepath?>fonts/style.css">
    <link rel="stylesheet" href="<?=$basepath?>css/main.css">
    <link rel="stylesheet" href="<?=$basepath?>css/main-responsive.css">
    <link rel="stylesheet" href="<?=$basepath?>plugins/iCheck/skins/all.css">
    <link rel="stylesheet" href="<?=$basepath?>plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css">
    <link rel="stylesheet" href="<?=$basepath?>plugins/perfect-scrollbar/src/perfect-scrollbar.css">
    <link rel="stylesheet" href="<?=$basepath?>css/theme_navy.css" type="text/css" id="skin_color">
    <link rel="stylesheet" href="<?=$basepath?>css/print.css" type="text/css" media="print"/>
    <!--[if IE 7]>
    <link rel="stylesheet" href="<?=$basepath?>plugins/font-awesome/css/font-awesome-ie7.min.css">
    <![endif]-->
    <!-- end: MAIN CSS -->
    <!-- start: CSS REQUIRED FOR THIS PAGE ONLY -->
      
    <link rel="stylesheet" type="text/css" href="<?=$basepath?>plugins/select2/select2.css" />
    <link rel="stylesheet" href="<?=$basepath?>plugins/datepicker/css/datepicker.css">
    <link rel="stylesheet" href="<?=$basepath?>plugins/fullcalendar/fullcalendar/fullcalendar.css">
    <link rel="stylesheet" href="<?=$basepath?>plugins/DataTables/media/css/DT_bootstrap.css" />
    <!-- end: CSS REQUIRED FOR THIS PAGE ONLY -->
    <link rel="shortcut icon" href="favicon.ico" />
    <script src="<?=$basepath?>plugins/jQuery-lib/2.0.3/jquery.min.js"></script>
    <style type="text/css">
      .error{
        font-size: 14px;
        font-weight: 400;
        color: #ff0000;
        text-decoration: none;
      }
    </style>
  </head>
  <!-- end: HEAD -->
  <!-- start: BODY -->
  <body>
    <!-- start: HEADER -->
    <div class="navbar navbar-inverse navbar-fixed-top">
      <!-- start: TOP NAVIGATION CONTAINER -->
      <div class="container">
        <div class="navbar-header">
          <!-- start: RESPONSIVE MENU TOGGLER -->
          <button data-target=".navbar-collapse" data-toggle="collapse" class="navbar-toggle" type="button">
            <span class="clip-list-2"></span>
          </button>
          <!-- end: RESPONSIVE MENU TOGGLER -->
          <!-- start: LOGO -->
          <a class="navbar-brand" href="<?=base_url('admin/admins')?>">
            My Book App
          </a>
          <!-- end: LOGO -->
        </div>
        <div class="navbar-tools">
          <!-- start: TOP NAVIGATION MENU -->
          
          <ul class="nav navbar-right">
            
            <!-- start: USER DROPDOWN -->
            <li class="dropdown current-user">
              <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" data-close-others="true" href="#">
                <img src="<?=$basepath?>images/user.png" class="circle-img" alt="" style="width: 30px;">
                <span class="username"><?=$this->session->admin->name?></span>
                <i class="clip-chevron-down"></i>
              </a>
              <ul class="dropdown-menu">
                <!-- <li>
                  <a href="pages_user_profile.html">
                    <i class="clip-user-2"></i>
                    &nbsp;My Profile
                  </a>
                </li> -->
                <li>
                  <a href="<?=base_url('admin/admins/logout')?>">
                    <i class="clip-exit"></i>
                    &nbsp;Log Out
                  </a>
                </li>
              </ul>
            </li>
            <!-- end: USER DROPDOWN -->
            <!-- start: PAGE SIDEBAR TOGGLE -->
            
            <!-- end: PAGE SIDEBAR TOGGLE -->
          </ul>
          <div class="nav-alert navbar-right">
            <?php
                if ($this->session->flashdata('success')) {
                    ?>
                    <div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><?= $this->session->flashdata('success') ?></div>
                    <?php
                } elseif ($this->session->flashdata('error')) {
                    ?>
                    <div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><?= $this->session->flashdata('error') ?></div>
                    <?php
                }
            ?>
          </div>
          <!-- end: TOP NAVIGATION MENU -->
        </div>
      </div>
      <!-- end: TOP NAVIGATION CONTAINER -->
    </div>
    <!-- end: HEADER -->
    <!-- start: MAIN CONTAINER -->
    <div class="main-container">
      <div class="navbar-content">
        <!-- start: SIDEBAR -->
        <div class="main-navigation navbar-collapse collapse">
          <!-- start: MAIN MENU TOGGLER BUTTON -->
          <div class="navigation-toggler">
            <i class="clip-chevron-left"></i>
            <i class="clip-chevron-right"></i>
          </div>
          <!-- end: MAIN MENU TOGGLER BUTTON -->
          <!-- start: MAIN NAVIGATION MENU -->
            <ul class="main-navigation-menu">
                <li class="">
                    <a href="<?= base_url('admin/admins/') ?>"><i class="clip-home-3"></i>
                        <span class="title"> Dashboard </span>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)"><i class="clip-screen"></i>
                        <span class="title"> Registered Users </span><i class="icon-arrow"></i>
                        <span class="selected"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="<?= base_url('admin/users/') ?>">
                                <span class="title"> User List </span>
                            </a>
                        </li>
                        <li>
                            <a href="<?= base_url('admin/users/add') ?>">
                                <span class="title"> Add User </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)"><i class="clip-screen"></i>
                        <span class="title"> Manage Banners </span><i class="icon-arrow"></i>
                        <span class="selected"></span>
                    </a>
                    <ul class="sub-menu">
                        <li>
                            <a href="<?= base_url('admin/banners/') ?>">
                                <span class="title"> Banner List </span>
                            </a>
                        </li>
                        <li>
                            <a href="<?= base_url('admin/banners/add') ?>">
                                <span class="title"> Add Banner </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="<?= base_url('admin/settings/') ?>"><i class="clip-home-3"></i>
                        <span class="title"> Settings </span><span class="selected"></span>
                    </a>
                </li>
                <li>
                    <a href="<?= base_url('admin/enquiries/') ?>"><i class="clip-home-3"></i>
                        <span class="title"> Enquiries </span><span class="selected"></span>
                    </a>
                </li>
            </ul>
          <!-- end: MAIN NAVIGATION MENU -->
        </div>
        <!-- end: SIDEBAR -->
      </div>
      <!-- start: PAGE -->
<div class="main-content">

