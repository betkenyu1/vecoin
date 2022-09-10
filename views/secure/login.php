<?php
include_once 'views/layout/header_login.php';
?>
<!-- BEGIN login -->
<div class="login login-v2 fw-bold">
    <!-- BEGIN login-cover -->
    <div class="login-cover">
        <div class="login-cover-img" style="background-image: url(../assets/img/login-bg/login-bg-17.jpg)" data-id="login-cover-image"></div>
        <div class="login-cover-bg"></div>
    </div>
    <!-- END login-cover -->

    <!-- BEGIN login-container -->
    <div class="login-container">
        <!-- BEGIN login-header -->
        <div class="login-header">
            <div class="brand">
                <div class="d-flex align-items-center">
                    <span class="logo"></span> <b>V</b>ecoin
                </div>
                <small>La mejor inversión es un buen mantenimiento</small>
            </div>
            <div class="icon">
                <i class="fa fa-gear"></i>
            </div>
        </div>
        <!-- END login-header -->

        <!-- BEGIN login-content -->
        <div class="login-content">
            <form>
                <div class="form-floating mb-20px">
                    <input type="text" class="form-control fs-13px h-45px border-0" placeholder="Ingrese Usuario" id="id_usuario" />
                    <label for="id_usuario" class="d-flex align-items-center text-gray-600 fs-13px">Ingrese Usuario</label>
                </div>
                <div id="alert-usr"></div>
                <div class="form-floating mb-20px">
                    <input type="password" class="form-control fs-13px h-45px border-0" placeholder="Ingrese Contraseña" id="id_password" />
                    <label for="id_password" class="d-flex align-items-center text-gray-600 fs-13px">Ingrese Contraseña</label>
                </div>
        </div>
        <div id="alert-pass"></div>

        <div class="form-floating mb-20px">
            <!--<div class="checkboxvai"><input onclick="RecuperarPassword();" type="checkbox">¿Olvidaste tu contraseña?</div>-->
            <div onclick="RecuperarPassword();" class="text-center fs-15px "><a style="text-decoration:none;" href="#">¿Olvidaste tu contraseña?</a></div>
            <br>
            <a type="button" class="btn btn-cyan d-block w-100 h-45px btn-lg" onclick="login();">Ingresar</a>
        </div>

        </form>
    </div>
    <!-- END login-content -->
</div>
<!-- END login-container -->

<div>
    <!-- modal-mod-usaurios -->
    <div class="modal fade" id="modal-mod-usuario" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 style="color:black" ; class="modal-title">Recuperación de contraseña</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <div class="row">
                                <div>
                                    <div class="mb-10px">
                                        <b style="color: black ;">Email:</b>
                                        <input type="hidden" class="default-select2 form-control" id="IdUsuario">
                                        <input type="text" class="default-select2 form-control" id="Usuario">
                                        <div id="alert-memple"></div>
                                        <hr>
                                    </div>
                                </div>
                                <div>
                                    <b style="color: black ;">Nueva Contraseña::</b>
                                    <input class="default-select2 form-control" id="ModContrasena">
                                    <div id="alert-mrls"></div>
                                    <hr>

                                </div>
                                <div>
                                    <div class="mb-10px">
                                        <b style="color: black ;">Confirmar Contraseña:</b>
                                        <input type="text" onchange="Password()" ; class="form-control" id="ValModContrasena">
                                        <div id="alert-muser"></div>
                                        <hr>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <br>
                                    <a class="btn btn-red d-block w-100 h-45px btn-lg" title="Cerrar" class="btn btn-white" data-bs-dismiss="modal"><i class="fa-regular fa-circle-xmark"></i> Cerrar</a><br>
                                    <a class="btn btn-green d-block w-100 h-45px btn-lg" onclick="Password();" title="Cambiar Contraseña"><i class="fa-regular fa-circle-check"></i> Aceptar</a>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<!-- END login -->
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/login.js"></script>