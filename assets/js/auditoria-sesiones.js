function getListaAuditorias() {
  var html = '';
  html += '<div style="overflow: scroll" class="">';
  html += '<div class="">';
  html += '<div class="note-content">';
  html += '<table id="data-table-select" class="table table-striped table-bordered align-middle">';
  html += '<thead>';
  html += '<tr>';
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Usuario</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Acción</th>';
  html += '<th class="text-nowrap">Fecha de la Acción</th>';
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
        html += '<td>' + value.usuario + '</td>';
        html += '<td>' + value.nombres + '</td>';
        html += '<td>' + value.observacion + '</td>';
        html += '<td>' + value.registro_tiempo + '</td>';
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
        select: false,
        responsive: true,
      });
    }
  }); 
}
$(document).ready(function () {
  getListaAuditorias();
});
