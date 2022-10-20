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

function getReporteCtasXCobrar() {
  window.open("views/reportes/rep_ctasxcobrar.php");
}

function getFacturasRegistradas() {
  if (
    $("#startDate").val() != 0 &&
    $("#endDate").val() != 0 &&
    Date.parse($("#startDate").val()) < Date.parse($("#endDate").val())
  ) {
    window.open(
      "views/reportes/rep_fact_registradas.php?startDate=" +
        $("#startDate").val() +
        "&endDate=" +
        $("#endDate").val() +
        ""
    );
  } else {
    Swal.fire({
      html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-warning"></i></div><div class="note-content"><b>ATENCIÓN: Verificar rango de búsqueda.</b></div></div>',
    });
  }
}

function getFacturasRetenciones() {
  if (
    $("#startDate").val() != 0 &&
    $("#endDate").val() != 0 &&
    Date.parse($("#startDate").val()) < Date.parse($("#endDate").val())
  ) {
    window.open(
      "views/reportes/rep_fact_retenciones.php?startDate=" +
        $("#startDate").val() +
        "&endDate=" +
        $("#endDate").val() +
        ""
    );
  } else {
    Swal.fire({
      html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-warning"></i></div><div class="note-content"><b>ATENCIÓN: Verificar rango de búsqueda.</b></div></div>',
    });
  }
}

function getFacturasRetencionesAgrupados() {
  if (
    $("#startDate").val() != 0 &&
    $("#endDate").val() != 0 &&
    Date.parse($("#startDate").val()) < Date.parse($("#endDate").val())
  ) {
    window.open(
      "views/reportes/rep_fact_retenciones_agrupados.php?startDate=" +
        $("#startDate").val() +
        "&endDate=" +
        $("#endDate").val() +
        ""
    );
  } else {
    Swal.fire({
      html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-warning"></i></div><div class="note-content"><b>ATENCIÓN: Verificar rango de búsqueda.</b></div></div>',
    });
  }
}

function getReporteInicioSesion() {
  if (
    $("#startDate").val() != 0 &&
    $("#endDate").val() != 0 &&
    Date.parse($("#startDate").val()) <= Date.parse($("#endDate").val())
  ) {
    window.open(
      "views/reportes/inicio_sesion.php?startDate=" +
        $("#startDate").val() +
        "&endDate=" +
        $("#endDate").val() +
        ""
    );
  } else {
    Swal.fire({
      html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-warning"></i></div><div class="note-content"><b>ATENCIÓN: Verificar rango de búsqueda.</b></div></div>',
    });
  }
}
