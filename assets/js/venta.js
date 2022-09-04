function getClientes() {
    $("#IdCliente").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Venta&a=get_clientes",
        success: function (response) {
            var $select = $('#IdCliente');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_cliente + '>' + value.razon_social + '</option>');
            });
        }
    });
}
function CerrarListaVenta() {
    $(".cerrar-vta").hide();
}
function setNuevaVenta() {
    CerrarListaVenta();
    $(".cerrar-mp").hide();
    var html = '';
    html += '<div id="ps?1" class="cerrar-vta">';
    html += '<div class="note note-info">';
    html += '<div class="note-content">';
    html += '<form>';
    html += '<div class="form-group">';
    html += '<div class="row">';

    html += '<div style="color: white;" class="text-center">';
    html += '<h3>REGISTRO DE FACTURA DE VENTA</h3>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Fecha:</b> </br>';
    html += '<input type="date" class="form-control" id="IdFecha">';
    html += '<div id="alert-freg"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Clientes:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdCliente"></select>';
    html += '<div id="alert-cli"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Nro Factura:</b> </br>';
    html += '<input type="hidden" class="form-control" id="IdDetPSalida">';
    html += '<input type="text" class="form-control" id="IdNroFactura">';
    html += '<div id="alert-nrofac"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Productos:</b> </br>';
    html += '<input type="hidden" class="form-control" id="IdProducto">';
    html += '<input type="text" class="form-control" id="IdDetProducto">';
    html += '<div id="alert-prod"></div>';
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
    html += '<b style="color: #000000;">Precio:</b> </br>';
    html += '<input type="text" class="form-control" id="IdPrecio">';
    html += '<div id="alert-prec"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div>';
    html += '<br>';
    html += '<div class="text-center">';
    html += '<a class="btn btn-danger" onclick="CerrarListaVenta();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
    html += '&nbsp;<a class="btn btn-primary" title="Agregar" onclick="getAgregarVenta();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Agregar</a>';
    html += '</div>';
    html += '</div>';
    
    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#p-osalida").html(html);
    $('.default-select2').select2();
}
function getListaOrdenSalida() {
    var html = '';
    //html += '<div class="cerrar-lp">';
    html += '<div style="overflow: scroll" class="cerrar-lp">';
    html += '<div class="note note-blue">';
    html += '<div class="note-content">';
    html += '<table id="data-table-select" class="table table-striped table-bordered align-middle ">';
    html += '<thead>';
    html += '<tr>';
    html += '<th width="1%"></th>';
    html += '<th class="text-nowrap">Fecha</th>';
    html += '<th class="text-nowrap">Secuencial</th>';
    html += '<th class="text-nowrap">Producto</th>';
    html += '<th class="text-nowrap">U.Medida</th>';
    html += '<th class="text-nowrap">Bodega</th>';
    html += '<th class="text-nowrap">Cantidad</th>';
    html += '<th class="text-nowrap">PVP</th>';
    html += '<th class="text-nowrap">Acciones</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Venta&a=get_det_osalida',
        success: function (response) {
            if (response != '') {
                $.each(response, function (key, value) {
                    html += '<tr class="odd gradeX">';
                    html += '<td width="1%" class="fw-bold text-dark">' + value.id_det_osalida + '</td>';
                    html += '<td>' + value.fecha + '</td>';
                    html += '<td>' + value.secuencial + '</td>';
                    html += '<td>' + value.producto + '</td>';
                    html += '<td>' + value.umedida + '</td>';
                    html += '<td>' + value.bodega + '</td>';
                    html += '<td>' + value.cantidad + '</td>';
                    html += '<td>' + value.pvp + '</td>';
                    html += '<td>';
                    html += '<a href="#ps?1" class="btn btn-outline-orange" onclick="getProcesarOSalida(' + value.id_det_osalida + ');" title="Procesar salida"><i class="fa-solid fa-share"></i></a>';
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
                    "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json"},
				select: true,
				responsive: true
                });
            } else {
                html = '';
                html += '<div class="alert alert-success alert-dismissible fade show h-100 mb-0">';
                html += '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
                html += '<b>No hay datos</b>';
                html += '</div>';
                $("#lista-ord_salida").html(html);
            }
        }
    });
}

function getProcesarOSalida(id_det_osalida) {
    setNuevaVenta();
    getClientes();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Venta&a=get_iddet_osalida',
        data: "IdDetOSalida=" + id_det_osalida,
        success: function (response) {
            $.each(response, function (key, value) {
                $("#IdDetPSalida").val(value.id_det_osalida);
                $("#IdProducto").val(value.id_producto);
                $("#IdDetProducto").val(value.producto);
                $("#IdCantidad").val(value.cantidad);
                $("#IdPrecio").val(value.pvp);
            });
        }
    });
}
function getAgregarVenta() {
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
    } if ($('#IdCliente').val() == '0') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-cli").html(html);
        $('#IdCliente').focus();
        setTimeout(function () {
            $("#alert-cli").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdNroFactura').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-nrofac").html(html);
        $('#IdNroFactura').focus();
        setTimeout(function () {
            $("#alert-nrofac").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdDetProducto').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-prod").html(html);
        $('#IdDetProducto').focus();
        setTimeout(function () {
            $("#alert-prod").fadeOut(1500);
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
    } if ($('#IdPrecio').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-prec").html(html);
        $('#IdPrecio').focus();
        setTimeout(function () {
            $("#alert-prec").fadeOut(1500);
        }, 3000);
        return false;
    } else {
        var iddet = $("#IdDetPSalida").val();
        var idfreg = $("#IdFecha").val();
        var clien = $("#IdCliente").val();
        var nfact = $("#IdNroFactura").val();
        var prod = $("#IdProducto").val();
        var cant = $("#IdCantidad").val();
        var prec = $("#IdPrecio").val();
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
                    url: "index.php?c=Venta&a=save_new_venta",
                    data: "Fecha=" + idfreg + "&IdDetPSalida=" + iddet + "&IdCliente=" + clien + "&NroFactura=" + nfact +
                        "&IdProducto=" + prod + "&Cantidad=" + cant + "&Precio=" + prec,
                    success: function (response) {
                        response = JSON.stringify(response);
                        if (response == 1) {
                            Swal.fire({
                                html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
                            });
                            getListaOrdenSalida();
                        } if (response == 2) {
                            Swal.fire({
                                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error al Registrar!.</b></div></div>',
                            });
                        }
                    }
                });
            }
        });
    }
}
$(document).ready(function () {
    getListaOrdenSalida();
});