function getProductos() {
    $("#IdProducto").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Venta&a=get_stock",
        success: function (response) {
            var $select = $('#IdProducto');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_stock + '>' + value.producto + '</option>');
            });
        }
    });
}
function getClientes() {
    $("#IdCliente").empty();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "index.php?c=Venta&a=get_clientes",
        success: function (response) {
            var $select = $('#IdCliente');
            $select.append('<option value="0">Seleccione...</option>');
            $.each(response, function (key, value) {
                $select.append('<option value=' + value.id_cliente + '>' + value.razon_social + '</option>');
            });
        }
    });
}
function CerrarListaVenta() {
    $(".cerrar-vta").hide();
}
function setNuevaVenta() {
    CerrarListaVenta();
    $(".cerrar-mp").hide();
    var html = '';
    html += '<div class="cerrar-vta">';
    html += '<div class="note note-info">';
    html += '<div class="note-content">';
    html += '<form>';
    html += '<div class="form-group">';
    html += '<div class="row">';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Fecha:</b> </br>';
    html += '<input type="date" class="form-control" id="IdFecha">';
    html += '<input type="hidden" class="form-control" id="IdSecuenc">';
    html += '<div id="alert-freg"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Nro Factura:</b> </br>';
    html += '<input type="hidden" class="form-control" id="IdSecuencial">';
    html += '<input type="hidden" class="form-control" id="IdSecuencia">';
    html += '<input type="text" class="form-control" id="IdNroFactura">';
    html += '<div id="alert-nrofac"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Productos:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdProducto"></select>';
    html += '<div id="alert-prod"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Clientes:</b> </br>';
    html += '<select class="default-select2 form-control" id="IdCliente"></select>';
    html += '<div id="alert-prov"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Cantidad:</b> </br>';
    html += '<input type="text" class="form-control" id="IdCantidad">';
    html += '<div id="alert-cant"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div class="col-md-6">';
    html += '<div class="mb-10px">';
    html += '<b style="color: #000000;">Precio:</b> </br>';
    html += '<input type="text" class="form-control" id="IdPrecio">';
    html += '<div id="alert-prec"></div>';
    html += '</div>';
    html += '</div>';

    html += '<div>';
    html += '<br>';
	html += '<div class="text-center">';
    html += '<a class="btn btn-danger" onclick="CerrarNuevaOrdenEntrada();" title="Cancelar"><i class="fa-solid fa-cancel" aria-hidden="true"></i> Cancelar</a>';
    html += '&nbsp;<a class="btn btn-primary" title="Agregar" onclick="getAgregarOrdenEntrada();"><i class="fa-solid fa-plus" aria-hidden="true"></i> Agregar</a>';
    html += '&nbsp;<a class="btn btn-success" title="Cerrar" onclick="getCerrarOrdenEntrada();"><i class="fa-solid fa-save" aria-hidden="true"></i> Cerrar</a>';;
    html += '</div>';
    html += '</div>';

    html += '<div>';
    html += '<b style="color: #000000;">Observación (Opcional):</b> </br>';
    html += '<textarea type="text" row="3" class="form-control" id="IdObs"></textarea>';
    html += '<div id="alert-obs"></div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    html += '</form>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $("#new-venta").html(html);
    $('.default-select2').select2();
    getProductos();
    getClientes();
}
function SubirXML() {
	var formData = new FormData();
	var files = $('#xml')[0].files[0];
	if (files == null) {
		alert('Seleccione un archivo xml' + files);
	} else {
		formData.append('filexml', files);
		$.ajax({
			url: 'index.php?c=Venta&a=save_new_cab_venta',
			type: 'POST',
			data: formData,
			contentType: false,
			processData: false,
			success: function (response) {
				console.log(response);
				if (response) {
					Swal.fire({
						html: '<div class="note note-success"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>"'+response.autorizacion+'"</b></div></div>',
					});
					$(".milogo-cta").attr("src", response);
				}
			}
		});
		return false;
	}
}