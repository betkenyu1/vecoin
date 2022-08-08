function setCliente() {
    //desarrollo de interfaz vacia
    $(".cerrar-lclie").hide();
    $(".cerrar-clie").hide();
    var html = "";
    html += '<div class="cerrar-clie">';
    html += '<div class="note note-info">';
    html += '<div class="note-content">';
    html += "<form>";
    html += '<div class="form-group">';
    html += '<div class="row">';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Ruc:</b> </br>';
    html += '<input type="text" class="form-control" id="IdRuc">';
    html += '<div id="alert-nc"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Razon Social:</b> </br>';
    html += '<input type="text" class="form-control" id="IdRazonSocial">';
    html += '<div id="alert-rs"></div>';
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

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Tiempo de crédito:</b> </br>';
    html += '<input type="text" class="form-control" id="IdTiempocredito">';
    html += '<div id="alert-em"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="text-center">';
    html +=
      '<a class="btn btn-outline-danger" onclick="CerrarNuevoCliente();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
    html +=
      '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarCliente();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
    html += "</div>";
  
    html += "</div>";
    html += "</div>";
    html += "</form>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    $("#new-cliente").html(html); //enlace de interfaz con la principal
  }
  function CerrarNuevoCliente() {
    $(".cerrar-clie").hide();
    getListaClientes();
  }
  function getGuardarCliente() {
    var html = '';
    if ($('#IdRuc').val() == '') {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-rc").html(html);
      $('#IdRuc').focus();
      setTimeout(function () {
        $("#alert-rc").fadeOut(1500);
      }, 3000);
      return false;
    } 
    if ($('#IdRazonSocial').val() == 0) {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-re").html(html);
      $('#IdRazonSocial').focus();
      setTimeout(function () {
        $("#alert-re").fadeOut(1500);
      }, 3000);
      return false;
    } 
    if ($('#IdDireccion').val() == '') {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-dr").html(html);
      $('#IdDireccion').focus();
      setTimeout(function () {
        $("#alert-dr").fadeOut(1500);
      }, 3000);
      return false;
    } 
    if ($('#IdTelefono').val() == '') {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-tl").html(html);
      $('#IdTelefono').focus();
      setTimeout(function () {
        $("#alert-tl").fadeOut(1500);
      }, 3000);
      return false;
    } 
    if ($('#IdEmail').val() == '') {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-em").html(html);
      $('#IdEmail').focus();
      setTimeout(function () {
        $("#alert-em").fadeOut(1500);
      }, 3000);
      return false;
    } 
    if ($('#IdTiempocredito').val() == '') {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-tcr").html(html);
      $('#IdTiempocredito').focus();
      setTimeout(function () {
        $("#alert-tcr").fadeOut(1500);
      }, 3000);
      return false;
    } else {
      var rc = $("#IdRuc").val();
      var re = $("#IdRazonSocial").val();
      var dr = $("#IdDireccion").val();
      var tl = $("#IdTelefono").val();
      var em = $("#IdEmail").val();
      var tcr = $("#IdTiempocredito").val();
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
            url: "index.php?c=Admin&a=save_new_cliente",
            data: "Ruc=" + rc 
            + "&RazonSocial=" + re
            + "&Direccion=" + dr 
            + "&Telefono=" + tl 
            + "&Email=" + em
            + "&Tiempocredito=" + tcr ,
            success: function (response) {
              response = JSON.stringify(response);
              if (response == 1) {
                Swal.fire({
                  html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
                });
                CerrarNuevoCliente();
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
  }
  function getListaClientes() {
    var html = '';
    html += '<div class="cerrar-lclie">';
    html += '<div class="note note-blue">';
    html += '<div class="note-content">';
    html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
    html += '<thead>';
    html += '<tr>';
    html += '<th width="1%"></th>';
    html += '<th class="text-nowrap">Ruc</th>';
    html += '<th class="text-nowrap">Razon Social</th>';
    html += '<th class="text-nowrap">Dirección</th>';
    html += '<th class="text-nowrap">Telefono</th>';
    html += '<th class="text-nowrap">Email</th>';
    html += '<th class="text-nowrap">Tiempo de Crédito</th>';
    html += '<th class="text-nowrap">Estado</th>';
    html += '<th class="text-nowrap">Acciones</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: 'index.php?c=Admin&a=get_clientes',
      success: function (response) {
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';
          html += '<td width="1%" class="fw-bold text-dark">' + value.id_cliente + '</td>';
          html += '<td>' + value.ruc + '</td>';
          html += '<td>' + value.razon_social + '</td>';
          html += '<td>' + value.direccion + '</td>';
          html += '<td>' + value.telefono + '</td>';
          html += '<td>' + value.email + '</td>';
          html += '<td>' + value.tiempo_credito + '</td>';
          html += '<td>' + value.id_estado + '</td>';
          html += '<td>';
          html += '<a class="btn btn-outline-warning" onclick="setModificarCliente(' + value.id_cliente + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
          html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarCliente(' + value.id_cliente + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
          html += '</td>';
          html += '</tr>';
        });
        html += '</tbody>';
        html += '</table>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        $("#lista-clientes").html(html);
        $('#data-table-select').DataTable({
          select: true,
          responsive: true
        });
      }
    });
  }
  function CerrarModificarCliente() {
      $(".cerrar-clie").hide();
      getListaClientes();
  }
  function CerrarListaCliente(){
    $(".cerrar-lclie").hide();
  }
  function setModificarCliente(id_cliente) {
      CerrarListaCliente();
      $(".cerrar-clie").hide();
      var html = '';
      html += '<div class="cerrar-clie">';
      html += '<div class="note note-warning">';
      html += '<div class="note-content">';
      html += '<form>';
      html += '<div class="form-group">';
      html += '<div class="row">';

      html += '<div class="col-md-6">';
      html += '<div class="mb-10px">';
      html += '<b style="color: #000000;">Ruc:</b> </br>';
      html += '<input type="text" class="form-control" id="IdRuc_mod">';
      html += '<div id="alert-rc"></div>';
      html += "</div>";
      html += "</div>";
  
      html += '<div class="col-md-6">';
      html += '<div class="mb-10px">';
      html += '<b style="color: #000000;">Razon Social:</b> </br>';
      html += '<input type="hidden" class="form-control" id="IdCliente">';
      html += '<input type="text" class="form-control" id="IdRazonSocial_mod">';
      html += '<div id="alert-rs"></div>';
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


      html += '<div class="col-md-6">';
      html += '<div class="mb-10px">';
      html += '<b style="color: #000000;">Tiempo de Credito:</b> </br>';
      html += '<input type="text" class="form-control" id="IdTiempocredito_mod">';
      html += '<div id="alert-em"></div>';
      html += "</div>";
      html += "</div>";

      html += '<div class="text-center">';
      html += '<a class="btn btn-outline-danger" onclick="CerrarModificarCliente();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
      html += '&nbsp;<a class="btn btn-outline-primary" title="Modificar" onclick="getModificarCliente();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
      html += '</div>';
  
      html += '</div>';
      html += '</div>';
      html += '</form>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#panel-mod-cliente").html(html);
      $('.default-select2').select2();
    getPrepareModificarCliente(id_cliente);
  }
  function getPrepareModificarCliente(id_cliente) {
      $.ajax({
          type: "GET",
          dataType: 'json',
          url: 'index.php?c=Admin&a=get_cliente_id',
          data: "IdCliente=" + id_cliente,
          success: function (response) {
              $.each(response, function (key, value) {
                  $("#IdCliente").val(value.id_cliente);
                  $("#IdRuc_mod").val(value.ruc);
                  $("#IdRazonSocial_mod").val(value.razon_social);
                  $("#IdDireccion_mod").val(value.direccion);
                  $("#IdTelefono_mod").val(value.telefono);
                  $("#IdEmail_mod").val(value.email);
                  $("#IdTiempocredito_mod").val(value.tiempo_credito);
              });
          }
      });
  }
  function getModificarCliente() {
      var html = '';
      if ($('#IdRuc').val() == '') {
        html += '<div class="alert alert-danger">';
        html += 'Este campo es obligatorio!.';
        html += '</div>';
        $("#alert-rc").html(html);
        $('#IdRuc').focus();
        setTimeout(function () {
          $("#alert-rc").fadeOut(1500);
        }, 3000);
        return false;
      }
      if ($('#IdRazonSocial').val() == "") {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-rs").html(html);
      $('#IdRazonSocial').focus();
      setTimeout(function () {
        $("#alert-rs").fadeOut(1500);
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
    } if ($('#IdTiempocredito').val() == '') {
      html += '<div class="alert alert-danger">';
      html += 'Este campo es obligatorio!.';
      html += '</div>';
      $("#alert-tcr").html(html);
      $('#IdTiempocredito').focus();
      setTimeout(function () {
        $("#alert-tcr").fadeOut(1500);
      }, 3000);
      return false;
      } else {
          var idclie = $("#IdCliente").val();
          var rc = $("#IdRuc_mod").val();
          var rs = $("#IdRazonSocial_mod").val();
          var dir = $("#IdDireccion_mod").val();
          var tel = $("#IdTelefono_mod").val();
          var ema = $("#IdEmail_mod").val();
          var tcr = $("#IdTiempocredito_mod").val();
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
                      url: "index.php?c=Admin&a=get_mod_cliente",
                      data: 
                        "IdCliente=" + idclie + 
                        "&Ruc=" + rc + 
                        "&RazonSocial=" + rs + 
                        "&Direccion=" + dir +
                        "&Telefono=" + tel + 
                        "&Email=" + ema + 
                        "&Tiempocredito=" + tcr,
                      success: function (response) {
                          response = JSON.stringify(response);
                          if (response == 1) {
                              Swal.fire({
                                  html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Modificado OK!.</b></div></div>',
                              });
                              CerrarModificarCliente();
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
  function getEliminarCliente(id_cliente) {
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
                  url: "index.php?c=Admin&a=get_elim_cliente",
                  data: "IdCliente=" + id_cliente,
                  success: function (response) {
                      response = JSON.stringify(response);
                      if (response == 1) {
                          Swal.fire({
                              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>Eliminado OK!.</b></div></div>',
                          });
                          CerrarModificarCliente();
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
    getListaClientes();
  });