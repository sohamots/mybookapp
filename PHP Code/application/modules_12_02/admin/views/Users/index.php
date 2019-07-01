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
            <!-- start: DYNAMIC TABLE PANEL -->
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-external-link-square"></i>
                    User List
                    <div class="panel-tools">

                    </div>
                </div>

                <div class="panel-body">
                    <table class="table table-striped table-bordered table-hover table-full-width" id="sample_1">
                        <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Mobile No</th>
                            <th>Gender</th>
                            <th>Date Of Birth</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
                        if(count($users)>0){
                            $i=1;
                            foreach ($users as $user) {
                                ?>
                                <tr>
                                    <td><?=$i?></td>
                                    <td><?=$user->name?></td>
                                    <td><?=$user->email?></td>
                                    <td><?=$user->mobile?></td>
                                    <td>
                                        <?php
                                        if($user->gender==1){
                                            echo 'Male';
                                        }else if($user->gender==2){
                                            echo 'Female';
                                        }else{
                                            echo 'No specified';
                                        }
                                        ?>
                                    </td>
                                    <td><?=date("d-M-Y",strtotime($user->dob))?></td>
                                    <td>
                                        <a href="<?= base_url('admin/users/edit/' . $user->id) ?>" class="btn btn-xs btn-primary waves-effect waves-light" >Edit</a>
                                        <?php
                                        if ($user->is_active) {
                                            // click fo active
                                            ?>
                                            <a href="<?= base_url('admin/users/user_active/' . $user->id) ?>" class="btn btn-xs btn-success waves-effect waves-light">Active</a>
                                            <?php
                                        } else {
                                            ?>
                                            <a href="<?= base_url('admin/users/user_active/' . $user->id . '/1') ?>" class="btn btn-xs btn-warning waves-effect waves-light">In Active</a>
                                            <?php
                                        }
                                        ?>

                                        <a href="<?= base_url('admin/users/delete/' . $user->id) ?>" onClick="return confirm('Do you want to delete this user ?')" class="btn btn-xs waves-effect waves-light btn-danger" > Delete</a>
                                    </td>
                                </tr>
                                <?php
                                $i+=1;
                            }
                        }else{
                            ?>
                            <tr>
                                <td colspan="7">No data found in user list</td>
                            </tr>
                            <?php
                        }
                        ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>