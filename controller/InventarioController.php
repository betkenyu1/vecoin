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
        /*
        data: "Fecha=" + freg + "&NroFactura=" + nrofac +
                        "&IdProducto=" + prod + "&IdProveedor=" + prov +
                        "&Cantidad=" + cant + "&Precio=" + prec + "&Observacion=" + obs,
        */
        $Fecha = date('Y-m-d');
        $FechaCompra = (isset($_REQUEST['Fecha'])) ? $_REQUEST['Fecha'] : '';
        $NroFactura = (isset($_REQUEST['NroFactura'])) ? $_REQUEST['NroFactura'] : '';
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $IdProveedor = strtoupper((isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '');
        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';
        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';
        $Observacion = (isset($_REQUEST['Observacion'])) ? $_REQUEST['Observacion'] : '';
        $IdUsuario = $_SESSION['idusuario'];
        $exito = $this->inv->RegistroOrdenEntrada($Fecha, $FechaCompra ,$NroFactura, $IdProducto, $IdProveedor, $Cantidad, $Precio, $Observacion, $IdUsuario);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    
    public function get_mod_item()
    {
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        $exito = $this->inv->getPModificarItemCatalogo($IdCatalogo);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_mod_catalogo()
    {
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        $IdEmpresa = (isset($_REQUEST['IdEmpresa'])) ? $_REQUEST['IdEmpresa'] : '';
        $Codigo = (isset($_REQUEST['Codigo'])) ? $_REQUEST['Codigo'] : '';
        $IdEstado = (isset($_REQUEST['IdEstado'])) ? $_REQUEST['IdEstado'] : '';
        $Descripcion = strtoupper((isset($_REQUEST['Descripcion'])) ? $_REQUEST['Descripcion'] : '');
        $exito = $this->cat->getModificarItemCatalogo($IdCatalogo, $IdEmpresa, $Codigo ,$Descripcion, $IdEstado);
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