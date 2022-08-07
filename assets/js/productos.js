function CerrarListaProducto() {
	$(".cerrar-lp").hide();
}
function getListaProductos() {
	var html = '';
	html += '<div class="cerrar-lp">';
	html += '<div class="note note-blue">';
	html += '<div class="note-content">';
	html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
	html += '<thead>';
	html += '<tr>';
	html += '<th width="1%"></th>';
	html += '<th class="text-nowrap">Empresa</th>';
	html += '<th class="text-nowrap">Código</th>';
	html += '<th class="text-nowrap">Producto</th>';
	html += '<th class="text-nowrap">Bodega</th>';
	html += '<th class="text-nowrap">U.Medida</th>';
	html += '<th class="text-nowrap">Cantidad</th>';
	html += '<th class="text-nowrap">Precio</th>';
	html += '<th class="text-nowrap">%Utl</th>';
	html += '<th class="text-nowrap">PVP</th>';
	html += '<th class="text-nowrap">Estado</th>';
	html += '<th class="text-nowrap">Acciones</th>';
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	$.ajax({
		type: "GET",
		dataType: 'json',
        
		url: 'index.php?c=Producto&a=get_productos',
		success: function (response) {
			$.each(response, function (key, value) {
				html += '<tr class="odd gradeX">';
				html += '<td width="1%" class="fw-bold text-dark">' + value.id_producto + '</td>';
				html += '<td>' + value.razon_social + '</td>';
				html += '<td>' + value.codigo + '</td>';
				html += '<td>' + value.producto + '</td>';
				html += '<td>' + value.bodega + '</td>';
				html += '<td>' + value.umedida + '</td>';
				html += '<td>' + value.cantidad + '</td>';
				html += '<td>' + value.precio + '</td>';
				html += '<td>' + value.prc_utl + '</td>';
				html += '<td>' + value.pvp + '</td>';
				html += '<td>' + value.estado + '</td>';
				html += '<td>';
				html += '<a class="btn btn-outline-warning" onclick="setModificarProducto(' + value.id_producto + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
				html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarProducto(' + value.id_producto + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
				html += '</td>';
				html += '</tr>';
			});
			html += '</tbody>';
			html += '</table>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			$("#lista-productos").html(html);
			$('#data-table-select').DataTable({
				select: true,
				responsive: true
			});
		}
	});
}

function CerrarNuevoProducto() {
	$(".cerrar-np").hide();
	getListaProductos();
}
function setNuevoProducto() {
	CerrarListaProducto();
	$(".cerrar-mp").hide();
	var html = '';
	html += '<div class="cerrar-np">';
	html += '<div class="note note-info">';
	html += '<div class="note-content">';
	html += '<form>';
	html += '<div class="form-group">';
	html += '<div class="row">';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Proveedores:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdProveedor"></select>';
	html += '<div id="alert-prov"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Bodegas:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdBodega"></select>';
	html += '<div id="alert-bp"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Unidad de Medida:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdUMedida"></select>';
	html += '<div id="alert-ump"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Catálogo:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdCatalogo"></select>';
	html += '<div id="alert-ct"></div>';
	html += '</div>';
	html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Cantidad:</b> </br>';
    html += '<input type="text" class="form-control" id="IdCant_act">';
    html += '<div id="alert-cact"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Precio:</b> </br>';
    html += '<input type="text" class="form-control" id="IdPrecio_act">';
    html += '<div id="alert-pact"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">% Utilidad:</b> </br>';
    html += '<input type="text" class="form-control" id="IdUtilidad" onkeyup="CalcularUtilidad();">';
    html += '<div id="alert-utl"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">PVP:</b> </br>';
    html += '<input type="text" class="form-control" id="IdPVP">';
    html += '<div id="alert-pvp"></div>';
    html += '</div>';
    html += '</div>';

	html += '<div class="text-center">';
	html += '<a class="btn btn-outline-danger" onclick="CerrarNuevoProducto();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
	html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarProducto();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
	html += '</div>';

	html += '</div>';
	html += '</div>';
	html += '</form>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#new-prod").html(html);
	$('.default-select2').select2();
	getProveedor();
	getCatalogo();
	getBodegas();
	getUMedidas();
}

function getGuardarProducto() {
	var html = '';
	if ($('#IdProveedor').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-prov").html(html);
		$('#IdProveedor').focus();
		setTimeout(function () {
			$("#alert-prov").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdBodega').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-bp").html(html);
		$('#IdBodega').focus();
		setTimeout(function () {
			$("#alert-bp").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdUMedida').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-ump").html(html);
		$('#IdUMedida').focus();
		setTimeout(function () {
			$("#alert-ump").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdCatalogo').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-ct").html(html);
		$('#IdCatalogo').focus();
		setTimeout(function () {
			$("#alert-ct").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdCant_act').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-cact").html(html);
		$('#IdCant_act').focus();
		setTimeout(function () {
			$("#alert-cact").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdPrecio_act').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-pact").html(html);
		$('#IdPrecio_act').focus();
		setTimeout(function () {
			$("#alert-pact").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdUtilidad').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-utl").html(html);
		$('#IdUtilidad').focus();
		setTimeout(function () {
			$("#alert-utl").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdPVP').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-pvp").html(html);
		$('#IdPVP').focus();
		setTimeout(function () {
			$("#alert-pvp").fadeOut(1500);
		}, 3000);
		return false;
	} else {
		var prov = $("#IdProveedor").val();
		var bp = $("#IdBodega").val();
		var um = $("#IdUMedida").val();
		var ct = $("#IdCatalogo").val();
		var cact = $("#IdCant_act").val();
		var pact = $("#IdPrecio_act").val();
		var utl = $("#IdUtilidad").val();
		var pvp = $("#IdPVP").val();
		alert(prov+bp+um+ct+cact+pact+utl+pvp);
		Swal.fire({
			title: "CONFIRMACION!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí continuar"
		}).then((result) => {
			if (result.isConfirmed) {
				$.ajax({
					type: "GET",
					dataType: 'json',
					url: "index.php?c=Inventario&a=save_new_producto",
					data: "IdProveedor=" + prov + "&IdBodega=" + bp +
						"&IdUMedida=" + um + "&IdCatalogo=" + ct +
						"&Cantidad=" + cact + "&Precio=" + pact + "&Prc_Utl=" + utl + "&PVP=" + pvp,
					success: function (response) {
						response = JSON.stringify(response);
						if (response == 1) {
							Swal.fire({
								html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
							});
							CerrarNuevoProducto();
						} if (response == 2) {
							Swal.fire({
								html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error de registro!.</b></div></div>',
							});
						}
					}
				});
			}
		});
	}
}
function CerrarModificarProducto() {
	$(".cerrar-mp").hide();
	getListaProductos();
}
function setModificarProducto(id_producto) {
	CerrarListaProducto();
	$(".cerrar-np").hide();
	var html = '';
	html += '<div class="cerrar-mp">';
	html += '<div class="note note-warning">';
	html += '<div class="note-content">';
	html += '<form>';
	html += '<div class="form-group">';
	html += '<div class="row">';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Proveedores:</b> </br>';
	html += '<input type="hidden" class="form-control" id="IdProducto">';
	html += '<select class="default-select2 form-control" id="IdProveedorMod"></select>';
	html += '<div id="alert-prov"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Bodegas:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdBodegaMod"></select>';
	html += '<div id="alert-bp"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Unidad de Medida:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdUMedidaMod"></select>';
	html += '<div id="alert-ump"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Catálogo:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdCatalogoMod"></select>';
	html += '<div id="alert-ct"></div>';
	html += '</div>';
	html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Cantidad:</b> </br>';
    html += '<input type="text" class="form-control" id="IdCant_actMod">';
    html += '<div id="alert-cact"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Precio:</b> </br>';
    html += '<input type="text" class="form-control" id="IdPrecio_actMod">';
    html += '<div id="alert-pact"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">% Utilidad:</b> </br>';
    html += '<input type="text" class="form-control" id="IdUtilidadMod" onkeyup="CalcularUtilidadMod();">';
    html += '<div id="alert-utl"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">PVP:</b> </br>';
    html += '<input type="text" class="form-control" id="IdPVPMod">';
    html += '<div id="alert-pvp"></div>';
    html += '</div>';
    html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Estados:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdEstado"></select>';
	html += '<div id="alert-es"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<div class="text-left">';
	html += '<br>';
	html += '<a class="btn btn-outline-danger" onclick="CerrarModificarProducto();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
	html += '&nbsp;<a class="btn btn-outline-primary" title="Modificar" onclick="getModificarProducto();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	html += '</div>';
	html += '</div>';
	html += '</form>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#mod-prod").html(html);
	$('.default-select2').select2();
	getProveedorMod();
	getCatalogoMod();
	getBodegasMod();
	getUMedidasMod();
	getEstados();
	getPrepareModificarProducto(id_producto);
}
function getPrepareModificarProducto(id_producto) {
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: 'index.php?c=Producto&a=get_pmod_producto',
		data: "IdProducto=" + id_producto,
		success: function (response) {//id_producto,cantidad,precio,prc_utl,pvp
			$.each(response, function (key, value) {
				$("#IdProducto").val(value.id_producto);
				$("#IdCant_actMod").val(value.cantidad);
				$("#IdPrecio_actMod").val(value.precio);
				$("#IdUtilidadMod").val(value.prc_utl);
				$("#IdPVPMod").val(value.pvp);
			});
		}
	});
}
function getModificarProducto() {
	var html = '';
	if ($('#IdProveedorMod').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-prov").html(html);
		$('#IdProveedorMod').focus();
		setTimeout(function () {
			$("#alert-prov").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdBodegaMod').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-bp").html(html);
		$('#IdBodegaMod').focus();
		setTimeout(function () {
			$("#alert-bp").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdUMedidaMod').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-ump").html(html);
		$('#IdUMedidaMod').focus();
		setTimeout(function () {
			$("#alert-ump").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdCatalogoMod').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-ct").html(html);
		$('#IdCatalogoMod').focus();
		setTimeout(function () {
			$("#alert-ct").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdCant_actMod').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-cact").html(html);
		$('#IdCant_actMod').focus();
		setTimeout(function () {
			$("#alert-cact").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdPrecio_actMod').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-pact").html(html);
		$('#IdPrecio_actMod').focus();
		setTimeout(function () {
			$("#alert-pact").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdUtilidadMod').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-utl").html(html);
		$('#IdUtilidadMod').focus();
		setTimeout(function () {
			$("#alert-utl").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdPVPMod').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-pvp").html(html);
		$('#IdPVPMod').focus();
		setTimeout(function () {
			$("#alert-pvp").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdEstado').val() == '0') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-es").html(html);
		$('#IdEstado').focus();
		setTimeout(function () {
			$("#alert-es").fadeOut(1500);
		}, 3000);
		return false;
	} else {
		var prod = $("#IdProducto").val();
		var prov = $("#IdProveedorMod").val();
		var bp = $("#IdBodegaMod").val();
		var um = $("#IdUMedidaMod").val();
		var ct = $("#IdCatalogoMod").val();
		var cact = $("#IdCant_actMod").val();
		var pact = $("#IdPrecio_actMod").val();
		var utl = $("#IdUtilidadMod").val();
		var pvp = $("#IdPVPMod").val();
		var es = $("#IdEstado").val();
		Swal.fire({
			title: "CONFIRMACION!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí continuar"
		}).then((result) => {
			if (result.isConfirmed) {
				$.ajax({
					type: "POST",
					dataType: 'json',
					url: "index.php?c=Producto&a=get_mod_producto",
					data: "IdProducto=" + prod + "&IdProveedor=" + prov + "&IdBodega=" + bp +
						"&IdUMedida=" + um + "&IdCatalogo=" + ct +
						"&Cantidad=" + cact + "&Precio=" + pact + "&Prc_Utl=" + utl + "&PVP=" + pvp + "&IdEstado=" + es,
					success: function (response) {
						response = JSON.stringify(response);
						if (response == 1) {
							Swal.fire({
								html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Modificado OK!.</b></div></div>',
							});
							CerrarModificarProducto();
						} if (response == 2) {
							Swal.fire({
								html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error de registro!.</b></div></div>',
							});
						}
					}
				});
			}
		});
	}
}
function getEliminarProducto(id_producto) {
	Swal.fire({
		title: "CONFIRMACION!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Sí continuar"
	}).then((result) => {
		if (result.isConfirmed) {
			$.ajax({
				type: "GET",
				dataType: 'json',
				url: "index.php?c=Producto&a=delete_producto",
				data: "IdProducto=" + id_producto,
				success: function (response) {
					response = JSON.stringify(response);
					if (response == 1) {
						Swal.fire({
							html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>Eliminado OK!.</b></div></div>',
						});
						getListaProductos();
					} if (response == 2) {
						Swal.fire({
							html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error de registro!.</b></div></div>',
						});
					}
				}
			});
		}
	});
}
$(document).ready(function () {
	getListaProductos();
});