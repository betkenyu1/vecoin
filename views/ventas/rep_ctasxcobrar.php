<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <h1 class="page-header">Ventas</h1>
    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h4 class="panel-title">REPORTE CUENTAS POR COBRAR</h4>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand" title="Pantalla Completa"><i class="fa fa-expand"></i></a>
            </div>
        </div>

        <div class="panel-body">
            <a href="#" onclick="getReporteCtasXCobrar();" class="btn btn-danger"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Reporte</a>
            <hr>
            <div id="lista-ctasxcobrar"></div>
        </div>
    </div>
    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/rep_ctasxcobrar.js"></script>
<script src="assets/js/reportes.js"></script>