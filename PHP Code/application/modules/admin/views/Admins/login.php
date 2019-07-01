<?php
if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");
    $basepath = base_url("assets/");
?>
<!DOCTYPE html>
<html lang="en">
    
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
<!--        <link rel="icon" href="<?=$basepath?>/images/fav.png" type="image/x-icon">-->
        <link rel="stylesheet" href="<?=$basepath?>plugins/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="<?=$basepath?>plugins/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="<?=$basepath?>fonts/style.css">
        <link rel="stylesheet" href="<?=$basepath?>css/main.css">
        <link rel="stylesheet" href="<?=$basepath?>css/main-responsive.css">
        <link rel="stylesheet" href="<?=$basepath?>plugins/iCheck/skins/all.css">
        <link rel="stylesheet" href="<?=$basepath?>plugins/bootstrap-colorpalette/css/bootstrap-colorpalette.css">
        <link rel="stylesheet" href="<?=$basepath?>plugins/perfect-scrollbar/src/perfect-scrollbar.css">
        <link rel="stylesheet" href="<?=$basepath?>css/theme_light.css" type="text/css" id="skin_color">
        <link rel="stylesheet" href="<?=$basepath?>css/print.css" type="text/css" media="print"/>
        <!--[if IE 7]>
        <link rel="stylesheet" href="<?=$basepath?>plugins/font-awesome/css/font-awesome-ie7.min.css">
        <![endif]-->
        <!-- end: MAIN CSS -->
        <!-- start: CSS REQUIRED FOR THIS PAGE ONLY -->
        <!-- end: CSS REQUIRED FOR THIS PAGE ONLY -->
    </head>
    <!-- end: HEAD -->
    <!-- start: BODY -->
    <body class="login example2">
        <div class="main-login col-sm-4 col-sm-offset-4">
            <div class="logo">
            <!-- start: LOGIN BOX -->
            <div class="box-login">
                <h3>Sign in to your account</h3>
               <!--  <p>
                    Please enter your name and password to log in.
                </p> -->
                <form class="form-login" action="<?= base_url() . uri_string() ?>" method="post">
                    <div class="errorHandler alert alert-danger no-display">
                        <i class="fa fa-remove-sign"></i> You have some form errors. Please check below.
                    </div>
                    <fieldset>
                        <div class="form-group">
                            <span class="input-icon">
                                <input type="text" class="form-control" name="email" placeholder="Username">
                                <i class="fa fa-user"></i> </span>
                        </div>
                        <div class="form-group form-actions">
                            <span class="input-icon">
                                <input type="password" class="form-control password" name="password" placeholder="Password">
                                <i class="fa fa-lock"></i>
                               
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn-bricky pull-right">
                                Login <i class="fa fa-arrow-circle-right"></i>
                            </button>
                        </div>
                        
                    </fieldset>
                </form>
            </div>
            <!-- end: LOGIN BOX -->
            
            <!-- start: COPYRIGHT -->
            <div class="copyright">
                &copy; 2018 My Book App
            </div>
            <!-- end: COPYRIGHT -->
        </div>
        <!-- start: MAIN JAVASCRIPTS -->
        <!--[if lt IE 9]>
        <script src="<?=$basepath?>plugins/respond.min.js"></script>
        <script src="<?=$basepath?>plugins/excanvas.min.js"></script>
        <script type="text/javascript" src="<?=$basepath?>plugins/jQuery-lib/1.10.2/jquery.min.js"></script>
        <![endif]-->
        <!--[if gte IE 9]><!-->
        <script src="<?=$basepath?>plugins/jQuery-lib/2.0.3/jquery.min.js"></script>
        <!--<![endif]-->
        <script src="<?=$basepath?>plugins/jquery-ui/jquery-ui-1.10.2.custom.min.js"></script>
        <script src="<?=$basepath?>plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="<?=$basepath?>plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
        <script src="<?=$basepath?>plugins/blockUI/jquery.blockUI.js"></script>
        <script src="<?=$basepath?>plugins/iCheck/jquery.icheck.min.js"></script>
        <script src="<?=$basepath?>plugins/perfect-scrollbar/src/jquery.mousewheel.js"></script>
        <script src="<?=$basepath?>plugins/perfect-scrollbar/src/perfect-scrollbar.js"></script>
        <script src="<?=$basepath?>plugins/less/less-1.5.0.min.js"></script>
        <script src="<?=$basepath?>plugins/jquery-cookie/jquery.cookie.js"></script>
        <script src="<?=$basepath?>plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js"></script>
        <script src="<?=$basepath?>js/main.js"></script>
        <!-- end: MAIN JAVASCRIPTS -->
        <!-- start: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
        <script src="<?=$basepath?>plugins/jquery-validation/dist/jquery.validate.min.js"></script>
        <script src="<?=$basepath?>js/login.js"></script>
        <!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
        <script>
            jQuery(document).ready(function() {
                Main.init();
                Login.init();
            });
        </script>
    </body>
    <!-- end: BODY -->
</html>