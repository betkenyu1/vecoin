function getReporteOrdenEntrada(ids) {
    window.open('views/reportes/orden_entrada.php?IdSecuencial=' + ids + '');
}
function getReporteOrdenSalida(os) {
    window.open('views/reportes/orden_salida.php?IdSecuencial=' + os + '');
}
function getReporteStock() {
    window.open('views/reportes/stock_productos.php');
}
function getReporteCtasXCobrar() {
    window.open('views/reportes/rep_ctasxcobrar.php');
}

function getReporteInicioSesion() {
    window.open('views/reportes/inicio_sesion.php');
}
