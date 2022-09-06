<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <!--<h1 class="page-header">Lista de Proveedores</h1>-->
    <!-- END page-header -->

    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h1 class="panel-title">Lista de Proveedores</h1>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
                <!--<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>-->
            </div>
        </div>
        <div class="panel-body">
            <a href="#new?1" onclick="setProveedor();" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Agregar Proveedor</a>
            <hr>
            <div id="new-proveedor"></div>
            <div id="lista-proveedores"></div>
            <div id="panel-mod-proveedor"></div>
        </div>
    </div>
    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/proveedores.js"></script>