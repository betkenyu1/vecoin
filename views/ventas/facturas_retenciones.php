<?php
include_once 'views/layout/header.php';
?>

<div id="content" class="app-content">
    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h4 class="panel-title">REPORTE FACTURAS CON RETENCIONES</h4>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand" title="Pantalla Completa"><i class="fa fa-expand"></i></a>
            </div>
        </div>

        <div class="panel-body">
            <div id="lista-ctasxcobrar"></div>
        </div>
    </div>
    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/facturas_retenciones.js"></script>
<script src="assets/js/reportes.js"></script>