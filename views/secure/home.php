<?php
include_once 'views/layout/header.php';
?>
<script src="assets/js/lib_charts.js"></script>
<script src="assets/plugins/isotope-layout/dist/isotope.pkgd.min.js"></script>

<!-- BEGIN #content -->
<div id="content" class="app-content">

    <section id="portfolio" class="portfolio sections-bg">
        <div class="container" data-aos="fade-up">
            <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">
                <div>
                    <ul class="portfolio-flters">
                        <li data-filter="*" hidden class="filter-active">Todas</li>
                    </ul><!-- End Portfolio Filters -->
                </div>

                <div class="row gy-4 portfolio-container">
                    <div class="col-xl-6 col-md-6 portfolio-item filter-devcon">
                        <div class="card border-0 mb-0 overflow-hidden bg-gray-900 text-white">
                            <!-- BEGIN card-body -->
                            <div class="card-body">
                                <!-- BEGIN row -->
                                <div class="row">
                                    <!-- BEGIN col-7 -->
                                    <div class="col-xl-7 col-lg-8">
                                        <!-- BEGIN title -->
                                        <div class="mb-3 text-gray-300">
                                            <b>VALORIZACIÓN DE INVENTARIO</b>
                                            <span class="ms-2">
                                                <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Sumatoria de productos en stock, costo de compra y utilidad"></i>
                                            </span>
                                        </div>
                                        <!-- END title -->
                                        <!-- BEGIN total-sales -->
                                        <div class="d-flex mb-1">
                                            <h2 id="IdCantidad" class="mb-0"></h2>
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
                                                <div class=" text-gray-300">Costo Compra</div>
                                                <div id="IdPrecio" class="fs-18px mb-5px fw-bold"> <span data-animation="number" data-value="0"></span></div>
                                                <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-teal" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- END col-6 -->
                                            <!-- BEGIN col-6 -->
                                            <div class="col-6">
                                                <div class=" text-gray-300">Proyección de Venta</div>
                                                <div id="IdUtilidad" class="fs-18px mb-5px fw-bold"><span data-animation="number" data-value="0"></span></div>
                                                <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- END col-6 -->
                                        </div>
                                        <!-- END row -->
                                    </div>
                                    <!-- END col-7 -->
                                    <!-- BEGIN col-5 -->
                                    <div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
                                        <img src="assets/img/dashboard/stock.svg" height="150px" class="d-none d-lg-block" />
                                    </div>
                                    <!-- END col-5 -->
                                </div>
                                <!-- END row -->
                            </div>
                            <!-- END card-body -->
                        </div>
                    </div><!-- End Portfolio Item -->
                    <div class="col-xl-6 col-md-6 portfolio-item filter-devcon">
                        <div class="card border-0 mb-0 overflow-hidden bg-gray-900 text-white">
                            <!-- BEGIN card-body -->
                            <div class="card-body">
                                <!-- BEGIN row -->
                                <div class="row">
                                    <!-- BEGIN col-7 -->
                                    <div class="col-xl-7 col-lg-8">
                                        <!-- BEGIN title -->
                                        <div class="mb-3 text-gray-300">
                                            <b>PRODUCTO MÁS VENDIDO</b>
                                            <span class="ms-2">
                                                <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Producto más vendido actualmente"></i>
                                            </span>
                                        </div>
                                        <!-- END title -->
                                        <!-- BEGIN total-sales -->
                                        <div class="d-flex mb-1">
                                            <p></p>
                                            <h2 id="IdProducto" class="mb-0"></h2>
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
                                                <div class=" text-gray-300">Unidades</div>
                                                <div id="IdCantidadPV" class="fs-18px mb-5px fw-bold"> <span data-animation="number" data-value="0"></span></div>
                                                <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-teal" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- END col-6 -->
                                            <!-- BEGIN col-6 -->
                                            <div class="col-6">
                                                <div class=" text-gray-300">Monto de Venta</div>
                                                <div id="IdValorPV" class="fs-18px mb-5px fw-bold"><span data-animation="number" data-value="0"></span></div>
                                                <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- END col-6 -->
                                        </div>
                                        <!-- END row -->
                                    </div>
                                    <!-- END col-7 -->
                                    <!-- BEGIN col-5 -->
                                    <div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
                                        <img src="assets/img/dashboard/trophy.svg" height="150x" class="d-none d-lg-block" />
                                    </div>
                                    <!-- END col-5 -->
                                </div>
                                <!-- END row -->
                            </div>
                            <!-- END card-body -->
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 portfolio-item filter-devcon">
                        <div class="card border-0 mb-0 overflow-hidden bg-gray-900 text-white">
                            <!-- BEGIN card-body -->
                            <div class="card-body">
                                <!-- BEGIN row -->
                                <div class="row">
                                    <!-- BEGIN col-7 -->
                                    <div class="col-xl-7 col-lg-8">
                                        <!-- BEGIN title -->
                                        <div class="mb-3 text-gray-300">
                                            <b>CUENTAS POR COBRAR</b>
                                            <span class="ms-2">
                                                <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Cuentas por cobrar a la fecha de hoy."></i>
                                            </span>
                                        </div>
                                        <!-- END title -->
                                        <!-- BEGIN total-sales -->
                                        <div class="d-flex mb-1">
                                            <p></p>
                                            <h2 id="IdValorCobrarTotal" class="mb-0"></h2>
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
                                                <div class=" text-gray-300">Subtotal</div>
                                                <div id="IdValorCobrar" class="fs-18px mb-5px fw-bold"> <span data-animation="number" data-value="0"></span></div>
                                                <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-teal" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- END col-6 -->
                                            <!-- BEGIN col-6 -->
                                            <div class="col-6">
                                                <div class=" text-gray-300">IVA</div>
                                                <div id="IdValorCobrarIVA" class="fs-18px mb-5px fw-bold"><span data-animation="number" data-value="0"></span></div>
                                                <div class="progress h-5px rounded-3 bg-gray-800 mb-5px">
                                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
                                                </div>
                                            </div>
                                            <!-- END col-6 -->
                                        </div>
                                        <!-- END row -->
                                    </div>
                                    <!-- END col-7 -->
                                    <!-- BEGIN col-5 -->
                                    <div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
                                        <img src="assets/img/dashboard/cash.svg" height="150x" class="d-none d-lg-block" />
                                    </div>
                                    <!-- END col-5 -->
                                </div>
                                <!-- END row -->
                            </div>
                            <!-- END card-body -->
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 portfolio-item filter-devcon">
                        <div class="card border-0 mb-0 overflow-hidden bg-gray-900 text-white">
                            <!-- BEGIN card-body -->
                            <div class="card-body">
                                <!-- BEGIN row -->
                                <div class="row">
                                    <!-- BEGIN title -->
                                    <div class="mb-3 text-gray-300">
                                        <b>VENTAS MENSUALES</b>
                                        <span class="ms-2">
                                            <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Total Facturado por Mes."></i>
                                        </span>
                                    </div>
                                    <div id="chart-container">
                                        <canvas id="graphCanvas"></canvas>
                                    </div>
                                    <!-- END title -->
                                </div>
                                <!-- END row -->
                            </div>
                            <!-- END card-body -->
                        </div>
                    </div><!-- End Portfolio Item -->
                    <div class="col-xl-6 col-md-6 portfolio-item filter-devcon">
                        <div class="card border-0 mb-0 overflow-hidden bg-gray-900 text-white">
                            <!-- BEGIN card-body -->
                            <div class="card-body">
                                <!-- BEGIN row -->
                                <div class="row">
                                    <!-- BEGIN title -->
                                    <div class="mb-3 text-gray-300">
                                        <b>VENTAS ANUALES</b>
                                        <span class="ms-2">
                                            <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Total Facturado por Año. | Considerar Sumar las barras de 2022 |"></i>
                                        </span>
                                    </div>
                                    <div id="chart-container">
                                        <canvas id="graphCanvasAnual"></canvas>
                                    </div>
                                    <!-- END title -->
                                </div>
                                <!-- END row -->
                            </div>
                            <!-- END card-body -->
                        </div>
                    </div><!-- End Portfolio Item -->
                </div><!-- End Portfolio Container -->
            </div><!-- End Portfolio Isotope -->
        </div><!-- End Section Container -->
    </section><!-- End Portfolio Section -->
</div>
<!-- END #content -->
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/dashboard.js"></script>