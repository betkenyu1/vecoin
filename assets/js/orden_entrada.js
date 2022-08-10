function CerrarListaOrdenEntrada() {
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
    html += '<th class="text-nowrap">Secuencial</th>';
    html += '<th class="text-nowrap">Nro Factura</th>';
    html += '<th class="text-nowrap">Proveedor</th>';
    html += '<th class="text-nowrap">Estado</th>';
    html += '<th class="text-nowrap">Acciones</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=OrdenEntrada&a=get_ord_entrda',
        success: function (response) {
            $.each(response, function (key, value) {
                html += '<tr class="odd gradeX">';
                html += '<td width="1%" class="fw-bold text-dark">' + value.id_secuencial + '</td>';
                html += '<td>' + value.fecha + '</td>';
                html += '<td>' + value.secuencial + '</td>';
                html += '<td>' + value.nro_factura + '</td>';
                html += '<td>' + value.proveedor + '</td>';
                html += '<td>' + value.estado + '</td>';
                html += '<td>';
                html += '<a class="btn btn-outline-danger" onclick="getReporteOrdenEntrada(' + value.id_secuencial + ');" title="Reporte"><i class="fa-solid fa-file-pdf"></i></a>';
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
function CerrarNuevaOrdenEntrada() {
    $(".cerrar-noe").hide();
    getListaOrdenEntrada();
}
function LimpiarCampos(){
    getProductos();
    $("#IdCantidad").val('');
    $("#IdPrecio").val('');
    getUMedidas();
    getProveedor
}
function setNuevaOrdenEntrada() {
    CerrarListaOrdenEntrada();
    $(".cerrar-mp").hide();
    var html = '';
    html += '<div class="cerrar-noe">';
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
    html += '<div id="alert-freg"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Nro Factura:</b> </br>';
    html += '<input type="text" class="form-control" id="IdSecuencial">';
    html += '<input type="text" class="form-control" id="IdSecuencia">';
    html += '<input type="text" class="form-control" id="IdNroFactura">';
    html += '<div id="alert-nrofac"></div>';
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
    html += '<b style="color: #000000;">Proveedor:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdProveedor"></select>';
    html += '<div id="alert-prov"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">U.Medida:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdUMedida"></select>';
    html += '<div id="alert-prov"></div>';
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

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<br>';
    html += '<a class="btn btn-danger" onclick="CerrarNuevaOrdenEntrada();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
    html += '&nbsp;<a class="btn btn-primary" title="Agregar" onclick="getAgregarOrdenEntrada();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Agregar</a>';
    html += '&nbsp;<a class="btn btn-success" title="Cerrar" onclick="getCerrarOrdenEntrada();"><i class="fa-solid fa-save" aria-hidden="true"></i> Cerrar</a>';;
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
    $("#new-ord-entrada").html(html);
    $('.default-select2').select2();
    getSecuencial();
    getProductos();
    getUMedidas();
    getProveedor();
}
function getAgregarOrdenEntrada() {
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
    } if ($('#IdNroFactura').val() == "") {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-nrofac").html(html);
        $('#IdNroFactura').focus();
        setTimeout(function () {
            $("#alert-nrofac").fadeOut(1500);
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
    } if ($('#IdProveedor').val() == 0) {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-prov").html(html);
        $('#IdProveedor').focus();
        setTimeout(function () {
            $("#alert-prov").fadeOut(1500);
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
        var freg = $("#IdFecha").val();
        var idsc = $("#IdSecuencial").val();
        var idsecu = $("#IdSecuencia").val();
        var nrofac = $("#IdNroFactura").val();
        var prod = $("#IdProducto").val();
        var prov = $("#IdProveedor").val();
        var cant = $("#IdCantidad").val();
        var um = $("#IdUMedida").val();
        var prec = $("#IdPrecio").val();
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
                    url: "index.php?c=Inventario&a=save_new_orden_entrada",
                    data: "Fecha=" + freg + "&IdSecuencial=" + idsc + 
                    "&IdSecu=" + idsecu + "&NroFactura=" + nrofac + 
                    "&IdProducto=" + prod + "&IdProveedor=" + prov +
                    "&Cantidad=" + cant + "&IdUMedida=" + um + "&Precio=" + prec + "&Observacion=" + obs,
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
function getCerrarOrdenEntrada() {
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
                url: "index.php?c=Inventario&a=cerrar_orden_entrada",
                data: "IdSecuencial=" + ids + "&Secuencial=" + secu,
                success: function (response) {
                    if (response == 1) {
                        Swal.fire({
                            html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Cerrado OK!.</b></div></div>',
                        });
                        CerrarNuevaOrdenEntrada();
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