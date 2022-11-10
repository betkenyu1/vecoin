<?php

include_once 'views/layout/header.php';

?>

<div id="content" class="app-content">

    <!-- BEGIN panel -->

    <div class="panel panel-inverse">

        <div class="panel-heading">

            <h1 class="panel-title">ÓRDENES DE SALIDA</h1>

            <div class="panel-heading-btn">

                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand" title="Pantalla Completa"><i class="fa fa-expand"></i></a>

            </div>

        </div>

        <div class="panel-body">

            <a href="#new?1" onclick="setNuevaOrdenSalida();" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Agregar Orden de Salida</a>

            <hr>

            <div id="lista-ord_salida"></div>

            <div id="new-ord-salida"></div>

            <div id="lista-items"></div>

        </div>

    </div>

    <!-- END panel -->

</div>

<?php

include_once 'views/layout/footer.php';

?>

<script src="assets/js/orden_salida.js"></script>

<script src="assets/js/admin.js"></script>

<script src="assets/js/reportes.js"></script>