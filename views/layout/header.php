<?php
$Empresa = $_SESSION["n_comercial"];
$Usuario = $_SESSION["user"];
$Rol = $_SESSION["rol"];
$IdRol = $_SESSION["idrol"];
if ($_SESSION["user"] === null) {
	header('Location:index.php?c=Index&a=index');
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="utf-8" />
	<title>Vecoin | S.G.V.I. </title>
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- ================== BEGIN core-css ================== -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
	<link href="assets/css/vendor.min.css" rel="stylesheet" />
	<link href="assets/css/material/app.min.css" rel="stylesheet" />
	<!-- ================== END core-css ================== -->
	<link href="assets/plugins/select2/dist/css/select2.min.css" rel="stylesheet" />
	<!-- ================== BEGIN page-css ================== -->
	<link href="assets/plugins/datatables.net-bs5/css/dataTables.bootstrap5.min.css" rel="stylesheet" />
	<link href="assets/plugins/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css" rel="stylesheet" />
	<link href="assets/plugins/datatables.net-select-bs5/css/select.bootstrap5.min.css" rel="stylesheet" />
	<link href="assets/plugins/datatables.net-scroller-bs5/css/scroller.bootstrap5.min.css" rel="stylesheet" />

	<!-- ================== BEGIN page-css ================== -->
	<link href="assets/plugins/jvectormap-next/jquery-jvectormap.css" rel="stylesheet" />
	<link href="assets/plugins/nvd3/build/nv.d3.css" rel="stylesheet" />
	<link href="assets/plugins/bootstrap-daterangepicker/daterangepicker.css" rel="stylesheet" />
	<!-- ================== END page-css ================== -->

</head>

<body>
	<!-- BEGIN #loader -->
	<div id="loader" class="app-loader">
		<div class="material-loader">
			<svg class="circular" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>
			<div class="message">Cargando...</div>
		</div>
	</div>
	<!-- END #loader -->
	<!-- BEGIN #app -->
	<div id="app" class="app app-header-fixed app-sidebar-fixed app-with-wide-sidebar">
		<!-- BEGIN #header -->
		<div id="header" class="app-header">
			<!-- BEGIN navbar-header -->
			<div class="navbar-header">
				<button type="button" class="navbar-desktop-toggler" data-toggle="app-sidebar-minify">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<button type="button" class="navbar-mobile-toggler" data-toggle="app-sidebar-mobile">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="index.php?c=Index&a=home" class="navbar-brand">
					Vecoin
				</a>
			</div>
			<!-- END navbar-header -->
			<!-- BEGIN header-nav -->




			<div class="navbar-nav">
				<div class="navbar-item navbar-user dropdown">
					<a href="#" class="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">

						<span class="d-none d-md-inline"><?php echo $Empresa . ' | ' . $Usuario; ?></span>
						<img src="assets/img/user/user-13.jpg" alt="" />
						<b class="caret ms-6px"></b>

					</a>
					<div class="dropdown-menu dropdown-menu-end me-1">
						<a href="index.php?c=Index&a=index" class="dropdown-item">
							<div class="menu-text text-center">Cerrar Sesión &nbsp
								<i style="vertical-align: middle; padding-bottom: 3px" class=" material-icons ">logout</i>
							</div>
						</a>
					</div>
				</div>
				<p>hola</p>
			</div>
		</div>


		<!-- END #header -->
		<!-- BEGIN #sidebar -->
		<div id="sidebar" class="app-sidebar" data-disable-slide-animation="true">
			<!-- BEGIN scrollbar -->
			<div class="app-sidebar-content" data-scrollbar="true" data-height="100%">
				<!-- BEGIN menu -->
				<div class="menu">
					<div class="menu-profile">
						<a href="javascript:;" class="menu-profile-link" data-toggle="app-sidebar-profile" data-target="#appSidebarProfileMenu">
							<div class="menu-profile-cover with-shadow"></div>
							<div class="menu-profile-image menu-profile-image-icon bg-gray-900 text-gray-600">
								<i class="fa fa-user"></i>
							</div>
							<div class="menu-profile-info">
								<div class="d-flex align-items-center">
									<div class="flex-grow-1">
										<?php echo $Usuario; ?>
									</div>
									<!--<div class="menu-caret ms-auto"></div>-->
								</div>
								<small><?php echo $Rol; ?></small>
							</div>
						</a>
					</div>
					<!--<div class="menu-header">Navegación</div>-->
					<div class="menu-item active">
						<a href="index.php?c=Index&a=home" class="menu-link">
							<div class="menu-icon">
								<i class="material-icons">home</i>
							</div>
							<div class="menu-text">Inicio</div>
						</a>
					</div>

					<!--INICIO MENU AFUERA-->

					<?php
					if ($IdRol == 1) {
					?>
						<div class="menu-item has-sub">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon">
									<!--<i class="material-icons">admin_panel_settings</i>-->
									<i class="material-icons">engineering</i>
								</div>
								<div class="menu-text">Administrador</div>
								<div class="menu-caret"></div>
							</a>
							<div class="menu-submenu">
								<div class="menu-item"><a href="index.php?c=Catalogo&a=lista_catalogo" class="menu-link">
										<div class="menu-text">Productos</div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_clientes" class="menu-link">
										<div class="menu-text">Clientes</div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_proveedores" class="menu-link">
										<div class="menu-text">Proveedores</div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_empresas" class="menu-link">
										<div class="menu-text">Empresas</div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_empleados" class="menu-link">
										<div class="menu-text">Empleados</div>
									</a></div>
							</div>
						</div>
					<?php } ?>
					<?php
					if ($IdRol == 1) {
					?>
						<div class="menu-item has-sub">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon">
									<i class="material-icons">person_search</i>
								</div>
								<div class="menu-text">Auditoría</div>
								<div class="menu-caret"></div>
							</a>
							<div class="menu-submenu">
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
										<div class="menu-text">Inicios de sesión</div>
									</a></div>
								<!--<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
										<div class="menu-text">Usuarios</div>
									</a></div>-->
							</div>
						</div>
					<?php } ?>
					<?php
					if ($IdRol == 1 || $IdRol == 4) {
					?>
						<div class="menu-item has-sub">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon">
									<i class="material-icons">savings</i>
								</div>
								<div class="menu-text">Cobranzas</div>
								<div class="menu-caret"></div>
							</a>
							<div class="menu-submenu">
								<div class="menu-item has-sub">
									<a href="index.php?c=Venta&a=gestion_ctasxcobrar" class="menu-link">
										<div class="menu-text">Cuentas por Cobrar</div>
									</a>
								</div>
							</div>
						</div>
					<?php } ?>
					<?php
					if ($IdRol == 1 || $IdRol == 2) {
					?>
						<div class="menu-item has-sub">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon">
									<i class="material-icons">warehouse</i>
								</div>
								<div class="menu-text">Inventarios</div>
								<div class="menu-caret"></div>
							</a>
							<div class="menu-submenu">

								<div class="menu-item"><a href="index.php?c=Producto&a=lista_productos" class="menu-link">
										<div class="menu-text">Inventario Inicial</div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Inventario&a=lista_ordenes_entrada" class="menu-link">
										<div class="menu-text">Ordenes de entrada</div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Inventario&a=lista_ordenes_salida" class="menu-link">
										<div class="menu-text">Ordenes de salida</div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Inventario&a=lista_stock_productos" class="menu-link">
										<div class="menu-text">Stock de Productos</div>
									</a></div>
							</div>
						</div>
					<?php } ?>
					<?php
					if ($IdRol == 1) {
					?>
						<div class="menu-item has-sub">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon">
									<i class="material-icons">tune</i>
								</div>
								<div class="menu-text">Parametrización<nav></nav>
								</div>
								<div class="menu-caret"></div>
							</a>
							<div class="menu-submenu">
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
										<div class="menu-text"></div>
									</a></div>
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
										<div class="menu-text">Usuarios</div>
									</a></div>
							</div>
						</div>
					<?php } ?>
					<?php
					if ($IdRol == 1) {
					?>
						<div class="menu-item has-sub">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon">
									<i class="material-icons">key</i>
								</div>
								<div class="menu-text">Seguridad</div>
								<div class="menu-caret"></div>
							</a>
							<div class="menu-submenu">
								<!--<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
												<div class="menu-text">Roles</div>
											</a></div>-->
								<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
										<div class="menu-text">Usuarios</div>
									</a></div>
							</div>
						</div>
					<?php } ?>



					<div class="menu-item has-sub">
						<a href="javascript:;" class="menu-link">
							<div class="menu-icon">
								<i class="material-icons">print</i>
							</div>
							<div class="menu-text">Reportes</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu">
							<div class="menu-item has-sub">
								<a href="index.php?c=Reporte&a=reporte_cxcobrar" class="menu-link">
									<div class="menu-text">Cuentas por cobrar</div>
								</a>

								<a href="javascript:;" class="menu-link">
									<div class="menu-text">Ventas Mensuales</div>
								</a>

								<a href="javascript:;" class="menu-link">
									<div class="menu-text">Stock de Productos</div>
								</a>

								<a href="javascript:;" class="menu-link">
									<div class="menu-text">Facturas Registradas</div>
								</a>

								<a href="javascript:;" class="menu-link">
									<div class="menu-text">Notas de Crédito Registradas</div>
								</a>
							</div>
						</div>
					</div>

					<?php
					if ($IdRol == 1 || $IdRol == 3) {
					?>
						<div class="menu-item has-sub">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon">
									<i class="material-icons">add_shopping_cart</i>
								</div>
								<div class="menu-text">Ventas</div>
								<div class="menu-caret"></div>
							</a>
							<div class="menu-submenu">

								<div class="menu-item has-sub">
									<a href="index.php?c=Venta&a=gestion_ventas" class="menu-link">
										<div class="menu-text">Facturas</div>
									</a>

									<a href="index.php?c=Venta&a=gestion_ncredito" class="menu-link">
										<div class="menu-text">Notas de crédito</div>
									</a>
								</div>
							</div>
						</div>
					<?php } ?>


					<!--FIN MENU AFUERA-->




					<div class="menu-item d-flex">
						<a href="javascript:;" class="app-sidebar-minify-btn ms-auto" data-toggle="app-sidebar-minify"><i class="fa fa-angle-double-left"></i></a>
					</div>


				</div>
				<!-- END menu -->
			</div>
			<!-- END scrollbar -->
		</div>
		<div class="app-sidebar-bg"></div>
		<div class="app-sidebar-mobile-backdrop"><a href="#" data-dismiss="app-sidebar-mobile" class="stretched-link"></a></div>
		<!-- END #sidebar -->

		<!-- BEGIN scroll to top btn -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top" data-toggle="scroll-to-top"><i class="fa fa-angle-up"></i></a>
		<!-- END scroll to top btn -->