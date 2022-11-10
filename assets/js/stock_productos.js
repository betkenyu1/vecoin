function getListaStockProductos() {
  var html = "";
  html += '<div class="note-content">';
  html +=
    '<table id="data-table-select" class="table table-striped table-bordered align-middle" style="width:100%">';
  html += "<thead>";
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Código</th>';
  html += '<th class="text-nowrap">Producto</th>';
  html += '<th class="text-nowrap">Proveedor</th>';
  //html += '<th class="text-nowrap">Bodega</th>';
  html += '<th class="text-nowrap">U.Medida</th>';
  html += '<th class="text-nowrap">Cantidad</th>';
  html += '<th class="text-nowrap">Costo</th>';
  html += '<th class="text-nowrap">Valorización</th>';
  html += '<th class="text-nowrap">Estado</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",

    url: "index.php?c=Inventario&a=get_stock_productos",
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html +=
          '<td width="1%" class="fw-bold text-dark">' +
          value.id_producto +
          "</td>";
        html += "<td>" + value.compania + "</td>";
        html += "<td>" + value.codigo + "</td>";
        html += "<td>" + value.nombre_producto + "</td>";
        html += "<td>" + value.proveedor + "</td>";
        //html += '<td>' + value.bodega + '</td>';
        html += "<td>" + value.umedida + "</td>";
        html += "<td>" + value.cantidad + "</td>";
        html += "<td>" + "$ " + value.precio + "</td>";
        html += "<td>" + "$ " + value.valorizacion + "</td>";
        html += "<td>" + value.id_estado + "</td>";
        html += "</td>";
        html += "</tr>";
      });
      html += "</tbody>";
      html += "</table>";
      html += "</div>";
      html += "</div>";
      $("#lista-stock-productos").html(html);
      var dtb = $("#data-table-select").DataTable({
        language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
        //muestra descendente la columna 0
        order: [[3, "asc"]],
        select: false,
        responsive: true,
      });
      dtb.column(0).visible(false);
      dtb.column(1).visible(false);
    },
  });
}
$(document).ready(function () {
  getListaStockProductos();
});
