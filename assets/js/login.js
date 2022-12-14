function login() {
  var html = "";
  var usr = $("#id_usuario").val();
  var pass = $("#id_password").val();

  if (usr == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-usr").html(html);
    $("#id_usuario").focus();
    setTimeout(function () {
      $("#alert-usr").fadeOut(1500);
    }, 3000);
    return false;
  }

  if (pass == "") {
    html += '<div class="alert alert-danger">';
    html += "*Campo requerido";
    html += "</div>";
    $("#alert-pass").html(html);
    $("#id_password").focus();
    setTimeout(function () {
      $("#alert-pass").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    $.ajax({
      type: "GET",
      url: "index.php?c=Login&a=login",
      data: "usuario=" + usr + "&password=" + pass,
      success: function (response) {
        //        if (response == 1 || response == 2 || response == 3 || response == 4) {
        if (response == 1 || response == 2 || response == 3 || response == 4) {
          /*setTimeout(function () {
            html += '<div class="note note-success" id="alert-med">';
            html += '<div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div>';
            html += '<div class="note-content">';
            html += "<b>Bienvenido al sistema</b>";
            html += "</div>";
            html += "</div>";
            $("#mensaje_2").html(html);
            $("#alert-med").fadeOut(5000);
            
          }, 0);*/
          window.location.href = "index.php?c=Index&a=home";
        }
        if (response == 0) {
          setTimeout(function () {
            //alert('12312312');            
            html += '<div class="note note-danger" id="alert-reg">';
            html += '<div class="note-icon"><i class="fa-solid fa-hand-dots"></i></div>';
            html += '<div class="note-content">';
            html += "<b>*Verifique su usuario</b>";
            html += "</div>";
            html += "</div>";
            $("#mensaje").html(html);
            $("#alert-reg").fadeOut(5000);
          }, 0);
        }
        if (response == 99) {
          setTimeout(function () {
            html += '<div class="note note-danger" id="alert-reg">';
            html += '<div class="note-icon"><i class="fa-solid fa-hand-dots"></i></div>';
            html += '<div class="note-content">';
            html += "<b>*Verifique su contrase??a de acceso</b>";
            html += "</div>";
            html += "</div>";
            $("#mensaje_2").html(html);
            $("#alert-reg").fadeOut(5000);
          }, 0);
        }
      },
    });
  }
}


$("#id_password").keypress(function (e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 13 && $(this).val() != "") {
    login();
  }
});


function RecuperarPassword() {
  var user = $('#id_usuario').val();
  $.ajax({
    type: "POST",
    dataType: 'json',
    url: "index.php?c=Admin&a=get_recuperarcontrasena",
    data: "Usuario=" + user,
    success: function (response) {
      $.each(response, function (key, value) {
        $('#IdUsuario').val(value.id_usuario);
        $('#Usuario').val(value.usuario);
      });
    }
  });
  $("#modal-mod-usuario").modal("show");
}



function Password() {
  var user = $('#IdUsuario').val();
  var mc = $('#ModContrasena').val();
  var vc = $('#ValModContrasena').val();
  if (mc != vc) {
    alert('Las contrase??as no coinciden');
  }
  else {
    alert('Las contrase??as coinciden');
  }
  $.ajax({
    type: "POST",
    dataType: 'json',
    url: "index.php?c=Admin&a=get_password",
    data: "IdUsuario=" + user + "&Password=" + mc,
    success: function (response) {
      $.each(response, function (key, value) {
        $('#IdUsuario').val(value.id_usuario);
        $('#Usuario').val(value.usuario);
      });
    }
  });
  $("#modal-mod-usuario").modal("hide");
}