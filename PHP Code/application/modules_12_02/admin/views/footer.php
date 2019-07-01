<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$basepath = base_url('assets/');
?>
<div class="footer clearfix">
    <div class="footer-inner">
        &copy; 2018 Lets Dutch
    </div>
    <div class="footer-items">
        <span class="go-top"><i class="clip-chevron-up"></i></span>
    </div>
</div>
<!-- start: MAIN JAVASCRIPTS -->
<!--[if lt IE 9]>
<script src="assets/plugins/respond.min.js"></script>
<script src="assets/plugins/excanvas.min.js"></script>
<script type="text/javascript" src="assets/plugins/jQuery-lib/1.10.2/jquery.min.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<!--<script src="<?= $basepath ?>plugins/jQuery-lib/2.0.3/jquery.min.js"></script>-->
<!--<![endif]-->
<script src="<?= $basepath ?>plugins/jquery-ui/jquery-ui-1.10.2.custom.min.js"></script>
<script src="<?= $basepath ?>plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="<?= $basepath ?>plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js"></script>
<script src="<?= $basepath ?>plugins/blockUI/jquery.blockUI.js"></script>
<script src="<?= $basepath ?>plugins/iCheck/jquery.icheck.min.js"></script>
<script src="<?= $basepath ?>plugins/perfect-scrollbar/src/jquery.mousewheel.js"></script>
<script src="<?= $basepath ?>plugins/perfect-scrollbar/src/perfect-scrollbar.js"></script>
<script src="<?= $basepath ?>plugins/less/less-1.5.0.min.js"></script>
<script src="<?= $basepath ?>plugins/jquery-cookie/jquery.cookie.js"></script>
<script src="<?= $basepath ?>plugins/bootstrap-colorpalette/js/bootstrap-colorpalette.js"></script>
<script src="<?= $basepath ?>js/main.js"></script>
<!-- end: MAIN JAVASCRIPTS -->
<!-- start: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
<!-- <script src="<?= $basepath ?>plugins/flot/jquery.flot.js"></script>
<script src="<?= $basepath ?>plugins/flot/jquery.flot.pie.js"></script>
<script src="<?= $basepath ?>plugins/flot/jquery.flot.resize.min.js"></script>
<script src="<?= $basepath ?>plugins/jquery.sparkline/jquery.sparkline.js"></script>
<script src="<?= $basepath ?>plugins/jquery-easy-pie-chart/jquery.easy-pie-chart.js"></script>
<script src="<?= $basepath ?>plugins/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js"></script>
<script src="<?= $basepath ?>plugins/fullcalendar/fullcalendar/fullcalendar.js"></script> -->
<!-- <script src="<?= $basepath ?>js/index.js"></script> -->
<script type="text/javascript" src="<?= $basepath ?>plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="<?= $basepath ?>plugins/DataTables/media/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="<?= $basepath ?>plugins/DataTables/media/js/DT_bootstrap.js"></script>
<script src="<?= $basepath ?>js/table-data.js"></script>
<script src="<?= $basepath ?>plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script src="<?= $basepath ?>ckeditor/ckeditor.js"></script>
<script src="<?= $basepath ?>ckeditor/adapters/jquery.js"></script>
<script src="<?= $basepath ?>plugins/colorbox/jquery.colorbox-min.js"></script>
<script src="<?= $basepath ?>js/pages-gallery.js"></script>
<script src="<?= $basepath ?>plugins/select2/select2.min.js"></script>
<script src="<?= $basepath ?>js/form-elements.js"></script>
<!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
<!-- end: JAVASCRIPTS REQUIRED FOR THIS PAGE ONLY -->
<script>
    jQuery(document).ready(function() {
        Main.init();
        //Index.init();
        FormElements.init();
        TableData.init();
        $('.date-picker').datepicker();
        $('textarea.ckeditor').ckeditor();
        PagesGallery.init();
    });
</script>
</body>
<!-- end: BODY -->
</html>