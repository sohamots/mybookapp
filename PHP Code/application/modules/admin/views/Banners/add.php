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
            <div class="panel panel-default">
                <div class="panel-heading">
                    <i class="fa fa-external-link-square"></i>
                    Add Banner
                    <div class="panel-tools">

                    </div>
                </div>

                <div class="panel-body">
                    <form action="" method="post" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">
                                        Title <span class="symbol required"></span>
                                    </label>
                                    <input type="text" placeholder="Insert Title" class="form-control" id="title" name="title">
                                    <?=form_error('title')?>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">
                                        Image <span class="symbol required"></span>
                                    </label>
                                    <input type="file" class="form-control" id="image" name="image" required="required"/>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <button class="btn btn-yellow btn-block" type="submit">
                                            Add Banner <i class="fa fa-arrow-circle-right"></i>
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