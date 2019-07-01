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
                <li class="active">
                    Users
                </li>
                <li class="search-box">

                </li>
            </ol>
            <div class="page-header">
                <h1>User Management</h1>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-external-link-square"></i>
                    Add User
                    <div class="panel-tools">

                    </div>
                </div>

                <div class="panel-body">
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">
                                        Name <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert your Name" class="form-control" id="name" name="name">
                                    <?=form_error('name')?>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Email Id <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert your Email Id" class="form-control" id="email" name="email">
                                    <?=form_error('email')?>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Mobile No <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert your Mobile No" class="form-control" id="mobile" name="mobile">
                                    <?=form_error('mobile')?>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Password <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert your Password" class="form-control" id="password" name="password">
                                    <?=form_error('password')?>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Date Of Birth
                                    </label>
                                    <input type="text" placeholder="Insert your Date Of Birth" class="form-control date-picker" id="dob" name="dob">
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-12">
                                        <div class="row">
                                            Select Gender
                                        </div>
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="gender" class="grey" value="1">
                                        Male
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="gender" class="grey" value="2">
                                        Female
                                    </label>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <button class="btn btn-yellow btn-block" type="submit">
                                            Add User <i class="fa fa-arrow-circle-right"></i>
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