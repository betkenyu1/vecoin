function CerrarListaOrdenSalida() {
    $(".cerrar-lp").hide();
}
function getListaOrdenSalida() {
    var html = '';
    html += '<div class="cerrar-lp">';
    html += '<div class="note note-blue">';
    html += '<div class="note-content">';
    html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
    html += '<thead>';
    html += '<tr>';
    html += '<th width="1%"></th>';
    html += '<th class="text-nowrap">Fecha</th>';
    html += '<th class="text-nowrap">Secuencial</th>';
    html += '<th class="text-nowrap">Nro Factura</th>';
    html += '<th class="text-nowrap">Cliente</th>';
    html += '<th class="text-nowrap">Estado</th>';
    html += '<th class="text-nowrap">Acciones</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=OrdenSalida&a=get_ord_salida',
        success: function (response) {
            $.each(response, function (key, value) {
                html += '<tr class="odd gradeX">';
                html += '<td width="1%" class="fw-bold text-dark">' + value.id_secuencial + '</td>';
                html += '<td>' + value.fecha + '</td>';
                html += '<td>' + value.secuencial + '</td>';
                html += '<td>' + value.nro_factura + '</td>';
                html += '<td>' + value.razon_social + '</td>';
                html += '<td>' + value.estado + '</td>';
                html += '<td>';
                html += '<a class="btn btn-outline-danger" onclick="getReporteOrdenSalida(' + value.id_secuencial + ');" title="Reporte"><i class="fa-solid fa-file-pdf"></i></a>';
                html += '</td>';
                html += '</tr>';
            });
            html += '</tbody>';
            html += '</table>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            $("#lista-ord_salida").html(html);
            $('#data-table-select').DataTable({
                select: true,
                responsive: true
            });
        }
    });
}
function getProductos() {
    $("#IdProducto").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Inventario&a=get_productos",
        success: function (response) {
            var $select = $('#IdProducto');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_producto + '>' + value.producto + '</option>');
            });
        }
    });
}
function CerrarNuevaOrdenSalida() {
    $(".cerrar-nos").hide();
    getListaOrdenSalida();
}
function LimpiarCampos(){
    getProductos();
    getCliente();
    $("#IdCantidad").val('');
    $("#IdPrecio").val('');
    getUMedidas();
}
function setNuevaOrdenSalida() {
    CerrarListaOrdenSalida();
    $(".cerrar-mp").hide();
    var html = '';
    html += '<div class="cerrar-nos">';
    html += '<div class="note note-info">';
    html += '<div class="note-content">';
    html += '<form>';
    html += '<div class="form-group">';
    html += '<div class="row">';

    html += '<div>';
    html += '<p class="text-center">';
    html += '<b style="color: #000000;" id=IdSecu></b> </br>';
    html += '</p>'
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Fecha:</b> </br>';
    html += '<input type="date" class="form-control" id="IdFecha">';
    html += '<input type="text" class="form-control" id="IdSecuenc">';
    html += '<input type="text" class="form-control" id="IdSecuencial">';
    html += '<input type="text" class="form-control" id="IdSecuencia">';
    html += '<div id="alert-freg"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Perchas:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdPercha"></select>';
    html += '<div id="alert-ph"></div>';
    html += '</div>';
    html += '</div>';
    
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Productos:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdProducto"></select>';
    html += '<div id="alert-prod"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">U.Medida:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdUMedida"></select>';
    html += '<div id="alert-umed"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Existencia:</b> </br>';
    html += '<input type="text" class="form-control" id="IdExistencia">';
    html += '<div id="alert-exist"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">PVP:</b> </br>';
    html += '<input type="text" class="form-control" id="IdPVP">';
    html += '<div id="alert-prec"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Cantidad:</b> </br>';
    html += '<input type="text" class="form-control" id="IdCantidad">';
    html += '<div id="alert-cant"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<br>';
    html += '<a class="btn btn-danger" onclick="CerrarNuevaOrdenSalida();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
    html += '&nbsp;<a class="btn btn-primary" title="Agregar" onclick="getAgregarOrdenSalida();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Agregar</a>';
    html += '&nbsp;<a class="btn btn-success" title="Cerrar" onclick="getCerrarOrdenSalida();"><i class="fa-solid fa-save" aria-hidden="true"></i> Cerrar</a>';;
    html += '</div>';
    html += '</div>';

    html += '<div>';
    html += '<b style="color: #000000;">Observación (Opcional):</b> </br>';
    html += '<textarea type="text" row="3" class="form-control" id="IdObs"></textarea>';
    html += '<div id="alert-obs"></div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#new-ord-salida").html(html);
    $('.default-select2').select2();
    getSecuencialOrdenSalida();
    getProductos();
    getUMedidas();
    getPerchas();
}
$(document).on('change', '#IdProducto', function () {
	var html = '';
	if ($('#IdProducto').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Seleccione el producto!.';
		html += '</div>';
		$("#alert-prod").html(html);
		$('#IdProducto').focus();
		setTimeout(function () {
			$("#alert-prod").fadeOut(1500);
		}, 3000);
		return false;
	} else {
		var idprod = $('#IdProducto').val();
		$.ajax({
			type: "POST",
			dataType: 'json',
			url: "index.php?c=Inventario&a=get_existencias",
			data: "IdProducto=" + idprod,
			success: function (response) {
				$.each(response, function (key, value) {
					$('#IdExistencia').val(value.cantidad)
                    $('#IdPVP').val(value.pvp)
				});
			}
		});
	}
});
function getAgregarOrdenSalida() {
    var html = '';
    if ($('#IdFecha').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-freg").html(html);
        $('#IdFecha').focus();
        setTimeout(function () {
            $("#alert-freg").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdPercha').val() == "0") {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-ph").html(html);
        $('#IdPercha').focus();
        setTimeout(function () {
            $("#alert-ph").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdProducto').val() == 0) {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-prod").html(html);
        $('#IdProducto').focus();
        setTimeout(function () {
            $("#alert-prod").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdUMedida').val() == 0) {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-umed").html(html);
        $('#IdUMedida').focus();
        setTimeout(function () {
            $("#alert-umed").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdCantidad').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-cant").html(html);
        $('#IdCantidad').focus();
        setTimeout(function () {
            $("#alert-cant").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdPVP').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-prec").html(html);
        $('#IdPVP').focus();
        setTimeout(function () {
            $("#alert-prec").fadeOut(1500);
        }, 3000);
        return false;
    } else {
        var freg = $("#IdFecha").val();
        var idsc = $("#IdSecuencial").val();
        var idsecu = $("#IdSecuencia").val();
        var ph = $("#IdPercha").val();
        var prod = $("#IdProducto").val();
        var cant = $("#IdCantidad").val();
        var um = $("#IdUMedida").val();
        var prec = $("#IdPVP").val();
        var obs = $("#IdObs").val();
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
                    url: "index.php?c=Inventario&a=save_new_orden_salida",
                    data: "Fecha=" + freg + "&IdSecuencial=" + idsc + 
                    "&IdSecu=" + idsecu + "&IdPercha=" + ph + 
                    "&IdProducto=" + prod + "&Cantidad=" + cant + 
                    "&IdUMedida=" + um + "&Precio=" + prec + "&Observacion=" + obs,
                    success: function (response) {
                        if (response == 1) {
                            Swal.fire({
                                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
                            });
                            LimpiarCampos();
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
function getCerrarOrdenSalida() {
    var ids = $("#IdSecuenc").val();
    var idsc = $("#IdSecuencia").val();
    var nex = 1;
    var secu = parseFloat(idsc) + parseFloat(nex);
    alert(ids);
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
                url: "index.php?c=Inventario&a=cerrar_orden_salida",
                data: "IdSecuencial=" + ids + "&Secuencial=" + secu,
                success: function (response) {
                    if (response == 1) {
                        Swal.fire({
                            html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Cerrado OK!.</b></div></div>',
                        });
                        CerrarNuevaOrdenSalida();
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
    getListaOrdenSalida();
});