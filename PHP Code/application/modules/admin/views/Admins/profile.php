<div class="container-fluid">
    <div class="row-fluid">
        <div class="span8">
            <div class="widget-box">
                <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                    <h5>My Profile</h5>
                </div>
                <div class="widget-content nopadding">
                    <form action="" method="post" class="form-horizontal">
                        <div class="control-group">
                            <label class="control-label">Name :</label>
                            <div class="controls">
                                <input type="text" name="name" class="span11" placeholder="Name" value="<?=$this->session->admin->name?>" />
                                
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label">Email Id :</label>
                            <div class="controls">
                                <input type="text" name="email" class="span11" placeholder="Email Id" value="<?=$this->session->admin->email?>" />
                                
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label">Mobile No :</label>
                            <div class="controls">
                                <input type="text" name="mobile" class="span11" placeholder="Mobile No" value="<?=$this->session->admin->mobile?>" />
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div><hr>
</div>
