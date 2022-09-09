/********** VALIDACIONES **********/


function validarPrimerNombre(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
  ) {
    // es una letra mayuscula, minuscula, con tilde
    setTimeout(function () {
      $("#alert-nom1").fadeOut(500);
    }, 0);
    validarCorrecion();
    return true;
  } else {
    // other keys.
    var html = "";
    html += '<div class="alert alert-danger">';
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
    html += "</div>";
    $("#alert-nom1").html(html);
    $("#alert-nom1").fadeIn(1000);
    $("#IdNombre_1").focus();
    return false;
  }
}
function validarPrimerNombreMod(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
  ) {
    // es una letra mayuscula, minuscula, con tilde
    setTimeout(function () {
      $("#alert-nom1").fadeOut(500);
    }, 0);
    validarCorrecion();
    return true;
  } else {
    // other keys.
    var html = "";
    html += '<div class="alert alert-danger">';
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
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
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
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
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
    html += "</div>";
    $("#alert-nom2").html(html);
    $("#alert-nom2").fadeIn(1000);
    $("#IdNombre_2").focus();
    return false;
  }
}
function validarSegundoNombreMod(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
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
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
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
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
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
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
    html += "</div>";
    $("#alert-ape1").html(html);
    $("#alert-ape1").fadeIn(1000);
    $("#IdApellido_1").focus();
    return false;
  }
}
function validarPrimerApellidoMod(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
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
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
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
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
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
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
    html += "</div>";
    $("#alert-ape2").html(html);
    $("#alert-ape2").fadeIn(1000);
    $("#IdApellido_2").focus();
    return false;
  }
}
function validarSegundoApellidoMod(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    code == 241 || //ñ
    code == 209 || //Ñ
    code == 225 || //á
    code == 193 || //Á
    code == 201 || //É
    code == 233 || //é
    code == 205 || //Í
    code == 237 || //í
    code == 211 || //Ó
    code == 243 || //ó
    code == 218 || //Ú
    code == 250 //ú
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
    html +=
      "*Ingrese solo letras mayúsculas o minúsculas con o sin tílde incluida la (ñ | Ñ).";
    html += "</div>";
    $("#alert-ape2").html(html);
    $("#alert-ape2").fadeIn(1000);
    $("#IdApellido_2").focus();
    return false;
  }
}
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
      $("#alert-nom1").fadeOut(500);
      //$("#alert-nom2").fadeOut(500);
    }, 0);
    setTimeout(function () {
      //$("#alert-nom1").fadeOut(500);
      $("#alert-nom2").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-ape1").fadeOut(500);
      //$("#alert-ape2").fadeOut(500);
    }, 0);
    setTimeout(function () {
      //$("#alert-ape1").fadeOut(500);
      $("#alert-ape2").fadeOut(500);
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
    '<table id="data-table-select" class="table table-striped table-bordered align-middle ">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Apellidos</th>';
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
        html += "<td>" + value.nombres + "</td>";
        html += "<td>" + value.apellidos + "</td>";
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
        "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json" },
        select: false,
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
  html += '<b style="color: #000000;">Segundo Apellido:</b> </br>';
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

  if ($("#IdNombre_1").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nom1").html(html);
    $("#IdNombre_1").focus();
    $("#alert-nom1").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-nom1").fadeOut(500);
    }, 0);
  }

  if ($("#IdNombre_2").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nom2").html(html);
    $("#IdNombre_2").focus();
    $("#alert-nom2").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-nom2").fadeOut(500);
    }, 0);
  }
  //var input = document.getElementById('IdApellidos');
  //input.addEventListener('input',function(){this.value = this.value.trim();})
  if ($("#IdApellido_1").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-ape1").html(html);
    $("#IdApellido_1").focus();
    $("#alert-ape1").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-ape1").fadeOut(500);
    }, 0);
  }

  if ($("#IdApellido_2").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-ape2").html(html);
    $("#IdApellido_2").focus();
    $("#alert-ape2").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-ape2").fadeOut(500);
    }, 0);
  }

  if ($("#IdDireccion").val().trim() == "") {
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
    $("#IdNombre_1").val() != "" &&
    $("#IdNombre_2").val() != "" &&
    $("#IdApellido_1").val() != "" &&
    $("#IdApellido_2").val() != "" &&
    $("#IdDireccion").val() != "" &&
    $("#IdTelefono").val() != "" &&
    $("#IdEmail").val() != ""
  ) {
    var idempre = $("#IdEmpresa").val();
    var nom1 = $("#IdNombre_1").val();
    var nom2 = $("#IdNombre_2").val();
    var ape1 = $("#IdApellido_1").val();
    var ape2 = $("#IdApellido_2").val();
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
            "&Nombre1=" +
            nom1 +
            "&Nombre2=" +
            nom2 +
            "&Apellido1=" +
            ape1 +
            "&Apellido2=" +
            ape2 +
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
  html += '<b style="color: #000000;">Empresa Afiliada:</b> </br>';
  html +=
    '<select class="default-select2 form-control" id="IdEmpresaM"></select>';
  html += '<div id="alert-emp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<input type="hidden" class="form-control" id="IdEmpleado_mod">';
  html += '<b style="color: #000000;">Primer nombre:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarPrimerNombreMod(event)" placeholder="Ingrese Primer Nombre" class="form-control" id="IdNombre_1_mod">';
  html += '<div id="alert-nom1"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Segundo nombre:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarSegundoNombreMod(event)" placeholder="Ingrese Segundo Nombre" class="form-control" id="IdNombre_2_mod">';
  html += '<div id="alert-nom2"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Primer Apellido:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarPrimerApellidoMod(event)" placeholder="Ingrese Primer Apellido" class="form-control" id="IdApellido_1_mod">';
  html += '<div id="alert-ape1"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Segundo Apellido:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarSegundoApellidoMod(event)" placeholder="Ingrese Segundo Apellido" class="form-control" id="IdApellido_2_mod">';
  html += '<div id="alert-ape2"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Dirección:</b> </br>';
  html +=
    '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Dirección"  class="form-control" id="IdDireccion_mod">';
  html += '<div id="alert-dr"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Teléfono:</b> </br>';
  html +=
    '<input type="text"  onkeypress="return validarTelefonoMod(event)" placeholder="Ingrese Teléfono" class="form-control" id="IdTelefono_mod">';
  html += '<div id="alert-tl"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Email:</b> </br>';
  html +=
    '<input type="email" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Email" class="form-control" id="IdEmail_mod">';
  html += '<div id="alert-em"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Estado:</b> </br>';
  html += '<select class="default-select2 form-control" name="IdEstado" id="IdEstado"></select>';
  html += '<div id="alert-es"></div>';
  html += '</div>';
  html += '</div>';

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
  getEmpresasActivasMod();
  getEstadosModificar();
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
        $("#IdEmpresaM").val(value.id_empresa).trigger('change');
        $("#IdEstado").val(value.id_estado).trigger('change');
        $("#IdNombre_1_mod").val(value.nombres);
        $("#IdNombre_2_mod").val(value.nombres_2);
        $("#IdApellido_1_mod").val(value.apellidos);
        $("#IdApellido_2_mod").val(value.apellidos_2);
        $("#IdDireccion_mod").val(value.direccion);
        $("#IdTelefono_mod").val(value.telefono);
        $("#IdEmail_mod").val(value.email);

      });
    },
  });
}

function getModificarEmpleado() {
  var html = "";
  if ($('#IdEmpresaM').val() == 0) {
    html += '<div class="alert alert-danger">';
    html += '*Campo requerido';
    html += '</div>';
    $("#alert-emp").html(html);
    $("#alert-emp").fadeIn(500);
    $('#IdEmpresaM').focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-emp").fadeOut(500);
    }, 0);
  }

  if ($("#IdNombre_1_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nom1").html(html);
    $("#IdNombre_1_mod").focus();
    $("#alert-nom1").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-nom1").fadeOut(500);
    }, 0);
  }

  if ($("#IdNombre_2_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-nom2").html(html);
    $("#IdNombre_2_mod").focus();
    $("#alert-nom2").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-nom2").fadeOut(500);
    }, 0);
  }

  if ($("#IdApellido_1_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-ape1").html(html);
    $("#IdApellido_1_mod").focus();
    $("#alert-ape1").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-ape1").fadeOut(500);
    }, 0);
  }

  if ($("#IdApellido_2_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-ape2").html(html);
    $("#IdApellido_2_mod").focus();
    $("#alert-ape2").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-ape2").fadeOut(500);
    }, 0);
  }

  if ($("#IdDireccion_mod").val().trim() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-dr").html(html);
    $("#IdDireccion_mod").focus();
    $("#alert-dr").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-dr").fadeOut(500);
    }, 0);
  }

  if ($("#IdTelefono_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-tl").html(html);
    $("#alert-tl").fadeIn(500);
    $("#IdTelefono_mod").focus();
    return false;
  } else if ($("#IdTelefono_mod").val().length < 9) {
    html += '<div class="alert alert-danger">';
    html +=
      "*Ingrese un teléfono fijo con código de area o un teléfono celular";
    html += "</div>";
    $("#alert-tl").html(html);
    $("#alert-tl").fadeIn(500);
    $("#IdTelefono_mod").focus();
    return false;
  } else if ($("#IdTelefono_mod").val().length > 10) {
    html += '<div class="alert alert-danger">';
    html += "*Ingrese un teléfono fijo o un teléfono celular válido";
    html += "</div>";
    $("#alert-tl").html(html);
    $("#alert-tl").fadeIn(500);
    $("#IdTelefono_mod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-tl").fadeOut(500);
    }, 0);
  }

  if ($("#IdEmail_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-em").html(html);
    $("#IdEmail_mod").focus();
    $("#alert-em").fadeIn(500);
    return false;
  } else if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      $("#IdEmail_mod").val()
    ) == 0
  ) {
    html += '<div class="alert alert-danger">';
    html += "*Email inválido";
    html += "</div>";
    $("#alert-em").html(html);
    $("#IdEmail_mod").focus();
    $("#alert-em").fadeIn(500);
    return false;
  } else {
    setTimeout(function () {
      $("#alert-em").fadeOut(500);
    }, 0);
  }

  if ($('#IdEmpresaM').val() != 0 &&
    $('#IdNombre_1_mod').val() != '' &&
    $('#IdNombre_2_mod').val() != '' &&
    $('#IdApellido_1_mod').val() != '' &&
    $('#IdApellido_2_mod').val() != '' &&
    $('#IdDireccion_mod').val() != '' &&
    $('#IdTelefono_mod').val() != '' &&
    $('#IdEmail_mod').val() != '' &&
    $('#IdEstado').val() != 0) {
    var idemple = $("#IdEmpleado_mod").val();
    var idempre = $("#IdEmpresaM").val();
    var nom1 = $("#IdNombre_1_mod").val();
    var nom2 = $("#IdNombre_2_mod").val();
    var ape1 = $("#IdApellido_1_mod").val();
    var ape2 = $("#IdApellido_2_mod").val();
    var dir = $("#IdDireccion_mod").val();
    var tel = $("#IdTelefono_mod").val();
    var ema = $("#IdEmail_mod").val();
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
          type: "GET",
          dataType: "json",
          url: "index.php?c=Admin&a=get_mod_empleado",
          data:
            "IdEmpleado=" +
            idemple +
            "&IdEmpresa=" +
            idempre +
            "&Nombre_1=" +
            nom1 +
            "&Nombre_2=" +
            nom2 +
            "&Apellido_1=" +
            ape1 +
            "&Apellido_2=" +
            ape2 +
            "&Direccion=" +
            dir +
            "&Telefono=" +
            tel +
            "&Email=" +
            ema +
            "&IdEstado=" +
            es,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ACTUALIZACIÓN CORRECTA</b></div></div>',
              });
              setCerrarModificaEmpleado();
              getListaEmpleados();
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
function getEliminarEmpleado(id_empleado) {
  Swal.fire({
    title: "¡ATENCIÓN CONFIRMAR ELIMINACIÓN!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Confirmar"
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
              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>ELIMINACIÓN CORRECTA</b></div></div>',
            });
            getListaEmpleados();
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
  getListaEmpleados();
});
