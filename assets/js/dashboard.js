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
        $("#IdValorPV").text("$ " + value.Valor);
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
      $.each(response, function (key, value) {
        $("#IdValorCobrar").text("$ " + value.subtotal);
        $("#IdValorCobrarIVA").text("$ " + value.iva);
        $("#IdValorCobrarTotal").text("$ " + value.total);
      });
    },
  });
}

function getVentasMensuales() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ventas_mensuales",
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

function getVentasAnuales() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "index.php?c=Venta&a=get_ventas_anuales",
    success: function (response) {
      var name = [];
      var marks = [];
      $.each(response, function (key, value) {
        name.push(value.fecha);
        marks.push(value.total);
      });
      var chartdata = {
        labels: name,
        datasets: [
          {
            label: "Ventas Anuales",
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(255, 159, 64)",
              "rgba(255, 205, 86)",
              "rgba(75, 192, 192)",
              "rgba(54, 162, 235)",
              "rgba(153, 102, 255)",
            ],
            borderColor: [
              "rgba(255, 99, 132)",
              "rgba(255, 159, 64)",
              "rgba(255, 205, 86)",
              "rgba(75, 192, 192)",
              "rgba(54, 162, 235)",
              "rgba(153, 102, 255)",
            ],
            borderWidth: 1,
            hoverBackgroundColor: "#CCCCCC",
            hoverBorderColor: "#666666",
            data: marks,
          },
        ],
      };
      var graphTarget = $("#graphCanvasAnual");
      var barGraph = new Chart(graphTarget, {
        type: "bar",
        data: chartdata,
      });
    },
  });
}

function getVentasMensuales() {
  {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "index.php?c=Venta&a=get_ventas_mensuales",
      success: function (response) {
        var name = [];
        var marks = [];
        $.each(response, function (key, value) {
          name.push(value.mes);
          marks.push(value.total);
        });
        var chartdata = {
          labels: name,
          datasets: [
            {
              label: "Ventas Mensuales",
              backgroundColor: [
                "rgba(255, 99, 132)",
                "rgba(255, 159, 64)",
                "rgba(255, 205, 86)",
                "rgba(75, 192, 192)",
                "rgba(54, 162, 235)",
                "rgba(153, 102, 255)",
              ],
              borderColor: [
                "rgba(255, 99, 132)",
                "rgba(255, 159, 64)",
                "rgba(255, 205, 86)",
                "rgba(75, 192, 192)",
                "rgba(54, 162, 235)",
                "rgba(153, 102, 255)",
              ],
              borderWidth: 1,
              hoverBackgroundColor: "#CCCCCC",
              hoverBorderColor: "#666666",
              data: marks,
            },
          ],
        };
        var graphTarget = $("#graphCanvas");
        var barGraph = new Chart(graphTarget, {
          type: "line",
          data: chartdata,
        });
      },
    });
  }
}

/**
 * Porfolio isotope and filter
 */
let portfolionIsotope = document.querySelector(".portfolio-isotope");

if (portfolionIsotope) {
  let portfolioFilter = portfolionIsotope.getAttribute("data-portfolio-filter")
    ? portfolionIsotope.getAttribute("data-portfolio-filter")
    : "*";
  let portfolioLayout = portfolionIsotope.getAttribute("data-portfolio-layout")
    ? portfolionIsotope.getAttribute("data-portfolio-layout")
    : "masonry";
  let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
    ? portfolionIsotope.getAttribute("data-portfolio-sort")
    : "original-order";

  window.addEventListener("load", () => {
    let portfolioIsotope = new Isotope(
      document.querySelector(".portfolio-container"),
      {
        itemSelector: ".portfolio-item",
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort,
      }
    );

    let menuFilters = document.querySelectorAll(
      ".portfolio-isotope .portfolio-flters li"
    );
    menuFilters.forEach(function (el) {
      el.addEventListener(
        "click",
        function () {
          document
            .querySelector(
              ".portfolio-isotope .portfolio-flters .filter-active"
            )
            .classList.remove("filter-active");
          this.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          if (typeof aos_init === "function") {
            aos_init();
          }
        },
        false
      );
    });
  });
}

$(document).ready(function () {
  getStockProductosSum();
  getProductoMasVendido();
  getCuentasxCobrar();
  getVentasMensuales();
  getVentasAnuales();
});
