/****************VALIDACIONES************* */

function validarFactura(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdNroFactura").val().length < 1 || $("#IdNroFactura").val() != "") {
    if (code == 8) {
      // backspace.
      return true;
    } else if ((code >= 48 && code <= 57) || code == 45) {
      // is a number.
      setTimeout(function () {
        $("#alert-nrofac").fadeOut(500);
      }, 0);
      return true;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html +=
        "*Ingrese solo dígitos del [0] al [9] | *Utilice como separador el (-)";
      html += "</div>";
      $("#alert-nrofac").html(html);
      $("#alert-nrofac").fadeIn(1000);
      $("#IdNroFactura").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarCosto(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdPrecio").val().length < 1 || $("#IdPrecio").val() != "") {
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
      $("#IdPrecio").focus();
      return false;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-prec").html(html);
      $("#alert-prec").fadeIn(1000);
      $("#IdPrecio").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarEnteros(evt) {
  var code = evt.which ? evt.which : evt.keyCode;

  if ($("#IdCantidad").val().length < 1 || $("#IdCantidad").val() != "") {
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

function CerrarListaOrdenEntrada() {
  $(".cerrar-lp").hide();
}
function getListaOrdenEntrada() {
  var html = "";
  html += '<div style="overflow: scroll" class="cerrar-lp">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Secuencial</th>';
  html += '<th class="text-nowrap">Nro. Factura</th>';
  html += '<th class="text-nowrap">Proveedor</th>';
  html += '<th class="text-nowrap">Monto</th>';
  html += '<th class="text-nowrap">Usuario Creador</th>';
  html += '<th class="text-nowrap">Observación</th>';

  //html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Inventario&a=get_ord_entrda",
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html +=
          '<td width="1%" class="fw-bold text-dark">' +
          value.id_secuencial +
          "</td>";
        html += "<td>" + value.fecha + "</td>";
        html += "<td>" + value.secuencial + "</td>";
        html += "<td>" + value.nro_factura + "</td>";
        html += "<td>" + value.proveedor + "</td>";
        html += "<td>" + "$ " + value.monto + "</td>";
        html += "<td>" + value.creador + "</td>";
        html += "<td>" + value.observacion + "</td>";
        //html += '<td>' + value.estado + '</td>';
        html += "<td>";
        html +=
          '<a class="btn btn-outline-danger" onclick="getReporteOrdenEntrada(' +
          value.id_secuencial +
          ');" title="Reporte"><i class="fa-solid fa-file-pdf"></i></a>';
        html += "</td>";
        html += "</tr>";
      });
      html += "</tbody>";
      html += "</table>";
      html += "</div>";
      html += "</div>";
      html += "</div>";
      $("#lista-ord_entrada").html(html);
      $("#data-table-select").DataTable({
        language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
        order: [[0, "desc"]],
        select: false,
        responsive: true,
      });
    },
  });
}
function getProductos() {
  $("#IdProducto").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Inventario&a=get_productos",
    success: function (response) {
      var $select = $("#IdProducto");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" +
          value.id_producto +
          ">" +
          value.producto +
          "</option>"
        );
      });
    },
  });
}
function getProductosActivosxEmpresa() {
  $("#IdProducto").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Inventario&a=get_productos_activos_x_empresa",
    success: function (response) {
      var $select = $("#IdProducto");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" +
          value.id_producto +
          ">" +
          value.producto +
          "</option>"
        );
      });
    },
  });
}

function CerrarNuevaOrdenEntrada() {
  $(".cerrar-noe").hide();
  $(".cerrar-litems").hide();
  getListaOrdenEntrada();
}
function LimpiarCampos() {
  getProductosActivosxEmpresa();
  $("#IdCantidad").val("");
  $("#IdPrecio").val("");
  getUMedidas();
  getProveedorActivo();
}
function setNuevaOrdenEntrada() {
  CerrarListaOrdenEntrada();
  $(".cerrar-mp").hide();
  var html = "";

  html += '<div class="cerrar-noe">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += "<div>";
  html += '<p class="text-center h3">';
  html += '<b style="color: #000000;" id=IdSecu></b> </br>';
  html += "</p>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Fecha:</b> </br>';
  html += '<input type="date" class="form-control" id="IdFecha">';
  html += '<input type="hidden" class="form-control" id="IdSecuenc">';
  html += '<div id="alert-freg"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Número Factura:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdSecuencial">';
  html += '<input type="hidden" class="form-control" id="IdSecuencia">';
  html +=
    '<input type="text" onkeypress="return validarFactura(event)" placeholder="Ingrese Número de Factura" class="form-control" id="IdNroFactura">';
  html += '<div id="alert-nrofac"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Productos:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdProducto"></select>';
  html += '<div id="alert-prod"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Proveedor:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdProveedor"></select>';
  html += '<div id="alert-prov"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Unidad de Medida:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdUMedida"></select>';
  html += '<div id="alert-umed"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Cantidad a Ingresar:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarEnteros(event)" placeholder="Ingrese Cantidad" class="form-control" id="IdCantidad">';
  html += '<div id="alert-cant"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Costo Unitario:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarCosto(event)" placeholder="Ingrese Costo Unitario"class="form-control" id="IdPrecio">';
  html += '<div id="alert-prec"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += "<br>";
  html +=
    '<a class="btn btn-danger" onclick="CerrarNuevaOrdenEntrada();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
  html +=
    '&nbsp;<a class="btn btn-primary" title="Agregar" onclick="getAgregarOrdenEntrada();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Agregar</a>';
  html +=
    '&nbsp;<a class="btn btn-success" title="Cerrar" onclick="getCerrarOrdenEntrada();"><i class="fa-solid fa-save" aria-hidden="true"></i> Cerrar</a>';
  html += "</div>";
  html += "</div>";

  html += "<div>";
  html += '<b style="color: #000000;">Observación (Campo Opcional):</b> </br>';
  html +=
    '<textarea type="text" row="3" class="form-control" placeholder="En este recuadro puede escribir un comentario respecto a la orden de entrada que se va a generar." id="IdObs"></textarea>';
  html += '<div id="alert-obs"></div>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";

  //$("#new-ord-entrada").html(html);

  /***************** */
  html += '<div class="cerrar-litems">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html +=
    '<table id="data-table-select-2" class="table table-striped table-bordered align-middle">';

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Inventario&a=get_det_ord_entrda",
    success: function (response) {
      if (response != "") {
        html += "<thead>";
        html += "<tr>";
        html += '<th width="1%"></th>';
        html += '<th class="text-nowrap">Fecha</th>';
        html += '<th class="text-nowrap">Secuencial</th>';
        html += '<th class="text-nowrap">Nro. Factura</th>';
        html += '<th class="text-nowrap">Proveedor</th>';
        html += '<th class="text-nowrap">Proveedor</th>';
        html += '<th class="text-nowrap">Producto</th>';
        html += '<th class="text-nowrap">Producto</th>';
        html += '<th class="text-nowrap">U. Medida</th>';
        html += '<th class="text-nowrap">U. Medida</th>';
        html += '<th class="text-nowrap">Cantidad</th>';
        html += '<th class="text-nowrap">Precio</th>';
        html += "</tr>";
        html += "</thead>";
        html += '<tbody style="background-color:#c1f8ff">';
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';
          html +=
            '<td width="1%" class="fw-bold text-dark">' +
            value.id_det_oentrada +
            "</td>";
          html += "<td>" + value.fecha + "</td>";
          html += "<td>" + value.id_secuencial + "</td>";
          html += "<td>" + value.nro_factura + "</td>";
          html += "<td>" + value.id_proveedor + "</td>";
          html += "<td>" + value.proveedor + "</td>";
          html += "<td>" + value.id_producto + "</td>";
          html += "<td>" + value.producto + "</td>";
          html += "<td>" + value.id_umedida + "</td>";
          html += "<td>" + value.umedida + "</td>";
          html += "<td>" + value.cantidad + "</td>";
          html += "<td>" + "$ " + value.precio + "</td>";
          html += "</tr>";
        });
        html += "</tbody>";
        html += "</table>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        $("#lista-items").html(html);
        $("#data-table-select-2").DataTable({
          language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
          order: [[1, "desc"]],
          select: false,
          responsive: true,
        });
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
        alert('if' + $("#IdSecu").val());
      } else {
        $.each(response, function (key, value) {
          html += "<thead>";
          html += "<tr>";
          html += '<th width="1%">* NO DISPONE DE ITEMS EN LA ORDEN DE ENTRADA *</th>';
          html += "</thead>";
        });
        html += "</table>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        $("#lista-items").html(html);
        $("#data-table-select-2").DataTable({
          language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
          order: [[1, "desc"]],
          select: false,
          responsive: true,
        });
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
    },
  });

  /*********** */
  getSecuencial();
  getProductosActivosxEmpresa();
  getUMedidas();
  getProveedorActivo();
}
function getAgregarOrdenEntrada() {
  var html = "";
  if ($("#IdFecha").val() == "") {
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
  var RE = /^\d*(\.\d{1})?\d{0,1}$/;
  if ($("#IdNroFactura").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nrofac").html(html);
    $("#alert-nrofac").fadeIn(500);
    $("#IdNroFactura").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-nrofac").fadeOut(500);
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

  if ($("#IdProveedor").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-prov").html(html);
    $("#alert-prov").fadeIn(500);
    $("#IdProveedor").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-prov").fadeOut(500);
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

  var RE = /^\d*(\.\d{1})?\d{0,1}$/;
  if ($("#IdCantidad").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cant").html(html);
    $("#alert-cant").fadeIn(500);
    $("#IdCantidad").focus();
    return false;
  } else if (RE.test($("#IdCantidad").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Verificar valor";
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

  if ($("#IdPrecio").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-prec").html(html);
    $("#alert-prec").fadeIn(500);
    $("#IdPrecio").focus();
    return false;
  } else if (RE.test($("#IdPrecio").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Verificar valor";
    html += "</div>";
    $("#alert-prec").html(html);
    $("#alert-prec").fadeIn(500);
    $("#IdPrecio").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-prec").fadeOut(500);
    }, 0);
  }

  if ($("#IdObs").val().trim().length == 0)
    var obs = $("#IdObs").val("Sin novedades");

  if (
    $("#IdFecha").val() != 0 &&
    $("#IdSecuencial").val() != 0 &&
    $("#IdSecuencia").val() != 0 &&
    $("#IdNroFactura").val() != "" &&
    $("#IdProducto").val() != 0 &&
    $("#IdProveedor").val() != 0 &&
    $("#IdUMedida").val() != 0 &&
    $("#IdCantidad").val() != "" &&
    $("#IdPrecio").val() != ""
  ) {
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
          dataType: "json",
          url: "index.php?c=Inventario&a=save_new_orden_entrada",
          data:
            "Fecha=" +
            freg +
            "&IdSecuencial=" +
            idsc +
            "&IdSecu=" +
            idsecu +
            "&NroFactura=" +
            nrofac +
            "&IdProducto=" +
            prod +
            "&IdProveedor=" +
            prov +
            "&Cantidad=" +
            cant +
            "&IdUMedida=" +
            um +
            "&Precio=" +
            prec +
            "&Observacion=" +
            obs,
          success: function (response) {
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });
              LimpiarCampos();
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
function getCerrarOrdenEntrada() {
  var ids = $("#IdSecuenc").val();
  var idsc = $("#IdSecuencia").val();
  var nex = 1;
  var secu = parseFloat(idsc) + parseFloat(nex);
  Swal.fire({
    title: "¿ATENCÍON DESEA CERRAR ORDEN DE ENTRADA?",
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
        dataType: "json",
        url: "index.php?c=Inventario&a=cerrar_orden_entrada",
        data: "IdSecuencial=" + ids + "&Secuencial=" + secu,
        success: function (response) {
          if (response == 1) {
            Swal.fire({
              html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ORDEN CERRADA CON ÉXITO</b></div></div>',
            });
            CerrarNuevaOrdenEntrada();
          }
          if (response == 2) {
            Swal.fire({
              html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>NO SE HA PODIDO CERRAR LA ORDEN DE ENTRADA</b></div></div>',
            });
          }
        },
      });
    }
  });
}
$(document).ready(function () {
  getListaOrdenEntrada();
});
