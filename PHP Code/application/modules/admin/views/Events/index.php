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
                    Event List
                    <div class="panel-tools">

                    </div>
                </div>

                <div class="panel-body">
                    <table class="table table-striped table-bordered table-hover table-full-width" id="sample_1">
                        <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Event</th>
                            <th>Venue</th>
                            <th>Event Date</th>
                            <th>Event Time</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
                        if(count($events)>0){
                            $i=1;
                            foreach ($events as $user) {
                                ?>
                                <tr>
                                    <td><?=$i?></td>
                                    <td><?=$user->name?></td>
                                    <td><?=$user->event_name?></td>
                                    <td><?=$user->venue?></td>
                                    <td><?=date("d-M-Y",strtotime($user->event_date))?></td>
                                    <td><?=$user->event_time?></td>
                                    <td>
                                        <a href="<?= base_url('admin/events/partcipents/' . $user->id) ?>" class="btn btn-xs btn-primary waves-effect waves-light" >View Participients</a>
                                        <a href="<?= base_url('admin/events/bills/' . $user->id) ?>" class="btn btn-xs btn-primary waves-effect waves-light" >View Bills</a>
                                        
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