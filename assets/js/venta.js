function CerrarListaVenta() {
  $(".cerrar-vta").hide();
  $(".cerrar-vta-2").hide();
  getListaOrdenSalida();
}

function getListaOrdenSalida() {
  var html = "";
  html += "<div>";
  html += '<div style="overflow: scroll" class="cerrar-lp">';
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle ">';
  html += '<div class="">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Nro.Orden de Salida</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=idsecu_osalida",
    success: function (response) {
      if (response != "") {
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';
          html +=
            '<td width="1%" class="fw-bold text-dark">' +
            value.id_secuencial +
            "</td>";
          html += "<td>" + value.fecha + "</td>";
          html += "<td>" + value.secuencial + "</td>";
          html += "<td>";
          html +=
            '<a href="#pos?1" class="btn btn-outline-orange" onclick="getProcesarOSalidaFactura(' +
            value.id_secuencial +
            ');" title="Procesar Orden de Salida"><i class="material-icons">add_shopping_cart</i></a>';
          html += "</td>";
          html += "</tr>";
        });
        html += "</tbody>";
        html += "</table>";
        html += "</div>";
        html += "</div>";
        $("#lista-ord_salida").html(html);
        $("#data-table-select").DataTable({
          language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
          order: [[2, "desc"]],
          select: false,
          responsive: true,
        });
      } else {
        html = "";
        html +=
          '<div class="alert alert-success alert-dismissible fade show h-100 mb-0">';
        html +=
          '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
        html += "<b>*NO DISPONE DE ORDENES DE SALIDA POR GESTIONAR.</b>";
        html += "</div>";
        $("#lista-ord_salida").html(html);
      }
    },
  });
}

function setNuevaFactura() {
  var html = "";
  html += '<div id="ps?2" class="cerrar-vta-2">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += '<form style="overflow: scroll" >';
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div style="color: #000000;" class="text-center">';
  html += "<h3>* * * * PROCESAR FACTURA * * *</h3>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Fecha de factura:</b> </br>';
  html += '<input type="date" class="form-control"  id="IdFecha">';
  html += '<div id="alert-freg"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Cliente:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdCliente"></select>';
  html += '<div id="alert-cli"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Número de Factura:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdDetPSalida">';
  html +=
    '<input type="text" placeholder="Ingrese secuencial de la factura (XXX-XXX-XXXXXXXX)" class="form-control" id="IdNroFactura">';
  html += '<div id="alert-nrofac"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Producto:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdProducto">';
  html +=
    '<input type="text" disabled placeholder="Cargando..." class="form-control" id="IdDetProducto">';
  html += '<div id="alert-prod"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Cantidad:</b> </br>';
  html +=
    '<input type="text" disabled class="form-control" placeholder="Cargando..." id="IdCantidad">';
  html += '<div id="alert-cant"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">P.V.P.:</b> </br>';
  html +=
    '<input type="text" disabled class="form-control" placeholder="Cargando..." id="IdPrecio">';
  html += '<div id="alert-prec"></div>';
  html += "</div>";
  html += "</div>";

  /****************************** */
  html += "<div>";
  html +=
    '<table id="data-table-select-2" class="table table-striped table-bordered align-middle ">';
  html += "<div>";
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Nro.Orden de Salida</th>';
  html += '<th class="text-nowrap">Producto</th>';
  html += '<th class="text-nowrap">U.Medida</th>';
  html += '<th class="text-nowrap">Bodega</th>';
  html += '<th class="text-nowrap">Cantidad</th>';
  html += '<th class="text-nowrap">P.V.P.</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json", //OS.id_cabsalida,OS.id_secuencial,DATE_FORMAT(OS.fecha_osalida ,'%d-%m-%Y')AS fecha,OS.secuencial
    url: "index.php?c=Venta&a=idsecu_osalida",
    success: function (response) {
      if (response != "") {
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';
          html +=
            '<td width="1%" class="fw-bold text-dark">' +
            value.id_secuencial +
            "</td>";
          html += "<td>" + value.fecha + "</td>";
          html += "<td>" + value.secuencial + "</td>";
          html += "<td>";
          //html += '<a href="#ps?2" class="btn btn-outline-orange" onclick="getProcesarOSalidaFactura(' + value.id_secuencial + ');" title="Procesar Factura"><i class="material-icons">add_shopping_cart</i></a>';
          html += "</td>";
          html += "</tr>";
        });
        html += "</tbody>";
        html += "</table>";
        html += "</div>";
        html += "</div>";
        $("#lista-cab-fact").html(html);
        $("#data-table-select-2").DataTable({
          language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
          order: [[2, "desc"]],
          select: false,
          responsive: true,
        });
      }
    },
  });
  /****************************** */

  html += "<div>";
  html += "<br>";
  html += '<div class="text-center">';
  html +=
    '<a class="btn btn-danger" onclick="CerrarListaVenta();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
  html +=
    '&nbsp;<a class="btn btn-primary" title="Agregar" onclick="getAgregarVenta();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Agregar</a>';
  html += "</div>";
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#n-venta").html(html);
  $(".default-select2").select2({
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
}

function getUltimaFactura() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ultima_factura",
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdNroFactura").val(value.id_ultima_factura);
      });
    },
  });
}

function getAgregarVenta() {
  var html = "";
  if ($("#IdFecha").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-freg").html(html);
    $("#IdFecha").focus();
    setTimeout(function () {
      $("#alert-freg").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdCliente").val() == "0") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cli").html(html);
    $("#IdCliente").focus();
    setTimeout(function () {
      $("#alert-cli").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdNroFactura").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nrofac").html(html);
    $("#IdNroFactura").focus();
    setTimeout(function () {
      $("#alert-nrofac").fadeOut(1500);
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
          type: "GET",
          dataType: "json",
          url: "index.php?c=Venta&a=save_new_venta",
          data:
            "Fecha=" +
            idfreg +
            "&IdDetPSalida=" +
            iddet +
            "&IdCliente=" +
            clien +
            "&NroFactura=" +
            nfact +
            "&IdProducto=" +
            prod +
            "&Cantidad=" +
            cant +
            "&Precio=" +
            prec,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });
              $(".cerrar-vta").hide();
              getListaOrdenSalida();
            }
            if (response == 2) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>REGISTRO INCORRECTO</b></div></div>',
              });
            }
          },
        });
      }
    });
  }
}

function getProcesarOSalidaFactura(id_secuencial) {
  var html = "";
  $(".cerrar-lp").hide();

  html += '<div class="form-group">';
  html += '<div id="pos?1" class="cerrar-vta-2">';
  html += '<div style="color: #000000;" class="text-center">';
  html += "<h3>* * * * PROCESAR FACTURA * * *</h3>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Fecha de factura:</b> </br>';
  html += '<input type="date" class="form-control"  id="IdFecha">';
  html += '<div id="alert-freg"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Clientes:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdCliente"></select>';
  html += '<div id="alert-cli"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Número de Factura:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdDetPSalida">';
  html +=
    '<input type="text" placeholder="Ingrese secuencial de la factura (XXX-XXX-XXXXXXXX)" class="form-control" id="IdNroFactura">';
  html += '<div id="alert-nrofac"></div>';
  html += "</div>";
  html += "</div>";
  html += "<div>";
  html +=
    '<table id="data-table-select2" class="table table-editable table-striped table-bordered align-middle ">';
  html += "<div>";
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Nro.Orden de Salida</th>';
  html += '<th class="text-nowrap">Producto</th>';
  html += '<th class="text-nowrap">U.Medida</th>';
  html += '<th class="text-nowrap">Bodega</th>';
  html += '<th class="text-nowrap">Cantidad</th>';
  html += '<th class="text-nowrap">P.V.P.</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=idsecu_osalida2",
    data: "IdSecuencial=" + id_secuencial,
    success: function (response) {
      if (response) {
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';
          html +=
            '<td width="1%" class="fw-bold text-dark">' +
            value.id_det_osalida +
            "</td>";
          html += "<td >" + value.fecha + "</td>";
          html += "<td>" + value.secuencial + "</td>";
          html += "<td>" + value.producto + "</td>";
          html += "<td>" + value.umedida + "</td>";
          html += "<td>" + value.bodega + "</td>";
          html += "<td>" + value.cantidad + "</td>";
          html += "<td  contenteditable='true'>" + "$ " + value.pvp + "</td>";
          html += "<td>";
          html +=
            '<a class="btn btn-outline-orange" onclick="ProcesarFacturaVenta(' +
            value.id_det_osalida +
            ');" title="Procesar Factura"><i class="material-icons">add_shopping_cart</i></a>';
          html += "</td>";
          html += "</tr>";
        });
        html += "</tbody>";
        html += "</table>";
        html += "<br>";
        html += '<div class="text-center">';
        html +=
          '<a class="btn btn-danger" onclick="CerrarListaVenta();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";

        $("#lista-osfact").html(html);
        $("#data-table-select2").DataTable({
          language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
          order: [[2, "desc"]],
          select: false,
          responsive: true,
        });
      } else {
        html = "";
        html +=
          '<div class="alert alert-success alert-dismissible fade show h-100 mb-0">';
        html +=
          '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
        html += "<b>*NO DISPONE DE ORDENES DE SALIDA POR GESTIONAR.</b>";
        html += "</div>";
        $("#lista-osfact").html(html);
      }
    },
  });
  getCliente();
}
function ProcesarFacturaVenta(id_det_osalida) {
  $("#IdDetalleOS").val(id_det_osalida);
  $("#IdFacturaNroModal").val($("#IdNroFactura").val());
  $("#IdClienteModal").val($("#IdCliente").val());
  $("#IdFechaModal").val($("#IdFecha").val());

  $("#modal-factura").modal("show");
  //getCliente();
}
function getProcesarOSalida(id_det_osalida) {
  $(".cerrar-lp").hide();
  getCliente();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_iddet_osalida",
    data: "IdDetOSalida=" + id_det_osalida,
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdDetPSalida").val(value.id_det_osalida);
        $("#IdProducto").val(value.id_producto);
        $("#IdDetProducto").val(value.producto);
        $("#IdCantidad").val(value.cantidad);
        $("#IdPrecio").val(value.pvp);
      });
    },
  });
}

function getUltimaFactura() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ultima_factura",
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdNroFactura").val(value.id_ultima_factura);
      });
    },
  });
}

function getAgregarVenta() {
  var html = "";
  if ($("#IdFecha").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-freg").html(html);
    $("#IdFecha").focus();
    setTimeout(function () {
      $("#alert-freg").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdCliente").val() == "0") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cli").html(html);
    $("#IdCliente").focus();
    setTimeout(function () {
      $("#alert-cli").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdNroFactura").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nrofac").html(html);
    $("#IdNroFactura").focus();
    setTimeout(function () {
      $("#alert-nrofac").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdDetProducto").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-prod").html(html);
    $("#IdDetProducto").focus();
    setTimeout(function () {
      $("#alert-prod").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdCantidad").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cant").html(html);
    $("#IdCantidad").focus();
    setTimeout(function () {
      $("#alert-cant").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdPrecio").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-prec").html(html);
    $("#IdPrecio").focus();
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
          type: "GET",
          dataType: "json",
          url: "index.php?c=Venta&a=save_new_venta",
          data:
            "Fecha=" +
            idfreg +
            "&IdDetPSalida=" +
            iddet +
            "&IdCliente=" +
            clien +
            "&NroFactura=" +
            nfact +
            "&IdProducto=" +
            prod +
            "&Cantidad=" +
            cant +
            "&Precio=" +
            prec,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });
              $(".cerrar-vta").hide();
              getListaOrdenSalida();
            }
            if (response == 2) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>REGISTRO INCORRECTO</b></div></div>',
              });
            }
          },
        });
      }
    });
  }
}
$(document).ready(function () {
  getListaOrdenSalida();
});
