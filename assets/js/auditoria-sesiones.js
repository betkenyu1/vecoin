function getListaAuditorias() {
  var html = "";
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
    '<a href="#" onclick="getReporteInicioSesion();" class="btn btn-danger me-md-2 data-bs-toggle="modal" data-bs-target="#FechaInvalida""><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Generar Reporte</a>';
  html += "</div>";
  html += "&nbsp;";
  html += "</div>";
  html += "</div>";

  html +=
    '<table id="data-table-select"  class="table table-striped table-bordered align-middle" style="width:100%">';
  html += "<thead>";
  html += '<div class="note note-blue">';
  html += "<tr>";
  html += '<th width="1%"></th>';
  html += '<th class="text-nowrap">Empresa</th>';
  html += '<th class="text-nowrap">Usuario</th>';
  html += '<th class="text-nowrap">Nombres</th>';
  html += '<th class="text-nowrap">Acción</th>';
  html += '<th class="text-nowrap">Fecha</th>';
  html += '<th class="text-nowrap">Hora</th>';
  html += "</tr>";
  html += "</thead>";
  html += '<tbody style="background-color:#c1f8ff">';
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Admin&a=get_auditoria_sesion",
    success: function (response) {
      $.each(response, function (key, value) {
        html += '<tr class="odd gradeX">';
        html +=
          '<td width="1%" class="fw-bold text-dark">' +
          value.id_auditoria +
          "</td>";
        html += "<td>" + value.razon_social + "</td>";
        html += "<td>" + value.usuario + "</td>";
        html += "<td>" + value.nombres + "</td>";
        html += "<td>" + value.observacion + "</td>";
        html += "<td>" + value.fecha + "</td>";
        html += "<td>" + value.hora + "</td>";
        html += "</tr>";
      });
      html += "</tbody>";
      html += "</table>";
      html += "</div>";
      $("#lista-auditoria").html(html);
      $("#data-table-select").DataTable({
        language: { url: "./assets/idioma-espaniol/datatable-espaniol.json" },
        //muestra descendente la columna 0
        order: [[0, "desc"]],
        select: false,
        responsive: true,
      });
    },
  });
}

$(document).ready(function () {
  getListaAuditorias();
});
