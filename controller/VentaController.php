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
    public function lista_ventas(){
        require_once 'views/ventas/lista_ventas.php';
    }
    public function get_clientes()
    {
        $exito = $this->vta->getClientes();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
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
    /*
    data: "IdFecha=" + idfreg +
              "&IdCliente=" + clien + "&NroFactura=" + nfact +
              "&Producto=" + prod + "&Cantidad=" + cant + "&Precio=" + prec,
    */
    public function save_new_venta()
    {
        date_default_timezone_set('America/Guayaquil');
        $Freg = date('m-d-Y h:i:s a', time());
        $Fecha = date('Y-m-d');
        $IdDetPSalida = (isset($_REQUEST['IdDetPSalida'])) ? $_REQUEST['IdDetPSalida'] : '';
        $Fecha = (isset($_REQUEST['Fecha'])) ? $_REQUEST['Fecha'] : '';
        $Fecha = (isset($_REQUEST['Fecha'])) ? $_REQUEST['Fecha'] : '';
        $IdCliente = (isset($_REQUEST['IdCliente'])) ? $_REQUEST['IdCliente'] : '';
        $NroFactura = (isset($_REQUEST['NroFactura'])) ? $_REQUEST['NroFactura'] : '';
        $Producto = (isset($_REQUEST['Producto'])) ? $_REQUEST['Producto'] : '';
        $Cantidad = strtoupper((isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '');
        $Precio = strtoupper((isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '');
        $exito = $this->vta->getRegistroCabVenta($Freg, $Fecha, $IdCliente, $NroFactura ,$IdDetPSalida);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
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
}
