<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <!-- END page-header -->

    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h4 class="panel-title">CATÁLOGO DE USUARIOS</h4>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand" title="Pantalla Completa"><i class="fa fa-expand"></i></a>
            </div>
        </div>
        <div class="panel-body">
            <a href="#new?1" onclick="setUsuarios();" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Agregar Usuario</a>
            <hr>
            <div id="new-usuarios"></div>
            <div id="lista-usuarios"></div>
            <div id="mod-usuario"></div>
        </div>
    </div>
    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/usuarios.js"></script>
<script src="assets/js/admin.js"></script>