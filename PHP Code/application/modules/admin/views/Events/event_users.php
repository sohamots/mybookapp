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
                    Events
                </li>
                <li class="search-box">

                </li>
            </ol>
            <div class="page-header">
                <h1>Event Management</h1>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <!-- start: DYNAMIC TABLE PANEL -->
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-external-link-square"></i>
                    Participent List
                    <div class="panel-tools">

                    </div>
                </div>

                <div class="panel-body">
                    <table class="table table-striped table-bordered table-hover table-full-width" id="sample_1">
                        <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
                        if(count($event_users)>0){
                            $i=1;
                            foreach ($event_users as $user) {
                                ?>
                                <tr>
                                    <td><?=$i?></td>
                                    <td><?=$user->name?></td>
                                    <td><?=$user->mobile?></td>
                                    <td>
                                        <?php
                                        if($user->type_id==1){
                                            echo 'Equaly';
                                        }else if($user->type_id==2){
                                            echo 'Only Drinks';
                                        }else if($user->type_id==3){
                                            echo 'Drinks+Food';
                                        }else{
                                            echo 'No specified';
                                        }
                                        ?>
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