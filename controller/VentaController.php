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
}
