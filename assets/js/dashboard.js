function getStockProductosSum() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Inventario&a=get_stock_productos_sum",
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdCantidad").text("Σ " + value.Cantidad);
        $("#IdPrecio").text("$ " + value.Precio);
        $("#IdUtilidad").text("$ " + value.Utilidad);
      });
    },
  });
}
function getVentasAdministrador() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ventas_administrador",
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdUserAdmin").text(value.Empleado);
        $("#IdValor").text("$ " + value.PVP);
        $("#IdRolAdmin").text("Rol: (" + value.rol + ")");
      });
    },
  });
}
function getVentasVendedor() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ventas_vendedor",
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdVendedor").text(value.Empleado);
        $("#IdValorVendedor").text("$ " + value.PVP);
        $("#IdRolUser").text("Rol: (" + value.rol + ")");
      });
    },
  });
}
function getVentasParametros() {
  var chartExist = Chart.getChart("myChart");
  if (chartExist != undefined) chartExist.destroy();

  var fd = $("#IdFDesde").val();
  var fh = $("#IdFHasta").val();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ventas_params",
    data: "IdFDesde=" + fd + "&IdFHasta=" + fh,
    success: function (response) {
      var tv = 0;
      var tventas = 0;
      $.each(response, function (key, value) {
        tventas += parseFloat(value.TotalVentas);
        tv += parseFloat(value.TotalVentas);
      });
      tventas = tv.toLocaleString(2);
      $("#IdTVentas").val(tventas);
      getPagosParametros();
      GenerarGraficaVentas();
    },
  });
}
function getPagosParametros() {
  var fd = $("#IdFDesde").val();
  var fh = $("#IdFHasta").val();
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_pagos_params",
    data: "IdFDesde=" + fd + "&IdFHasta=" + fh,
    success: function (response) {
      var tv = 0;
      var tventas = 0;
      $.each(response, function (key, value) {
        tventas += parseFloat(value.TotalPagos);
        tv += parseFloat(value.TotalPagos);
      });
      tventas = tv.toLocaleString(2);
      $("#IdTPagos").val(tventas);
    },
  });
}

function getProductoMasVendido() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_productomasvendido",
    success: function (response) {
      $.each(response, function (key, value) {
        $("#IdProducto").text(value.Producto);
        $("#IdCantidadPV").text("Σ " + value.Cantidad);
        $("#IdValorPV")
          .text("$ " + value.Valor)
          .toFixed(2);
      });
    },
  });
}
function GenerarGraficaVentas() {
  var html = "";
  if ($("#IdFDesde").val() == "0") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-tpb").html(html);
    $("#IdFDesde").focus();
    setTimeout(function () {
      $("#alert-tpb").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdFHasta").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-fh").html(html);
    $("#IdFHasta").focus();
    setTimeout(function () {
      $("#alert-fh").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var fd = $("#IdFDesde").val();
    var fh = $("#IdFHasta").val();
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "index.php?c=Venta&a=get_ventas_charts_params",
      data: "IdFDesde=" + fd + "&IdFHasta=" + fh,
      success: function (response) {
        var x = [];
        var y = [];
        var total = 0;
        const ctx = document.getElementById("myChart").getContext("2d");
        $.each(response, function (key, value) {
          y.push(value.fecha);
          total = parseFloat(value.PVP);
          x.push(total).toLocaleString(2);
        });

        chartExist = new Chart(ctx, {
          type: "line",
          data: {
            labels: y,
            datasets: [
              {
                label: "Ventas",
                data: x,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      },
    });
  }
}
function GenerarGraficaCtasXCobrar() {
  var chartExist = Chart.getChart("myChartCXC");
  if (chartExist != undefined) chartExist.destroy();
  var html = "";
  if ($("#IdFDesdeCXC").val() == "0") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-fdesde").html(html);
    $("#IdFDesdeCXC").focus();
    setTimeout(function () {
      $("#alert-fdesde").fadeOut(1500);
    }, 3000);
    return false;
  }
  if ($("#IdFHastaCXC").val() == "") {
    html += '<div class="alert alert-danger">';
    html += "Este campo es obligatorio!.";
    html += "</div>";
    $("#alert-fhasta").html(html);
    $("#IdFHastaCXC").focus();
    setTimeout(function () {
      $("#alert-fhasta").fadeOut(1500);
    }, 3000);
    return false;
  } else {
    var fd = $("#IdFDesdeCXC").val();
    var fh = $("#IdFHastaCXC").val();
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "index.php?c=Venta&a=get_ctasxcobrar",
      data: "IdFDesde=" + fd + "&IdFHasta=" + fh,
      success: function (response) {
        var x = [];
        var y = [];
        var total = 0;
        const ctx = document.getElementById("myChartCXC").getContext("2d");
        $.each(response, function (key, value) {
          y.push(value.NroFactura);
          total = parseFloat(value.Valor);
          x.push(total).toLocaleString(2);
        });

        chartExist = new Chart(ctx, {
          type: "bar",
          data: {
            labels: y,
            datasets: [
              {
                label: "Ctas X Cobrar",
                data: x,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      },
    });
  }
}
$(document).ready(function () {
  getStockProductosSum();
  getVentasAdministrador();
  getVentasVendedor();
  getProductoMasVendido();
});
