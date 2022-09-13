<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">

            <h1 class="panel-title">GESTIÓN DE NOTAS DE CRÉDITO</h1>

            <div class="panel-heading-btn">
                <a href="javascript:;" title="Pantalla Completa" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
            </div>
        </div>
        <div class="panel-body">
            <div id="lista-ventas"></div>
            <br>
            <div id="n-ncredito"></div>
        </div>
    </div>
    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/ncredito.js"></script>
<script src="assets/js/admin.js"></script>
<script src="assets/js/reportes.js"></script>