function getListaCtasXCobrar() {
    var html = '';
    html += '<div>';
    html += '<div style="overflow: scroll">';
    html += '<table id="data-table-select" class="table table-striped table-bordered align-middle ">';
    html += '<div class="note note-blue">';
    html += '<thead>';
    html += '<tr>';
    html += '<th width="1%"></th>';
    //html += '<th class="text-nowrap">Fecha</th>';
    html += '<th class="text-nowrap">Nro. Factura</th>';
    html += '<th class="text-nowrap">Cliente</th>';

    html += '<th class="text-nowrap">Estado</th>';
    html += '<th class="text-nowrap">Acciones</th>';

    html += '</tr>';
    html += '</thead>';
    html += '<tbody style="background-color:#c1f8ff">';
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: 'index.php?c=Reporte&a=get_rep_facturas_registradas',
        success: function (response) {
            if (response != '') {
                $.each(response, function (key, value) {
                    html += '<tr class="odd gradeX">';
                    html += '<td width="1%" class="fw-bold text-dark">' + value.id_cabventa + '</td>';
                    //html += '<td>' + value.freg + '</td>';
                    html += '<td>' + value.nro_factura + '</td>';
                    html += '<td>' + value.Cliente + '</td>';
                    html += '<td>' + value.estado + '</td>';
                    html += '<td>';
                    html += '<a class="btn btn-outline-danger" onclick="getReporteFactura(' + value.id_cabventa + ');" title="Reporte"><i class="fa-solid fa-file-pdf"></i></a>';
                    html += '</td>';
                    html += '</tr>';
                });
                html += '</tbody>';
                html += '</table>';
                html += '</div>';
                html += '</div>';
                $("#lista-ctasxcobrar").html(html);
                $('#data-table-select').DataTable({
                    "language": { "url": "./assets/idioma-espaniol/datatable-espaniol.json" },
                    select: true,
                    responsive: true
                });
            } else {
                html = '';
                html += '<div class="alert alert-success alert-dismissible fade show h-100 mb-0">';
                html += '<button type="button" class="btn-close" data-bs-dismiss="alert"></button>';
                html += '<b>No hay datos</b>';
                html += '</div>';
                $("#lista-ctasxcobrar").html(html);
            }
        }
    });
}
$(document).ready(function () {
    getListaCtasXCobrar();
});