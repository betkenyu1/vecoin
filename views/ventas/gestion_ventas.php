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
                                            <input type="hidden" class="form-control" id="IdClienteModal">
                                            <input type="text" class="form-control" id="IdSecuencial">
                                            <input type="date" disabled class="form-control" id="IdFechaModal">
                                            <div id="alert-fecha"></div>
                                            <hr>
                                        </div>
                                    </div>


                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <input type="hidden" class="form-control" id="IdDetalleOS">
                                            <b style="color: #000000;">Factura Nro:</b> <br>
                                            <input type="text" disabled class="form-control" id="IdFacturaNroModal">
                                            <div id="alert-nf"></div>
                                            <hr>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <b style="color: #000000;">Producto:</b> <br>
                                            <input type="hidden" class="form-control" id="IdProducto">
                                            <input type="text" disabled class="form-control" id="IdDetProducto">
                                            <div id="alert-nf"></div>
                                            <hr>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <b style="color: #000000;">Cantidad:</b> <br>
                                            <input type="text" disabled class="form-control" id="IdCantidad">
                                            <div id="alert-nf"></div>
                                            <hr>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-10px">
                                            <b style="color: #000000;">P.V.P.:</b> <br>
                                            <input type="text" class="form-control" id="IdPrecio">
                                            <div id="alert-nf"></div>
                                            <hr>
                                        </div>
                                    </div>

                                    <script>
                                        function RegistroFacturaVenta() {
                                            var iddet = $("#IdDetalleOS").val();
                                            var idfreg = $("#IdFechaModal").val();
                                            var clien = $("#IdClienteModal").val();
                                            var nfact = $("#IdFacturaNroModal").val();
                                            var prod = $("#IdProducto").val();
                                            var cant = $("#IdCantidad").val();
                                            var prec = $("#IdPrecio").val();
                                            var secu = $("#IdSecuencial").val();

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
                                                        url: "index.php?c=Venta&a=save_new_venta_2",
                                                        data: "IdFechaModal=" +
                                                            idfreg +
                                                            "&IdDetalleOS=" +
                                                            iddet +
                                                            "&IdClienteModal=" +
                                                            clien +
                                                            "&IdFacturaNroModal=" +
                                                            nfact +
                                                            "&IdProducto=" +
                                                            prod +
                                                            "&Cantidad=" +
                                                            cant +
                                                            "&Precio=" +
                                                            prec +
                                                            "&IdSecuencial=" +
                                                            secu,
                                                        success: function(response) {
                                                            response = JSON.stringify(response);
                                                            if (response == 1) {
                                                                Swal.fire({
                                                                    html: '<div class="note note-info"><div class="note-icon"><i class="fa-solid fa-thumbs-up"></i></div><div class="note-content"><b>REGISTRO CORRECTO</b></div></div>',
                                                                });
                                                                $('#modal-factura').modal('hide')
                                                                //getListaOrdenSalida();
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