/***************** VALIDACIONES*****************/
function validarRUC(evt){
  // code is the decimal ASCII representation of the pressed key.
  var code = (evt.which) ? evt.which : evt.keyCode;
  if($('#IdRuc').val().length<=13||$('#IdRuc').val().length>13){
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // ES UN NUMERO
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
/***************** FIN VALIDACIONES*****************/
function getListaEmpresas() {
  var html = '';
  html += '<div style="overflow:scroll" class="cerrar-lemp">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += '<thead>';
  html += '<tr>';
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">R.U.C.</th>';
  html += '<th class="text-nowrap">Razón Social</th>';
  html += '<th class="text-nowrap">Nombre Comercial</th>';
  html += '<th class="text-nowrap">Dirección</th>';
  html += '<th class="text-nowrap">Telefono</th>';
  html += '<th class="text-nowrap">Email</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += '</tr>';
  html += '</thead>';
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_empresas',
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html += '<td width="1%" class="fw-bold text-dark">' + value.id_empresa + '</td>';
        html += '<td>' + value.ruc + '</td>';
        html += '<td>' + value.razon_social + '</td>';
        html += '<td>' + value.nombre_comercial + '</td>';
        html += '<td>' + value.direccion + '</td>';
        html += '<td>' + value.telefono + '</td>';
        html += '<td>' + value.email + '</td>';
        html += '<td>' + value.id_estado + '</td>';
        html += '<td>';
        html += '<a class="btn btn-outline-warning" onclick="setModificarEmpresa(' + value.id_empresa + ');" title="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a>';
        html += '&nbsp;<a class="btn btn-outline-danger" onclick="getEliminarEmpresa(' + value.id_empresa + ');" title="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a>';
        html += '</td>';
        html += '</tr>';
      });
      html += '</tbody>';
      html += '</table>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#lista-empresas").html(html);
      $('#data-table-select').DataTable({
        "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json"},
        select: false,
        responsive: true
        
      });
    }
  });
}

function setEmpresa() {
  //desarrollo de interfaz vacia
  $(".cerrar-lemp").hide();
  $(".cerrar-emp").hide();
  var html = "";
  html += '<div class="cerrar-emp">';
  html += '<div class="note note-info">';
  html += '<div class="note-content">';
  html += "<form>";
  html += '<div class="form-group">';
  html += '<div class="row">';
  
  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">R.U.C.:</b> </br>';
  html += '<input type="text" class="form-control" minlength="13" placeholder="Ingrese R.U.C." onkeypress="return validarRUC(event)" id="IdRuc">';
  html += '<div id="alert-rc"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Razón Social:</b> </br>';
  html += '<input type="text" class="form-control" id="IdRazonSocial">';
  html += '<div id="alert-rs"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Nombre Comercial:</b> </br>';
  html += '<input type="text" class="form-control" id="IdNombreComercial">';
  html += '<div id="alert-nc"></div>';
  html += "</div>";
  html += "</div>";


  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Dirección:</b> </br>';
  html += '<input type="text" class="form-control" id="IdDireccion">';
  html += '<div id="alert-dr"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Teléfono:</b> </br>';
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
    '<a class="btn btn-outline-danger" onclick="CerrarNuevoEmpresa();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
  html +=
    '&nbsp;<a class="btn btn-outline-primary" title="Registrar" onclick="getGuardarEmpresa();"><i class="fa-solid fa-save" aria-hidden="true"></i> Registrar</a>';
  html += "</div>";

  html += "</div>";
  html += "</div>";
  html += "</form>";
  html += "</div>";
  html += "</div>";
  html += "</div>";
  $("#new-empresa").html(html); //enlace de interfaz con la principal
}
function CerrarNuevoEmpresa() {
  $(".cerrar-emp").hide();
  getListaEmpresas();
}
function getGuardarEmpresa() {
  var html = '';
  if ($('#IdRazonSocial').val() == 0) {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-rs").html(html);
    $('#IdRazonSocial').focus();
    setTimeout(function () {
      $("#alert-rs").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdNombreComercial').val() == 0) {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-ump").html(html);
    $('#IdNombreComercial').focus();
    setTimeout(function () {
      $("#alert-ump").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdRuc').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-rc").html(html);
    $('#IdRuc').focus();
    setTimeout(function () {
      $("#alert-rc").fadeOut(1500);
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
    var re = $("#IdRazonSocial").val();
    var nc = $("#IdNombreComercial").val();
    var rc = $("#IdRuc").val();
    var dr = $("#IdDireccion").val();
    var tl = $("#IdTelefono").val();
    var em = $("#IdEmail").val();
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
          url: "index.php?c=Admin&a=save_new_empresa",
          data: "RazonSocial=" + re + "&NombreComercial=" + nc +
            "&Ruc=" + rc + "&Direccion=" + dr +
            "&Telefono=" + tl + "&Email=" + em,
          success: function (response) {
            response = JSON.stringify(response);
            if (response == 1) {
              Swal.fire({
                html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Registrado OK!.</b></div></div>',
              });
              CerrarNuevoEmpresa();
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

function CerrarModificarEmpresa() {
	$(".cerrar-emp").hide();
	getListaEmpresas();
}
function CerrarListaEmpresa(){
  $(".cerrar-lemp").hide();
}
function setModificarEmpresa(id_empresa) {
	CerrarListaEmpresa();
	$(".cerrar-emp").hide();
	var html = '';
	html += '<div class="cerrar-emp">';
	html += '<div class="note note-warning">';
	html += '<div class="note-content">';
	html += '<form>';
	html += '<div class="form-group">';
	html += '<div class="row">';

	html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Razon Social:</b> </br>';
  html += '<input type="hidden" class="form-control" id="IdEmpresa">';
  html += '<input type="text" class="form-control" id="IdRazonSocial_mod">';
  html += '<div id="alert-rs"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Nombre Comercial:</b> </br>';
  html += '<input type="text" class="form-control" id="IdNombreComercial_mod">';
  html += '<div id="alert-nc"></div>';
  html += "</div>";
  html += "</div>";

  html += '<div class="col-md-6">';
  html += '<div class="mb-10px">';
  html += '<b style="color: #000000;">Ruc:</b> </br>';
  html += '<input type="text" class="form-control" id="IdRuc_mod">';
  html += '<div id="alert-rc"></div>';
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
	html += '<a class="btn btn-outline-danger" onclick="CerrarModificarEmpresa();" title="Cerrar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cerrar</a>';
	html += '&nbsp;<a class="btn btn-outline-primary" title="Modificar" onclick="getModificarEmpresa();"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Modificar</a>';
	html += '</div>';

	html += '</div>';
	html += '</div>';
	html += '</form>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#panel-mod-empresa").html(html);
	$('.default-select2').select2();
  getPrepareModificarEmpresa(id_empresa);
}
function getPrepareModificarEmpresa(id_empresa) {
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: 'index.php?c=Admin&a=get_empresa_id',
		data: "IdEmpresa=" + id_empresa,
		success: function (response) {
			$.each(response, function (key, value) {
        $("#IdEmpresa").val(value.id_empresa);
				$("#IdRazonSocial_mod").val(value.razon_social);
				$("#IdNombreComercial_mod").val(value.nombre_comercial);
				$("#IdRuc_mod").val(value.ruc);
        $("#IdDireccion_mod").val(value.direccion);
				$("#IdTelefono_mod").val(value.telefono);
        $("#IdEmail_mod").val(value.email);
			});
		}
	});
}
function getModificarEmpresa() {
	var html = '';
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
  } if ($('#IdNombreComercial').val() == "") {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-ump").html(html);
    $('#IdNombreComercial').focus();
    setTimeout(function () {
      $("#alert-ump").fadeOut(1500);
    }, 3000);
    return false;
  } if ($('#IdRuc').val() == '') {
    html += '<div class="alert alert-danger">';
    html += 'Este campo es obligatorio!.';
    html += '</div>';
    $("#alert-rc").html(html);
    $('#IdRuc').focus();
    setTimeout(function () {
      $("#alert-rc").fadeOut(1500);
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
		var rs = $("#IdRazonSocial_mod").val();
		var nc = $("#IdNombreComercial_mod").val();
		var rc = $("#IdRuc_mod").val();
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
					url: "index.php?c=Admin&a=get_mod_empresa",
					data: "IdEmpresa=" + idempre + "&RazonSocial=" + rs + "&NombreComercial=" + nc +
						"&Ruc=" + rc + "&Direccion=" + dir +
						"&Telefono=" + tel + "&Email=" + ema,
					success: function (response) {
						response = JSON.stringify(response);
						if (response == 1) {
							Swal.fire({
								html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>Modificado OK!.</b></div></div>',
							});
							CerrarModificarEmpresa();
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
function getEliminarEmpresa(id_empresa) {
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
				url: "index.php?c=Admin&a=get_elim_empresa",
				data: "IdEmpresa=" + id_empresa,
				success: function (response) {
					response = JSON.stringify(response);
					if (response == 1) {
						Swal.fire({
							html: '<div class="note note-danger"><div class="note-icon"><i class="fa-solid fa-trash"></i></div><div class="note-content"><b>Eliminado OK!.</b></div></div>',
						});
						CerrarModificarEmpresa();
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
  getListaEmpresas();
});