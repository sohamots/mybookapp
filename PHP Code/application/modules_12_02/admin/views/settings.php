<div class="container">
    <!-- start: PAGE HEADER -->
    <div class="row">
        <div class="col-sm-12">
            <ol class="breadcrumb">
                <li>
                    <i class="clip-home-3"></i>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li class="search-box">

                </li>
            </ol>
            <div class="page-header">
                <h1>Settings Management</h1>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-external-link-square"></i>
                   Settings Management
                    <div class="panel-tools">

                    </div>
                </div>

                <div class="panel-body">
                    <form action="<?=base_url('admin/settings/settings_update')?>" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">
                                        About Company <span class="symbol required"></span>
                                    </label>
                                    <textarea placeholder="Insert About Company" class="form-control ckeditor" id="about_us" name="about_us"><?= set_value('about_us', $settings->about_us) ?></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Terms Of Use <span class="symbol required"></span>
                                    </label>
                                    <textarea placeholder="Insert Terms Of Use" class="form-control ckeditor" id="terms" name="terms"><?= set_value('terms', $settings->terms) ?></textarea>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Privacy Policy <span class="symbol required"></span>
                                    </label>
                                    <textarea placeholder="Insert Privacy Policy" class="form-control ckeditor" id="privacy" name="privacy"><?= set_value('privacy', $settings->privacy) ?></textarea>
                                </div>
                                
                                <div class="form-group">
                                    <label class="control-label">
                                        Address <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert Address" class="form-control" id="address" name="address" value="<?= $settings->address ?>">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Email Id <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert Email Id" class="form-control" id="email" name="email" value="<?= $settings->email ?>">
                                    
                                </div>
                                <div class="form-group"
                                    <label class="control-label">
                                        Phone No 1 <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert Phone No 1" class="form-control" id="phone1" name="phone1" value="<?= $settings->phone1 ?>">
                                    
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Phone No 2 <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert Phone No 2" class="form-control" id="phone2" name="phone2" value="<?=  $settings->phone2 ?>">
                                    
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <button class="btn btn-yellow btn-block" type="submit">
                                            Update Settings <i class="fa fa-arrow-circle-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>                       