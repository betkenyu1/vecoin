/********** VALIDACIONES **********/

function validarAlfanumerico(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code == 8) {
    // backspace.
    return true;
  } else if (
    (code >= 48 && code <= 57) ||
    //(code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  ) {
    // es una letra mayuscula, minuscula, con tilde
    setTimeout(function () {
      $("#alert-user").fadeOut(500);
    }, 0);
    validarCorrecion();
    return true;
  } else {
    // other keys.
    var html = "";
    html += '<div class="alert alert-danger">';
    html +=
      "*Ingrese únicamente números y letras minúsculas";
    html += "</div>";
    $("#alert-user").html(html);
    $("#alert-user").fadeIn(1000);
    $("#IdUsuario").focus();
    return false;
  }
}

function validarCorrecion(evt) {
  // code is the decimal ASCII representation of the pressed key.
  var code = evt.which ? evt.which : evt.keyCode;
  if (code != "") {
    setTimeout(function () {
      $("#alert-user").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-pass").fadeOut(500);
    }, 0);
    return true; // backspace.
  }
}
/********** FIN VALIDACIONES **********/

function getListaUsuarios() {
  $(".cerrar-user_mod").hide();
  $(".cerrar-nuser").hide();
  $(".cerrar-pass_mod").hide();
  var html = '';
  html += '<div style="overflow: scroll" class="cerrar-luser">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += '<thead>';
  html += '<tr>';
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Usuario</th>';
  html += '<th class="text-nowrap">Rol</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += '</tr>';
  html += '</thead>';
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_usuarios',
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html += '<td width="1%" class="fw-bold text-dark">' + value.id_usuario + '</td>';
        html += '<td>' + value.razon_social + '</td>';
        html += '<td>' + value.Nombres + '</td>';
        html += '<td>' + value.usuario + '</td>';
        html += '<td>' + value.rol + '</td>';
        html += '<td>' + value.estado + '</td>';
        html += '<td>';
        html += '<a class="btn btn-outline-warning" onclick="setModificaUsuario(' + value.id_usuario + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
        html += '&nbsp;<a class="btn btn-outline-success" onclick="setModificarPass(' + value.id_usuario + ');" title="Contraseña"><i class="fa fa-key" aria-hidden="true"></i></a>';
        html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarUsuario(' + value.id_usuario + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
        html += '</td>';
        html += '</tr>';
      });
      html += '</tbody>';
      html += '</table>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#lista-usuarios").html(html);
      $("#data-table-select").DataTable({
        "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json" },
        select: false,
        responsive: true,
      });
    }
  });
}

function setUsuarios() {
  $(".cerrar-pass_mod").hide();
  $(".cerrar-luser").hide();
  $(".cerrar-user_mod").hide();
  //desarrollo de interfaz vacia
  var html = "";
  html += '<div class="cerrar-nuser">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Empleado:</b> </br>';
  html += '<select class="default-select2 form-control" id="IdEmpleado"></select>';
  html += '<div id="alert-emp"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Rol:</b> </br>';
  html += '<select class="default-select2 form-control" id="IdRol"></select>';
  html += '<div id="alert-rol"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Usuario:</b> </br>';
  html += '<input type="text" onkeypress="return validarAlfanumerico(event)" placeholder="Ingrese Usuario" class="form-control" id="IdUsuario">';
  html += '<div id="alert-user"></div>';
  html += "</div>";
  html += "</div>";


  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Contraseña:</b> </br>';
  html += '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Contraseña" class="form-control" id="IdPassword">';
  html += '<div id="alert-pass"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  html += '<a class="btn btn-outline-danger" onclick="getCerrarNewUsuario();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarNewUsuario();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#new-usuarios").html(html); //enlace de interfaz con la principal
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
  getEmpleados();
  getRoles();
}
function getCerrarModPass() {
  $(".cerrar-pass_mod").hide();
  getListaUsuarios();
}


function setCerrarModificaPass() {
  getCerrarNewUsuario();
  $(".cerrar-user_mod").hide();
  $(".cerrar-luser").show();
  $(".cerrar-nuser").hide();
  $(".cerrar-pass_mod").hide();
}

function getGuardarNewUsuario() {
  var html = "";
  if ($("#IdEmpleado").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-emp").html(html);
    $("#alert-emp").fadeIn(500);
    $("#IdEmpleado").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-emp").fadeOut(500);
    }, 0);
  }

  if ($("#IdRol").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-rol").html(html);
    $("#alert-rol").fadeIn(500);
    $("#IdRol").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-rol").fadeOut(500);
    }, 0);
  }


  if ($("#IdUsuario").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-user").html(html);
    $("#alert-user").fadeIn(500);
    $("#IdUsuario").focus();
    return false;
  } else if ($("#IdUsuario").val().length < 5) {
    html += '<div class="alert alert-danger">';
    html +=
      "*El usuario debe contener al menos 5 caracteres";
    html += "</div>";
    $("#alert-user").html(html);
    $("#alert-user").fadeIn(500);
    $("#IdUsuario").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-user").fadeOut(500);
    }, 0);
  }

  if ($("#IdPassword").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-pass").html(html);
    $("#alert-pass").fadeIn(500);
    $("#IdPassword").focus();
    return false;
  } else if ($("#IdPassword").val().length < 5) {
    html += '<div class="alert alert-danger">';
    html +=
      "*La contraseña debe contener al menos 5 caracteres";
    html += "</div>";
    $("#alert-pass").html(html);
    $("#alert-pass").fadeIn(500);
    $("#IdPassword").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-pass").fadeOut(500);
    }, 0);
  }
  if (
    $("#IdEmpleado").val() != "" &&
    $("#IdRol").val() != "" &&
    $("#IdUsuario").val() != "" &&
    $("#IdPassword").val() != ""
  ) {
    var emp = $("#IdEmpleado").val();
    var rol = $("#IdRol").val();
    var user = $("#IdUsuario").val();
    var pas = $("#IdPassword").val();
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
          url: "index.php?c=Admin&a=new_usuario",
          data:
            "IdEmpleado=" +
            emp +
            "&IdRol=" +
            rol +
            "&Usuario=" +
            user +
            "&Password=" +
            pas,
          success: function (response) {
            response = JSON.parse(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
              });
              getCerrarNewUsuario();

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

function setCerrarModificaUsuario() {
  getCerrarModPass();
  $(".cerrar-user_mod").hide();
  $(".cerrar-luser").show();
  $(".cerrar-nuser").hide();
}




function setModificaUsuario(id_usuario) {
  $(".cerrar-luser").hide();
  $(".cerrar-nusu").hide();
  var html = "";
  html += '<div class="cerrar-user_mod">';
  html += '<div class="note note-warning">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';


  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Rol:</b> </br>';
  html += '<select class="default-select2 form-control" name="IdRol_mod" id="IdRol_mod"></select>';
  html += '<div id="alert-rol"></div>';
  html += '</div>';
  html += '</div>';


  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Usuario:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdUsuarioId_mod">';
  html += '<input type="text" onkeypress="return validarAlfanumericoMod(event)" placeholder="Ingrese Usuario" class="form-control" id="IdUsuario_mod">';
  html += '<div id="alert-user"></div>';
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
  //html += '<br>';
  html += '<a class="btn btn-outline-danger" onclick="setCerrarModificaUsuario();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getModificarUsuario();"><i class="fa-solid fa-save" aria-hidden="true"></i> Modificar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#mod-usuario").html(html);
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
  getRolesMod();
  getEmpleadosActivosModificarUsuario();
  getEstadosModificar();
  getPrepareModificarUsuario(id_usuario);

}

function getCerrarNewUsuario() {
  $(".cerrar-nuser").hide();
  getListaUsuarios();
}

function setModificarPass(id_usuario) {
  $(".cerrar-luser").hide();
  $(".cerrar-nusu").hide();
  var html = "";
  html += '<div class="cerrar-pass_mod">';
  html += '<div class="note note-success">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';


  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Contraseña:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdUsuarioId_mod">';
  html += '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Contraseña" class="form-control" id="IdPassword_mod">';
  html += '<div id="alert-pass"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Validar Contraseña:</b> </br>';
  html += '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Validar Contraseña" class="form-control" id="IdPassword_valmod">';
  html += '<div id="alert-pass"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  //html += '<br>';
  html += '<a class="btn btn-outline-danger" onclick="setCerrarModificaPass();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getModificarPass();"><i class="fa-solid fa-save" aria-hidden="true"></i> Modificar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#mod-usuario").html(html);

  getPrepareModificarUsuario(id_usuario);

}

function getModificarPass() {
  var html = "";
  var pass = $("#IdPassword_mod").val();
  var vpass = $("#IdPassword_valmod").val();
  if (pass != vpass) {
    Swal.fire({
      html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>LAS CONTRASEÑAS NO COINCIDEN</b></div></div>',
    });
    $("#IdPassword_mod").val('');
    $("#IdPassword_valmod").val('');
  } else {
    if ($("#IdPassword_mod").val() == "") {
      html += '<div class="alert alert-danger">';
      html += "*Campo requerido";
      html += "</div>";
      $("#alert-pass").html(html);
      $("#alert-pass").fadeIn(500);
      $("#IdPassword_mod").focus();
      return false;
    } else if ($("#IdPassword_mod").val().length < 5) {
      html += '<div class="alert alert-danger">';
      html +=
        "*La contraseña debe contener al menos 5 caracteres";
      html += "</div>";
      $("#IdPassword_mod").val('');
      $("#IdPassword_valmod").val('');
      $("#alert-pass").html(html);
      $("#alert-pass").fadeIn(500);
      $("#IdPassword_mod").focus();
      return false;
    } else {
      setTimeout(function () {
        $("#alert-pass").fadeOut(500);
      }, 0);
    }

    if (
      $('#IdPassword_mod').val() != '' &&
      $('#IdPassword_valmod').val() != '') {
      var iduser = $("#IdUsuarioId_mod").val();
      var pass = $("#IdPassword_mod").val();
      Swal.fire({
        title: "¡ATENCIÓN CONFIRMAR ACTUALIZACIÓN DE CONTRASEÑA!",
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
            url: "index.php?c=Admin&a=get_mod_usuario_pass",
            data:
              "IdUsuario=" + iduser +
              "&Password=" + pass,
            success: function (response) {
              response = JSON.parse(response);
              if (response == 1) {
                Swal.fire({
                  html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ACTUALIZACIÓN CORRECTA</b></div></div>',
                });
                getListaUsuarios();
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
}


function getPrepareModificarUsuario(id_usuario) {
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_usuario_id',
    data: "IdUsuario=" + id_usuario,
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdUsuarioId_mod").val(value.id_usuario);
        //$("#IdEmpleado_mod").val(value.id_empleado).trigger('change');
        $("#IdRol_mod").val(value.id_rol).trigger('change');
        $("#IdEstado").val(value.id_estado).trigger('change');
        $("#IdUsuario_mod").val(value.usuario);
        //$("#IdPassword_mod").val(value.password);
      });
    }
  });
}


function getModificarUsuario() {
  var html = "";

  /*f ($("#IdEmpleado_mod").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-emp").html(html);
    $("#alert-emp").fadeIn(500);
    $("#IdEmpleado_mod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-emp").fadeOut(500);
    }, 0);
  }*/

  if ($("#IdRol_mod").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-rol").html(html);
    $("#alert-rol").fadeIn(500);
    $("#IdRol_mod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-rol").fadeOut(500);
    }, 0);
  }


  if ($("#IdUsuario_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-user").html(html);
    $("#alert-user").fadeIn(500);
    $("#IdUsuario_mod").focus();
    return false;
  } else if ($("#IdUsuario_mod").val().length < 5) {
    html += '<div class="alert alert-danger">';
    html +=
      "*El usuario debe contener al menos 5 caracteres";
    html += "</div>";
    $("#alert-user").html(html);
    $("#alert-user").fadeIn(500);
    $("#IdUsuario_mod").focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-user").fadeOut(500);
    }, 0);
  }
  /*
    if ($("#IdPassword_mod").val() == "") {
      html += '<div class="alert alert-danger">';
      html += "*Campo requerido";
      html += "</div>";
      $("#alert-pass").html(html);
      $("#alert-pass").fadeIn(500);
      $("#IdPassword_mod").focus();
      return false;
    } else if ($("#IdPassword_mod").val().length < 5) {
      html += '<div class="alert alert-danger">';
      html +=
        "*La contraseña debe contener al menos 5 caracteres";
      html += "</div>";
      $("#alert-pass").html(html);
      $("#alert-pass").fadeIn(500);
      $("#IdPassword_mod").focus();
      return false;
    } else {
      setTimeout(function () {
        $("#alert-pass").fadeOut(500);
      }, 0);
    }
  */
  if ($('#IdEstado').val() == 0) {
    html += '<div class="alert alert-danger">';
    html += '*Campo requerido';
    html += '</div>';
    $("#alert-es").html(html);
    $("#alert-es").fadeIn(500);
    $('#IdEstado').focus();
    return false;
  } else {
    setTimeout(function () {
      $("#alert-es").fadeOut(500);
    }, 0);
  }
  if (//$('#IdEmpleado_mod').val() != 0 &&
    $('#IdRol_mod').val() != 0 &&
    $('#IdUsuario_mod').val() != '' &&
    //$('#IdPassword_mod').val() != '' &&
    $('#IdEstado').val() != 0) {
    var iduser = $("#IdUsuarioId_mod").val();
    ///var idempleado = $("#IdEmpleado_mod").val();
    var idrol = $("#IdRol_mod").val();
    var user = $("#IdUsuario_mod").val();
    //var pass = $("#IdPassword_mod").val();
    var es = $("#IdEstado").val();
    Swal.fire({
      title: "¡ATENCIÓN CONFIRMAR ACTUALIZACIÓN!",
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
          url: "index.php?c=Admin&a=get_mod_usuario",
          data:
            "IdUsuario=" + iduser +
            //"&IdEmpleado=" + idempleado +
            "&IdRol=" + idrol + "&Usuario=" + user +
            //"&Password=" + pass +
            "&IdEstado=" + es,
          success: function (response) {
            response = JSON.parse(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ACTUALIZACIÓN CORRECTA</b></div></div>',
              });
              getListaUsuarios();
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
function getEliminarUsuario(id_usuario) {
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
        dataType: 'json',
        url: "index.php?c=Admin&a=get_elim_usuario",
        data: "IdUsuario=" + id_usuario,
        success: function (response) {
          response = JSON.stringify(response);
          if (response == 1) {
            Swal.fire({
              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>ELIMINACIÓN CORRECTA</b></div></div>',
            });
            getListaUsuarios();
          } if (response == 2) {
            Swal.fire({
              html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ELIMINACIÓN INCORRECTA</b></div></div>',
            });
          }
        }
      });
    }
  });
}
$(document).ready(function () {
  getListaUsuarios();
});
