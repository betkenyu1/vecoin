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
	<title>Vecoin | Home</title>
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

</head>

<body>
	<!-- BEGIN #loader -->
	<div id="loader" class="app-loader">
		<div class="material-loader">
			<svg class="circular" viewBox="25 25 50 50">
				<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
			</svg>
			<div class="message">Loading...</div>
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
						<div class="image image-icon bg-gray-800 text-gray-600">
							<i class="fa fa-user"></i>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-end me-1">
						<div class="dropdown-divider"></div>
						<a href="index.php?c=Index&a=index" class="dropdown-item">Cerrar Sesion</a>
					</div>
				</div>
			</div>
			<!-- END header navigation right -->
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
									<div class="menu-caret ms-auto"></div>
								</div>
								<small><?php echo $Rol; ?></small>
							</div>
						</a>
					</div>
					<div id="appSidebarProfileMenu" class="collapse">
						<div class="menu-item pt-5px">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon"><i class="fa fa-cog"></i></div>
								<div class="menu-text">Settings</div>
							</a>
						</div>
						<div class="menu-item">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon"><i class="fa fa-pencil-alt"></i></div>
								<div class="menu-text"> Send Feedback</div>
							</a>
						</div>
						<div class="menu-item pb-5px">
							<a href="javascript:;" class="menu-link">
								<div class="menu-icon"><i class="fa fa-question-circle"></i></div>
								<div class="menu-text"> Helps</div>
							</a>
						</div>
						<div class="menu-divider m-0"></div>
					</div>
					<div class="menu-header">Navigation</div>
					<div class="menu-item active">
						<a href="index.php?c=Index&a=home" class="menu-link">
							<div class="menu-icon">
								<i class="material-icons">home</i>
							</div>
							<div class="menu-text">Home</div>
						</a>
					</div>

					<div class="menu-item has-sub">
						<a href="javascript:;" class="menu-link">
							<div class="menu-icon">
								<i class="material-icons">list</i>
							</div>
							<div class="menu-text">Menu</div>
							<div class="menu-caret"></div>
						</a>
						<div class="menu-submenu">
							<?php
							if ($IdRol == 1) {
							?>
								<div class="menu-item has-sub">
									<a href="javascript:;" class="menu-link">
										<div class="menu-text">Administrador</div>
										<div class="menu-caret"></div>
									</a>
									<div class="menu-submenu">
									<div class="menu-item"><a href="index.php?c=Admin&a=lista_secuenciales" class="menu-link">
												<div class="menu-text">Secuenciales</div>
											</a></div>
										<div class="menu-item"><a href="index.php?c=Catalogo&a=lista_catalogo" class="menu-link">
												<div class="menu-text">Catálogo general</div>
											</a></div>
										<div class="menu-item"><a href="javascript:;" class="menu-link">
												<div class="menu-text">Clientes</div>
											</a></div>
										<div class="menu-item"><a href="javascript:;" class="menu-link">
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
										<div class="menu-text">Seguridad</div>
										<div class="menu-caret"></div>
									</a>
									<div class="menu-submenu">
										<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
												<div class="menu-text">Roles</div>
											</a></div>
										<div class="menu-item"><a href="index.php?c=Admin&a=lista_usuarios" class="menu-link">
												<div class="menu-text">Usuarios</div>
											</a></div>
									</div>
								</div>
							<?php } ?>
							<?php
							if ($IdRol == 1 || $IdRol == 2) {
							?>
								<div class="menu-item has-sub">
									<a href="javascript:;" class="menu-link">
										<div class="menu-text">Inventarios</div>
										<div class="menu-caret"></div>
									</a>
									<div class="menu-submenu">

										<div class="menu-item"><a href="index.php?c=Producto&a=lista_productos" class="menu-link">
												<div class="menu-text">Productos</div>
											</a></div>
										<div class="menu-item"><a href="index.php?c=OrdenEntrada&a=lista_ordenes_entrada" class="menu-link">
												<div class="menu-text">Ordenes de entrada</div>
											</a></div>
										<div class="menu-item"><a href="javascript:;" class="menu-link">
												<div class="menu-text">Ordenes de salida</div>
											</a></div>
										<div class="menu-item"><a href="javascript:;" class="menu-link">
												<div class="menu-text">Consulta de stock</div>
											</a></div>
									</div>
								</div>
							<?php } ?>
							<?php
							if ($IdRol == 1 || $IdRol == 3) {
							?>
								<div class="menu-item has-sub">
									<a href="javascript:;" class="menu-link">
										<div class="menu-text">Ventas</div>
										<div class="menu-caret"></div>
									</a>
									<div class="menu-submenu">

										<div class="menu-item has-sub">
											<a href="javascript:;" class="menu-link">
												<div class="menu-text">Registro de facturas</div>
											</a>

											<a href="javascript:;" class="menu-link">
												<div class="menu-text">Notas de crédito</div>
											</a>
										</div>
									</div>
								</div>
							<?php } ?>
							<?php
							if ($IdRol == 1 || $IdRol == 4) {
							?>
								<div class="menu-item has-sub">
									<a href="javascript:;" class="menu-link">
										<div class="menu-text">Cobranzas</div>
										<div class="menu-caret"></div>
									</a>
									<div class="menu-submenu">
										<div class="menu-item has-sub">
											<a href="javascript:;" class="menu-link">
												<div class="menu-text">Cuentas por Cobrar</div>
											</a>
										</div>
									</div>
								</div>
							<?php } ?>
							<div class="menu-item has-sub">
								<a href="javascript:;" class="menu-link">
									<div class="menu-text">Reportes</div>
									<div class="menu-caret"></div>
								</a>
								<div class="menu-submenu">
									<div class="menu-item has-sub">
										<a href="javascript:;" class="menu-link">
											<div class="menu-text">Cuentas por cobrar</div>
										</a>

										<a href="javascript:;" class="menu-link">
											<div class="menu-text">Ventas por periodos</div>
										</a>

										<a href="javascript:;" class="menu-link">
											<div class="menu-text">Productos en stock</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- BEGIN minify-button -->
					<div class="menu-item d-flex">
						<a href="javascript:;" class="app-sidebar-minify-btn ms-auto" data-toggle="app-sidebar-minify"><i class="fa fa-angle-double-left"></i></a>
					</div>
					<!-- END minify-button -->

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