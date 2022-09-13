<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <!-- END page-header -->

    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h4 class="panel-title">GESTIÓN DE IMÁGENES</h4>
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand" title="Pantalla Completa"><i class="fa fa-expand"></i></a>
            </div>
        </div>
        <div class="panel-body">
            <hr>
            <div id="new-usuarios"></div>

            <div id="lista-usuarios"></div>
            <div id="mod-usuario"></div>

        </div>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="cargaFotoPerfil" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">SELECCIONAR FOTO DE PERFIL</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="hidden" id="id_usuario">
                        <input type="file" class="form-control" id="IdFoto" accept=".jpeg,.png">
                        <button class="btn btn-outline-secondary" onclick="SubirFile();" data-bs-dismiss="modal" type="button">Subir</button>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="cargaFotoFondo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">SELECCIONAR FOTO DE FONDO</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="hidden" id="id_usuario">
                        <input type="file" class="form-control" id="IdFotoFondo" accept=".jpeg,.png">
                        <button class="btn btn-outline-secondary" onclick="SubirFileFondo();" data-bs-dismiss="modal" type="button">Subir</button>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>

                </div>
            </div>
        </div>
    </div>
    <!-- END panel -->
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/gestion_fotos_fondo.js"></script>
<script src="assets/js/admin.js"></script>