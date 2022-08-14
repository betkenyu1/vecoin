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