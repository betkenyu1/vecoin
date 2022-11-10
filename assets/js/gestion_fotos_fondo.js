/********** VALIDACIONES **********/
function capturarID(iduser) {
  $("#id_usuario").val(iduser);
}

function capturarIDFondo(iduser) {
  $("#id_usuario").val(iduser);
}
function SubirFile() {
  var iduser = $("#id_usuario").val();
  var ruta = $("#IdFoto").val();
  //alert(ruta);
  var html = "";
  if ($("#IdFoto").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Seleccione un archivo!.";
    html += "</div>";
    $("#alert-file").html(html);
    $("#IdFoto").focus();
    setTimeout(function () {
      $("#alert-file").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var formData = new FormData();
    var files = $("#IdFoto")[0].files[0];
    formData.append("IdFoto", files);
    formData.append("idusuario", iduser);

    $.ajax({
      url: "index.php?c=Admin&a=subir_file",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        if (response == 0) {
          Swal.fire({
            html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-hand-dots"></i></div><div class="note-content"><b>Éste registro ya existe!.</b></div></div>',
          });
        }
        if (response == 1) {
          Swal.fire({
            html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>FOTO SUBIDA CORRECTAMENTE</b></div></div>',
          });
          $("#IdDesDocumento").val("");
          $("#image").val("");
        }
        if (response == 2) {
          Swal.fire({
            html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ERROR AL CARGAR FOTO</b></div></div>',
          });
        }
      },
    });
    return false;
  }
}

function SubirFileFondo() {
  var iduser = $("#id_usuario").val();
  var ruta = $("#IdFotoFondo").val();
  //alert(ruta);
  var html = "";
  if ($("#IdFotoFondo").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Seleccione un archivo!.";
    html += "</div>";
    $("#alert-file").html(html);
    $("#IdFotoFondo").focus();
    setTimeout(function () {
      $("#alert-file").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var formData = new FormData();
    var files = $("#IdFotoFondo")[0].files[0];
    formData.append("IdFotoFondo", files);
    formData.append("idusuario", iduser);

    $.ajax({
      url: "index.php?c=Admin&a=subir_file_fondo",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        if (response == 0) {
          Swal.fire({
            html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-hand-dots"></i></div><div class="note-content"><b>Éste registro ya existe!.</b></div></div>',
          });
        }
        if (response == 1) {
          Swal.fire({
            html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>FOTO SUBIDA CORRECTAMENTE</b></div></div>',
          });
          $("#IdDesDocumento").val("");
          $("#image").val("");
        }
        if (response == 2) {
          Swal.fire({
            html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ERROR AL CARGAR FOTO</b></div></div>',
          });
        }
      },
    });
    return false;
  }
}

/********** FIN VALIDACIONES **********/

function getListaUsuarios() {
  $(".cerrar-user_mod").hide();
  $(".cerrar-nuser").hide();
  $(".cerrar-pass_mod").hide();
  var html = "";
  html += '<div class="cerrar-luser">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle" style="width:100%">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Usuario</th>';
  html += '<th class="text-nowrap">Rol</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_usuarios",
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html +=
          '<td width="1%" class="fw-bold text-dark">' +
          value.id_usuario +
          "</td>";
        html += "<td>" + value.razon_social + "</td>";
        html += "<td>" + value.Nombres + "</td>";
        html += "<td>" + value.usuario + "</td>";
        html += "<td>" + value.rol + "</td>";
        html += "<td>" + value.estado + "</td>";
        html += "<td>";
        html +=
          '<a data-bs-toggle="modal" data-bs-target="#cargaFotoPerfil" onclick="capturarID(' +
          value.id_usuario +
          ')" class="btn btn-outline-warning"  title="Modificar Foto Perfil"><i class="material-icons">account_box</i></a>';
        html +=
          '&nbsp;<a data-bs-toggle="modal" data-bs-target="#cargaFotoFondo" onclick="capturarIDFondo(' +
          value.id_usuario +
          ')" class="btn btn-outline-success"  title="Modificar Foto Fondo"><i class="material-icons">contact_emergency</i></a>';
        //html += '&nbsp;<a class="btn btn-outline-success" onclick="setModificarPass(' + value.id_usuario + ');" title="Modificar Fondo"><i class="material-icons">contact_emergency</i></a>';
        html += "</td>";
        html += "</tr>";
      });
      html += "</tbody>";
      html += "</table>";
      html += "</div>";
      html += "</div>";
      html += "</div>";
      $("#lista-usuarios").html(html);
      var dtb = $("#data-table-select").DataTable({
        language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
        select: false,
        order: [[2, "asc"]],
        responsive: true,
      });
      dtb.column(0).visible(false);
      dtb.column(1).visible(false);
    },
  });
}

$(document).ready(function () {
  getListaUsuarios();
});
