function getListaCtasXCobrar() {
  var html = "";
  html += "<div>";
  html += '<div style="overflow: scroll">';
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle ">';
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
          select: true,
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
