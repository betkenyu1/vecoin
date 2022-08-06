function CerrarListaCatalogo() {
	$(".cerrar-lcat").hide();
}
function getListaCatalogo() {
	var html = '';
	html += '<div class="cerrar-lcat">';
	html += '<div class="note note-blue">';
	html += '<div class="note-content">';
	html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
	html += '<thead>';
	html += '<tr>';
	html += '<th width="1%"></th>';
	html += '<th class="text-nowrap">Empresa</th>';
	html += '<th class="text-nowrap">Código</th>';
	html += '<th class="text-nowrap">Producto</th>';
	html += '<th class="text-nowrap">Estado</th>';
	html += '<th class="text-nowrap">Acciones</th>';
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: 'index.php?c=Catalogo&a=get_catalogo',
		success: function (response) {
			$.each(response, function (key, value) {
				html += '<tr class="odd gradeX">';
				html += '<td width="1%" class="fw-bold text-dark">' + value.id_catalogo + '</td>';
				html += '<td>' + value.razon_social + '</td>';
				html += '<td>' + value.codigo + '</td>';
				html += '<td>' + value.producto + '</td>';
				html += '<td>' + value.estado + '</td>';
				html += '<td>';
				html += '<a class="btn btn-outline-warning" onclick="setModificarCatalogo(' + value.id_catalogo + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
				html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarCatalogo(' + value.id_catalogo + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
				html += '</td>';
				html += '</tr>';
			});
			html += '</tbody>';
			html += '</table>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			$("#lista-catalogo").html(html);
			$('#data-table-select').DataTable({
				select: true,
				responsive: true
			});
		}
	});
}

function CerrarNuevoCatalogo() {
	$(".cerrar-np").hide();
	getListaCatalogo();
}
function setNuevoCatalogo() {
	CerrarListaCatalogo();
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
	html += '<b style="color: #000000;">Empresas:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdEmpresa"></select>';
	html += '<div id="alert-ep"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Código:</b> </br>';
	html += '<input type="text" class="form-control" id="IdCodigo">';
	html += '<div id="alert-codp"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Descripción:</b> </br>';
	html += '<input type="text" class="form-control" id="IdDescripcionP">';
	html += '<div id="alert-dp"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<div class="text-left">';
	html += '<br>';
	html += '<a class="btn btn-outline-danger" onclick="CerrarNuevoCatalogo();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
	html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarCatalogo();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
	html += '</div>';
	html += '</div>';
	html += '</div>';

	html += '</div>';
	html += '</div>';
	html += '</form>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#new-catalogo").html(html);
	$('.default-select2').select2();
	getEmpresas();
}
function getGuardarCatalogo() {
	var html = '';
	if ($('#IdEmpresa').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-ep").html(html);
		$('#IdEmpresa').focus();
		setTimeout(function () {
			$("#alert-ep").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdCodigo').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-codp").html(html);
		$('#IdCodigo').focus();
		setTimeout(function () {
			$("#alert-codp").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdDescripcionP').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-dp").html(html);
		$('#IdDescripcionP').focus();
		setTimeout(function () {
			$("#alert-dp").fadeOut(1500);
		}, 3000);
		return false;
	} else {
		var ep = $("#IdEmpresa").val();
		var codp = $("#IdCodigo").val();
		var dp = $("#IdDescripcionP").val();
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
					url: "index.php?c=Catalogo&a=save_new_item",
					data: "IdEmpresa=" + ep + "&Codigo=" + codp +
						"&Descripcion=" + dp,
					success: function (response) {
						response = JSON.stringify(response);
						if (response == 1) {
							Swal.fire({
								html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
							});
							CerrarNuevoCatalogo();
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
function CerrarModificarCatalogo() {
	$(".cerrar-mp").hide();
	getListaCatalogo();
}
function setModificarCatalogo(id_catalogo) {
	CerrarListaCatalogo();
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
	html += '<b style="color: #000000;">Empresas:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdEmpresaM"></select>';
	html += '<div id="alert-epm"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Código:</b> </br>';
	html += '<input type="hidden" class="form-control" id="IdCatalogo">';
	html += '<input type="text" class="form-control" id="IdCodigoM">';
	html += '<div id="alert-codpm"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Descripción:</b> </br>';
	html += '<input type="text" class="form-control" id="IdDescripcionM">';
	html += '<div id="alert-dpm"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Estados:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdEstado"></select>';
	html += '<div id="alert-es"></div>';
	html += '</div>';
	html += '</div>';

	html += '<div class="text-center">';
	html += '<a class="btn btn-outline-danger" onclick="CerrarModificarCatalogo();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
	html += '&nbsp;<a class="btn btn-outline-primary" title="Modificar" onclick="getModificarCatalogo();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
	html += '</div>';

	html += '</div>';
	html += '</div>';
	html += '</form>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#mod-catalogo").html(html);
	$('.default-select2').select2();
	getEmpresasMod();
	getPrepareModificarCatalogo(id_catalogo);
	getEstados();
}
function getPrepareModificarCatalogo(id_catalogo) {
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: 'index.php?c=Catalogo&a=get_mod_item',
		data: "IdCatalogo=" + id_catalogo,
		success: function (response) {
			$.each(response, function (key, value) {
				$("#IdCatalogo").val(value.id_catalogo);
				$("#IdCodigoM").val(value.codigo);
				$("#IdDescripcionM").val(value.producto);
			});
		}
	});
}
function getModificarCatalogo() {
	var html = '';
	if ($('#IdEmpresaM').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-epm").html(html);
		$('#IdEmpresaM').focus();
		setTimeout(function () {
			$("#alert-epm").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdCodigoM').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-codpm").html(html);
		$('#IdCodigoM').focus();
		setTimeout(function () {
			$("#alert-codpm").fadeOut(1500);
		}, 3000);
		return false;
	} if ($('#IdDescripcionM').val() == '') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-dpm").html(html);
		$('#IdDescripcionM').focus();
		setTimeout(function () {
			$("#alert-dpm").fadeOut(1500);
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
		var idcat = $("#IdCatalogo").val();
		var ep = $("#IdEmpresaM").val();
		var codp = $("#IdCodigoM").val();
		var dp = $("#IdDescripcionM").val();
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
					url: "index.php?c=Catalogo&a=get_mod_catalogo",
					data: "IdCatalogo=" + idcat + "&IdEmpresa=" + ep + "&Codigo=" + codp +
						"&Descripcion=" + dp + "&IdEstado=" + es,
					success: function (response) {
						response = JSON.stringify(response);
						if (response == 1) {
							Swal.fire({
								html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Modificado OK!.</b></div></div>',
							});
							CerrarModificarCatalogo();
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
function getEliminarCatalogo(id_catalogo) {
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
				url: "index.php?c=Catalogo&a=delete_item_catalogo",
				data: "IdCatalogo=" + id_catalogo,
				success: function (response) {
					response = JSON.stringify(response);
					if (response == 1) {
						Swal.fire({
							html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>Eliminado OK!.</b></div></div>',
						});
						getListaCatalogo();
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
	getListaCatalogo();
});