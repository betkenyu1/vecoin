function getReporteOrdenEntrada(ids) {
    window.open('views/reportes/orden_entrada.php?IdSecuencial=' + ids + '');
}
function getReporteOrdenSalida(os) {
    window.open('views/reportes/orden_salida.php?IdSecuencial=' + os + '');
}
function getReporteFactura(cb) {
    window.open('views/reportes/factura_individual.php?IdCabVenta=' + cb + '');
}
function getReporteStock() {
    window.open('views/reportes/stock_productos.php');
}
function getReporteProductosDisponibles() {
    window.open('views/reportes/reporte_stock_productos.php');
}
function getReporteCtasXCobrar() {
    window.open('views/reportes/rep_ctasxcobrar.php');
}

function getFacturasRegistradas() {
    window.open('views/reportes/rep_fact_registradas.php');
}

function getReporteInicioSesion() {
    window.open('views/reportes/inicio_sesion.php');
}
