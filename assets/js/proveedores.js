/********** VALIDACIONES **********/
function validarRUC(evt){
  // code is the decimal ASCII representation of the pressed key.
  var code = (evt.which) ? evt.which : evt.keyCode;
  if($('#IdRuc').val().length<=13||$('#IdRuc').val().length>13){
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
          setTimeout(function () {
          $("#alert-rc").fadeOut(500);
        }, 0);
        return true;
    } else{ // other keys.
        var html = "";
        html += '<div class="alert alert-danger">';
        html += '*Ingrese solo dígitos del [0] al [9]';
        html += '</div>';
        $("#alert-rc").html(html);      
        $("#alert-rc").fadeIn(1000);
        $('#IdRuc').focus();
      return false;
    } 
  } 
}

function validarRUCMod(evt){
  // code is the decimal ASCII representation of the pressed key.
  var code = (evt.which) ? evt.which : evt.keyCode;
  if($('#IdRuc_mod').val().length<=13 || $('#IdRuc_mod').val().length>13){
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
          setTimeout(function () {
          $("#alert-rc").fadeOut(500);
        }, 0);
        return true;
    } else{ // other keys.
        var html = "";
        html += '<div class="alert alert-danger">';
        html += '*Ingrese solo dígitos del [0] al [9]';
        html += '</div>';
        $("#alert-rc").html(html);      
        $("#alert-rc").fadeIn(1000);
        $('#IdRuc_mod').focus();
      return false;
    } 
  } 
}

function validarTelefono(evt){
  var code = (evt.which) ? evt.which : evt.keyCode;
  if($('#IdTelefono').val().length<10 || $('#IdTelefono').val()!=''){
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
          setTimeout(function () {
          $("#alert-tl").fadeOut(500);
        }, 0);
        return true;
    } else{ // other keys.
        var html = "";
        html += '<div class="alert alert-danger">';
        html += '*Ingrese solo dígitos del [0] al [9]';
        html += '</div>';
        $("#alert-tl").html(html);      
        $("#alert-tl").fadeIn(1000);
        $('#IdTelefono').focus();
      return false;
    } 
  }  else{
    alert('else');
  }
}

function validarTelefonoMod(evt){
  var code = (evt.which) ? evt.which : evt.keyCode;
  if($('#IdTelefono_mod').val().length<10 || $('#IdTelefono_mod').val()!=''){
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
          setTimeout(function () {
          $("#alert-tl").fadeOut(500);
        }, 0);
        return true;
    } else{ // other keys.
        var html = "";
        html += '<div class="alert alert-danger">';
        html += '*Ingrese solo dígitos del [0] al [9]';
        html += '</div>';
        $("#alert-tl").html(html);      
        $("#alert-tl").fadeIn(1000);
        $('#IdTelefono_mod').focus();
      return false;
    } 
  }  else{
    alert('else');
  }
}

function validarCorrecion(evt){
  // code is the decimal ASCII representation of the pressed key.
  var code = (evt.which) ? evt.which : evt.keyCode;
  if(code!='') { 
    setTimeout(function () {
      $("#alert-rs").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-dr").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-em").fadeOut(500);
    }, 0);
    setTimeout(function () {
      $("#alert-pp").fadeOut(500);
    }, 0);
    return true;// backspace.
  }  
}

/********** FIN VALIDACIONES **********/

function getListaProveedores() {
  var html = '';
  html += '<div style="overflow: scroll" class="cerrar-lprov">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += '<thead>';
  html += '<tr>';
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">R.U.C.</th>';
  html += '<th class="text-nowrap">Razón Social</th>';
  html += '<th class="text-nowrap">Dirección</th>';
  html += '<th class="text-nowrap">Teléfono</th>';
  html += '<th class="text-nowrap">Email</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += '</tr>';
  html += '</thead>';
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_proveedor',
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html += '<td width="1%" class="fw-bold text-dark">' + value.id_proveedor + '</td>';
        html += '<td>' + value.ruc + '</td>';
        html += '<td>' + value.proveedor + '</td>';
        html += '<td>' + value.direccion + '</td>';
        html += '<td>' + value.telefono + '</td>';
        html += '<td>' + value.email + '</td>';
        html += '<td>' + value.id_estado + '</td>';
        html += '<td>';
        html += '<a class="btn btn-outline-warning" onclick="setModificarProveedor(' + value.id_proveedor + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
        html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarProveedor(' + value.id_proveedor + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
        html += '</td>';
        html += '</tr>';
      });
      html += '</tbody>';
      html += '</table>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#lista-proveedores").html(html);
      $('#data-table-select').DataTable({
        "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json"},
        select: false,
        responsive: true
      });
    }
  });
}

function setProveedor() {
    //desarrollo de interfaz vacia
    $(".cerrar-lprov").hide();
    $(".cerrar-prov").hide();
    var html = "";
    html += '<div class="cerrar-prov">';
    html += '<div class="note note-info">';
    html += '<div class="note-content">';
    html += "<form>";
    html += '<div class="form-group">';
    html += '<div class="row">';
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">R.U.C.:</b> </br>';
    html += '<input type="text"   class="form-control" minlength="13" onkeypress="return validarRUC(event)" placeholder="Ingrese R.U.C." id="IdRuc">';
    html += '<div id="alert-rc"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Razón Social:</b> </br>';
    html += '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Razón Social" class="form-control" id="IdRazonSocial">';
    html += '<div id="alert-rs"></div>';
    html += "</div>";
    html += "</div>";

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Dirección:</b> </br>';
    html += '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Dirección"  class="form-control" id="IdDireccion">';
    html += '<div id="alert-dr"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Teléfono:</b> </br>';
    html += '<input type="text" onkeypress="return validarTelefono(event)" placeholder="Ingrese Teléfono" class="form-control" id="IdTelefono">';
    html += '<div id="alert-tl"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Email:</b> </br>';
    html += '<input type="email" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Email" class="form-control" id="IdEmail">';
    html += '<div id="alert-em"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="text-center">';
    html +=
      '<a class="btn btn-outline-danger" onclick="CerrarProveedor();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
    html +=
      '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarProveedor();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
    html += "</div>";
  
    html += "</div>";
    html += "</div>";
    html += "</form>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
    $("#new-proveedor").html(html); //enlace de interfaz con la principal
}
  function CerrarProveedor() {
    $(".cerrar-prov").hide();
    getListaProveedores();
  }
  function CerrarNuevoProveedor() {
    $(".cerrar-prov").hide();
    getListaProveedores();
  }
  function getGuardarProveedor() {
    var html = '';
    if ($('#IdRuc').val() == '') {
      html += '<div class="alert alert-danger">';
      html += '*Campo requerido';
      html += '</div>';
      $("#alert-rc").html(html);    
      $("#alert-rc").fadeIn(500);
      $('#IdRuc').focus();
      return false;
    } else if($('#IdRuc').val().length !=13 || $('#IdRuc').val().length>13){
      html += '<div class="alert alert-danger">';
      html += '*R.U.C. posee 13 dígitos.  Actualmente tiene: '+$('#IdRuc').val().length;
      html += '</div>';
      $("#alert-rc").html(html);
      $("#alert-rc").fadeIn(500);
      $('#IdRuc').focus();
      return false;
    }else{
      setTimeout(function () {
        $("#alert-rc").fadeOut(500);
      }, 0);
    } 
    
    if ($('#IdRazonSocial').val() == '') {
      html += '<div class="alert alert-danger">';
      html += '*Campo requerido';
      html += '</div>';
      $("#alert-rs").html(html);
      $('#IdRazonSocial').focus();      
      $("#alert-rs").fadeIn(500);
      return false;
    } else {
      setTimeout(function () {
        $("#alert-rs").fadeOut(500);
      }, 0);
    }   
    
    if ($('#IdDireccion').val() == '') {
      html += '<div class="alert alert-danger">';
      html += '*Campo requerido';
      html += '</div>';
      $("#alert-dr").html(html);
      $('#IdDireccion').focus();      
      $("#alert-dr").fadeIn(500);
      return false;
    } else {
      setTimeout(function () {
        $("#alert-dr").fadeOut(500);
      }, 0);
    }         
    
    if ($('#IdTelefono').val() == '') {
      html += '<div class="alert alert-danger">';
      html += '*Campo requerido';
      html += '</div>';
      $("#alert-tl").html(html);    
      $("#alert-tl").fadeIn(500);
      $('#IdTelefono').focus();
        return false;
    }else if($('#IdTelefono').val().length <9){
      html += '<div class="alert alert-danger">';
      html += '*Ingrese un teléfono fijo con código de area o un teléfono celular';
      html += '</div>';
      $("#alert-tl").html(html);
      $("#alert-tl").fadeIn(500);
      $('#IdTelefono').focus();
      return false;
    }else if($('#IdTelefono').val().length > 10){
      html += '<div class="alert alert-danger">';
      html += '*Ingrese un teléfono fijo o un teléfono celular válido';
      html += '</div>';
      $("#alert-tl").html(html);
      $("#alert-tl").fadeIn(500);
      $('#IdTelefono').focus();
      return false;
    }else{
      setTimeout(function () {
        $("#alert-tl").fadeOut(500);
      }, 0);
    }
    
    if ($('#IdEmail').val() == '') {
      html += '<div class="alert alert-danger">';
      html += '*Campo requerido';
      html += '</div>';
      $("#alert-em").html(html);
      $('#IdEmail').focus();      
      $("#alert-em").fadeIn(500);
        return false;
    }else if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test($('#IdEmail').val())==0){
      html += '<div class="alert alert-danger">';
      html += '*Email inválido';
      html += '</div>';
      $("#alert-em").html(html);
      $('#IdEmail').focus();      
      $("#alert-em").fadeIn(500);
        return false;
    }else {
      setTimeout(function () {
        $("#alert-em").fadeOut(500);
      }, 0);
    } 

  if($('#IdRuc').val() != '' && $('#IdRazonSocial').val() != '' && $('#IdDireccion').val() != '' && $('#IdTelefono').val() != '' && $('#IdEmail').val() != ''){
      var rc = $("#IdRuc").val();
      var re = $("#IdRazonSocial").val();      
      var dr = $("#IdDireccion").val();
      var tl = $("#IdTelefono").val();
      var em = $("#IdEmail").val();
      Swal.fire({
        title: "¡ATENCIÓN CONFIRMAR REGISTRO!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
			  cancelButtonText:"Cancelar",
        confirmButtonText: "Confirmar"
      }).then((result) => {
        if (result.isConfirmed) {
          $.ajax({
            type: "GET",
            dataType: 'json',
            url: "index.php?c=Admin&a=save_new_proveedor",
            data: 
              "Ruc=" + rc +
              "&RazonSocial=" + re +
              "&Direccion=" + dr +
              "&Telefono=" + tl + 
              "&Email=" + em,
            success: function (response) {
              response = JSON.stringify(response);
              if (response == 1) {
                Swal.fire({
                  html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
                });
                CerrarNuevoProveedor();
              } if (response == 2) {
                Swal.fire({
                  html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>REGISTRO INCORRECTO</b></div></div>',
                });
              }
            }
          });
        }
      });
    }
  }
  
  function CerrarModificarProveedor() {
      $(".cerrar-prov").hide();
      getListaProveedores();
  }
  function CerrarListaProveedores(){
    $(".cerrar-lprov").hide();
  }
  function setModificarProveedor(id_proveedor) {
    CerrarListaProveedores();
    $(".cerrar-prov").hide();
    var html = '';
    html += '<div class="cerrar-prov">';
    html += '<div class="note note-warning">';
    html += '<div class="note-content">';
    html += '<form>';
    html += '<div class="form-group">';
    html += '<div class="row">';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">R.U.C.:</b> </br>';
    html += '<input type="text"   class="form-control" minlength="13" onkeypress="return validarRUCMod(event)" placeholder="Ingrese R.U.C." id="IdRuc_mod">';
    html += '<div id="alert-rc"></div>';
    html += "</div>";
    html += "</div>";

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Razón Social:</b> </br>';
    html += '<input type="hidden" class="form-control" id="IdProveedor">';    
    html += '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Razón Social" class="form-control" id="IdRazonSocial_mod">';
    html += '<div id="alert-rs"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Dirección:</b> </br>';
    html += '<input type="text" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Dirección"  class="form-control" id="IdDireccion_mod">';
    html += '<div id="alert-dr"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Teléfono:</b> </br>';
    html += '<input type="text" onkeypress="return validarTelefonoMod(event)" placeholder="Ingrese Teléfono" class="form-control" id="IdTelefono_mod">';
    html += '<div id="alert-tl"></div>';
    html += "</div>";
    html += "</div>";
  
    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Email:</b> </br>';
    html += '<input type="email" onkeypress="return validarCorrecion(event)" placeholder="Ingrese Email" class="form-control" id="IdEmail_mod">';
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
    html += '<a class="btn btn-outline-danger" onclick="CerrarModificarProveedor();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
    html += '&nbsp;<a class="btn btn-outline-primary" title="Modificar" onclick="getModificarProveedor();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
    html += '</div>';
  
      html += '</div>';
      html += '</div>';
      html += '</form>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#panel-mod-proveedor").html(html);
      $('.default-select2').select2();
      getEstadosModificar();
      getPrepareModificarProveedor(id_proveedor);
  }
  function getPrepareModificarProveedor(id_proveedor) {
      $.ajax({
          type: "GET",
          dataType: 'json',
          url: 'index.php?c=Admin&a=get_proveedor_id_modificar',
          data: "IdProveedor=" + id_proveedor,
          success: function (response) {
              $.each(response, function (key, value) {
                  $("#IdProveedor").val(value.id_proveedor);
                  $("#IdRuc_mod").val(value.ruc);        
                  $("#IdRazonSocial_mod").val(value.proveedor);                                    
                  $("#IdDireccion_mod").val(value.direccion);
                  $("#IdTelefono_mod").val(value.telefono);
                  $("#IdEmail_mod").val(value.email);
                  $("#IdEstado").val(value.id_estado).trigger('change');  
              });
          }
      });
  }
  function getModificarProveedor() {
      var html = '';
      if ($('#IdRuc_mod').val() == '') {
        html += '<div class="alert alert-danger">';
        html += '*Campo requerido';
        html += '</div>';
        $("#alert-rc").html(html);    
        $("#alert-rc").fadeIn(500);
        $('#IdRuc_mod').focus();
        return false;
      } else if($('#IdRuc_mod').val().length !=13 || $('#IdRuc_mod').val().length>13){
        html += '<div class="alert alert-danger">';
        html += '*R.U.C. posee 13 dígitos.  Actualmente tiene: '+$('#IdRuc_mod').val().length;
        html += '</div>';
        $("#alert-rc").html(html);
        $("#alert-rc").fadeIn(500);
        $('#IdRuc_mod').focus();
        return false;
      }else{
        setTimeout(function () {
          $("#alert-rc").fadeOut(500);
        }, 0);
      }       
      
      if ($('#IdRazonSocial_mod').val() == '') {
        html += '<div class="alert alert-danger">';
        html += '*Campo requerido';
        html += '</div>';
        $("#alert-rs").html(html);
        $('#IdRazonSocial_mod').focus();      
        $("#alert-rs").fadeIn(500);
        return false;
      } else {
        setTimeout(function () {
          $("#alert-rs").fadeOut(500);
        }, 0);
      } 
    
      if ($('#IdDireccion_mod').val() == '') {
        html += '<div class="alert alert-danger">';
        html += '*Campo requerido';
        html += '</div>';
        $("#alert-dr").html(html);
        $('#IdDireccion_mod').focus();      
        $("#alert-dr").fadeIn(500);
        return false;
      } else {
        setTimeout(function () {
          $("#alert-dr").fadeOut(500);
        }, 0);
      } 

      if ($('#IdTelefono_mod').val() == '') {
        html += '<div class="alert alert-danger">';
        html += '*Campo requerido';
        html += '</div>';
        $("#alert-tl").html(html);    
        $("#alert-tl").fadeIn(500);
        $('#IdTelefono_mod').focus();
        return false;
      }else if($('#IdTelefono_mod').val().length <9){
        html += '<div class="alert alert-danger">';
        html += '*Ingrese un teléfono fijo con código de area o un teléfono celular';
        html += '</div>';
        $("#alert-tl").html(html);
        $("#alert-tl").fadeIn(500);
        $('#IdTelefono_mod').focus();
        return false;
      }else if($('#IdTelefono_mod').val().length > 10){
        html += '<div class="alert alert-danger">';
        html += '*Ingrese un teléfono fijo o un teléfono celular válido';
        html += '</div>';
        $("#alert-tl").html(html);
        $("#alert-tl").fadeIn(500);
        $('#IdTelefono_mod').focus();
        return false;
      }else{
        setTimeout(function () {
          $("#alert-tl").fadeOut(500);
        }, 0);
      }

      if ($('#IdEmail_mod').val() == '') {
        html += '<div class="alert alert-danger">';
        html += '*Campo requerido';
        html += '</div>';
        $("#alert-em").html(html);
        $('#IdEmail_mod').focus();      
        $("#alert-em").fadeIn(500);
          return false;
      }else if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test($('#IdEmail_mod').val())==0){
        html += '<div class="alert alert-danger">';
        html += '*Email inválido';
        html += '</div>';
        $("#alert-em").html(html);
        $('#IdEmail_mod').focus();      
        $("#alert-em").fadeIn(500);
          return false;
      }else {
        setTimeout(function () {
          $("#alert-em").fadeOut(500);
        }, 0);
      }
    
      if ($('#IdEstado').val() == 0) {  
        html += '<div class="alert alert-danger">';
        html += '*Campo requerido';
        html += '</div>';
        $("#alert-es").html(html);
        $("#alert-es").fadeIn(500);   
        $('#IdEstado').focus();            
        return false;
      }else{
        setTimeout(function () {
          $("#alert-es").fadeOut(500);
        }, 0);
      } 

      
     if($('#IdRuc_mod').val() != '' && $('#IdRazonSocial_mod').val() != '' && $('#IdDireccion_mod').val() != '' && $('#IdTelefono_mod').val() != '' && $('#IdEmail_mod').val() != '' && $('#IdEstado').val() != 0){
          var idprove = $("#IdProveedor").val();
          var rc = $("#IdRuc_mod").val();
          var rs = $("#IdRazonSocial_mod").val();            
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
            cancelButtonText:"Cancelar",
            confirmButtonText: "Confirmar"
          }).then((result) => {
              if (result.isConfirmed) {
                  $.ajax({
                      type: "GET",
                      dataType: 'json',
                      url: "index.php?c=Admin&a=get_mod_proveedor",
                      data: 
                        "IdProveedor=" + idprove + 
                        "&Ruc=" + rc +
                        "&RazonSocial=" + rs +                                                  
                        "&Direccion=" + dir +
                        "&Telefono=" + tel + 
                        "&Email=" + ema+
                        "&IdEstado="+es,
                      success: function (response) {
                          response = JSON.stringify(response);
                          if (response == 1) {
                              Swal.fire({
                                  html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>ACTUALIZACIÓN CORRECTA</b></div></div>',
                              });
                              CerrarModificarProveedor();
                          } if (response == 2) {
                              Swal.fire({
                                  html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>ACTUALIZACIÓN INCORRECTA</b></div></div>',
                              });
                          }
                      }
                  });
              }
          });
      }
  }
  function getEliminarProveedor(id_proveedor) {
      Swal.fire({
        title: "¡ATENCIÓN CONFIRMAR ELIMINACIÓN!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
			  cancelButtonText:"Cancelar",
        confirmButtonText: "Confirmar"
      }).then((result) => {
          if (result.isConfirmed) {
              $.ajax({
                  type: "GET",
                  dataType: 'json',
                  url: "index.php?c=Admin&a=get_elim_proveedor",
                  data: "IdProveedor=" + id_proveedor,
                  success: function (response) {
                      response = JSON.stringify(response);
                      if (response == 1) {
                          Swal.fire({
                              html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>ELIMINACIÓN CORRECTA</b></div></div>',
                          });
                          CerrarModificarProveedor();
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
    getListaProveedores();
  });