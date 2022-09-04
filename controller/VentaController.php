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
    public function gestion_ventas(){
        require_once 'views/ventas/gestion_ventas.php';
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
    
    public function get_ventas_administrador(){
        $exito = $this->vta->GetVentasAdministrador();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_ventas_vendedor(){
        $exito = $this->vta->GetVentasVendedor();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_ventas_params(){
        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';
        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';
        $exito = $this->vta->GetVentasParams($IdFDesde,$IdFHasta);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_pagos_params(){
        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';
        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';
        $exito = $this->vta->GetPagosParams($IdFDesde,$IdFHasta);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_ventas_charts_params(){
        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';
        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';
        $exito = $this->vta->GetVentasChartsParams($IdFDesde,$IdFHasta);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_productomasvendido(){
        $exito = $this->vta->getProductoMasVendido();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_ctasxcobrar(){
        $IdFDesde = (isset($_REQUEST['IdFDesde'])) ? $_REQUEST['IdFDesde'] : '';
        $IdFHasta = (isset($_REQUEST['IdFHasta'])) ? $_REQUEST['IdFHasta'] : '';
        $exito = $this->vta->GetCtasxCobrar($IdFDesde,$IdFHasta);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
}
