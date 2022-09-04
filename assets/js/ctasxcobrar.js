function CerrarListaVenta() {
    $(".cerrar-nc").hide();
}
function setNuevoPago() {
    var html = '';
    html += '<div id="npg?1" class="cerrar-nc">';
    html += '<div class="note note-info">';
    html += '<div class="note-content">';
    html += '<form>';
    html += '<div class="form-group">';
    html += '<div class="row">';

    html += '<div style="color: white;" class="text-center">';
    html += '<h3>REGISTRO DE PAGO</h3>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Cliente:</b> </br>';
    html += '<input type="text" class="form-control" id="IdClient">';
    html += '<div id="alert-cli"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Nro Factura:</b> </br>';
    html += '<input type="hidden" class="form-control" id="IdCabVenta">';
    html += '<input type="text" class="form-control" id="IdNroFactura">';
    html += '<div id="alert-nrofac"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Valor:</b> </br>';
    html += '<input type="text" class="form-control" id="IdValor">';
    html += '<div id="alert-prec"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<br>';
    html += '<a class="btn btn-danger" onclick="CerrarListaVenta();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
    html += '&nbsp;<a class="btn btn-primary" title="Registrar Pago" onclick="getRegistrarPago();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Registrar</a>';
    html += '<div id="alert-prec"></div>';
    html += '</div>';
    html += '</div>';
    
    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#n-npago").html(html);
    $('.default-select2').select2();
}
function getListaVentas() {
    var html = '';
    html += '<div>';
    html += '<div style="overflow: scroll" class="cerrar-lventa">';
    html += '<table id="data-table-select" class="table table-striped table-bordered align-middle ">';
    html += '<div class="note note-blue">';
    html += '<thead>';
    html += '<tr>';
    html += '<th width="1%"></th>';
    html += '<th hidden class="text-nowrap"></th>';
    html += '<th class="text-nowrap">Fecha</th>';
    html += '<th class="text-nowrap">Secuencial</th>';
    html += '<th class="text-nowrap">Producto</th>';
    html += '<th class="text-nowrap">Cantidad</th>';
    html += '<th class="text-nowrap">PVP</th>';
    html += '<th class="text-nowrap">Acciones</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Venta&a=get_ventas',
        success: function (response) {
            if (response != '') {
                $.each(response, function (key, value) {
                    html += '<tr class="odd gradeX">';
                    html += '<td width="1%" class="fw-bold text-dark">' + value.id_detventa + '</td>';
                    html += '<td hidden>' + value.id_cabventa + '</td>';
                    html += '<td>' + value.freg + '</td>';
                    html += '<td>' + value.nro_factura + '</td>';
                    html += '<td>' + value.producto + '</td>';
                    html += '<td>' + value.cantidad + '</td>';
                    html += '<td>' + value.pvp + '</td>';
                    html += '<td>';
                    html += '<a href="#npg?1" class="btn btn-outline-green" onclick="getProcesarPago(' + value.id_cabventa + ');" title="Procesar Pago"><i class="fa-solid fa-dollar"></i></a>';
                    html += '</td>';
                    html += '</tr>';
                });
                html += '</tbody>';
                html += '</table>';
                html += '</div>';
                html += '</div>';
                $("#lista-ventas").html(html);
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
                $("#lista-ventas").html(html);
            }
        }
    });
}

function getProcesarPago(id_cabventa) {
    setNuevoPago();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Venta&a=get_sum_ventapago',
        data: "IdCabVenta=" + id_cabventa,
        success: function (response) {
            $.each(response, function (key, value) {
                $("#IdCabVenta").val(value.id_cabventa);
                $("#IdNroFactura").val(value.nro_factura);
                $("#IdClient").val(value.Cliente);
                $("#IdValor").val(value.Valor);
            });
        }
    });
}
function getRegistrarPago() {
    var html = '';
    if ($('#IdNroFactura').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-nrofac").html(html);
        $('#IdNroFactura').focus();
        setTimeout(function () {
            $("#alert-nrofac").fadeOut(1500);
        }, 3000);
        return false;
    } if ($('#IdValor').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-prec").html(html);
        $('#IdValor').focus();
        setTimeout(function () {
            $("#alert-prec").fadeOut(1500);
        }, 3000);
        return false;
    } else {
        var idcab = $("#IdCabVenta").val();
        var nfact = $("#IdNroFactura").val();
        var vr = $("#IdValor").val();
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
                    url: "index.php?c=Venta&a=save_new_pago",
                    data: "IdCabVenta=" + idcab +  "&NroFactura=" + nfact + "&Valor=" + vr,
                    success: function (response) {
                        response = JSON.stringify(response);
                        if (response == 1) {
                            Swal.fire({
                                html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
                            });
                            getListaVentas();
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
    getListaVentas();
});