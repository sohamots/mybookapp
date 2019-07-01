<?php
if (!defined('BASEPATH'))
    EXIT("No direct script access allowed");

$basepath = base_url("assets/");
?>
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
                    Banners
                </li>
                <li class="search-box">

                </li>
            </ol>
            <div class="page-header">
                <h1>Banners Management</h1>
            </div>

        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <!-- start: DYNAMIC TABLE PANEL -->
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-external-link-square"></i>
                    Banners List
                    <div class="panel-tools">

                    </div>
                </div>

                <div class="panel-body">
                    <table class="table table-striped table-bordered table-hover table-full-width" id="sample_1">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Title</th>
                                <th>Post Date</th>
                                <th>Image</th>
                                <th style="width: 160px;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            if (count($banners) > 0) {
                                $i = 1;
                                foreach ($banners as $banner) {
                                    ?>
                                    <tr>
                                        <td><?= $i ?></td>
                                        <td><?= $banner->title ?></td>
                                        <td><?= date("d M Y h:i a",strtotime($banner->created_at)) ?></td>
                                        <td>
                                            <?php
                                            if($banner->name!=''){
                                            ?>
                                            <img src="<?= $basepath ?>/upload/banners/<?= $banner->name ?>?>" width="250" height="150"/>
                                            <?php } ?>
                                        </td>
                                        <td>
                                            <a href="<?= base_url('admin/banners/edit/' . $banner->id) ?>" class="btn btn-xs btn-primary waves-effect waves-light" >Edit</a>
                                            <?php
                                            if ($banner->is_active) {
                                                // click fo active
                                                ?>
                                                <a href="<?= base_url('admin/banners/banner_active/' . $banner->id) ?>" class="btn btn-xs btn-success waves-effect waves-light">Active</a>
                                                <?php
                                            } else {
                                                ?>
                                                <a href="<?= base_url('admin/banners/banner_active/' . $banner->id . '/1') ?>" class="btn btn-xs btn-warning waves-effect waves-light">In Active</a>
                                                <?php
                                            }
                                            ?>

                                            <a href="<?= base_url('admin/banners/delete/' . $banner->id) ?>" onClick="return confirm('Do you want to delete this blog ?')" class="btn btn-xs waves-effect waves-light btn-danger" > Delete</a>
                                        </td>
                                    </tr>
                                    <?php
                                    $i+=1;
                                }
                            } else {
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