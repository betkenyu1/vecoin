<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <h1 class="page-header">Lista de Usuarios</h1>
    <!-- END page-header -->

    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h4 class="panel-title">Lista de Usuarios</h4>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i
                        class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-success" data-toggle="panel-reload"><i
                        class="fa fa-redo"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-warning" data-toggle="panel-collapse"><i
                        class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-danger" data-toggle="panel-remove"><i
                        class="fa fa-times"></i></a>
            </div>
        </div>
        <div class="panel-body">
            <a href="#new?1" onclick="setUsuarios();" class="btn btn-success"><i class="fa fa-plus"
                    aria-hidden="true"></i> Nuevo</a>
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