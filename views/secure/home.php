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
                                <b>VALORIZACIÓN DE INVENTARIO</b>
                                <span class="ms-2">
                                    <i class="fa fa-info-circle" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-title="Totales" data-bs-placement="top" data-bs-content="Sumatoria de productos en stock, costo de compra y utilidad"></i>
                                </span>
                            </div>
                            <!-- END title -->
                            <!-- BEGIN total-sales -->
                            <div class="d-flex mb-1">
                                <p></p>
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
                                    <div class=" text-gray-300">Utilidad</div>
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

                            <!-- END row -->
                        </div>
                        <!-- END col-7 -->
                        <!-- BEGIN col-5 -->
                        <div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
                            <img src="assets/img/dashboard/trophy.svg" height="150px" class="d-none d-lg-block" />
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
    <!-- BEGIN nav-pills -->
    <ul class="nav nav-pills mb-2">
        <li class="nav-item">
            <a href="#nav-pills-tab-1" data-bs-toggle="tab" class="nav-link active">
                <span class="d-sm-block d-none">Mejores Vendedores</span>
            </a>
        </li>
        <!--
        <li class="nav-item">
            <a href="#nav-pills-tab-2" data-bs-toggle="tab" class="nav-link">
                <span class="d-sm-block d-none">∑ Ventas</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#nav-pills-tab-3" data-bs-toggle="tab" class="nav-link">
                <span class="d-sm-block d-none">∑ Cuentas x Cobrar</span>
            </a>
        </li>
        -->
    </ul>
    <!-- END nav-pills -->
    <!-- BEGIN tab-content -->
    <div class="tab-content p-3 rounded-top panel rounded-0 m-0">
        <div class="tab-pane fade active show" id="nav-pills-tab-1">
            <div class="card-group">
                <div class="card">
                    <img src="assets/img/dashboard/LPS_Slide.gif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <!--<h5 class="card-title">Título de la tarjeta</h5>-->
                        <p class="card-text">
                        <h3 style="color: red;" id="IdRolAdmin" class="mt-10px"></h3>
                        <h4 style="color: blue;" id="IdUserAdmin" class="mt-10px"></h4>
                        <h4 style="color: green;" id="IdValor" class="mt-10px"></h4>
                        </p>
                        <p class="card-text"><small class="text-muted">*Imagen únicamente referencial</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="assets/img/dashboard/Devcon_Uretanos.gif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <!--<h5 class="card-title">Título de la tarjeta</h5>-->
                        <p class="card-text">
                        <h3 style="color: red;" id="IdRolUser" class="mt-10px"></h3>
                        <h3 style="color: blue;" id="IdVendedor" class="mt-10px"></h3>
                        <h3 style="color: green;" id="IdValorVendedor" class="mt-10px"></h3>
                        </p>
                        <p class="card-text"><small class="text-muted">*Imagen únicamente referencial</small></p>
                    </div>
                </div>
            </div>
        </div>
        <!--

        
            <h3 style="color: red;" id="IdRolAdmin" class="mt-10px"></h3>
            <h4 style="color: blue;" id="IdUserAdmin" class="mt-10px"></h4>
            <h4 style="color: green;" id="IdValor" class="mt-10px"></h4>
            <hr>
            <h3 style="color: red;" id="IdRolUser" class="mt-10px"></h3>
            <h3 style="color: blue;" id="IdVendedor" class="mt-10px"></h3>
            <h3 style="color: green;" id="IdValorVendedor" class="mt-10px"></h3>
            <hr>
        </div>
        -->
        <!-- BEGIN tab-pane -->
        <div class="tab-pane fade" id="nav-pills-tab-2">
            <h3 class="mt-10px">Consulta Parametrizada</h3>
            <div class="row">
                <div class="col-xl-6">
                    <b>Fecha Desde:</b>
                    <input type="date" class="form-control" id="IdFDesde">
                    <div id="alert-fd"></div>
                    <b>Total Ventas:</b>
                    <input type="text" class="form-control" id="IdTVentas" style="color: green" readonly>
                </div>
                <div class="col-xl-6">
                    <b>Fecha Hasta:</b>
                    <input type="date" class="form-control" onchange="getVentasParametros();" id="IdFHasta">
                    <div id="alert-fh"></div>
                    <b>Total Pagos:</b>
                    <input type="text" class="form-control" id="IdTPagos" style="color: green" readonly>
                    <br>
                </div>
                <!-- BEGIN hljs-wrapper -->
                <div class="col-md-12">
                    <div class="card border-0 mb-3 bg-gray-900 text-white">
                        <div class="card-body">
                            <canvas id="myChart" width="1000" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END tab-pane -->
        <!-- BEGIN tab-pane -->
        <div class="tab-pane fade" id="nav-pills-tab-3">
            <h3 class="mt-10px">Consulta Parametrizada</h3>
            <div class="row">
                <div class="col-xl-6">
                    <b>Fecha Desde:</b>
                    <input type="date" class="form-control" id="IdFDesdeCXC">
                    <div id="alert-fdesde"></div>
                </div>
                <div class="col-xl-6">
                    <b>Fecha Hasta:</b>
                    <input type="date" class="form-control" onchange="GenerarGraficaCtasXCobrar();" id="IdFHastaCXC">
                    <div id="alert-fhasta"></div>
                    <br>
                </div>
                <!-- BEGIN hljs-wrapper -->
                <div class="col-md-12">
                    <div class="card border-0 mb-3 bg-gray-900 text-white">
                        <div class="card-body">
                            <canvas id="myChartCXC" width="1000" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END tab-pane -->
    </div>
    <br>
</div>
<!-- END #content -->
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/dashboard.js"></script>