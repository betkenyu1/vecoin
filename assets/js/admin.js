function getSecuencial() {
	$.ajax({
		type: "GET",
		url: 'index.php?c=Admin&a=get_secuencial',
		success: function (response) {
			response = JSON.parse(response);
			$.each(response, function (key, value) {
        $('#IdSecuenc').val(value.id_secuencial);
				var n = ('000000000' + value.secuencial).slice(-9);
				$('#IdSecuencial').val(value.secuencial);
        $('#IdSecuencia').val(n);
        $('#IdSecu').text('Secuencial: [ ' + n +' ]');
			});
		}
	});
}

function getSecuencialOrdenSalida() {
	$.ajax({
		type: "GET",
		url: 'index.php?c=Admin&a=get_secuencial_orden_salida',
		success: function (response) {
			response = JSON.parse(response);
			$.each(response, function (key, value) {
        $('#IdSecuenc').val(value.id_secuencial);
				var n = ('000000000' + value.secuencial).slice(-9);
				$('#IdSecuencial').val(value.secuencial);
        $('#IdSecuencia').val(n);
        $('#IdSecu').text('Secuencial: [ ' + n +' ]');
			});
		}
	});
}
function getEmpresasMod() {
  $("#IdEmpresaM").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Catalogo&a=get_empresas",
    success: function (response) {
      var $select = $("#IdEmpresaM");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" +
            value.id_empresa +
            ">" +
            value.razon_social +
            "</option>"
        );
      });
    },
  });
}

function getEmpresas() {
  $("#IdEmpresa").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_empresas",
    success: function (response) {
      var $select = $("#IdEmpresa");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" +
            value.id_empresa +
            ">" +
            value.razon_social +
            "</option>"
        );
      });
    },
  });
}

function getEmpleados() {
  $("#IdEmpleado").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_empleados",
    success: function (response) {
      var $select = $("#IdEmpleado");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" +
            value.id_empleado +
            ">" +
            value.Empleados +
            "</option>"
        );
      });
    },
  });
}

function getRoles() {
  $("#IdRol").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_roles",
    success: function (response) {
      var $select = $("#IdRol");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_rol + ">" + value.rol + "</option>"
        );
      });
    },
  });
}
function getRolesMod(){
  $("#IdRol_mod").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_roles",
    success: function (response) {
      var $select = $("#IdRol_mod");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_rol + ">" + value.rol + "</option>"
        );
      });
    },
  });
}
function getProveedor(){
  $("#IdProveedor").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_proveedor",
    success: function (response) {
      var $select = $("#IdProveedor");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_proveedor + ">" + value.proveedor + "</option>"
        );
      });
    },
  });
}

function getProveedorActivo(){
  $("#IdProveedor").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_proveedor_activo",
    success: function (response) {
      var $select = $("#IdProveedor");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_proveedor + ">" + value.proveedor + "</option>"
        );
      });
    },
  });
}

function getCliente(){
  $("#IdCliente").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_clientes_activos",
    success: function (response) {
      var $select = $("#IdCliente");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_cliente + ">" + value.razon_social + "</option>"
        );
      });
    },
  });
}
function getCatalogo(){
  $("#IdCatalogo").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Catalogo&a=get_catalogo",
    success: function (response) {
      var $select = $("#IdCatalogo");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_catalogo + ">" + value.producto + "</option>"
        );
      });
    },
  });
}
function getEstados(){
  $("#IdEstado").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_estados",
    success: function (response) {
      var $select = $("#IdEstado");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_estado + ">" + value.estado + "</option>"
        );
      });
    },
  });
}
function getBodegas() {
	$("#IdBodega").empty();
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: "index.php?c=Producto&a=get_bodegas",
		success: function (response) {
			var $select = $('#IdBodega');
			$select.append('<option value="0">Seleccione...</option>');
			$.each(response, function (key, value) {
				$select.append('<option value=' + value.id_bodega + '>' + value.bodega + '</option>');
			});
		}
	});
}
function getUMedidas() {
	$("#IdUMedida").empty();
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: "index.php?c=Producto&a=get_umedidas",
		success: function (response) {
			var $select = $('#IdUMedida');
			$select.append('<option value="0">Seleccione...</option>');
			$.each(response, function (key, value) {
				$select.append('<option value=' + value.id_umedida + '>' + value.umedida + '</option>');
			});
		}
	});
}
function CalcularUtilidad(){
  var prca = $('#IdPrecio_act').val();
  var prc = $('#IdUtilidad').val();
  var utl = Number(parseFloat(prca*prc/100)).toFixed(2);
  $('#IdUtl').val(utl);
  r = Number(parseFloat(utl)+parseFloat(prca)).toFixed(2);
  $('#IdPVP').val(r);
}
function CalcularUtilidadMod(){
  var prca = $('#IdPrecio_actMod').val();
  var prc = $('#IdUtilidadMod').val();
  var utl = Number(parseFloat(prca*prc/100)).toFixed(2);
  $('#IdUtlMod').val(utl);
  var r = Number(parseFloat(utl)+parseFloat(prca)).toFixed(2);
  $('#IdPVPMod').val(r);
}
function getBodegasMod() {
	$("#IdBodegaMod").empty();
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: "index.php?c=Producto&a=get_bodegas",
		success: function (response) {
			var $select = $('#IdBodegaMod');
			$select.append('<option value="0">Seleccione...</option>');
			$.each(response, function (key, value) {
				$select.append('<option value=' + value.id_bodega + '>' + value.bodega + '</option>');
			});
		}
	});
}
function getUMedidasMod() {
	$("#IdUMedidaMod").empty();
	$.ajax({
		type: "GET",
		dataType: 'json',
		url: "index.php?c=Producto&a=get_umedidas",
		success: function (response) {
			var $select = $('#IdUMedidaMod');
			$select.append('<option value="0">Seleccione...</option>');
			$.each(response, function (key, value) {
				$select.append('<option value=' + value.id_umedida + '>' + value.umedida + '</option>');
			});
		}
	});
}
function getProveedorMod(){
  $("#IdProveedorMod").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_proveedor",
    success: function (response) {
      var $select = $("#IdProveedorMod");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_proveedor + ">" + value.proveedor + "</option>"
        );
      });
    },
  });
}

function getClienteMod(){
  $("#IdClienteMod").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_clientes",
    success: function (response) {
      var $select = $("#IdClienteMod");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_cliente + ">" + value.razon_social + "</option>"
        );
      });
    },
  });
}
function getCatalogoMod(){
  $("#IdCatalogoMod").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Catalogo&a=get_catalogo",
    success: function (response) {
      var $select = $("#IdCatalogoMod");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_catalogo + ">" + value.producto + "</option>"
        );
      });
    },
  });
}
function getPerchas(){
  $("#IdPercha").empty();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Catalogo&a=get_perchas",
    success: function (response) {
      var $select = $("#IdPercha");
      $select.append('<option value="0">Seleccione...</option>');
      $.each(response, function (key, value) {
        $select.append(
          "<option value=" + value.id_percha + ">" + value.percha + "</option>"
        );
      });
    },
  });
}