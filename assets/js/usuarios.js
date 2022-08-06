function setUsuarios() {
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
  html +=
    '<select class="default-select2 form-control" id="IdEmpleado"></select>';
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
  html += '<input type="text" class="form-control" id="IdUsuario">';
  html += '<div id="alert-user"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Password:</b> </br>';
  html += '<input type="text" class="form-control" id="IdPassword">';
  html += '<div id="alert-psw"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="text-center">';
  html +=
    '<a class="btn btn-outline-danger" onclick="getCerrarNewUsuario();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarNewUsuario();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#new-usuarios").html(html); //enlace de interfaz con la principal
  $(".default-select2").select2();
  getEmpleados();
  getRoles();
}
function getCerrarNewUsuario(){
  $(".cerrar-nuser").hide();
  getListaUsuarios();
}
function getGuardarNewUsuario() {
  var html = "";
  if ($("#IdEmpleado").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-emp").html(html);
    $("#IdEmpleado").focus();
    setTimeout(function () {
      $("#alert-emp").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdRol").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-rol").html(html);
    $("#IdRol").focus();
    setTimeout(function () {
      $("#alert-rol").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdUsuario").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-user").html(html);
    $("#IdUsuario").focus();
    setTimeout(function () {
      $("#alert-user").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdPassword").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-psw").html(html);
    $("#IdPassword").focus();
    setTimeout(function () {
      $("#alert-psw").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var emp = $("#IdEmpleado").val();
    var rol = $("#IdRol").val();
    var user = $("#IdUsuario").val();
    var psw = $("#IdPassword").val();
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
          url: "index.php?c=Admin&a=new_usuario",
          data:
            "IdEmpleado=" +
            emp +
            "&IdRol=" +
            rol +
            "&Usuario=" +
            user +
            "&Password=" +
            psw,
          success: function (response) {
            response = JSON.parse(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
              });
              getCerrarNewUsuario();
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
}
function getListaUsuarios() {
  $(".cerrar-user_mod").hide();
  $(".cerrar-nuser").hide();
  var html = '';
  html += '<div class="cerrar-luser">';
  html += '<div class="note note-blue">';
  html += '<div class="note-content">';
  html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += '<thead>';
  html += '<tr>';
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Rol</th>';
  html += '<th class="text-nowrap">Usuario</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += '</tr>';
  html += '</thead>';
  html += '<tbody>';
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_usuarios',
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html += '<td width="1%" class="fw-bold text-dark">' + value.id_usuario + '</td>';
        html += '<td>' + value.Nombres + '</td>';
        html += '<td>' + value.rol + '</td>';
        html += '<td>' + value.usuario + '</td>';
        html += '<td>' + value.estado + '</td>';
        html += '<td>';
        html += '<a class="btn btn-outline-warning" onclick="setModificaUsuario(' + value.id_usuario + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
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
      $('#data-table-select').DataTable({
        select: true,
        responsive: true
      });
    }
  });
}
function setCerrarModificaUsuario() {
  getCerrarNewUsuario();
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
  html += '<b style="color: #000000;">Nombres:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdUsuario_mod">';
  html += '<input type="text" class="form-control" id="IdNombres_mod">';
  html += '<div id="alert-nom_mod"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Rol:</b> </br>';
  html += '<select class="default-select2 form-control" id="IdRol_mod"></select>';
  html += '<div id="alert-rl_mod"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Usuario:</b> </br>';
  html += '<input type="text" class="form-control" id="IdUser_mod">';
  html += '<div id="alert-user_mod"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Password:</b> </br>';
  html += '<input type="text" class="form-control" id="IdPassword_mod">';
  html += '<div id="alert-ps_mod"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
	html += '<b style="color: #000000;">Estados:</b> </br>';
	html += '<select class="default-select2 form-control" id="IdEstado"></select>';
	html += '<div id="alert-es"></div>';
	html += '</div>';
	html += '</div>';

  html += '<div class="col-md-6">';
	html += '<div class="mb-10px">';
  html += '<div class="text-left">';
  html += '<br>';
  html += '<a class="btn btn-outline-danger" onclick="setCerrarModificaUsuario();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getModificarUsuario();"><i class="fa-solid fa-save" aria-hidden="true"></i> Modificar</a>';
  html += "</div>";
  html += '</div>';
	html += '</div>';

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#mod-usuario").html(html);
  $(".default-select2").select2();
  getRolesMod();
  getEmpresasMod();
  getPrepareModificarUsuario(id_usuario);
  getEstados();
}
function getPrepareModificarUsuario(id_usuario) {
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_usuario_id',
    data: "IdUsuario=" + id_usuario,
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdUsuario_mod").val(value.id_usuario);
        $("#IdNombres_mod").val(value.Nombres);
        $("#IdUser_mod").val(value.usuario);
        $("#IdPassword_mod").val(value.password);
      });
    }
  });
}
function getModificarUsuario() {
  var html = "";
  if ($("#IdRol_mod").val() == 0) {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-rl_mod").html(html);
    $("#IdRol_mod").focus();
    setTimeout(function () {
      $("#alert-rl_mod").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdUser_mod").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-user_mod").html(html);
    $("#IdUser_mod").focus();
    setTimeout(function () {
      $("#alert-user_mod").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdEstado").val() == "0") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-es").html(html);
    $("#IdEstado").focus();
    setTimeout(function () {
      $("#alert-es").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var iduser = $("#IdUsuario_mod").val();
    var idrol = $("#IdRol_mod").val();
    var user = $("#IdUser_mod").val();
    var es = $("#IdEstado").val();
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
          url: "index.php?c=Admin&a=get_mod_usuario",
          data:
            "IdUsuario=" + iduser + "&IdRol=" + idrol + 
            "&Usuario=" + user + "&IdEstado=" + es,
          success: function (response) {
            response = JSON.parse(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Modificado OK!.</b></div></div>',
              });
              getListaUsuarios();
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
function getEliminarUsuario(id_usuario) {
  Swal.fire({
    title: "CONFIRMACION!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí continuar"
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
              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>Eliminado OK!.</b></div></div>',
            });
            getListaUsuarios();
          } if (response == 2) {
            Swal.fire({
              html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error de registro!.</b></div></div>',
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
