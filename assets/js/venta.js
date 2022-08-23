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

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Fecha:</b> </br>';
    html += '<input type="date" class="form-control" id="IdFecha">';
    html += '<input type="hidden" class="form-control" id="IdSecuenc">';
    html += '<div id="alert-freg"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Clientes:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdCliente"></select>';
    html += '<div id="alert-prov"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Nro Factura:</b> </br>';
    html += '<input type="hidden" class="form-control" id="IdSecuencial">';
    html += '<input type="hidden" class="form-control" id="IdSecuencia">';
    html += '<input type="text" class="form-control" id="IdNroFactura">';
    html += '<div id="alert-nrofac"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Productos:</b> </br>';
    html += '<input type="text" class="form-control" id="IdDetProducto">';
    html += '<div id="alert-cant"></div>';
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
    $("#p-osalida").html(html);
    $('.default-select2').select2();
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
                select: true,
                responsive: true
            });
        }
    });
}

function getProcesarOSalida(id_det_osalida){
    setNuevaVenta();
    getClientes();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Venta&a=get_iddet_osalida',
        data: "IdDetOSalida=" + id_det_osalida,
        success: function (response) {
            $.each(response, function (key, value) {
                $("#IdDetProducto").val(value.id_det_osalida);
                $("#IdDetProducto").val(value.producto);
                $("#IdCantidad").val(value.cantidad);
                $("#IdPrecio").val(value.pvp);
            });
        }
    });
}
$(document).ready(function () {
    getListaOrdenSalida();
});