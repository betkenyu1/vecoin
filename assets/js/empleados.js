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
  html += '<b style="color: #000000;">Empresas:</b> </br>';
  html += '<select class="default-select2 form-control" id="IdEmpresa"></select>';
  html += '<div id="alert-idempre"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Nombres:</b> </br>';
  html += '<input type="text" class="form-control" id="IdNombres">';
  html += '<div id="alert-nom"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Apellidos:</b> </br>';
  html += '<input type="text" class="form-control" id="IdApellidos">';
  html += '<div id="alert-ape"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Direccion:</b> </br>';
  html += '<input type="text" class="form-control" id="IdDireccion">';
  html += '<div id="alert-dr"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Telefono:</b> </br>';
  html += '<input type="text" class="form-control" id="IdTelefono">';
  html += '<div id="alert-tl"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Email:</b> </br>';
  html += '<input type="text" class="form-control" id="IdEmail">';
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
  $(".default-select2").select2();
  getEmpresas();
}
function CerrarNuevoEmpleado() {
  $(".cerrar-nemple").hide();
  $(".cerrar-emple").show();
}
function CerrarListaEmpleado() {
  $(".cerrar-emple").hide();
}
function getListaEmpleados() {
  var html = '';
  html += '<div class="cerrar-emple">';
  html += '<div class="note note-blue">';
  html += '<div class="note-content">';
  html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += '<thead>';
  html += '<tr>';
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Teléfono</th>';
  html += '<th class="text-nowrap">Email</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += '</tr>';
  html += '</thead>';
  html += '<tbody>';
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_empleados',
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html += '<td width="1%" class="fw-bold text-dark">' + value.id_empleado + '</td>';
        html += '<td>' + value.razon_social + '</td>';
        html += '<td>' + value.Empleados + '</td>';
        html += '<td>' + value.telefono + '</td>';
        html += '<td>' + value.email + '</td>';
        html += '<td>';
        html += '<a class="btn btn-outline-warning" onclick="setModificaEmpleado(' + value.id_empleado + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
        html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarEmpleado(' + value.id_empleado + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
        html += '</td>';
        html += '</tr>';
      });
      html += '</tbody>';
      html += '</table>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#lista-empleados").html(html);
      $('#data-table-select').DataTable({
        select: true,
        responsive: true
      });
    }
  });
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
  html += '<select class="default-select2 form-control" id="IdEmpresaM"></select>';
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
  html += '<a class="btn btn-outline-danger" onclick="setCerrarModificaEmpleado();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html += '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getModificarEmpleado();"><i class="fa-solid fa-save" aria-hidden="true"></i> Modificar</a>';
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
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_empleado_id',
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
    }
  });
}
function getGuardarEmpleado() {
  var html = '';
  if ($('#IdEmpresa').val() == 0) {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-idempre").html(html);
    $('#IdEmpresa').focus();
    setTimeout(function () {
      $("#alert-idempre").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdNombres').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-nom").html(html);
    $('#IdNombres').focus();
    setTimeout(function () {
      $("#alert-nom").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdApellidos').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-ape").html(html);
    $('#IdApellidos').focus();
    setTimeout(function () {
      $("#alert-ape").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdDireccion').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-dr").html(html);
    $('#IdDireccion').focus();
    setTimeout(function () {
      $("#alert-dr").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdTelefono').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-tl").html(html);
    $('#IdTelefono').focus();
    setTimeout(function () {
      $("#alert-tl").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdEmail').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-em").html(html);
    $('#IdEmail').focus();
    setTimeout(function () {
      $("#alert-em").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var idempre = $("#IdEmpresa").val();
    var nom = $("#IdNombres").val();
    var ape = $("#IdApellidos").val();
    var dir = $("#IdDireccion").val();
    var tel = $("#IdTelefono").val();
    var ema = $("#IdEmail").val();
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
          url: "index.php?c=Admin&a=save_new_empleado",
          data: "IdEmpresa=" + idempre +
            "&Nombres=" + nom + "&Apellidos=" + ape +
            "&Direccion=" + dir + "&Telefono=" + tel + "&Email=" + ema,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
              });
              CerrarNuevoEmpleado();
              getListaEmpleados();
            } if (response == 2) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error al Registrar!.</b></div></div>',
              });
            }
          }
        });
      }
    });
  }
}
function getModificarEmpleado() {
  var html = '';
  if ($('#IdEmpresaM').val() == 0) {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-idempresa").html(html);
    $('#IdEmpresaM').focus();
    setTimeout(function () {
      $("#alert-idempresa").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdNombres_mod').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-nom").html(html);
    $('#IdNombres_mod').focus();
    setTimeout(function () {
      $("#alert-nom").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdApellidos_mod').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-ape").html(html);
    $('#IdApellidos_mod').focus();
    setTimeout(function () {
      $("#alert-ape").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdDireccion_mod').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-dr").html(html);
    $('#IdDireccion_mod').focus();
    setTimeout(function () {
      $("#alert-dr").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdTelefono_mod').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-tl").html(html);
    $('#IdTelefono_mod').focus();
    setTimeout(function () {
      $("#alert-tl").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdEmail_mod').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-em").html(html);
    $('#IdEmail_mod').focus();
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
      confirmButtonText: "Sí continuar"
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          type: "GET",
          dataType: 'json',
          url: "index.php?c=Admin&a=get_mod_empleado",
          data: "IdEmpleado=" + idemple + "&IdEmpresa=" + idempre +
            "&Nombres=" + nom + "&Apellidos=" + ape +
            "&Direccion=" + dir + "&Telefono=" + tel + "&Email=" + ema,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Modificado OK!.</b></div></div>',
              });
              setCerrarModificaEmpleado();
              getListaEmpleados();
            } if (response == 2) {
              Swal.fire({
                html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>Ha ocurrido un error al modificar!.</b></div></div>',
              });
            }
          }
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
    confirmButtonText: "Sí continuar"
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Admin&a=get_elim_empleado",
        data: "IdEmpleado=" + id_empleado,
        success: function (response) {
          response = JSON.stringify(response);
          if (response == 1) {
            Swal.fire({
              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>Eliminado OK!.</b></div></div>',
            });
            getListaEmpleados();
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
  getListaEmpleados();
});