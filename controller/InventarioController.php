<?php
require_once 'models/InventarioModel.php';
require_once 'models/AdminModel.php';
if (!isset($_SESSION)) {
    session_start();
}
class InventarioController
{
    private $inv;
    private $adm;
    public function __construct()
    {
        $this->adm = new AdminModel();
         $this->inv = new InventarioModel();
    }
    public function get_productos()
    {
        $exito = $this->inv->getProductos();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function save_new_orden_entrada()
    {
        date_default_timezone_set('America/Guayaquil');
        $Updated_At = date('m-d-Y h:i:s a', time());
        $Fecha = date('Y-m-d');
        $FechaCompra = (isset($_REQUEST['Fecha'])) ? $_REQUEST['Fecha'] : '';
        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $IdSecu = (isset($_REQUEST['IdSecu'])) ? $_REQUEST['IdSecu'] : '';
        $NroFactura = (isset($_REQUEST['NroFactura'])) ? $_REQUEST['NroFactura'] : '';
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $IdProveedor = strtoupper((isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '');
        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';
        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';
        $Observacion = (isset($_REQUEST['Observacion'])) ? $_REQUEST['Observacion'] : '';
        $IdUsuario = $_SESSION['idusuario'];
        $exito = $this->inv->RegistroOrdenEntrada($Fecha, $FechaCompra ,$IdSecuencial, $IdSecu, $NroFactura, $IdProducto, $IdProveedor, $Cantidad, $Precio, $Observacion, $IdUsuario);
        if ($exito) {
            echo 1;
            $act = $this->inv->getBuscarCantidadProducto($IdProducto);
            if($act){
                foreach($act as $cant){
                    $CantAct = $cant['cantidad'];
                    $CantAct = ($CantAct + $Cantidad);
                }
            }
            $act = $this->inv->ActualizaCantidadProducto($IdProducto, $CantAct, $IdUsuario, $Updated_At);
        } else {
            echo 2;
        }
    }

    public function cerrar_orden_entrada()
    {
        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $exito = $this->inv->ActualizaSecuencialOrdenEntrada($IdSecuencial);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function delete_item_catalogo()
    {
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        $exito = $this->cat->getEliminarItemCatalogo($IdCatalogo);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
}