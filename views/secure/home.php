<?php
include_once 'views/layout/header.php';
?>
<script src="assets/js/lib_charts.js"></script>
<script src="assets/plugins/isotope-layout/dist/isotope.pkgd.min.js"></script>

<!-- BEGIN #content -->
<div id="content" class="app-content">

    <section id="portfolio" class="portfolio sections-bg">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <h2>Línea de Productos</h2>
                <p>Contamos con una amplia variedad de productos para satisfacer las necesidades de todos los niveles en la
                    industria ecuatoriana. <br><strong>A continuación seleccione la línea de su interés:</strong></p>
            </div>

            <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

                <div>
                    <ul class="portfolio-flters">
                        <li data-filter="*" class="filter-active">Todas</li>
                        <li class="list-group-item disabled">|</li>
                        <li data-filter=".filter-devcon">Devcon (Recubrimientos epóxicos)</li>
                        <li class="list-group-item disabled">|</li>
                        <li data-filter=".filter-lps-labs">LPS Labs (Productos para mantenimiento)</li>
                        <li class="list-group-item disabled">|</li>
                        <li data-filter=".filter-philips">Philips 66 (Grasas)</li>
                    </ul><!-- End Portfolio Filters -->
                </div>

                <div class="row gy-4 portfolio-container">

                    <div class="col-xl-4 col-md-6 portfolio-item filter-devcon">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/devcon-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/devcon-1.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Adhesivos Industriales</a></h4>
                                <p style="text-align: justify;">Adhesivos extremadamente fuertes y resistentes al agua. Se adhiere a
                                    metales ferrosos y no ferrosos, madera, cerámica, hormigón, entre otros.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-devcon">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/devcon-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/devcon-2.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Reparación de bandas trasnportadoras y
                                        cauchos</a></h4>
                                <p style="text-align: justify;">Tecnologías de uretano flexible para restauración de bandas
                                    transportadoras desgastadas o dañadas, revestimientos de caucho de cañería, tanques, y bombas en
                                    minas, canteras y plantas termoeléctricas. No escurren. Su tixotropía auto-nivelante crea una suave
                                    superficie en la reparación de bandas
                                    transportadoras.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-devcon">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/devcon-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/devcon-3.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Reparación de Corrosión y Erosión</a></h4>
                                <p style="text-align: justify;">Tecnología epóxico/cerámica para la reparación permanente de bombas,
                                    ductos, cañerías y estanques donde se requiere un polímero resistente a la corrosión para proteger
                                    el metal de la erosión y oxidación producidas por el fluido. Estos productos son fáciles de aplicar
                                    con brocha y espátula.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-devcon">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/devcon-4.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/devcon-4.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Reparación y reconstrucción de metal</a>
                                </h4>
                                <p style="text-align: justify;">Tecnología de epóxicos reforzados con metal que permiten reparaciones
                                    rápidas, económicas y permanentes para la industria y la minería. Pueden ser mecanizados, torneados,
                                    y taladrados, teniendo resistencia a la corrosión y química. Disponibles en versiones líquidas que
                                    pueden formar precisos detalles en moldes y patrones.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-devcon">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/devcon-5.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/devcon-5.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Compuestos Anti-Abrasivos</a></h4>
                                <p style="text-align: justify;">Recubrimientos epóxicos especialmente formulados para proteger equipos
                                    del desgaste por abrasión, impacto y corrosión. Estos productos son espatulables y no escrurren.
                                </p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-8.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-8.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Línea Grado Alimenticio</a></h4>
                                <p style="text-align: justify;">Productos de uso industrial aptos para la industria productora de
                                    alimentos.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-1.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Desengrasantes Industriales</a></h4>
                                <p style="text-align: justify;">Desengrasantes biodegradables, grado alimenticio,
                                    dieléctricos, olor cítrico, base agua y solvente.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-2.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-2.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Limpiadores de Contactos</a></h4>
                                <p style="text-align: justify;">Limpiadores de contactos eléctricos, electrónicos y para plantas de
                                    procesadoras de alimentos.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-3.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-3.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Lubricantes de Uso Industrial</a></h4>
                                <p style="text-align: justify;">Lubricantes secos, para desplazador la húmedad, para condiciones
                                    extremas, para trabajo pesado, para cadenas y cables de acero, para desmoldar piezas, para bandas
                                    transportadoras.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-4.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-4.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Penetrantes de Uso Industrial</a></h4>
                                <p style="text-align: justify;">Penetrantes de baja tensión superficial para una rápida acción de
                                    penetración, incluso contra el congelamiento.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-5.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-5.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Inhibidores de Corrosión</a></h4>
                                <p style="text-align: justify;">Inhibidores de Corrosión de película seca y aceitosa, con protección
                                    de hasta dos años.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->
                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-6.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-6.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Antiadherentes</a></h4>
                                <p style="text-align: justify;">Antiadherentes base de níquel, cobre y para uso en plantas
                                    procesadoras de alimentos.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-lps-labs">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/lps-labs-7.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/lps-labs-7.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Grasas</a></h4>
                                <p style="text-align: justify;">Grasas para inmesión en agua, para alta temperatura, para altas cargas
                                    de trabajo y para uso en plantas
                                    procesadoras de alimentos.</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                    <div class="col-xl-4 col-md-6 portfolio-item filter-philips">
                        <div class="portfolio-wrap">
                            <a href="assets/img/portfolio/philips-1.jpg" data-gallery="portfolio-gallery-app" class="glightbox"><img src="assets/img/portfolio/philips-1.jpg" class="img-fluid" alt=""></a>
                            <div class="portfolio-info">
                                <h4><a href="portfolio-details.html" title="More Details">Grasas</a></h4>
                                <p style="text-align: justify;">Grasas para diferentes usos a nivel industrial, incluso grado
                                    alimenticio de consistencia NLGI 2</p>
                            </div>
                        </div>
                    </div><!-- End Portfolio Item -->

                </div><!-- End Portfolio Container -->
            </div><!-- End Portfolio Isotope -->
        </div><!-- End Section Container -->
    </section><!-- End Portfolio Section -->

    <div class="container overflow-hidden">
        <div class="row gy-2">
            <div class="col-xl-6">
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
            </div>
            <div class="col-xl-6">
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
            </div>
            <div class="col-xl-6">
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
            </div>
            <div class="col-xl-6">
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
            <div class="col-xl-6">
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

        </div>
    </div>
    <!-- BEGIN row -->
    <div class="row">
        <!-- BEGIN col-6 -->
        <div class="col-xl-6">
            <!-- BEGIN card -->
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
            <!-- END card -->
        </div>
        <!-- END col-6 -->

        <!-- END col-6 -->
    </div>
    <div class="row">
        <hr class="opacity-0">
        <div class="col-xl-6">
            <!-- BEGIN card -->
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
            <!-- END card -->
        </div>
    </div>
    <div class="row">
        <hr class="opacity-0">
        <div class="col-xl-6">
            <!-- BEGIN card -->
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
            <!-- END card -->
        </div>
    </div>
    <div class="row">
        <hr class="opacity-0">
        <div class="col-xl-6">
            <!-- BEGIN card -->
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
            <!-- END card -->
        </div>
    </div>
    <div class="row">
        <hr class="opacity-0">
        <div class="col-xl-6">
            <!-- BEGIN card -->
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
            <!-- END card -->
        </div>
    </div>
</div>
<!-- END #content -->
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/dashboard.js"></script>