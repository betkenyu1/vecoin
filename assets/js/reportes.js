let startDate = document.getElementById("startDate");
startDate.addEventListener("change", (e) => {
  let startDateVal = e.target.value;
  document.getElementById("startDateSelected").innerText = startDateVal;
});

let endDate = document.getElementById("endDate");
endDate.addEventListener("change", (e) => {
  let endDateVal = e.target.value;
  document.getElementById("endDateSelected").innerText = endDateVal;
});

function getReporteOrdenEntrada(ids) {
  window.open("views/reportes/orden_entrada.php?IdSecuencial=" + ids + "");
}
function getReporteOrdenSalida(os) {
  window.open("views/reportes/orden_salida.php?IdSecuencial=" + os + "");
}
function getReporteFactura(cb) {
  window.open("views/reportes/factura_individual.php?IdCabVenta=" + cb + "");
}
function getReporteFacturasRetenciones(cb) {
  window.open("views/reportes/facturas_retenciones.php?IdCabVenta=" + cb + "");
}
function getReporteStock() {
  window.open("views/reportes/stock_productos.php");
}
function getReporteProductosDisponibles() {
  window.open("views/reportes/reporte_stock_productos.php");
}
function getReporteCtasXCobrar() {
  window.open("views/reportes/rep_ctasxcobrar.php");
}

function getFacturasRegistradas() {
  window.open(
    "views/reportes/rep_fact_registradas.php?startDate=" +
      $("#startDate").val() +
      "&endDate=" +
      $("#endDate").val() +
      ""
  );
}

function getFacturasRetenciones() {
  window.open(
    "views/reportes/rep_fact_retenciones.php?startDate=" +
      $("#startDate").val() +
      "&endDate=" +
      $("#endDate").val() +
      ""
  );
}

function getFacturasRetencionesAgrupados() {
  window.open(
    "views/reportes/rep_fact_retenciones_agrupados.php?startDate=" +
      $("#startDate").val() +
      "&endDate=" +
      $("#endDate").val() +
      ""
  );
}

function getReporteInicioSesion() {
  window.open("views/reportes/inicio_sesion.php");
}
