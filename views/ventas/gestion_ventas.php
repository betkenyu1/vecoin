<?php
include_once 'views/layout/header.php';
?>
<div id="content" class="app-content">
    <!-- BEGIN panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <h1 class="panel-title">GESTIÓN DE FACTURAS</h1>
            <div class="panel-heading-btn">
                <a href="javascript:;" title="Pantalla Completa" class="btn btn-xs btn-icon btn-default" data-toggle="panel-expand"><i class="fa fa-expand"></i></a>
            </div>
        </div>

        <div class="panel-body">
            <div id="lista-ord_salida"></div>
            <br>
            <div id="n-venta"></div>
            <br>
            <div id="lista-osfact"></div>
        </div>
    </div>
    <!-- END panel -->
    <div>
        <!-- modal-factura -->
        <div class="modal fade" id="modal-factura" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Registrar Factura</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <b style="color: #000000;">Fecha:</b> <br>
                                            <input type="date" class="form-control" id="IdFechaModal">
                                            <div id="alert-fecha"></div>
                                            <hr>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <b style="color: #000000;">Cliente:</b> <br>
                                            <input type="text" class="form-control" id="IdClienteModal">
                                            <div id="alert-tpb"></div>
                                            <hr>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <b style="color: #000000;">Factura Nro:</b> <br>
                                            <input type="text" class="form-control" id="IdDetalleOS">
                                            <input type="text" class="form-control" id="IdFacturaNroModal">
                                            <div id="alert-nf"></div>
                                            <hr>
                                        </div>
                                    </div>

                                    <script>
                                        function RegistroFacturaVenta() {
                                            var html = "";
                                            if ($("#IdFecha").val() == "") {
                                                html += '<div class="alert alert-danger">';
                                                html += "*Campo requerido";
                                                html += "</div>";
                                                $("#alert-freg").html(html);
                                                $("#IdFecha").focus();
                                                setTimeout(function() {
                                                    $("#alert-freg").fadeOut(1500);
                                                }, 3000);
                                                return false;
                                            }
                                            if ($("#IdCliente").val() == "0") {
                                                html += '<div class="alert alert-danger">';
                                                html += "*Campo requerido";
                                                html += "</div>";
                                                $("#alert-cli").html(html);
                                                $("#IdCliente").focus();
                                                setTimeout(function() {
                                                    $("#alert-cli").fadeOut(1500);
                                                }, 3000);
                                                return false;
                                            }
                                            if ($("#IdNroFactura").val() == "") {
                                                html += '<div class="alert alert-danger">';
                                                html += "*Campo requerido";
                                                html += "</div>";
                                                $("#alert-nrofac").html(html);
                                                $("#IdNroFactura").focus();
                                                setTimeout(function() {
                                                    $("#alert-nrofac").fadeOut(1500);
                                                }, 3000);
                                                return false;
                                            } else {
                                                var iddet = $("#IdDetPSalida").val();
                                                var idfreg = $("#IdFecha").val();
                                                var clien = $("#IdCliente").val();
                                                var nfact = $("#IdNroFactura").val();
                                                var prod = $("#IdProducto").val();
                                                var cant = $("#IdCantidad").val();
                                                var prec = $("#IdPrecio").val();
                                                Swal.fire({
                                                    title: "¡ATENCIÓN CONFIRMAR REGISTRO!",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#3085d6",
                                                    cancelButtonColor: "#d33",
                                                    cancelButtonText: "Cancelar",
                                                    confirmButtonText: "Confirmar",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        $.ajax({
                                                            type: "GET",
                                                            dataType: "json",
                                                            url: "index.php?c=Venta&a=save_new_venta",
                                                            data: "Fecha=" +
                                                                idfreg +
                                                                "&IdDetPSalida=" +
                                                                iddet +
                                                                "&IdCliente=" +
                                                                clien +
                                                                "&NroFactura=" +
                                                                nfact +
                                                                "&IdProducto=" +
                                                                prod +
                                                                "&Cantidad=" +
                                                                cant +
                                                                "&Precio=" +
                                                                prec,
                                                            success: function(response) {
                                                                response = JSON.stringify(response);
                                                                if (response == 1) {
                                                                    Swal.fire({
                                                                        html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
                                                                    });
                                                                    $(".cerrar-vta").hide();
                                                                    getListaOrdenSalida();
                                                                }
                                                                if (response == 2) {
                                                                    Swal.fire({
                                                                        html: '<div class="note note-warning"><div class="note-icon"><i class="fa-solid fa-thumbs-down"></i></div><div class="note-content"><b>REGISTRO INCORRECTO</b></div></div>',
                                                                    });
                                                                }
                                                            },
                                                        });
                                                    }
                                                });
                                            }
                                        }
                                    </script>
                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <br>
                                            <a class="btn btn-outline-success" onclick="RegistroFacturaVenta();" title="Registrar"><i class="fa-solid fa-save"></i> Registrar</a>
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
include_once 'views/layout/footer.php';
?>
<script src="assets/js/venta.js"></script>
<script src="assets/js/admin.js"></script>
<script src="assets/js/reportes.js"></script>
<script>
    $(document).ready(function() {
        $("#IdCliente").select2({
            dropdownParent: $("#modal-factura")
        });
    });
</script>