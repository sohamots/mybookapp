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
                    Enquiries
                </li>
                <li class="search-box">

                </li>
            </ol>
            <div class="page-header">
                <h1>Enquiries Management</h1>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <!-- start: DYNAMIC TABLE PANEL -->
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-external-link-square"></i>
                    Enquiry List
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
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php
                        if(count($enquiries)>0){
                            $i=1;
                            foreach ($enquiries as $enquiry) {
                                ?>
                                <tr>
                                    <td><?=$i?></td>
                                    <td><?=$enquiry->name?></td>
                                    <td><?=$enquiry->email?></td>
                                    <td><?=$enquiry->phone?></td>
                                    <td><?=$enquiry->message?></td>
                                </tr>
                                <?php
                                $i+=1;
                            }
                        }else{
                            ?>
                            <tr>
                                <td colspan="5">No data found in user list</td>
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