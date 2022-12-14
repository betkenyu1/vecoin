function getListaAuditorias() {
  var html = '';
  html += '<div style="overflow: scroll">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += '<thead>';
  html += '<tr>';
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Usuario</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Acción</th>';
  html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Hora</th>';
  html += '</tr>';
  html += '</thead>';
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'index.php?c=Admin&a=get_auditoria_sesion',
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html += '<td width="1%" class="fw-bold text-dark">' + value.id_auditoria + '</td>';
        html += '<td>' + value.razon_social + '</td>';
        html += '<td>' + value.usuario + '</td>';
        html += '<td>' + value.nombres + '</td>';
        html += '<td>' + value.observacion + '</td>';
        html += '<td>' + value.fecha + '</td>';
        html += '<td>' + value.hora + '</td>';
        html += '</tr>';
      });
      html += '</tbody>';
      html += '</table>';
      html += '</div>';
      html += '</div>';
      html += '</div>';
      $("#lista-auditoria").html(html);
      $("#data-table-select").DataTable({
        "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json" },
        //muestra descendente la columna 0
        order: [[0, 'desc']],
        select: false,
        responsive: true,
      });
    }
  });
}

$(document).ready(function () {
  getListaAuditorias();
});


