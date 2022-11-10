/**********************validaciones******************************/
function validarCodigo(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdCodigo").val().length <= 10 || $("#IdCodigo").val().length > 10) {
    if (code == 8) {
      // backspace.
      return true;
    } else if (code >= 48 && code <= 57) {
      // is a number.
      setTimeout(function () {
        $("#alert-codp").fadeOut(500);
      }, 0);
      return true;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-codp").html(html);
      $("#alert-codp").fadeIn(1000);
      $("#IdCodigo").focus();
      return false;
    }
  }
}

function validarCodigoMod(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdCodigoM").val().length <= 10 || $("#IdCodigoM").val().length > 10) {
    if (code == 8) {
      // backspace.
      return true;
    } else if (code >= 48 && code <= 57) {
      // is a number.
      setTimeout(function () {
        $("#alert-codp").fadeOut(500);
      }, 0);
      return true;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-codp").html(html);
      $("#alert-codp").fadeIn(1000);
      $("#IdCodigoM").focus();
      return false;
    }
  }
}
function validarCorrecion(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code != "") {
    setTimeout(function () {
      $("#alert-codp").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-dp").fadeOut(500);
    }, 0);
    return true; // backspace.
  }
}
/**********************fin validaciones******************************/

function CerrarListaCatalogo() {
  $(".cerrar-lcat").hide();
}
function getListaCatalogo() {
  var html = "";
  html += '<div class="cerrar-lcat">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html +=
    '<table id="data-table-select"  class="table table-striped table-bordered align-middle" style="width:100%">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Código</th>';
  html += '<th class="text-nowrap">Producto</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Catalogo&a=get_catalogo",
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html +=
          '<td width="1%" class="fw-bold text-dark">' +
          value.id_catalogo +
          "</td>";
        html += "<td>" + value.razon_social + "</td>";
        html += "<td>" + value.codigo + "</td>";
        html += "<td>" + value.producto + "</td>";
        html += "<td>" + value.estado + "</td>";
        html += "<td>";
        html +=
          '<a class="btn btn-outline-warning" onclick="setModificarCatalogo(' +
          value.id_catalogo +
          ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
        html +=
          '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarCatalogo(' +
          value.id_catalogo +
          ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
        html += "</td>";
        html += "</tr>";
      });
      html += "</tbody>";
      html += "</table>";
      html += "</div>";
      html += "</div>";
      html += "</div>";
      $("#lista-catalogo").html(html);
      var dtb = $("#data-table-select").DataTable({
        language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
        order: [[3, "asc"]],
        select: false,
        responsive: true,
      });
    },
  });
}

function CerrarNuevoCatalogo() {
  $(".cerrar-np").hide();
  getListaCatalogo();
}
function setNuevoCatalogo() {
  CerrarListaCatalogo();
  $(".cerrar-mp").hide();
  var html = "";
  html += '<div class="cerrar-np">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += "<form >";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Empresa:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdEmpresa"></select>';
  html += '<div id="alert-ep"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Código:</b> </br>';
  html +=
    '<input type="text"  minlength="1" onkeypress="return validarCodigo(event);" placeholder="Ingrese código del producto" class="form-control" id="IdCodigo">';
  html += '<div id="alert-codp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Descripción:</b> </br>';
  html +=
    '<input onkeypress="return validarCorrecion(event)" type="text" placeholder="Ingrese breve descripción del producto" class="form-control" id="IdDescripcionP">';
  html += '<div id="alert-dp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<div class="text-left">';
  html += "<br>";
  html +=
    '<a class="btn btn-outline-danger" onclick="CerrarNuevoCatalogo();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarCatalogo();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
  html += "</div>";
  html += "</div>";
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#new-catalogo").html(html);
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
  getEmpresasActivas();
}
function getGuardarCatalogo() {
  var html = "";
  if ($("#IdEmpresa").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-ep").html(html);
    $("#alert-ep").fadeIn(500);
    $("#IdEmpresa").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-ep").fadeOut(500);
    }, 0);
  }

  if ($("#IdCodigo").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-codp").html(html);
    $("#alert-codp").fadeIn(500);
    $("#IdCodigo").focus();
    return false;
  } else if (
    $("#IdCodigo").val().length < 5 ||
    $("#IdCodigo").val().length > 10
  ) {
    html += '<div class="alert alert-danger">';
    html +=
      "*Código debe tener entre 5 dígitos y 10 dígitos. Actualmente tiene: " +
      $("#IdCodigo").val().length;
    html += "</div>";
    $("#alert-codp").html(html);
    $("#alert-codp").fadeIn(500);
    $("#IdCodigo").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-codp").fadeOut(500);
    }, 0);
  }

  if ($("#IdDescripcionP").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-dp").html(html);
    $("#IdDescripcionP").focus();
    $("#alert-dp").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-dp").fadeOut(500);
    }, 0);
  }

  if (
    $("#IdEmpresa").val() != 0 &&
    $("#IdCodigo").val() != "" &&
    $("#IdDescripcionP").val() != ""
  ) {
    var ep = $("#IdEmpresa").val();
    var codp = $("#IdCodigo").val();
    var dp = $("#IdDescripcionP").val();
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
          url: "index.php?c=Catalogo&a=save_new_item",
          data: "IdEmpresa=" + ep + "&Codigo=" + codp + "&Descripcion=" + dp,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });
              CerrarNuevoCatalogo();
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
function CerrarModificarCatalogo() {
  $(".cerrar-mp").hide();
  getListaCatalogo();
}
function setModificarCatalogo(id_catalogo) {
  CerrarListaCatalogo();
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
  html += '<b style="color: #000000;">Empresa:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdEmpresaM"></select>';
  html += '<div id="alert-ep"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Código:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdCatalogo">';
  html +=
    '<input type="text"  minlength="1" onkeypress="return validarCodigoMod(event);" placeholder="Ingrese código del producto" class="form-control" id="IdCodigoM">';
  html += '<div id="alert-codp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Descripción:</b> </br>';
  html +=
    '<input onkeypress="return validarCorrecion(event)" type="text" placeholder="Ingrese breve descripción del producto" class="form-control" id="IdDescripcionM">';
  html += '<div id="alert-dp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Estado:</b> </br>';
  html +=
    '<select class="default-select2 form-control" name="IdEstado" id="IdEstado"></select>';
  html += '<div id="alert-es"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  html +=
    '<a class="btn btn-outline-danger" onclick="CerrarModificarCatalogo();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Modificar" onclick="getModificarCatalogo();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#mod-catalogo").html(html);
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

  getPrepareModificarCatalogo(id_catalogo);
}

function getPrepareModificarCatalogo(id_catalogo) {
  getEmpresasActivasMod();
  getEstadosModificar();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Catalogo&a=get_mod_item",
    data: "IdCatalogo=" + id_catalogo,
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdCatalogo").val(value.id_catalogo);
        $("#IdCodigoM").val(value.codigo);
        $("#IdDescripcionM").val(value.producto);
      });
    },
  });
  if ($("#IdEmpresaM").hasClass("select2-hidden-accessible")) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "index.php?c=Catalogo&a=get_mod_item",
      data: "IdCatalogo=" + id_catalogo,
      success: function (response) {
        $.each(response, function (key, value) {
          $("#IdEmpresaM").val(value.id_empresa).trigger("change");
        });
      },
    });
  }
  if ($("#IdEstado").hasClass("select2-hidden-accessible")) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "index.php?c=Catalogo&a=get_mod_item",
      data: "IdCatalogo=" + id_catalogo,
      success: function (response) {
        $.each(response, function (key, value) {
          $("#IdEstado").val(value.id_estado).trigger("change");
        });
      },
    });
  }
}
function getModificarCatalogo() {
  var html = "";
  if ($("#IdEmpresaM").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-ep").html(html);
    $("#alert-ep").fadeIn(500);
    $("#IdEmpresaM").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-ep").fadeOut(500);
    }, 0);
  }

  if ($("#IdCodigoM").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-codp").html(html);
    $("#alert-codp").fadeIn(500);
    $("#IdCodigoM").focus();
    return false;
  } else if (
    $("#IdCodigoM").val().length < 5 ||
    $("#IdCodigoM").val().length > 10
  ) {
    html += '<div class="alert alert-danger">';
    html +=
      "*Código debe tener entre 5 dígitos y 10 dígitos. Actualmente tiene: " +
      $("#IdCodigoM").val().length;
    html += "</div>";
    $("#alert-codp").html(html);
    $("#alert-codp").fadeIn(500);
    $("#IdCodigoM").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-codp").fadeOut(500);
    }, 0);
  }

  if ($("#IdDescripcionM").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-dp").html(html);
    $("#IdDescripcionM").focus();
    $("#alert-dp").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-dp").fadeOut(500);
    }, 0);
  }

  if ($("#IdEstado").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-es").html(html);
    $("#alert-es").fadeIn(500);
    $("#IdEstado").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-es").fadeOut(500);
    }, 0);
  }
  if (
    $("#IdEmpresaM").val() != 0 &&
    $("#IdCodigoM").val() != "" &&
    $("#IdDescripcionM").val() != "" &&
    $("#IdEstado").val() != 0
  ) {
    var idcat = $("#IdCatalogo").val();
    var emp = $("#IdEmpresaM").val();
    var codp = $("#IdCodigoM").val();
    var dp = $("#IdDescripcionM").val();
    var es = $("#IdEstado").val();
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
          url: "index.php?c=Catalogo&a=get_mod_catalogo",
          data:
            "IdCatalogo=" +
            idcat +
            "&IdEmpresa=" +
            emp +
            "&Codigo=" +
            codp +
            "&Descripcion=" +
            dp +
            "&IdEstado=" +
            es,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ACTUALIZACIÓN CORRECTA</b></div></div>',
              });
              CerrarModificarCatalogo();
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
function getEliminarCatalogo(id_catalogo) {
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
        url: "index.php?c=Catalogo&a=delete_item_catalogo",
        data: "IdCatalogo=" + id_catalogo,
        success: function (response) {
          response = JSON.stringify(response);
          if (response == 1) {
            Swal.fire({
              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>ELIMINACIÓN CORRECTA</b></div></div>',
            });
            getListaCatalogo();
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
  getListaCatalogo();
});
