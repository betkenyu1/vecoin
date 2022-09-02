<?php
include_once 'views/layout/header.php';
?>
<script src="assets/js/lib_charts.js"></script>

<!-- BEGIN #content -->
<div id="content" class="app-content">
    <!-- BEGIN row -->
    <div class="row">
        <!-- BEGIN col-6 -->
        <div class="col-xl-6">
            <!-- BEGIN card -->
            <div class="card border-0 mb-3 overflow-hidden bg-gray-900 text-white">
                <!-- BEGIN card-body -->
                <div class="card-body">

                    <!-- BEGIN row -->
                    <div class="row">
                        <!-- BEGIN col-7 -->
                        <div class="col-xl-7 col-lg-8">
                            <!-- BEGIN title -->
                            <div class="mb-3 text-gray-300">
                                <b>GESTION DE PRODUCTOS</b>
                                <span class="ms-2">
                                    <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Sumatoria de productos en stock de forma generalizada"></i>
                                </span>
                            </div>
                            <!-- END title -->
                            <!-- BEGIN total-sales -->
                            <div class="d-flex mb-1">
                                <p></p>
                                <h2 id="IdCantidad" class="mb-0">$<span data-animation="number" data-value="1">0.00</span></h2>
                                <div class="ms-auto mt-n1 mb-n1">
                                    <div id="total-sales-sparkline"></div>
                                </div>
                            </div>
                            <!-- END total-sales -->
                            <!-- BEGIN percentage -->

                            <!-- END percentage -->
                            <hr class="bg-white bg-opacity-50" />
                            <!-- BEGIN row -->
                            <div class="row text-truncate">
                                <!-- BEGIN col-6 -->
                                <div class="col-6">
                                    <div class=" text-gray-300">Total Precio</div>
                                    <div id="IdPrecio" class="fs-18px mb-5px fw-bold" data-animation="number" data-value="0"></div>
                                    <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                        <div class="progress-bar progress-bar-striped rounded-right bg-teal" data-animation="width" data-value="55%" style="width: 0%"></div>
                                    </div>
                                </div>
                                <!-- END col-6 -->
                                <!-- BEGIN col-6 -->
                                <div class="col-6">
                                    <div class=" text-gray-300">PVP</div>
                                    <div id="IdPVP" class="fs-18px mb-5px fw-bold">$<span data-animation="number" data-value="0"></span></div>
                                    <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                        <div class="progress-bar progress-bar-striped rounded-right" data-animation="width" data-value="60%" style="width: 0%"></div>
                                    </div>
                                </div>
                                <!-- END col-6 -->
                            </div>
                            <!-- END row -->
                        </div>
                        <!-- END col-7 -->
                        <!-- BEGIN col-5 -->
                        <div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
                            <img src="assets/img/logo/stock.png" height="150px" class="d-none d-lg-block" />
                        </div>
                        <!-- END col-5 -->
                    </div>
                    <!-- END row -->
                </div>
                <!-- END card-body -->
            </div>
            <!-- END card -->
        </div>
        <!-- END col-6 -->
        <div class="col-xl-6">
            <!-- BEGIN card -->
            <div class="card border-0 mb-3 overflow-hidden bg-gray-900 text-white">
                <!-- BEGIN card-body -->
                <div class="card-body">

                    <!-- BEGIN row -->
                    <div class="row">
                        <!-- BEGIN col-7 -->
                        <div class="col-xl-7 col-lg-8">
                            <!-- BEGIN title -->
                            <div class="mb-3 text-gray-300">
                                <b>GESTION DE VENTAS</b>
                                <span class="ms-2">
                                    <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Sumatoria de productos en stock de forma generalizada"></i>
                                </span>
                            </div>
                            <!-- END title -->
                            <!-- BEGIN total-sales -->
                            <div class="d-flex mb-1">
                                <p></p>
                                <h2 id="IdCantidad" class="mb-0">$<span data-animation="number" data-value="1">0.00</span></h2>
                                <div class="ms-auto mt-n1 mb-n1">
                                    <div id="total-sales-sparkline"></div>
                                </div>
                            </div>
                            <!-- END total-sales -->
                            <!-- BEGIN percentage -->

                            <!-- END percentage -->
                            <hr class="bg-white bg-opacity-50" />
                            <!-- BEGIN row -->
                            <div class="row text-truncate">
                                <!-- BEGIN col-6 -->
                                <div class="col-6">
                                    <div class=" text-gray-300">Total Precio</div>
                                    <div id="IdPrecio" class="fs-18px mb-5px fw-bold" data-animation="number" data-value="0"></div>
                                    <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                        <div class="progress-bar progress-bar-striped rounded-right bg-teal" data-animation="width" data-value="55%" style="width: 0%"></div>
                                    </div>
                                </div>
                                <!-- END col-6 -->
                                <!-- BEGIN col-6 -->
                                <div class="col-6">
                                    <div class=" text-gray-300">PVP</div>
                                    <div id="IdPVP" class="fs-18px mb-5px fw-bold">$<span data-animation="number" data-value="0"></span></div>
                                    <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                        <div class="progress-bar progress-bar-striped rounded-right" data-animation="width" data-value="60%" style="width: 0%"></div>
                                    </div>
                                </div>
                                <!-- END col-6 -->
                            </div>
                            <!-- END row -->
                        </div>
                        <!-- END col-7 -->
                        <!-- BEGIN col-5 -->
                        <div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
                        <img src="assets/img/logo/dollar.png" height="150px" class="d-none d-lg-block" />
                        </div>
                        <!-- END col-5 -->
                    </div>
                    <!-- END row -->
                </div>
                <!-- END card-body -->
            </div>
            <!-- END card -->
        </div>
        <!-- END col-6 -->
    </div>
    <!-- END row -->
    <!-- BEGIN row -->
    <div class="row">
        <!-- BEGIN col-8 -->
        <div class="col-md-6">
            <div class="mb-10px">
                <div class="card border-0 mb-3 bg-gray-900 text-white">
                    <div class="card-body">
                        <canvas id="myChart" width="500" height="300"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <!-- END col-8 -->
        <!-- BEGIN col-8 -->
        <div class="col-md-6">
            <div class="mb-10px">
                <div class="card border-0 mb-3 bg-gray-900 text-white">
                    <div class="card-body">
                        <canvas id="myChart2" width="350" height="300"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <!-- END col-8 -->

    </div>
    <!-- END row -->
    <!-- BEGIN row -->
    <div class="row">
        <!-- BEGIN col-4 -->
        <div class="col-xl-4 col-lg-6">
            <!-- BEGIN card -->
            <div class="card border-0 mb-3 bg-gray-900 text-white">
                <!-- BEGIN card-body -->
                <div class="card-body" style="background: no-repeat bottom right; background-image: url(../assets/img/svg/img-4.svg); background-size: auto 60%;">
                    <!-- BEGIN title -->
                    <div class="mb-3 text-gray-300">
                        <b>SALES BY SOCIAL SOURCE</b>
                        <span class="text-gray-300 ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Sales by social source" data-bs-placement="top" data-bs-content="Total online store sales that came from a social referrer source."></i></span>
                    </div>
                    <!-- END title -->
                    <!-- BEGIN sales -->
                    <h3 class="mb-10px">$<span data-animation="number" data-value="55547.89">0.00</span></h3>
                    <!-- END sales -->
                    <!-- BEGIN percentage -->
                    <div class="text-gray-300 mb-1px"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="45.76">0.00</span>% increased</div>
                    <!-- END percentage -->
                </div>
                <!-- END card-body -->
                <!-- BEGIN widget-list -->
                <div class="widget-list rounded-bottom dark-mode">
                    <!-- BEGIN widget-list-item -->
                    <a href="#" class="widget-list-item rounded-0 pt-3px bg-blue-dark">
                        <div class="widget-list-media icon">
                            <i class="fab fa-apple bg-indigo text-white"></i>
                        </div>
                        <div class="widget-list-content">
                            <div class="widget-list-title">Apple Store</div>
                        </div>
                        <div class="widget-list-action text-nowrap text-gray-300">
                            $<span data-animation="number" data-value="34840.17">0.00</span>
                        </div>
                    </a>
                    <!-- END widget-list-item -->
                    <!-- BEGIN widget-list-item -->
                    <a href="#" class="widget-list-item bg-blue-dark">
                        <div class="widget-list-media icon">
                            <i class="fab fa-facebook-f bg-blue text-white"></i>
                        </div>
                        <div class="widget-list-content border-top-0">
                            <div class="widget-list-title">Facebook</div>
                        </div>
                        <div class="widget-list-action text-nowrap text-gray-300 border-top-0">
                            $<span data-animation="number" data-value="12502.67">0.00</span>
                        </div>
                    </a>
                    <!-- END widget-list-item -->
                    <!-- BEGIN widget-list-item -->
                    <a href="#" class="widget-list-item bg-blue-dark">
                        <div class="widget-list-media icon">
                            <i class="fab fa-twitter bg-info text-white"></i>
                        </div>
                        <div class="widget-list-content border-top-0">
                            <div class="widget-list-title">Twitter</div>
                        </div>
                        <div class="widget-list-action text-nowrap text-gray-300 border-top-0">
                            $<span data-animation="number" data-value="4799.20">0.00</span>
                        </div>
                    </a>
                    <!-- END widget-list-item -->
                    <!-- BEGIN widget-list-item -->
                    <a href="#" class="widget-list-item bg-blue-dark">
                        <div class="widget-list-media icon">
                            <i class="fab fa-google bg-red text-white"></i>
                        </div>
                        <div class="widget-list-content border-top-0">
                            <div class="widget-list-title">Google Adwords</div>
                        </div>
                        <div class="widget-list-action text-nowrap text-gray-300 border-top-0">
                            $<span data-animation="number" data-value="3405.85">0.00</span>
                        </div>
                    </a>
                    <!-- END widget-list-item -->
                    <!-- BEGIN widget-list-item -->
                    <a href="#" class="widget-list-item pb-3px rounded-bottom bg-blue-dark">
                        <div class="widget-list-media icon">
                            <i class="fab fa-instagram bg-pink text-white"></i>
                        </div>
                        <div class="widget-list-content border-top-0">
                            <div class="widget-list-title">Instagram</div>
                        </div>
                        <div class="widget-list-action text-nowrap text-gray-300 border-top-0">
                            $<span data-animation="number" data-value="0.00">0.00</span>
                        </div>
                    </a>
                    <!-- END widget-list-item -->
                </div>
                <!-- END widget-list -->
            </div>
            <!-- END card -->
        </div>
        <!-- END col-4 -->
        <!-- END col-4 -->
        <!-- BEGIN col-4 -->
        <div class="col-xl-4 col-lg-6">
            <!-- BEGIN card -->
            <div class="card border-0 mb-3 bg-gray-900 text-white">
                <!-- BEGIN card-body -->
                <div class="card-body">
                    <!-- BEGIN title -->
                    <div class="mb-3 text-gray-300">
                        <b>TOP PRODUCTS BY UNITS SOLD</b>
                        <span class="ms-2 "><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Top products with units sold" data-bs-placement="top" data-bs-content="Products with the most individual units sold. Includes orders from all sales channels."></i></span>
                    </div>
                    <!-- END title -->
                    <!-- BEGIN product -->
                    <div class="d-flex align-items-center mb-15px">
                        <div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
                            <div class="h-100 w-100" style="background: url(../assets/img/product/product-8.jpg) center no-repeat; background-size: auto 100%;"></div>
                        </div>
                        <div class="text-truncate">
                            <div>Apple iPhone XR (2021)</div>
                            <div class="text-gray-300">$799.00</div>
                        </div>
                        <div class="ms-auto text-center">
                            <div class="fs-13px"><span data-animation="number" data-value="195">0</span></div>
                            <div class="text-gray-300 fs-10px">sold</div>
                        </div>
                    </div>
                    <!-- END product -->
                    <!-- BEGIN product -->
                    <div class="d-flex align-items-center mb-15px">
                        <div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
                            <div class="h-100 w-100" style="background: url(../assets/img/product/product-9.jpg) center no-repeat; background-size: auto 100%;"></div>
                        </div>
                        <div class="text-truncate">
                            <div>Apple iPhone XS (2021)</div>
                            <div class="text-gray-300">$1,199.00</div>
                        </div>
                        <div class="ms-auto text-center">
                            <div class="fs-13px"><span data-animation="number" data-value="185">0</span></div>
                            <div class="text-gray-300 fs-10px">sold</div>
                        </div>
                    </div>
                    <!-- END product -->
                    <!-- BEGIN product -->
                    <div class="d-flex align-items-center mb-15px">
                        <div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
                            <div class="h-100 w-100" style="background: url(../assets/img/product/product-10.jpg) center no-repeat; background-size: auto 100%;"></div>
                        </div>
                        <div class="text-truncate">
                            <div>Apple iPhone XS Max (2021)</div>
                            <div class="text-gray-300">$3,399</div>
                        </div>
                        <div class="ms-auto text-center">
                            <div class="fs-13px"><span data-animation="number" data-value="129">0</span></div>
                            <div class="text-gray-300 fs-10px">sold</div>
                        </div>
                    </div>
                    <!-- END product -->
                    <!-- BEGIN product -->
                    <div class="d-flex align-items-center mb-15px">
                        <div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
                            <div class="h-100 w-100" style="background: url(../assets/img/product/product-11.jpg) center no-repeat; background-size: auto 100%;"></div>
                        </div>
                        <div class="text-truncate">
                            <div>Huawei Y5 (2021)</div>
                            <div class="text-gray-300">$99.00</div>
                        </div>
                        <div class="ms-auto text-center">
                            <div class="fs-13px"><span data-animation="number" data-value="96">0</span></div>
                            <div class="text-gray-300 fs-10px">sold</div>
                        </div>
                    </div>
                    <!-- END product -->
                    <!-- BEGIN product -->
                    <div class="d-flex align-items-center">
                        <div class="widget-img rounded-3 me-10px bg-white p-3px w-30px">
                            <div class="h-100 w-100" style="background: url(../assets/img/product/product-12.jpg) center no-repeat; background-size: auto 100%;"></div>
                        </div>
                        <div class="text-truncate">
                            <div>Huawei Nova 4 (2021)</div>
                            <div class="text-gray-300">$499.00</div>
                        </div>
                        <div class="ms-auto text-center">
                            <div class="fs-13px"><span data-animation="number" data-value="55">0</span></div>
                            <div class="text-gray-300 fs-10px">sold</div>
                        </div>
                    </div>
                    <!-- END product -->
                </div>
                <!-- END card-body -->
            </div>
            <!-- END card -->
        </div>
        <!-- END col-4 -->
        <!-- BEGIN col-4 -->
        <div class="col-xl-4 col-lg-6">
            <!-- BEGIN card -->
            <div class="card border-0 mb-3 bg-gray-900 text-white">
                <!-- BEGIN card-body -->
                <div class="card-body">
                    <!-- BEGIN title -->
                    <div class="mb-3 text-gray-300">
                        <b>MARKETING CAMPAIGN</b>
                        <span class="ms-2"><i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Marketing Campaign" data-bs-placement="top" data-bs-content="Campaign that run for getting more returning customers."></i></span>
                    </div>
                    <!-- END title -->
                    <!-- BEGIN row -->
                    <div class="row align-items-center pb-1px">
                        <!-- BEGIN col-4 -->
                        <div class="col-4">
                            <div class="h-100px d-flex align-items-center justify-content-center">
                                <img src="../assets/img/svg/img-2.svg" class="mw-100 mh-100" />
                            </div>
                        </div>
                        <!-- END col-4 -->
                        <!-- BEGIN col-8 -->
                        <div class="col-8">
                            <div class="mb-2px text-truncate">Email Marketing Campaign</div>
                            <div class="mb-2px  text-gray-300 small">Mon 12/6 - Sun 18/6</div>
                            <div class="d-flex align-items-center mb-2px">
                                <div class="flex-grow-1">
                                    <div class="progress h-5px rounded-pill bg-white bg-opacity-10">
                                        <div class="progress-bar progress-bar-striped bg-indigo" data-animation="width" data-value="80%" style="width: 0%"></div>
                                    </div>
                                </div>
                                <div class="ms-2 small w-30px text-center"><span data-animation="number" data-value="80">0</span>%</div>
                            </div>
                            <div class="text-gray-300 small mb-15px text-truncate">
                                57.5% people click the email
                            </div>
                            <a href="#" class="btn btn-xs btn-indigo fs-10px ps-2 pe-2">View campaign</a>
                        </div>
                        <!-- END col-8 -->
                    </div>
                    <!-- END row -->
                    <hr class=" bg-white bg-opacity-20 mt-20px mb-20px" />
                    <!-- BEGIN row -->
                    <div class="row align-items-center">
                        <!-- BEGIN col-4 -->
                        <div class="col-4">
                            <div class="h-100px d-flex align-items-center justify-content-center">
                                <img src="../assets/img/svg/img-3.svg" class="mw-100 mh-100" />
                            </div>
                        </div>
                        <!-- END col-4 -->
                        <!-- BEGIN col-8 -->
                        <div class="col-8">
                            <div class="mb-2px text-truncate">Facebook Marketing Campaign</div>
                            <div class="mb-2px  text-gray-300 small">Sat 10/6 - Sun 18/6</div>
                            <div class="d-flex align-items-center mb-2px">
                                <div class="flex-grow-1">
                                    <div class="progress h-5px rounded-pill bg-white bg-opacity-10">
                                        <div class="progress-bar progress-bar-striped bg-warning" data-animation="width" data-value="60%" style="width: 0%"></div>
                                    </div>
                                </div>
                                <div class="ms-2 small w-30px text-center"><span data-animation="number" data-value="60">0</span>%</div>
                            </div>
                            <div class="text-gray-300 small mb-15px text-truncate">
                                +124k visitors from facebook
                            </div>
                            <a href="#" class="btn btn-xs btn-warning fs-10px ps-2 pe-2">View campaign</a>
                        </div>
                        <!-- END col-8 -->
                    </div>
                    <!-- END row -->
                </div>
                <!-- END card-body -->
            </div>
            <!-- END card -->
        </div>
        <!-- END col-4 -->
    </div>
    <!-- END row -->
</div>
<!-- END #content -->
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/dashboard.js"></script>