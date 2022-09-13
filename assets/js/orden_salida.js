/****************VALIDACIONES************* */
function validarPrecio(evt) {
    var code = evt.which ? evt.which : evt.keyCode;
    if (
        $("#IdPVP").val().length < 1 ||
        $("#IdPVP").val() != ""
    ) {
        if (code == 8) {
            // backspace.
            return true;
        } else if (code >= 48 && code <= 57 || code == 46) {
            // is a number.
            setTimeout(function () {
                $("#alert-prec").fadeOut(500);
            }, 0);
            return true;
        } else if (code == 44) {
            var html = "";
            html += '<div class="alert alert-danger">';
            html += "*Use el (.) como separador de decimales.";
            html += "</div>";
            $("#alert-prec").html(html);
            $("#alert-prec").fadeIn(1000);
            $("#IdPVP").focus();
            return false;
        } else {
            // other keys.
            var html = "";
            html += '<div class="alert alert-danger">';
            html += "*Ingrese solo dígitos del [0] al [9]";
            html += "</div>";
            $("#alert-prec").html(html);
            $("#alert-prec").fadeIn(1000);
            $("#IdPVP").focus();
            return false;
        }
    } else {
        alert("else");
    }
}

function validarEnteros(evt) {
    var code = evt.which ? evt.which : evt.keyCode;

    if (
        $("#IdCantidad").val().length < 1 ||
        $("#IdCantidad").val() != ""
    ) {
        if (code == 8) {
            // backspace.
            return true;
        } else if (code >= 48 && code <= 57) {
            // is a number.
            setTimeout(function () {
                $("#alert-cant").fadeOut(500);
            }, 0);
            return true;
        } else {
            // other keys.
            var html = "";
            html += '<div class="alert alert-danger">';
            html += "*Ingrese solo dígitos del [0] al [9]";
            html += "</div>";
            $("#alert-cant").html(html);
            $("#alert-cant").fadeIn(1000);
            $("#IdCantidad").focus();
            return false;
        }
    } else {
        alert("else");
    }
}
/********************FIN VALIDACIONES******************** */

function CerrarListaOrdenSalida() {
    $(".cerrar-lp").hide();
}
function getListaOrdenSalida() {
    var html = '';
    html += '<div style="overflow: scroll" class="cerrar-lp">';
    html += '<div class="">';
    html += '<div class="note-content">';
    html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
    html += '<thead>';
    html += '<tr>';
    html += '<th width="1%"></th>';
    html += '<th class="text-nowrap">Fecha</th>';
    html += '<th class="text-nowrap">Secuencial</th>';
    html += '<th class="text-nowrap">Monto</th>';
    html += '<th class="text-nowrap">Usuario Creador</th>';
    html += '<th class="text-nowrap">Observación</th>';
    //html += '<th class="text-nowrap">Estado</th>';
    html += '<th class="text-nowrap">Acciones</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody style="background-color:#c1f8ff">';
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Inventario&a=get_ord_salida',
        success: function (response) {
            $.each(response, function (key, value) {
                html += '<tr class="odd gradeX">';
                html += '<td width="1%" class="fw-bold text-dark">' + value.id_secuencial + '</td>';
                html += '<td>' + value.fecha + '</td>';
                html += '<td>' + value.secuencial + '</td>';
                html += '<td>' + '$ ' + value.monto + '</td>';
                html += '<td>' + value.usuario + '</td>';
                html += '<td>' + value.observacion + '</td>';
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
                "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json" },
                order: [[0, 'desc']],
                select: false,
                responsive: true,
            });
        }
    });
}
function getProductosActivosxEmpresa() {
    $("#IdProducto").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Inventario&a=get_productos_activos_x_empresa",
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
function LimpiarCampos() {
    getProductosActivosxEmpresa();
    //getCliente();
    $("#IdCantidad").val('');
    $("#IdPrecio").val('');
    $("#IdExistencia").val('');
    $("#IdPVP").val('');
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
    html += '<p class="text-center h3">';
    html += '<b style="color: #000000;" id=IdSecu></b> </br>';
    html += '</p>'
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Fecha:</b> </br>';
    html += '<input type="date" class="form-control" id="IdFecha">';
    html += '<input type="hidden" class="form-control" id="IdSecuenc">';
    html += '<input type="hidden" class="form-control" id="IdSecuencial">';
    html += '<input type="hidden" class="form-control" id="IdSecuencia">';
    html += '<div id="alert-freg"></div>';
    html += '</div>';
    html += '</div>';

    /*html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Perchas:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdPercha"></select>';
    html += '<div id="alert-ph"></div>';
    html += '</div>';
    html += '</div>';*/

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Productos:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdProducto"></select>';
    html += '<div id="alert-prod"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Unidad de Medida:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdUMedida"></select>';
    html += '<div id="alert-umed"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Unidades Disponibles:</b> </br>';
    html += '<input type="text" disabled class="form-control" placeholder="Unidades Disponibles de Producto" id="IdExistencia">';
    html += '<div id="alert-exist"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">P.V.P.:</b> </br>';
    html += '<input type="text" onkeypress="return validarPrecio(event)" placeholder ="Precio de Venta al Público" class="form-control" id="IdPVP">';
    html += '<div id="alert-prec"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Cantidad a Despachar:</b> </br>';
    html += '<input type="text" class="form-control" onkeypress="return validarEnteros(event)" placeholder="Cantidad a despachar" id="IdCantidad">';
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
    html += '<b style="color: #000000;">Observación (Campo Opcional):</b> </br>';
    html += '<textarea type="text" row="3" class="form-control" placeholder="En este recuadro puede escribir un comentario respecto a la órden de salida que se va a generar." id="IdObs"></textarea>';
    html += '<div id="alert-obs"></div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#new-ord-salida").html(html);
    $('.default-select2').select2({
        placeholder: "Cargando datos...",
        selectOnClose: "false",
        language: {
            noResults: function () {
                //VACIO
                return "No hay registros";
            },
            searching: function () {
                return "Buscando..";
            },
        },
    });
    getSecuencialOrdenSalida();
    getProductosActivosxEmpresa();
    getUMedidas();
    //getPerchas();
}
$(document).on('change', '#IdProducto', function () {
    var html = '';
    if ($('#IdProducto').val() == 0) {
        html += '<div class="alert alert-danger">';
        html += 'SELECCIONE EL PRODUCTO';
        html += '</div>';
        $("#alert-prod").html(html);
        $('#IdProducto').focus();
        setTimeout(function () {
            $("#alert-prod").fadeOut(1500);
        }, 3000);
        return false;
    } else {
        $('#IdExistencia').val(' ')
        $('#IdCantidad').val(0)
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
    if ($("#IdFecha").val() == '') {
        html += '<div class="alert alert-danger">';
        html += "*Campo requerido";
        html += "</div>";
        $("#alert-freg").html(html);
        $("#alert-freg").fadeIn(500);
        $("#IdFecha").focus();
        return false;
    } else {
        setTimeout(function () {
            $("#alert-freg").fadeOut(500);
        }, 0);
    }

    if ($("#IdProducto").val() == 0) {
        html += '<div class="alert alert-danger">';
        html += "*Campo requerido";
        html += "</div>";
        $("#alert-prod").html(html);
        $("#alert-prod").fadeIn(500);
        $("#IdProducto").focus();
        return false;
    } else {
        setTimeout(function () {
            $("#alert-prod").fadeOut(500);
        }, 0);
    }


    if ($("#IdUMedida").val() == 0) {
        html += '<div class="alert alert-danger">';
        html += "*Campo requerido";
        html += "</div>";
        $("#alert-umed").html(html);
        $("#alert-umed").fadeIn(500);
        $("#IdUMedida").focus();
        return false;
    } else {
        setTimeout(function () {
            $("#alert-umed").fadeOut(500);
        }, 0);
    }
    /*************************acaaa******************** */
    function validarDisponibilidad($solicito, $tengo) {
        if (parseInt($solicito == '0')) {
            //alert($solicito + ' 0 ' + $tengo);
            return false;
        } else if (parseInt($solicito) == parseInt($tengo)) {
            //alert(parseInt($solicito) + ' == ' + parseInt($tengo));
            return true;
        } else if (parseInt($solicito) < parseInt($tengo)) {
            //alert($solicito + ' < ' + $tengo);
            return true;
        } else if (parseInt($solicito) > parseInt($tengo)) {
            //alert($solicito + ' > ' + $tengo);
            return false;
        }

    }

    var RE = /^\d*(\.\d{1})?\d{0,1}$/;
    if ($("#IdCantidad").val() == "" || $("#IdCantidad").val() == 0) {
        html += '<div class="alert alert-danger">';
        html += "*Campo requerido";
        html += "</div>";
        $("#alert-cant").html(html);
        $("#alert-cant").fadeIn(500);
        $("#IdCantidad").focus();
        return false;
    } else if (validarDisponibilidad($("#IdCantidad").val(), $("#IdExistencia").val()) == false) {
        html += '<div class="alert alert-danger">';
        html += "*Las cantidades a despachar no pueden superar a las existencias.";
        html += "</div>";
        $("#alert-cant").html(html);
        $("#alert-cant").fadeIn(500);
        $("#IdCantidad").focus();
        return false;
    } else {
        setTimeout(function () {
            $("#alert-cant").fadeOut(500);
        }, 0);
    }

    if ($("#IdPVP").val() == "") {
        html += '<div class="alert alert-danger">';
        html += "*Campo requerido";
        html += "</div>";
        $("#alert-prec").html(html);
        $("#alert-prec").fadeIn(500);
        $("#IdPVP").focus();
        return false;
    } else if (RE.test($("#IdPVP").val()) == false) {
        html += '<div class="alert alert-danger">';
        html += "*Verificar valor";
        html += "</div>";
        $("#alert-prec").html(html);
        $("#alert-prec").fadeIn(500);
        $("#IdPVP").focus();
        return false;
    } else {
        setTimeout(function () {
            $("#alert-prec").fadeOut(500);
        }, 0);
    }



    if (
        $("#IdFecha").val() != 0 &&
        $("#IdSecuencial").val() != 0 &&
        $("#IdSecuencia").val() != 0 &&
        $("#IdProducto").val() != 0 &&
        $("#IdUMedida").val() != 0 &&
        $("#IdCantidad").val() != "" &&
        $("#IdPVP").val() != ""
    ) {

        var freg = $("#IdFecha").val();
        var idsc = $("#IdSecuencial").val();
        var idsecu = $("#IdSecuencia").val();
        var ph = 1; //NO SE CONTROLA PERCHAS (FUNCIONALIDAD A FUTURO)
        var prod = $("#IdProducto").val();
        var um = $("#IdUMedida").val();
        var cant = $("#IdCantidad").val();
        var prec = $("#IdPVP").val();
        if ($("#IdObs").val().trim() == '')
            var obs = 'Sin novedades';
        else
            var obs = $("#IdObs").val();
        Swal.fire({
            title: "¡ATENCIÓN CONFIRMAR REGISTRO!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Confirmar",
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
                                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
                            });
                            LimpiarCampos();
                        } if (response == 2) {
                            Swal.fire({
                                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>REGISTRO INCORRECTO</b></div></div>',
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
    Swal.fire({
        title: "¿ATENCÍON DESEA CERRAR ÓRDEN DE SALIDA?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Confirmar",
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
                            html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ÓRDEN CERRADA CON ÉXITO</b></div></div>',
                        });
                        CerrarNuevaOrdenSalida();
                    } if (response == 2) {
                        Swal.fire({
                            html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>NO SE HA PODIDO CERRAR LA ÓRDEN DE SALIDA</b></div></div>',
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