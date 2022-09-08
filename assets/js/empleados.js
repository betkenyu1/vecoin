/********** VALIDACIONES **********/
function validarTelefono(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  if ($("#IdTelefono").val().length < 10 || $("#IdTelefono").val() != "") {
    if (code == 8) {
      // backspace.
      return true;
    } else if (code >= 48 && code <= 57) {
      // is a number.
      setTimeout(function () {
        $("#alert-tl").fadeOut(500);
      }, 0);
      return true;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-tl").html(html);
      $("#alert-tl").fadeIn(1000);
      $("#IdTelefono").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarPrimerNombre(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 130 ||
    code == 144 ||
    (code >= 160 && code <= 165) ||
    code == 181 ||
    code == 214 ||
    code == 224 ||
    code == 233
  ) {
    // es una letra mayuscula, minuscula, con tilde
    setTimeout(function () {
      $("#alert-nom1").fadeOut(500);
    }, 0);
    validarCorrecion();
    return true;
  } else {
    // other keys.
    alert(code);
    var html = "";
    html += '<div class="alert alert-danger">';
    html += "*Ingrese solo letras del alfabeto con o sin tílde.";
    html += "</div>";
    $("#alert-nom1").html(html);
    $("#alert-nom1").fadeIn(1000);
    $("#IdNombre_1").focus();
    return false;
  }
}

function validarSegundoNombre(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 130 ||
    code == 144 ||
    (code >= 160 && code <= 165) ||
    code == 181 ||
    code == 214 ||
    code == 224 ||
    code == 233
  ) {
    // es una letra mayuscula, minuscula, con tilde
    setTimeout(function () {
      $("#alert-nom2").fadeOut(500);
    }, 0);
    validarCorrecion();
    return true;
  } else {
    // other keys.
    var html = "";
    html += '<div class="alert alert-danger">';
    html += "*Ingrese solo letras del alfabeto con o sin tílde.";
    html += "</div>";
    $("#alert-nom2").html(html);
    $("#alert-nom2").fadeIn(1000);
    $("#IdNombre_2").focus();
    return false;
  }
}

function validarPrimerApellido(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 130 ||
    code == 144 ||
    (code >= 160 && code <= 165) ||
    code == 181 ||
    code == 214 ||
    code == 224 ||
    code == 233
  ) {
    // es una letra mayuscula, minuscula, con tilde
    setTimeout(function () {
      $("#alert-ape1").fadeOut(500);
    }, 0);
    validarCorrecion();
    return true;
  } else {
    // other keys.
    var html = "";
    html += '<div class="alert alert-danger">';
    html += "*Ingrese solo letras del alfabeto con o sin tílde.";
    html += "</div>";
    $("#alert-ape1").html(html);
    $("#alert-ape1").fadeIn(1000);
    $("#IdApellido_1").focus();
    return false;
  }
}

function validarSegundoApellido(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 130 ||
    code == 144 ||
    (code >= 160 && code <= 165) ||
    code == 181 ||
    code == 214 ||
    code == 224 ||
    code == 233
  ) {
    // es una letra mayuscula, minuscula, con tilde
    setTimeout(function () {
      $("#alert-ape2").fadeOut(500);
    }, 0);
    validarCorrecion();
    return true;
  } else {
    // other keys.
    var html = "";
    html += '<div class="alert alert-danger">';
    html += "*Ingrese solo letras del alfabeto con o sin tílde.";
    html += "</div>";
    $("#alert-ape2").html(html);
    $("#alert-ape2").fadeIn(1000);
    $("#IdApellido_2").focus();
    return false;
  }
}

function validarTelefonoMod(evt) {
  var code = evt.which ? evt.which : evt.keyCode;
  if (
    $("#IdTelefono_mod").val().length < 10 ||
    $("#IdTelefono_mod").val() != ""
  ) {
    if (code == 8) {
      // backspace.
      return true;
    } else if (code >= 48 && code <= 57) {
      // is a number.
      setTimeout(function () {
        $("#alert-tl").fadeOut(500);
      }, 0);
      return true;
    } else {
      // other keys.
      var html = "";
      html += '<div class="alert alert-danger">';
      html += "*Ingrese solo dígitos del [0] al [9]";
      html += "</div>";
      $("#alert-tl").html(html);
      $("#alert-tl").fadeIn(1000);
      $("#IdTelefono_mod").focus();
      return false;
    }
  } else {
    alert("else");
  }
}

function validarCorrecion(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code != "") {
    setTimeout(function () {
      $("#alert-emp").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-dr").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-em").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-nom").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-ape").fadeOut(500);
    }, 0);
    return true; // backspace.
  }
}

/********** FIN VALIDACIONES **********/
function getListaEmpleados() {
  var html = "";
  html += '<div style="overflow: scroll" class="cerrar-emple">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Dirección</th>';
  html += '<th class="text-nowrap">Teléfono</th>';
  html += '<th class="text-nowrap">Email</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_empleados_admin",
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html +=
          '<td width="1%" class="fw-bold text-dark">' +
          value.id_empleado +
          "</td>";
        html += "<td>" + value.razon_social + "</td>";
        html += "<td>" + value.empleados + "</td>";
        html += "<td>" + value.direccion + "</td>";
        html += "<td>" + value.telefono + "</td>";
        html += "<td>" + value.email + "</td>";
        html += "<td>" + value.id_estado + "</td>";
        html += "<td>";
        html +=
          '<a class="btn btn-outline-warning" onclick="setModificaEmpleado(' +
          value.id_empleado +
          ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
        html +=
          '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarEmpleado(' +
          value.id_empleado +
          ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
        html += "</td>";
        html += "</tr>";
      });
      html += "</tbody>";
      html += "</table>";
      html += "</div>";
      html += "</div>";
      html += "</div>";
      $("#lista-empleados").html(html);
      $("#data-table-select").DataTable({
        language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
        responsive: true,
      });
    },
  });
}
function setEmpleados() {
  CerrarListaEmpleado();
  $(".cerrar-emple_mod").hide();
  var html = "";
  html += '<div class="cerrar-nemple">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Empresa Afiliada:</b> </br>';
  html +=
    '<select class="default-select2 form-control" name="IdEmpresa" id="IdEmpresa"></select>';
  html += '<div id="alert-emp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Primer nombre:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarPrimerNombre(event)" placeholder="Ingrese Primer Nombre" class="form-control" id="IdNombre_1">';
  html += '<div id="alert-nom1"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Segundo nombre:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarSegundoNombre(event)" placeholder="Ingrese Segundo Nombre" class="form-control" id="IdNombre_2">';
  html += '<div id="alert-nom2"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Primer Apellido:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarPrimerApellido(event)" placeholder="Ingrese Primer Apellido" class="form-control" id="IdApellido_1">';
  html += '<div id="alert-ape1"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Apellidos:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarSegundoApellido(event)" placeholder="Ingrese Segundo Apellido" class="form-control" id="IdApellido_2">';
  html += '<div id="alert-ape2"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Dirección:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Dirección"  class="form-control" id="IdDireccion">';
  html += '<div id="alert-dr"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Teléfono:</b> </br>';
  html +=
    '<input type="text"  onkeypress="return validarTelefono(event)" placeholder="Ingrese Teléfono" class="form-control" id="IdTelefono">';
  html += '<div id="alert-tl"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Email:</b> </br>';
  html +=
    '<input type="email" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Email" class="form-control" id="IdEmail">';
  html += '<div id="alert-em"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  html +=
    '<a class="btn btn-outline-danger" onclick="CerrarNuevoEmpleado();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarEmpleado();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#new-empleados").html(html); //enlace de interfaz con la principal
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

function getGuardarEmpleado() {
  var html = "";
  if ($("#IdEmpresa").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-emp").html(html);
    $("#alert-emp").fadeIn(500);
    $("#IdEmpresa").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-emp").fadeOut(500);
    }, 0);
  }

  if ($("#IdNombres").val().trim() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nom").html(html);
    $("#IdNombres").focus();
    $("#alert-nom").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-nom").fadeOut(500);
    }, 0);
  }

  //var input = document.getElementById('IdApellidos');
  //input.addEventListener('input',function(){this.value = this.value.trim();})
  if ($("#IdApellidos").val().trim() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-ape").html(html);
    $("#IdApellidos").focus();
    $("#alert-ape").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-ape").fadeOut(500);
    }, 0);
  }

  if ($("#IdDireccion").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-dr").html(html);
    $("#IdDireccion").focus();
    $("#alert-dr").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-dr").fadeOut(500);
    }, 0);
  }

  if ($("#IdTelefono").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-tl").html(html);
    $("#alert-tl").fadeIn(500);
    $("#IdTelefono").focus();
    return false;
  } else if ($("#IdTelefono").val().length < 9) {
    html += '<div class="alert alert-danger">';
    html +=
      "*Ingrese un teléfono fijo con código de area o un teléfono celular";
    html += "</div>";
    $("#alert-tl").html(html);
    $("#alert-tl").fadeIn(500);
    $("#IdTelefono").focus();
    return false;
  } else if ($("#IdTelefono").val().length > 10) {
    html += '<div class="alert alert-danger">';
    html += "*Ingrese un teléfono fijo o un teléfono celular válido";
    html += "</div>";
    $("#alert-tl").html(html);
    $("#alert-tl").fadeIn(500);
    $("#IdTelefono").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-tl").fadeOut(500);
    }, 0);
  }

  if ($("#IdEmail").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-em").html(html);
    $("#IdEmail").focus();
    $("#alert-em").fadeIn(500);
    return false;
  } else if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      $("#IdEmail").val()
    ) == 0
  ) {
    html += '<div class="alert alert-danger">';
    html += "*Email inválido";
    html += "</div>";
    $("#alert-em").html(html);
    $("#IdEmail").focus();
    $("#alert-em").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-em").fadeOut(500);
    }, 0);
  }
  if (
    $("#IdEmpresa").val() != "" &&
    $("#IdNombres").val() != "" &&
    $("#IdApellidos").val() != "" &&
    $("#IdDireccion").val() != "" &&
    $("#IdTelefono").val() != "" &&
    $("#IdEmail").val() != ""
  ) {
    var idempre = $("#IdEmpresa").val();
    var nom = $("#IdNombres").val();
    var ape = $("#IdApellidos").val();
    var dir = $("#IdDireccion").val();
    var tel = $("#IdTelefono").val();
    var ema = $("#IdEmail").val();
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
          url: "index.php?c=Admin&a=save_new_empleado",
          data:
            "IdEmpresa=" +
            idempre +
            "&Nombres=" +
            nom +
            "&Apellidos=" +
            ape +
            "&Direccion=" +
            dir +
            "&Telefono=" +
            tel +
            "&Email=" +
            ema,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });
              CerrarNuevoEmpleado();
              getListaEmpleados();
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
function CerrarNuevoEmpleado() {
  $(".cerrar-nemple").hide();
  $(".cerrar-emple").show();
}
function CerrarListaEmpleado() {
  $(".cerrar-emple").hide();
}

function setCerrarModificaEmpleado() {
  $(".cerrar-emple_mod").hide();
  $(".cerrar-emple").show();
}
function setModificaEmpleado(id_empleado) {
  $(".cerrar-emple").hide();
  $(".cerrar-nemple").hide();
  var html = "";
  html += '<div class="cerrar-emple_mod">';
  html += '<div class="note note-warning">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Empresas:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdEmpresaM"></select>';
  html += '<div id="alert-idempresa"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Nombres:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdEmpleado_mod">';
  html += '<input type="text" class="form-control" id="IdNombres_mod">';
  html += '<div id="alert-nb"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Apellidos:</b> </br>';
  html += '<input type="text" class="form-control" id="IdApellidos_mod">';
  html += '<div id="alert-ap"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Direccion:</b> </br>';
  html += '<input type="text" class="form-control" id="IdDireccion_mod">';
  html += '<div id="alert-dr"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Telefono:</b> </br>';
  html += '<input type="text" class="form-control" id="IdTelefono_mod">';
  html += '<div id="alert-tl"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Email:</b> </br>';
  html += '<input type="text" class="form-control" id="IdEmail_mod">';
  html += '<div id="alert-em"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  html +=
    '<a class="btn btn-outline-danger" onclick="setCerrarModificaEmpleado();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getModificarEmpleado();"><i class="fa-solid fa-save" aria-hidden="true"></i> Modificar</a>';
  html += "</div>";
  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#mod-empleado").html(html);
  $(".default-select2").select2();
  getEmpresasMod();
  getPrepareModificarEmpleado(id_empleado);
}
function getPrepareModificarEmpleado(id_empleado) {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_empleado_id",
    data: "IdEmpleado=" + id_empleado,
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdEmpleado_mod").val(value.id_empleado);
        $("#IdNombres_mod").val(value.nombres);
        $("#IdApellidos_mod").val(value.apellidos);
        $("#IdDireccion_mod").val(value.direccion);
        $("#IdTelefono_mod").val(value.telefono);
        $("#IdEmail_mod").val(value.email);
      });
    },
  });
}

function getModificarEmpleado() {
  var html = "";
  if ($("#IdEmpresaM").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-idempresa").html(html);
    $("#IdEmpresaM").focus();
    setTimeout(function () {
      $("#alert-idempresa").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdNombres_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-nom").html(html);
    $("#IdNombres_mod").focus();
    setTimeout(function () {
      $("#alert-nom").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdApellidos_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-ape").html(html);
    $("#IdApellidos_mod").focus();
    setTimeout(function () {
      $("#alert-ape").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdDireccion_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-dr").html(html);
    $("#IdDireccion_mod").focus();
    setTimeout(function () {
      $("#alert-dr").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdTelefono_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-tl").html(html);
    $("#IdTelefono_mod").focus();
    setTimeout(function () {
      $("#alert-tl").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdEmail_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-em").html(html);
    $("#IdEmail_mod").focus();
    setTimeout(function () {
      $("#alert-em").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var idemple = $("#IdEmpleado_mod").val();
    var idempre = $("#IdEmpresaM").val();
    var nom = $("#IdNombres_mod").val();
    var ape = $("#IdApellidos_mod").val();
    var dir = $("#IdDireccion_mod").val();
    var tel = $("#IdTelefono_mod").val();
    var ema = $("#IdEmail_mod").val();
    Swal.fire({
      title: "CONFIRMACION!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          type: "GET",
          dataType: "json",
          url: "index.php?c=Admin&a=get_mod_empleado",
          data:
            "IdEmpleado=" +
            idemple +
            "&IdEmpresa=" +
            idempre +
            "&Nombres=" +
            nom +
            "&Apellidos=" +
            ape +
            "&Direccion=" +
            dir +
            "&Telefono=" +
            tel +
            "&Email=" +
            ema,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Modificado OK!.</b></div></div>',
              });
              setCerrarModificaEmpleado();
              getListaEmpleados();
            }
            if (response == 2) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error al modificar!.</b></div></div>',
              });
            }
          },
        });
      }
    });
  }
}
function getEliminarEmpleado(id_empleado) {
  Swal.fire({
    title: "CONFIRMACION!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí continuar",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "index.php?c=Admin&a=get_elim_empleado",
        data: "IdEmpleado=" + id_empleado,
        success: function (response) {
          response = JSON.stringify(response);
          if (response == 1) {
            Swal.fire({
              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>Eliminado OK!.</b></div></div>',
            });
            getListaEmpleados();
          }
          if (response == 2) {
            Swal.fire({
              html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error de registro!.</b></div></div>',
            });
          }
        },
      });
    }
  });
}
$(document).ready(function () {
  getListaEmpleados();
});
