function CerrarListaVenta() {
  $(".cerrar-nc").hide();

  getListaVentas();
}

function getListaVentas() {
  var html = "";

  html += "<div>";

  html += '<div class="cerrar-lventa">';

  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle " style="width:100%">';

  html += '<div class="note note-blue">';

  html += "<thead>";

  html += "<tr>";

  html += '<th width="1%"></th>';

  html += '<th class="text-nowrap">Fecha</th>';

  html += '<th class="text-nowrap">Nro. Factura</th>';

  html += '<th class="text-nowrap">Cliente</th>';

  html += '<th class="text-nowrap">Subtotal</th>';

  html += '<th class="text-nowrap">I.V.A.</th>';

  html += '<th class="text-nowrap">Total</th>';

  html += '<th class="text-nowrap">Acciones</th>';

  html += "</tr>";

  html += "</thead>";

  html += '<tbody style="background-color:#c1f8ff">';

  $.ajax({
    type: "GET",

    dataType: "json",

    url: "index.php?c=Venta&a=get_ventas",

    success: function (response) {
      if (response != "") {
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';

          html +=
            '<td width="1%" class="fw-bold text-dark">' +
            value.id_detventa +
            "</td>";

          html += "<td>" + value.fecha + "</td>";

          html += "<td>" + value.nro_factura + "</td>";

          html += "<td>" + value.razon_social + "</td>";

          html += "<td>" + "$ " + value.pvp + "</td>";

          html += "<td>" + "$ " + value.iva + "</td>";

          html += "<td>" + "$ " + value.total + "</td>";

          html += "<td>";

          html +=
            '<a href="#nc?1" class="btn btn-outline-red" onclick="getProcesarNCredito(' +
            value.id_detventa +
            ');" title="Procesar Nota de Crédito"><i class="material-icons">remove_shopping_cart</i></a>';

          html += "</td>";

          html += "</tr>";
        });

        html += "</tbody>";

        html += "</table>";

        html += "</div>";

        html += "</div>";

        $("#lista-ventas").html(html);

        var dtb = $("#data-table-select").DataTable({
          language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },

          order: [[2, "desc"]],

          select: false,

          responsive: true,
        });
        dtb.column(0).visible(false);
      } else {
        html = "";

        html +=
          '<div class="alert alert-success alert-dismissible fade show h-100 mb-0">';

        html +=
          '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';

        html += "<b>*NO DISPONE FACTURAS PARA GESTIONAR.</b>";

        html += "</div>";

        $("#lista-ventas").html(html);
      }
    },
  });
}

function setNuevaNCredito() {
  $(".cerrar-lventa").hide();

  var html = "";

  html += '<div id="nc?1" class="cerrar-nc">';

  html += '<div class="note note-info">';

  html += '<div class="note-content">';

  html += "<form>";

  html += '<div class="form-group">';

  html += '<div class="row">';

  html += '<div style="color: #000000;" class="text-center">';

  html += "<h3>* * * PROCESAR NOTA DE CRÉDITO * * *</h3>";

  html += "</div>";

  html += '<div class="col-md-6">';

  html += '<div class="mb-10px">';

  html += '<b style="color: #000000;">Fecha de nota de crédito:</b> </br>';

  html += '<input type="date" class="form-control" id="IdFecha">';

  html += '<div id="alert-freg"></div>';

  html += "</div>";

  html += "</div>";

  html += '<div class="col-md-6">';

  html += '<div class="mb-10px">';

  html += '<b style="color: #000000;">Cliente:</b> </br>';

  html +=
    '<select class="default-select2 form-control" name="IdCliente" id="IdCliente"></select>';

  html += '<div id="alert-cli"></div>';

  html += "</div>";

  html += "</div>";

  html += '<div class="col-md-6">';

  html += '<div class="mb-10px">';

  html += '<b style="color: #000000;">Número de Nota de Crédito:</b> </br>';

  html += '<input type="hidden" class="form-control" id="IdDetVenta">';

  html += '<input type="hidden" class="form-control" id="IdNroFactura">';
  html += '<input type="hidden" class="form-control" id="IdCabVenta">';
  html +=
    '<input type="text" class="form-control" placeholder="Ingrese secuencial de la nota de crédito (XXX-XXX-XXXXXXXX)" id="IdNroNCredito">';

  html += '<div id="alert-nrofac"></div>';

  html += "</div>";

  html += "</div>";

  html += '<div class="col-md-6">';

  html += '<div class="mb-10px">';

  //html += '<b style="color: #000000;">Productos:</b> </br>';

  html += '<input type="hidden" class="form-control" id="IdProducto">';

  html +=
    '<input type="hidden" class="form-control" disabled placeholder="Cargando..." id="IdDetProducto">';

  html += '<div id="alert-prod"></div>';

  html += "</div>";

  html += "</div>";

  html += '<div class="col-md-6">';

  html += '<div class="mb-10px">';

  //html += '<b style="color: #000000;">Cantidad:</b> </br>';

  html +=
    '<input type="hidden" disabled placeholder="Cargando..." class="form-control" id="IdCantidad">';

  html += '<div id="alert-cant"></div>';

  html += "</div>";

  html += "</div>";

  html += '<div class="col-md-6">';

  html += '<div class="mb-10px">';

  //html += '<b style="color: #000000;">Precio:</b> </br>';

  html +=
    '<input type="hidden" disabled placeholder="Cargando..." class="form-control" id="IdPrecio">';

  html += '<div id="alert-prec"></div>';

  html += "</div>";

  html += "</div>";

  html += "<div>";

  html += "<div>";

  html += "<br>";

  html += '<div class="text-center">';

  html +=
    '<a class="btn btn-danger" onclick="CerrarListaVenta();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';

  html +=
    '&nbsp;<a class="btn btn-primary" title="Agregar" onclick="getAgregarNCredito();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Agregar</a>';

  html += "</div>";

  html += "</div>";

  html += "</div>";

  html += "</div>";

  html += "</form>";

  html += "</div>";

  html += "</div>";

  html += "</div>";

  $("#n-ncredito").html(html);

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

function getProcesarNCredito(id_detventa) {
  setNuevaNCredito();
  getCliente();
  $.ajax({
    type: "GET",

    dataType: "json",

    url: "index.php?c=Venta&a=get_iddet_venta",

    data: "IdDetVenta=" + id_detventa,

    success: function (response) {
      $.each(response, function (key, value) {
        //$("#").val(value.id_cliente).trigger("change");

        $("#IdDetVenta").val(value.id_detventa);

        $("#IdProducto").val(value.id_producto);

        $("#IdDetProducto").val(value.producto);

        $("#IdNroFactura").val(value.nro_factura);

        $("#IdCantidad").val(value.cantidad);

        $("#IdPrecio").val(value.pvp);

        $("#IdCabVenta").val(value.id_cabventa);
      });
    },
  });
  if ($("#IdCliente").hasClass("select2-hidden-accessible")) {
    $.ajax({
      type: "GET",

      dataType: "json",

      url: "index.php?c=Venta&a=get_iddet_venta",

      data: "IdDetVenta=" + id_detventa,

      success: function (response) {
        $.each(response, function (key, value) {
          $("#IdCliente").val(value.id_cliente).trigger("change");
        });
      },
    });
  }
}

function getAgregarNCredito() {
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
    var iddet = $("#IdDetVenta").val();

    var idfreg = $("#IdFecha").val();

    var clien = $("#IdCliente").val();

    var nfact = $("#IdNroFactura").val();

    var ncredito = $("#IdNroNCredito").val();

    var prod = $("#IdProducto").val();

    var cant = $("#IdCantidad").val();

    var prec = $("#IdPrecio").val();
    var idcabv = $("#IdCabVenta").val();

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

          url: "index.php?c=Venta&a=save_new_ncredito",

          data:
            "Fecha=" +
            idfreg +
            "&IdDetVenta=" +
            iddet +
            "&IdCliente=" +
            clien +
            "&NroNCredito=" +
            ncredito +
            "&NroFactura=" +
            nfact +
            "&IdProducto=" +
            prod +
            "&Cantidad=" +
            cant +
            "&Precio=" +
            prec +
            "&IdCabVenta=" +
            idcabv,

          success: function (response) {
            response = JSON.stringify(response);

            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });

              $(".cerrar-lventa").hide();

              $(".cerrar-nc").hide();

              getListaVentas();
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
  getListaVentas();
});
