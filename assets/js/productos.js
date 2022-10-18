/********** FIN VALIDACIONES **********/
function validarCorrecion(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code != "") {
    setTimeout(function () {
      $("#alert-costo").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-util").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-cant").fadeOut(500);
    }, 0);
    return true; // backspace.
  }
}

function validarEnteros(evt) {
  var code = evt.which ? evt.which : evt.keyCode;

  if ($("#IdCant_act").val().length < 1 || $("#IdCant_act").val() != "") {
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
      $("#IdCant_act").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarEnterosMod(evt) {
  var code = evt.which ? evt.which : evt.keyCode;

  if ($("#IdCant_actMod").val().length < 1 || $("#IdCant_actMod").val() != "") {
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
      $("#IdCant_actMod").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarCosto(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  var punto = 0;
  var coma = 0;
  if ($("#IdPrecio_act").val().length < 1 || $("#IdPrecio_act").val() != "") {
    if (code == 8) {
      // backspace.
      return true;
    } else if ((code >= 48 && code <= 57) || code == 46) {
      // is a number.
      setTimeout(function () {
        $("#alert-costo").fadeOut(500);
      }, 0);
      return true;
    } else if (code == 44) {
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Use el (.) como separador de decimales.";
      html += "</div>";
      $("#alert-costo").html(html);
      $("#alert-costo").fadeIn(1000);
      $("#IdPrecio_act").focus();
      return false;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-costo").html(html);
      $("#alert-costo").fadeIn(1000);
      $("#IdPrecio_act").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarCostoMod(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  var punto = 0;
  var coma = 0;
  if (
    $("#IdPrecio_actMod").val().length < 1 ||
    $("#IdPrecio_actMod").val() != ""
  ) {
    if (code == 8) {
      // backspace.
      return true;
    } else if ((code >= 48 && code <= 57) || code == 46) {
      // is a number.
      setTimeout(function () {
        $("#alert-costo").fadeOut(500);
      }, 0);
      return true;
    } else if (code == 44) {
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Use el (.) como separador de decimales.";
      html += "</div>";
      $("#alert-costo").html(html);
      $("#alert-costo").fadeIn(1000);
      $("#IdPrecio_actMod").focus();
      return false;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-costo").html(html);
      $("#alert-costo").fadeIn(1000);
      $("#IdPrecio_actMod").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarUtilidad(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdUtilidad").val().length < 1 || $("#IdUtilidad").val() != "") {
    if (code == 8) {
      // backspace.
      return true;
    } else if ((code >= 48 && code <= 57) || code == 46) {
      // is a number.
      setTimeout(function () {
        $("#alert-util").fadeOut(500);
      }, 0);
      return true;
    } else if (code == 44) {
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Use el (.) como separador de decimales.";
      html += "</div>";
      $("#alert-util").html(html);
      $("#alert-util").fadeIn(1000);
      $("#IdUtilidad").focus();
      return false;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-util").html(html);
      $("#alert-util").fadeIn(1000);
      $("#IdUtilidad").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarUtilidadMod(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdUtilidadMod").val().length < 1 || $("#IdUtilidadMod").val() != "") {
    if (code == 8) {
      // backspace.
      return true;
    } else if ((code >= 48 && code <= 57) || code == 46) {
      // is a number.
      setTimeout(function () {
        $("#alert-util").fadeOut(500);
      }, 0);
      return true;
    } else if (code == 44) {
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Use el (.) como separador de decimales.";
      html += "</div>";
      $("#alert-util").html(html);
      $("#alert-util").fadeIn(1000);
      $("#IdUtilidadMod").focus();
      return false;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-util").html(html);
      $("#alert-util").fadeIn(1000);
      $("#IdUtilidadMod").focus();
      return false;
    }
  } else {
    alert("else");
  }
}
/********** FIN VALIDACIONES **********/
function CerrarListaProducto() {
  $(".cerrar-lp").hide();
}
function getListaProductos() {
  var html = "";
  html += '<div style="overflow: scroll" class="cerrar-lp">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Código</th>';
  html += '<th class="text-nowrap">Nombre</th>';
  html += '<th class="text-nowrap">Proveedor</th>';
  html += '<th class="text-nowrap">Unidad de Medida</th>';
  html += '<th class="text-nowrap">Cantidad</th>';
  html += '<th class="text-nowrap">Costo</th>';
  html += '<th class="text-nowrap">Utilidad</th>';
  html += '<th class="text-nowrap">P.V.P.</th>';
  //html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",

    url: "index.php?c=Producto&a=get_productos_x_empresa",
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html +=
          '<td width="1%" class="fw-bold text-dark">' +
          value.id_producto +
          "</td>";
        html += "<td>" + value.razon_social + "</td>";
        html += "<td>" + value.codigo + "</td>";
        html += "<td>" + value.producto + "</td>";
        html += "<td>" + value.proveedor + "</td>";
        html += "<td>" + value.umedida + "</td>";
        html += "<td>" + value.cantidad + "</td>";
        html += "<td>" + "$ " + value.precio + "</td>";
        html += "<td>" + value.prc_utl + " %" + "</td>";
        html += "<td>" + "$ " + value.pvp + "</td>";
        //html += '<td>' + value.estado + '</td>';
        html += "<td>";
        html +=
          '<a class="btn btn-outline-warning" onclick="setModificarProducto(' +
          value.id_producto +
          ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
        //html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarProducto(' + value.id_producto + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
        html += "</td>";
        html += "</tr>";
      });
      html += "</tbody>";
      html += "</table>";
      html += "</div>";
      html += "</div>";
      html += "</div>";
      $("#lista-productos").html(html);
      var dtb = $("#data-table-select").DataTable({
        language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
        order: [[3, "asc"]],
        select: false,
        responsive: true,
      });
      dtb.column(0).visible(false);
      dtb.column(1).visible(false);
    },
  });
}

function CerrarNuevoProducto() {
  $(".cerrar-np").hide();
  getListaProductos();
}
function setNuevoProducto() {
  CerrarListaProducto();
  $(".cerrar-mp").hide();
  var html = "";
  html += '<div class="cerrar-np">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Proveedor:</b> </br>';
  html +=
    '<select class="default-select2 form-control" name="IdProveedor" id="IdProveedor"></select>';
  html += '<div id="alert-prov"></div>';
  html += "</div>";
  html += "</div>";

  /*html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Bodegas:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdBodega"></select>';
	html += '<div id="alert-bp"></div>';
	html += '</div>';
	html += '</div>';*/

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Unidad de Medida:</b> </br>';
  html +=
    '<select class="default-select2 form-control" name="IdUMedida" id="IdUMedida"></select>';
  html += '<div id="alert-um"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Producto:</b> </br>';
  html +=
    '<select class="default-select2 form-control" name="IdCatalogo" id="IdCatalogo"></select>';
  html += '<div id="alert-cat"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Cantidad:</b> </br>';
  html +=
    '<input type="text" class="form-control" id="IdCant_act" onkeypress="return validarEnteros(event)" placeholder="Ingrese Cantidad Actual">';
  html += '<div id="alert-cant"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Costo de Producto ($):</b> </br>';
  html +=
    '<input type="text" class="form-control" id="IdPrecio_act" onkeypress="return validarCosto(event)" onkeyup="CalcularUtilidad();" placeholder="Ingrese Costo del Producto">';
  html += '<div id="alert-costo"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Utilidad Deseada (%):</b> </br>';
  html +=
    '<input type="text" class="form-control" id="IdUtilidad" onkeyup="CalcularUtilidad();" onkeypress="return validarUtilidad(event)"placeholder="Utilidad del producto">';
  html += '<input type="hidden" class="form-control" id="IdUtl">';
  html += '<div id="alert-util"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">P.V.P. al Consumidor ($):</b> </br>';
  html +=
    '<input type="text" disabled class="form-control" placeholder="P.V.P. Calculado" id="IdPVP">';
  html += '<div id="alert-pvp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  html +=
    '<a class="btn btn-outline-danger" onclick="CerrarNuevoProducto();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarProducto();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#new-prod").html(html);
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
  getProveedorActivo();
  getUMedidas();
  getCatalogoActivos();
  //getBodegas();
}

function getGuardarProducto() {
  var html = "";
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
    $("#alert-um").html(html);
    $("#alert-um").fadeIn(500);
    $("#IdUMedida").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-um").fadeOut(500);
    }, 0);
  }

  if ($("#IdCatalogo").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cat").html(html);
    $("#alert-cat").fadeIn(500);
    $("#IdCatalogo").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-cat").fadeOut(500);
    }, 0);
  }

  var RE = /^\d*(\.\d{1})?\d{0,1}$/;
  if ($("#IdCant_act").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cant").html(html);
    $("#alert-cant").fadeIn(500);
    $("#IdCant_act").focus();
    return false;
  } else if (RE.test($("#IdCant_act").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Verificar valor";
    html += "</div>";
    $("#alert-cant").html(html);
    $("#alert-cant").fadeIn(500);
    $("#IdCant_act").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-cant").fadeOut(500);
    }, 0);
  }

  if ($("#IdPrecio_act").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-costo").html(html);
    $("#alert-costo").fadeIn(500);
    $("#IdPrecio_act").focus();
    return false;
  } else if (RE.test($("#IdPrecio_act").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Máximo dos decimales.";
    html += "</div>";
    $("#alert-costo").html(html);
    $("#alert-costo").fadeIn(500);
    $("#IdPrecio_act").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-costo").fadeOut(500);
    }, 0);
  }

  if ($("#IdUtilidad").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-util").html(html);
    $("#alert-util").fadeIn(500);
    $("#IdUtilidad").focus();
    return false;
  } else if (RE.test($("#IdUtilidad").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Máximo dos decimales.";
    html += "</div>";
    $("#alert-util").html(html);
    $("#alert-util").fadeIn(500);
    $("#IdUtilidad").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-util").fadeOut(500);
    }, 0);
  }

  if ($("#IdPVP").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-pvp").html(html);
    $("#alert-pvp").fadeIn(500);
    $("#IdPVP").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-pvp").fadeOut(500);
    }, 0);
  }

  if (
    $("#IdProveedor").val() != 0 &&
    $("#IdUMedida").val() != 0 &&
    $("#IdCatalogo").val() != 0 &&
    $("#IdCant_act").val() != "" &&
    $("#IdPrecio_act").val() != "" &&
    $("#IdUtilidad").val() != "" &&
    $("#IdUtl").val() != "" &&
    $("#IdPVP").val() != ""
  ) {
    var prov = $("#IdProveedor").val();
    var um = $("#IdUMedida").val();
    var ct = $("#IdCatalogo").val();
    var cact = $("#IdCant_act").val();
    var pact = $("#IdPrecio_act").val();
    var utl = $("#IdUtilidad").val();
    var utilidad = $("#IdUtl").val();
    var pvp = $("#IdPVP").val();
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
          url: "index.php?c=Inventario&a=save_new_producto",
          data:
            "IdProveedor=" +
            prov +
            "&IdUMedida=" +
            um +
            "&IdCatalogo=" +
            ct +
            "&Cantidad=" +
            cact +
            "&Precio=" +
            pact +
            "&Prc_Utl=" +
            utl +
            "&Utilidad=" +
            utilidad +
            "&PVP=" +
            pvp,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });
              CerrarNuevoProducto();
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
function CerrarModificarProducto() {
  $(".cerrar-mp").hide();
  getListaProductos();
}
function setModificarProducto(id_producto) {
  CerrarListaProducto();
  $(".cerrar-np").hide();
  var html = "";
  html += '<div class="cerrar-mp">';
  html += '<div class="note note-warning">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Proveedor:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdProducto">';
  html +=
    '<select class="default-select2 form-control" name="IdProveedorMod" id="IdProveedorMod"></select>';
  html += '<div id="alert-prov"></div>';
  html += "</div>";
  html += "</div>";

  /*html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Bodegas:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdBodegaMod"></select>';
	html += '<div id="alert-bp"></div>';
	html += '</div>';
	html += '</div>';*/

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Unidad de Medida:</b> </br>';
  html +=
    '<select class="default-select2 form-control" name="IdUMedidaMod" id="IdUMedidaMod"></select>';
  html += '<div id="alert-um"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Producto:</b> </br>';
  html +=
    '<select class="default-select2 form-control" name="IdCatalogoMod" id="IdCatalogoMod"></select>';
  html += '<div id="alert-cat"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Cantidad:</b> </br>';
  html +=
    '<input type="text" class="form-control" id="IdCant_actMod" onkeypress="return validarEnterosMod(event)" placeholder="Ingrese Cantidad Actual">';
  html += '<div id="alert-cant"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Costo de Producto ($):</b> </br>';
  html +=
    '<input type="text" class="form-control" id="IdPrecio_actMod" onkeypress="return validarCostoMod(event)" onkeyup="CalcularUtilidadMod();" placeholder="Ingrese Costo del Producto">';
  html += '<div id="alert-costo"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Utilidad Deseada (%):</b> </br>';
  html +=
    '<input type="text" class="form-control" id="IdUtilidadMod" onkeyup="CalcularUtilidadMod();" onkeypress="return validarUtilidadMod(event)"placeholder="Utilidad del producto">';
  html += '<input type="hidden" class="form-control" id="IdUtlMod">';
  html += '<div id="alert-util"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">P.V.P. al Consumidor ($):</b> </br>';
  html +=
    '<input type="text" disabled class="form-control" placeholder="P.V.P. Calculado" id="IdPVPMod">';
  html += '<div id="alert-pvp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  html += "<br>";
  html +=
    '<a class="btn btn-outline-danger" onclick="CerrarModificarProducto();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Modificar" onclick="getModificarProducto();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#mod-prod").html(html);
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
  getProveedorActivoMod();
  getCatalogoActivosMod();
  getUMedidasActivasMod();
  //getBodegasMod();

  //getEstados();
  setTimeout(function () {
    getPrepareModificarProducto(id_producto);
  }, 500);
}
function getPrepareModificarProducto(id_producto) {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Producto&a=get_pmod_producto",
    data: "IdProducto=" + id_producto,
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdProducto").val(id_producto);
        $("#IdProveedorMod").val(value.id_proveedor).trigger("change");
        $("#IdUMedidaMod").val(value.id_umedida).trigger("change");
        $("#IdCatalogoMod").val(value.id_catalogo).trigger("change");
        $("#IdCant_actMod").val(value.cantidad);
        $("#IdPrecio_actMod").val(value.precio);
        $("#IdUtilidadMod").val(value.prc_utl);
        $("#IdUtlMod").val(value.utilidad);
        $("#IdPVPMod").val(value.pvp);
      });
    },
  });
}
function getModificarProducto() {
  var html = "";
  if ($("#IdProveedorMod").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-prov").html(html);
    $("#alert-prov").fadeIn(500);
    $("#IdProveedorMod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-prov").fadeOut(500);
    }, 0);
  }
  if ($("#IdUMedidaMod").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-um").html(html);
    $("#alert-um").fadeIn(500);
    $("#IdUMedidaMod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-um").fadeOut(500);
    }, 0);
  }

  if ($("#IdCatalogoMod").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cat").html(html);
    $("#alert-cat").fadeIn(500);
    $("#IdCatalogoMod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-cat").fadeOut(500);
    }, 0);
  }

  var RE = /^\d*(\.\d{1})?\d{0,1}$/;
  if ($("#IdCant_actMod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-cant").html(html);
    $("#alert-cant").fadeIn(500);
    $("#IdCant_actMod").focus();
    return false;
  } else if (RE.test($("#IdCant_actMod").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Verificar valor";
    html += "</div>";
    $("#alert-cant").html(html);
    $("#alert-cant").fadeIn(500);
    $("#IdCant_actMod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-cant").fadeOut(500);
    }, 0);
  }

  if ($("#IdPrecio_actMod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-costo").html(html);
    $("#alert-costo").fadeIn(500);
    $("#IdPrecio_actMod").focus();
    return false;
  } else if (RE.test($("#IdPrecio_actMod").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Máximo dos decimales.";
    html += "</div>";
    $("#alert-costo").html(html);
    $("#alert-costo").fadeIn(500);
    $("#IdPrecio_actMod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-costo").fadeOut(500);
    }, 0);
  }

  if ($("#IdUtilidadMod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-util").html(html);
    $("#alert-util").fadeIn(500);
    $("#IdUtilidadMod").focus();
    return false;
  } else if (RE.test($("#IdUtilidadMod").val()) == false) {
    html += '<div class="alert alert-danger">';
    html += "*Máximo dos decimales.";
    html += "</div>";
    $("#alert-util").html(html);
    $("#alert-util").fadeIn(500);
    $("#IdUtilidadMod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-util").fadeOut(500);
    }, 0);
  }

  if ($("#IdPVPMod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-pvp").html(html);
    $("#alert-pvp").fadeIn(500);
    $("#IdPVPMod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-pvp").fadeOut(500);
    }, 0);
  }

  /*if ($('#IdEstado').val() == '0') {
		html += '<div class="alert alert-danger">';
		html += 'Este campo es obligatorio!.';
		html += '</div>';
		$("#alert-es").html(html);
		$('#IdEstado').focus();
		setTimeout(function () {
			$("#alert-es").fadeOut(1500);
		}, 3000);
		return false;
	} else{*/

  if (
    $("#IdProducto").val() != "" &&
    $("#IdProveedorMod").val() != 0 &&
    $("#IdUMedidaMod").val() != 0 &&
    $("#IdCatalogoMod").val() != 0 &&
    $("#IdCant_actMod").val() != "" &&
    $("#IdPrecio_actMod").val() != "" &&
    $("#IdUtilidadMod").val() != "" &&
    $("#IdUtlMod").val() != "" &&
    $("#IdPVPMod").val() != ""
  ) {
    var prod = $("#IdProducto").val();
    var prov = $("#IdProveedorMod").val();
    var um = $("#IdUMedidaMod").val();
    var ct = $("#IdCatalogoMod").val();
    var cact = $("#IdCant_actMod").val();
    var pact = $("#IdPrecio_actMod").val();
    var utl = $("#IdUtilidadMod").val();
    var utilidad = $("#IdUtlMod").val();
    var pvp = $("#IdPVPMod").val();
    Swal.fire({
      title: "¡ATENCIÓN CONFIRMAR ACTUALIZACIÓN!",
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
          url: "index.php?c=Producto&a=get_mod_producto",
          data:
            "IdProducto=" +
            prod +
            "&IdProveedor=" +
            prov +
            "&IdUMedida=" +
            um +
            "&IdCatalogo=" +
            ct +
            "&Cantidad=" +
            cact +
            "&Precio=" +
            pact +
            "&Prc_Utl=" +
            utl +
            "&Utilidad=" +
            utilidad +
            "&PVP=" +
            pvp,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ACTUALIZACIÓN CORRECTA</b></div></div>',
              });
              CerrarModificarProducto();
            }
            if (response == 2) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ACTUALIZACIÓN INCORRECTA</b></div></div>',
              });
            }
          },
        });
      }
    });
  }
}
function getEliminarProducto(id_producto) {
  Swal.fire({
    title: "¡ATENCIÓN CONFIRMAR ELIMINACIÓN!",
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
        url: "index.php?c=Producto&a=delete_producto",
        data: "IdProducto=" + id_producto,
        success: function (response) {
          response = JSON.stringify(response);
          if (response == 1) {
            Swal.fire({
              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>ELIMINACIÓN CORRECTA</b></div></div>',
            });
            getListaProductos();
          }
          if (response == 2) {
            Swal.fire({
              html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ELIMINACIÓN INCORRECTA</b></div></div>',
            });
          }
        },
      });
    }
  });
}
$(document).ready(function () {
  getListaProductos();
});
