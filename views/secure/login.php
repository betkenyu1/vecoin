<?php
include_once 'views/layout/header_login.php';
?>
<!-- BEGIN login -->
<div class="login login-v2 fw-bold">
    <!-- BEGIN login-cover -->
    <div class="login-cover">
        <div class="login-cover-img" style="background-image: url(../assets/img/login-bg/login-bg-17.jpg)"
            data-id="login-cover-image"></div>
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
                    <input type="text" class="form-control fs-13px h-45px border-0" placeholder="Usuario"
                        id="id_usuario" />
                    <label for="id_usuario" class="d-flex align-items-center text-gray-600 fs-13px">Usuario</label>
                </div>
                <div id="alert-usr"></div>
                <div class="form-floating mb-20px">
                    <input type="password" id="id_password" class="form-control fs-13px h-45px border-0"
                        placeholder="Password" />
                    <label for="id_password" class="d-flex align-items-center text-gray-600 fs-13px">Password</label>
                </div>
                <div id="alert-pass"></div>

                <div class="mb-20px">
                    <a type="button" class="btn btn-cyan d-block w-100 h-45px btn-lg" onclick="login();">Ingresar</a>
                </div>

            </form>
        </div>
        <!-- END login-content -->
    </div>
    <!-- END login-container -->
</div>
<!-- END login -->
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/login.js"></script>