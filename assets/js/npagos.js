function CerrarListaVenta() {
  $(".cerrar-nc").hide();
  getListaVentas();
}

function validarPrecio(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdValor").val().length < 1 || $("#IdValor").val() != "") {
    if (code == 8) {
      // backspace.
      return true;
    } else if ((code >= 48 && code <= 57) || code == 46) {
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
      $("#IdValor").focus();
      return false;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-prec").html(html);
      $("#alert-prec").fadeIn(1000);
      $("#IdValor").focus();
      return false;
    }
  } else {
    alert("else");
  }
}
function setNuevoPago() {
  var html = "";
  html += '<div id="npg?1" class="cerrar-nc">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div style="color: black;" class="text-center">';
  html += "<h3>* * * REGISTRO DE PAGOS * * *</h3>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Cliente:</b> </br>';
  html += '<input disabled type="text" class="form-control" id="IdClient">';
  html += '<div id="alert-cli"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Nro Factura:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdCabVenta">';
  html += '<input disabled type="text" class="form-control" id="IdNroFactura">';
  html += '<div id="alert-nrofac"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Valor:</b> </br>';
  html +=
    '<input onkeypress="return validarPrecio(event)" type="text" class="form-control" id="IdValor">';
  html += '<input type="hidden" class="form-control" id="IdValor_Temp">';
  html += '<div id="alert-prec"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += "<br>";
  html +=
    '<a class="btn btn-danger" onclick="CerrarListaVenta();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
  html +=
    '&nbsp;<a class="btn btn-primary" title="Registrar Pago" onclick="getRegistrarPago();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Registrar</a>';
  html += '<div id="alert-prec"></div>';
  html += "</div>";
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#n-npago").html(html);
  $(".default-select2").select2();
}
function getListaVentas() {
  var html = "";

  html += '<div class="cerrar-lventa">';
  html +=
    '<table id="data-table-select"  class="table table-striped table-bordered align-middle" style="width:100%">';
  html += '<div class="">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap"></th>';
  html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Nro. Factura</th>';
  html += '<th class="text-nowrap">Cliente</th>';
  //html += '<th class="text-nowrap">Producto</th>';
  //html += '<th class="text-nowrap">Cantidad</th>';
  //html += '<th class="text-nowrap">P.V.P.</th>';
  html += '<th class="text-nowrap">Subtotal</th>';
  html += '<th class="text-nowrap">I.V.A.</th>';

  html += '<th class="text-nowrap">Total</th>';
  html += '<th class="text-nowrap">Abonos</th>';
  html += '<th class="text-nowrap">Saldo</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ventapagos",
    success: function (response) {
      if (response != "") {
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';
          html +=
            '<td width="1%" class="fw-bold text-dark">' +
            value.id_detventa +
            "</td>";
          html += "<td>" + value.id_1 + "</td>";
          html += "<td>" + value.freg + "</td>";
          html += "<td>" + value.nro_factura + "</td>";
          html += "<td>" + value.razon_social + "</td>";
          html += "<td>" + "$ " + value.subtotal + "</td>";
          html += "<td>" + "$ " + value.iva + "</td>";
          html += "<td>" + "$ " + value.total + "</td>";
          html += "<td>" + "$ " + value.abonos + "</td>";
          html += "<td>" + "$ " + (value.total - value.abonos) + "</td>";
          html += "<td>";
          html +=
            '<a href="#npg?1" class="btn btn-outline-green" onclick="getProcesarPago(' +
            value.id_1 +
            ');" title="Procesar Pago"><i class="material-icons">price_check</i></a>';
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
          select: false,
          order: [[3, "asc"]],
          responsive: true,
        });
        dtb.column(0).visible(false);
        dtb.column(1).visible(false);
      } else {
        html = "";
        html +=
          '<div class="alert alert-success alert-dismissible fade show h-100 mb-0">';
        html +=
          '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
        html += "<b>* NO DISPONE DE FACTURAS PENDIENTES DE PAGO *</b>";
        html += "</div>";
        $("#lista-ventas").html(html);
      }
    },
  });
}

function getProcesarPago(id_cabventa) {
  setNuevoPago();
  $(".cerrar-lventa").hide();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_sum_ventapago",
    data: "IdCabVenta=" + id_cabventa,
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdCabVenta").val(value.id_1);
        $("#IdNroFactura").val(value.nro_factura);
        $("#IdClient").val(value.Cliente);
        $("#IdValor").val(value.Valor);
        $("#IdValor_Temp").val(value.Valor);
      });
    },
  });
}
function getRegistrarPago() {
  var html = "";
  if ($("#IdNroFactura").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-nrofac").html(html);
    $("#IdNroFactura").focus();
    setTimeout(function () {
      $("#alert-nrofac").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdValor").val() == "" || $("#IdValor").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-prec").html(html);
    $("#IdValor").focus();
    setTimeout(function () {
      $("#alert-prec").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdValor").val() > $("#IdValor_Temp").val()) {
    html += '<div class="alert alert-danger">';
    html += "Pagos no pueden exceder el valor de la factura";
    html += "</div>";
    $("#alert-prec").html(html);
    $("#IdValor").focus();
    setTimeout(function () {
      $("#alert-prec").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var idcab = $("#IdCabVenta").val();
    var nfact = $("#IdNroFactura").val();
    var vr = $("#IdValor").val();
    var vrtemp = $("#IdValor_Temp").val();
    Swal.fire({
      title: "CONFIRMACION!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (vr == vrtemp) {
          $.ajax({
            type: "GET",
            dataType: "json",
            url: "index.php?c=Venta&a=save_new_pago",
            data:
              "IdCabVenta=" + idcab + "&NroFactura=" + nfact + "&Valor=" + vr,
            success: function (response) {
              response = JSON.stringify(response);
              if (response == 1) {
                Swal.fire({
                  html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>PAGO REGISTRADO CORRECTAMENTE</b></div></div>',
                });
                $(".cerrar-nc").hide();
                getListaVentas();
              }
              if (response == 2) {
                Swal.fire({
                  html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ERROR AL REGISTRAR PAGO</b></div></div>',
                });
              }
            },
          });
        } else if (vr < vrtemp) {
          $.ajax({
            type: "GET",
            dataType: "json",
            url: "index.php?c=Venta&a=save_new_abono",
            data:
              "IdCabVenta=" + idcab + "&NroFactura=" + nfact + "&Valor=" + vr,
            success: function (response) {
              response = JSON.stringify(response);
              if (response == 1) {
                Swal.fire({
                  html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>PAGO REGISTRADO CORRECTAMENTE.</b></div></div>',
                });
                $(".cerrar-nc").hide();
                getListaVentas();
              }
              if (response == 2) {
                Swal.fire({
                  html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ERROR AL REGISTRAR PAGO</b></div></div>',
                });
              }
            },
          });
        }
      }
    });
  }
}
$(document).ready(function () {
  getListaVentas();
});
