function getListaCtasXCobrar() {
  var html = "";
  html += "<div>";
  html += '<div class="container bg-success bg-gradient shadow py-2 ">';
  html += "&nbsp;";
  html +=
    '<h5 class="text-center text-white">SELECCIONE EL RANGO DE BÚSQUEDA</h5>';
  html += '<div class="row justify-content-center">';
  html += '<div class="col-lg-3 col-sm-6">';
  html += '<label for="startDate" class="text-white">Desde</label>';
  html += '<input id="startDate" class="form-control" type="date" />';
  html += '<span id="startDateSelected"></span>';
  html += "</div>";
  html += '<div class="col-lg-3 col-sm-6">';
  html += '<label for="endDate" class="text-white">Hasta</label>';
  html += '<input id="endDate" class="form-control" type="date" />';
  html += '<span id="endDateSelected"></span>';
  html += "&nbsp;";
  html += "</div>";
  html += '<div class="d-grid gap-2 d-md-flex justify-content-md-center">';
  html +=
    '<a href="#" onclick="getFacturasRetenciones();" class="btn btn-danger me-md-2 data-bs-toggle="modal" data-bs-target="#FechaInvalida""><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Reporte Individual</a>';
  html +=
    '<a href="#" onclick="getFacturasRetencionesAgrupados();" class="btn btn-danger data-bs-toggle="modal" data-bs-target="#FechaInvalida""><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Reporte Agrupado</a>';
  html += "</div>";
  html += "&nbsp;";
  html += "</div>";
  html += "</div>";

  html += "<div>";
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle" style="width:100%">';
  html += '<div class="note note-blue">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  //html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Nro. Factura</th>';
  html += '<th class="text-nowrap">Cliente</th>';
  html += '<th class="text-nowrap">Subtotal</th>';
  html += '<th class="text-nowrap">IVA</th>';
  html += '<th class="text-nowrap">% Ret. Renta</th>';
  html += '<th class="text-nowrap">% Ret. IVA</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += '<th class="text-nowrap">Acciones</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Reporte&a=get_rep_facturas_retenciones",
    success: function (response) {
      if (response != "") {
        $.each(response, function (key, value) {
          html += '<tr class="odd gradeX">';
          html +=
            '<td width="1%" class="fw-bold text-dark">' + value.id + "</td>";
          //html += '<td>' + value.freg + '</td>';
          html += "<td>" + value.nro_factura + "</td>";
          html += "<td>" + value.Cliente + "</td>";
          html += "<td>" + "$ " + value.subtotal + "</td>";
          html += "<td>" + "$ " + value.iva + "</td>";
          html += "<td>" + "$ " + value.ret_renta + "</td>";
          html += "<td>" + "$ " + value.ret_iva + "</td>";
          html += "<td>" + value.estado + "</td>";
          html += "<td>";
          html +=
            '<a class="btn btn-outline-danger" onclick="getReporteFacturasRetenciones(' +
            value.id +
            ');" title="Reporte"><i class="fa-solid fa-file-pdf"></i></a>';
          html += "</td>";
          html += "</tr>";
        });
        html += "</tbody>";
        html += "</table>";
        html += "</div>";
        html += "</div>";
        $("#lista-ctasxcobrar").html(html);
        var dtb = $("#data-table-select").DataTable({
          language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
          order: [[2, "asc"]],
          select: false,
          responsive: true,
        });
        dtb.column(0).visible(false);
      } else {
        html = "";
        html +=
          '<div class="alert alert-success alert-dismissible fade show h-100 mb-0">';
        html +=
          '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
        html += "<b>No hay datos</b>";
        html += "</div>";
        $("#lista-ctasxcobrar").html(html);
      }
    },
  });
}

$(document).ready(function () {
  getListaCtasXCobrar();
});
