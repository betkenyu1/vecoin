<?php

require_once 'models/InventarioModel.php';

require_once 'models/VentaModel.php';

if (!isset($_SESSION)) {

    session_start();
}

class VentaController

{

    private $inv;

    private $vta;

    public function __construct()

    {

        $this->vta = new VentaModel();

        $this->inv = new InventarioModel();
    }

    public function gestion_ventas()

    {

        require_once 'views/ventas/gestion_ventas.php';
    }

    public function gestion_ncredito()

    {

        require_once 'views/ventas/gestion_ncredito.php';
    }

    public function gestion_ctasxcobrar()

    {

        require_once 'views/ventas/gestion_pagos.php';
    }



    public function get_stock()

    {

        $exito = $this->vta->getStockVenta();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_det_osalida()
    {
        $exito = $this->vta->getOSalidaProductos();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }
    public function set_osalida()
    {
        $exito = $this->vta->getOSalidaProductos();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function idsecu_osalida()
    {

        $exito = $this->vta->idsecu_ordensalida();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }
    public function get_iddet_osalida()

    {

        $IdDetOSalida = (isset($_REQUEST['IdDetOSalida'])) ? $_REQUEST['IdDetOSalida'] : '';

        $exito = $this->vta->getDetOSalida($IdDetOSalida);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }
    public function idsecu_osalida2()

    {

        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $exito = $this->vta->GetOrdSalSecuencial($IdSecuencial);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }
    public function get_id_detosalida()
    {
        $IdDetalleOS = (isset($_REQUEST['IdDetalleOS'])) ? $_REQUEST['IdDetalleOS'] : '';
        $exito = $this->vta->GetOrdSalSecuencial($IdDetalleOS);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }


    public function get_ultima_factura()

    {

        $exito = $this->vta->getUltimaFactura();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }


    public function save_new_venta_2()
    {

        date_default_timezone_set('America/Guayaquil');

        $Fecha = date('m-d-Y h:i:s a', time());

        $IdDetPSalida = (isset($_REQUEST['IdDetalleOS'])) ? $_REQUEST['IdDetalleOS'] : '';

        $FechaFactura = (isset($_REQUEST['IdFechaModal'])) ? $_REQUEST['IdFechaModal'] : '';

        $IdCliente = (isset($_REQUEST['IdClienteModal'])) ? $_REQUEST['IdClienteModal'] : '';

        $NroFactura = (isset($_REQUEST['IdFacturaNroModal'])) ? $_REQUEST['IdFacturaNroModal'] : '';

        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';

        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';

        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';

        $IdUsuario = $_SESSION['idusuario'];

        $existe = $this->vta->ExisteRegistroCabVenta($NroFactura);

        if ($existe) {
        } else {

            $reg_cab = $this->vta->RegistroCabVenta($Fecha, $FechaFactura, $NroFactura, $IdCliente, $IdUsuario);
        }

        $existe = $this->vta->ExisteRegistroCabVenta($NroFactura);

        if ($existe) {

            foreach ($existe as $ex) {

                $IdCabVenta = $ex['id_cabventa'];
            }

            $exito = $this->vta->RegistroDetVenta($IdCabVenta, $IdProducto, $Cantidad, $Precio);

            if ($exito) {

                $exito = $this->vta->ActualizaDetOSalida($IdDetPSalida);

                echo 1;
            } else {

                echo 2;
            }
        }
    }

    public function save_new_venta()
    {

        date_default_timezone_set('America/Guayaquil');

        $Fecha = date('m-d-Y h:i:s a', time());

        $IdDetPSalida = (isset($_REQUEST['IdDetPSalida'])) ? $_REQUEST['IdDetPSalida'] : '';

        $FechaFactura = (isset($_REQUEST['Fecha'])) ? $_REQUEST['Fecha'] : '';

        $IdCliente = (isset($_REQUEST['IdCliente'])) ? $_REQUEST['IdCliente'] : '';

        $NroFactura = (isset($_REQUEST['NroFactura'])) ? $_REQUEST['NroFactura'] : '';

        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';

        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';

        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';

        $IdUsuario = $_SESSION['idusuario'];

        $existe = $this->vta->ExisteRegistroCabVenta($NroFactura);

        if ($existe) {
        } else {

            $reg_cab = $this->vta->RegistroCabVenta($Fecha, $FechaFactura, $NroFactura, $IdCliente, $IdUsuario);
        }

        $existe = $this->vta->ExisteRegistroCabVenta($NroFactura);

        if ($existe) {

            foreach ($existe as $ex) {

                $IdCabVenta = $ex['id_cabventa'];
            }

            $exito = $this->vta->RegistroDetVenta($IdCabVenta, $IdProducto, $Cantidad, $Precio);

            if ($exito) {

                $exito = $this->vta->ActualizaDetOSalida($IdDetPSalida);

                echo 1;
            } else {

                echo 2;
            }
        }
    }

    public function get_ventas_administrador()

    {

        $exito = $this->vta->GetVentasAdministrador();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_ventas_vendedor()

    {

        $exito = $this->vta->GetVentasVendedor();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_ventas_params()

    {

        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';

        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';

        $exito = $this->vta->GetVentasParams($IdFDesde, $IdFHasta);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_pagos_params()

    {

        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';

        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';

        $exito = $this->vta->GetPagosParams($IdFDesde, $IdFHasta);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_ventas_charts_params()

    {

        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';

        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';

        $exito = $this->vta->GetVentasChartsParams($IdFDesde, $IdFHasta);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_productomasvendido()

    {

        $exito = $this->vta->getProductoMasVendido();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_ctasxcobrar()

    {

        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';

        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';

        $exito = $this->vta->GetCtasxCobrar($IdFDesde, $IdFHasta);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    //NOTA DE CREDITOgetListaVentaPagos

    public function get_ventas()

    {

        $exito = $this->vta->getListaVentas();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_iddet_venta()

    {

        $IdDetVenta = (isset($_REQUEST['IdDetVenta'])) ? $_REQUEST['IdDetVenta'] : '';

        $exito = $this->vta->getDetVenta($IdDetVenta);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function save_new_ncredito()

    {

        date_default_timezone_set('America/Guayaquil');

        $FechaReg = date('m-d-Y h:i:s a', time());

        $IdDetVenta = (isset($_REQUEST['IdDetVenta'])) ? $_REQUEST['IdDetVenta'] : '';

        $IdCabVenta = (isset($_REQUEST['IdCabVenta'])) ? $_REQUEST['IdCabVenta'] : '';

        $Fecha = (isset($_REQUEST['Fecha'])) ? $_REQUEST['Fecha'] : '';

        $IdCliente = (isset($_REQUEST['IdCliente'])) ? $_REQUEST['IdCliente'] : '';

        $NroNCredito = (isset($_REQUEST['NroNCredito'])) ? $_REQUEST['NroNCredito'] : '';

        $NroFactura = (isset($_REQUEST['NroFactura'])) ? $_REQUEST['NroFactura'] : '';

        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';

        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';

        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';

        $IdUsuario = $_SESSION['idusuario'];

        $existe = $this->vta->ExisteRegistroCabNCredito($NroNCredito);

        if ($existe) {
        } else {

            $reg_cab = $this->vta->RegistroCabNCredito($FechaReg, $Fecha, $NroNCredito, $NroFactura, $IdCliente, $IdUsuario);
        }

        $existe = $this->vta->ExisteRegistroCabNCredito($NroNCredito);

        if ($existe) {

            foreach ($existe as $ex) {

                $IdCabNCredito = $ex['id_cabncredito'];
            }

            $exito = $this->vta->RegistroDetNCredito($IdCabNCredito, $IdProducto, $Cantidad, $Precio);

            if ($exito) {

                $exito = $this->vta->ActualizaEstadoDetVenta($IdDetVenta, $IdCabVenta);

                echo 1;
            } else {

                echo 2;
            }
        }
    } //PAGOS

    public function get_ventapagos()

    {

        $exito = $this->vta->getListaVentaPagos();

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function get_sum_ventapago()

    {

        $IdCabVenta = (isset($_REQUEST['IdCabVenta'])) ? $_REQUEST['IdCabVenta'] : '';

        $exito = $this->vta->getSumaFactura($IdCabVenta);

        if ($exito) {

            echo json_encode($exito);
        } else {

            $vacio = array('');

            echo json_encode($vacio);
        }
    }

    public function save_new_pago()

    {

        date_default_timezone_set('America/Guayaquil');

        $FReg = date('m-d-Y h:i:s a', time());

        $Fecha = date('Y-m-d');

        $IdCabVenta = (isset($_REQUEST['IdCabVenta'])) ? $_REQUEST['IdCabVenta'] : '';

        $NroFactura = (isset($_REQUEST['NroFactura'])) ? $_REQUEST['NroFactura'] : '';

        $Valor = (isset($_REQUEST['Valor'])) ? $_REQUEST['Valor'] : '';

        $IdUsuario = $_SESSION['idusuario'];

        $exito = $this->vta->RegistroPago($FReg, $Fecha, $IdCabVenta, $NroFactura, $Valor, $IdUsuario);

        if ($exito) {

            $act = $this->vta->ActualizaEstadoCabVenta($IdCabVenta);

            echo 1;
        } else {

            echo 2;
        }
    }
}
