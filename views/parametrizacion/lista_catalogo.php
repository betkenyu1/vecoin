<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <!--<h1 class="page-header">Catálogo de Productos</h1>-->
    <!-- END page-header -->

    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h1 class="panel-title">CATÁLOGO DE PRODUCTOS</h1>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" title="Pantalla Completa" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
                <!--<a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i class="fa fa-redo"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i class="fa fa-minus"></i></a>
                <!--<a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i class="fa fa-times"></i></a>-->
            </div>
        </div>
        <div class="panel-body">
            <a href="#new?1" onclick="setNuevoCatalogo();" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Agregar Producto</a>
            <hr>
            <div id="lista-catalogo"></div>
            <div id="new-catalogo"></div>
            <div id="mod-catalogo"></div>
        </div>
    </div>
    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/catalogo.js"></script>
<script src="assets/js/admin.js"></script>