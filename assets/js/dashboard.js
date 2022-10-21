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

function getCuentasxCobrar() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_cuentas_x_cobrar",
    success: function (response) {
      acum = 0;
      $.each(response, function (key, value) {
        $("#IdValorCobrar").text("$ " + value.subtotal);
        $("#IdValorCobrarIVA").text("$ " + value.iva);
        $("#IdValorCobrarTotal").text("$ " + value.total);
      });
    },
  });
  $("#IdValorCobrar").text(acum);
}

$(document).ready(function () {
  getStockProductosSum();
  getProductoMasVendido();
  getCuentasxCobrar();
});
