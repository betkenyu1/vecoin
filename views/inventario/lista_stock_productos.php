<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <h1 class="page-header">Stock de productos</h1>
    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h4 class="panel-title">Stock de Productos</h4>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>
            </div>
        </div>
        <div class="panel-body">
            <a href="#" onclick="getReporteStock();" class="btn btn-danger"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Reporte</a>
            <hr>
            <div id="lista-stock-productos"></div>
        </div>
    </div>

    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/stock_productos.js"></script>
<script src="assets/js/admin.js"></script>
<script src="assets/js/reportes.js"></script>