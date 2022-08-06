function CerrarListaProducto() {
	$(".cerrar-lp").hide();
}

function CerrarListaProducto() {
    $(".cerrar-lp").hide();
}
function getListaOrdenEntrada() {
    var html = '';
    html += '<div class="cerrar-lp">';
    html += '<div class="note note-blue">';
    html += '<div class="note-content">';
    html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
    html += '<thead>';
    html += '<tr>';
    html += '<th width="1%"></th>';
    html += '<th class="text-nowrap">Fecha</th>';
    html += '<th class="text-nowrap">Bodega</th>';
    html += '<th class="text-nowrap">U.Medida</th>';
    html += '<th class="text-nowrap">Código</th>';
    html += '<th class="text-nowrap">Producto</th>';
    html += '<th class="text-nowrap">Nro Factura</th>';
    html += '<th class="text-nowrap">Secuencial</th>';
    html += '<th class="text-nowrap">Cantidad</th>';
    html += '<th class="text-nowrap">Precio</th>';
    html += '<th class="text-nowrap">Acciones</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=OrdenEntrada&a=get_ord_entrda',
        success: function (response) {//OE.id_ord_entrada,OE.fecha,B.bodega,U.umedida,C.codigo,C.producto,OE.nro_factura,OE.secuencial,OE.cantidad,OE.precio,E.estado
            $.each(response, function (key, value) {
                html += '<tr class="odd gradeX">';
                html += '<td width="1%" class="fw-bold text-dark">' + value.id_ord_entrada + '</td>';
                html += '<td>' + value.fecha + '</td>';
                html += '<td>' + value.bodega + '</td>';
                html += '<td>' + value.umedida + '</td>';
                html += '<td>' + value.codigo + '</td>';
                html += '<td>' + value.producto + '</td>';
                html += '<td>' + value.nro_factura + '</td>';
                html += '<td>' + value.secuencial + '</td>';
                html += '<td>' + value.cantidad + '</td>';
                html += '<td>' + value.precio + '</td>';
                html += '<td>' + value.estado + '</td>';
                html += '<td>';
                html += '<a class="btn btn-outline-warning" onclick="setModificarProducto(' + value.id_ord_entrada + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
                html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarProducto(' + value.id_ord_entrada + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
                html += '</td>';
                html += '</tr>';
            });
            html += '</tbody>';
            html += '</table>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            $("#lista-ord_entrada").html(html);
            $('#data-table-select').DataTable({
                select: true,
                responsive: true
            });
        }
    });
}
//falta de aqui en adelante
function getProductos() {
    $("#IdProducto").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Catalogo&a=get_productos",
        success: function (response) {
            var $select = $('#IdProducto');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_producto + '>' + value.descripcion + '</option>');
            });
        }
    });
}
function getUMedidas() {
    $("#IdUMedida").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Catalogo&a=get_umedidas",
        success: function (response) {
            var $select = $('#IdUMedida');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_umedida + '>' + value.descripcion + '</option>');
            });
        }
    });
}
function CerrarNuevaOrdenEntrada() {
    $(".cerrar-noe").hide();
    //getListaProductos();
}
function setNuevaOrdenEntrada() {
    CerrarListaProducto();
    $(".cerrar-mp").hide();
    var html = '';
    html += '<div class="cerrar-noe">';
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
    html += '<b style="color: #000000;">Productos:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdProducto"></select>';
    html += '<div id="alert-prod"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Cantidad actual:</b> </br>';
    html += '<input type="text" class="form-control" id="IdCant_act">';
    html += '<div id="alert-cact"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Precio actual:</b> </br>';
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
    html += '<input type="text" class="form-control" id="IdPrecio">';
    html += '<div id="alert-nprec"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div>';
    html += '<b style="color: #000000;">Observación:</b> </br>';
    html += '<textarea type="text" row="3" class="form-control" id="IdObs"></textarea>';
    html += '<div id="alert-cp"></div>';
    html += '</div>';
   
    html += '<div class="text-center">';
    html += '<br>';
    html += '<a class="btn btn-outline-danger" onclick="CerrarNuevoProducto();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
    html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarOrdenEntrada();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#new-ord-entrada").html(html);
    $('.default-select2').select2();
    getProductos();
    getProveedor();
}

$(document).on('change', '#IdProducto', function () {
    var html = "";
	if ($('#IdProducto').val() == 0) {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-prod").html(html);
		$('#IdProducto').focus();
		setTimeout(function () {
			$("#alert-prod").fadeOut(1500);
		}, 3000);
		return false;
	} else {
		var idp = $('#IdProducto').val();
		$.ajax({
			type: "GET",
			dataType: 'json',
			url: "index.php?c=Catalogo&a=get_producto_id",
			data: "IdProducto=" + idp,
			success: function (response) {
				$.each(response, function (key, value) {
					$("#IdCant_act").val(value.cantidad);
                    var resultado = Number(value.precio).toFixed(2);
                    $("#IdPrecio_act").val(resultado)
				});
			}
		});
	}
});
function getGuardarOrdenEntrada() {
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
    } if ($('#IdCant_act').val() == "") {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-cact").html(html);
        $('#IdCant_act').focus();
        setTimeout(function () {
            $("#alert-cact").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdPrecio_act').val() == "") {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-pact").html(html);
        $('#IdPrecio_act').focus();
        setTimeout(function () {
            $("#alert-pact").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdCantidad').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-ncant").html(html);
        $('#IdCantidad').focus();
        setTimeout(function () {
            $("#alert-ncant").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdPrecio').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-nprec").html(html);
        $('#IdPrecio').focus();
        setTimeout(function () {
            $("#alert-nprec").fadeOut(1500);
        }, 3000);
        return false;
    } else {
        var ep = $("#IdEmpresa").val();
        var bp = $("#IdBodega").val();
        var ump = $("#IdUMedida").val();
        var codp = $("#IdCodigo").val();
        var dp = $("#IdDescripcionP").val();
        var cp = $("#IdCantidad").val();
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
                    url: "index.php?c=Catalogo&a=save_new_producto",
                    data: "IdEmpresa=" + ep + "&IdBodega=" + bp +
                        "&IdUMedida=" + ump + "&Codigo=" + codp +
                        "&Descripcion=" + dp + "&Cantidad=" + cp,
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

function getBodegasMod() {
    $("#IdBodegaM").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Catalogo&a=get_bodegas",
        success: function (response) {
            var $select = $('#IdBodegaM');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_bodega + '>' + value.descripcion + '</option>');
            });
        }
    });
}
function getUMedidasMod() {
    $("#IdUMedidaM").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Catalogo&a=get_umedidas",
        success: function (response) {
            var $select = $('#IdUMedidaM');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_umedida + '>' + value.descripcion + '</option>');
            });
        }
    });
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
    html += '<b style="color: #000000;">Empresas:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdEmpresaM"></select>';
    html += '<div id="alert-epm"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Bodegas:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdBodegaM"></select>';
    html += '<div id="alert-bpm"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Unidad de Medida:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdUMedidaM"></select>';
    html += '<div id="alert-umpm"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Código:</b> </br>';
    html += '<input type="hidden" class="form-control" id="IdProducto">';
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
    html += '<b style="color: #000000;">Cantidad:</b> </br>';
    html += '<input type="text" class="form-control" id="IdCantidadM">';
    html += '<div id="alert-cpm"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="text-center">';
    html += '<a class="btn btn-outline-danger" onclick="CerrarModificarProducto();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
    html += '&nbsp;<a class="btn btn-outline-warning" title="Modificar" onclick="getModificarProducto();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#mod-prod").html(html);
    $('.default-select2').select2();
    getEmpresasMod();
    getBodegasMod();
    getUMedidasMod();
    getPrepareModificarProducto(id_producto);
}
function getPrepareModificarProducto(id_producto) {
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Catalogo&a=get_pmod_producto',
        data: "IdProducto=" + id_producto,
        success: function (response) {
            $.each(response, function (key, value) {
                $("#IdProducto").val(value.id_producto);
                $("#IdCodigoM").val(value.codigo);
                $("#IdDescripcionM").val(value.descripcion);
                $("#IdCantidadM").val(value.cantidad);
            });
        }
    });
}
function getModificarProducto() {
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
    } if ($('#IdBodegaM').val() == 0) {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-bpm").html(html);
        $('#IdBodegaM').focus();
        setTimeout(function () {
            $("#alert-bpm").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdUMedidaM').val() == 0) {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-umpm").html(html);
        $('#IdUMedidaM').focus();
        setTimeout(function () {
            $("#alert-umpm").fadeOut(1500);
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
    } if ($('#IdCantidadM').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-cpm").html(html);
        $('#IdCantidadM').focus();
        setTimeout(function () {
            $("#alert-cpm").fadeOut(1500);
        }, 3000);
        return false;
    } else {
        var idprod = $("#IdProducto").val();
        var epm = $("#IdEmpresaM").val();
        var bpm = $("#IdBodegaM").val();
        var umpm = $("#IdUMedidaM").val();
        var codpm = $("#IdCodigoM").val();
        var dpm = $("#IdDescripcionM").val();
        var cpm = $("#IdCantidadM").val();
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
                    url: "index.php?c=Catalogo&a=get_mod_producto",
                    data: "IdProducto=" + idprod + "&IdEmpresa=" + epm + "&IdBodega=" + bpm +
                        "&IdUMedida=" + umpm + "&Codigo=" + codpm +
                        "&Descripcion=" + dpm + "&Cantidad=" + cpm,
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
                url: "index.php?c=Catalogo&a=delete_producto",
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
    getListaOrdenEntrada();
});