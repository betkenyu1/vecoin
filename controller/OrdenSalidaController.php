<?php
require_once 'models/OrdenSalidaModel.php';
require_once 'models/AdminModel.php';
if (!isset($_SESSION)) {
    session_start();
}
class OrdenSalidaController
{
    private $ord;
    private $adm;
    public function __construct()
    {
        $this->adm = new AdminModel();
         $this->ord = new OrdenSalidaModel();
    }
    public function lista_ordenes_salida(){
        require_once 'views/inventario/lista_ordenes_salida.php';
    }
    public function get_empresas()
    {
        $exito = $this->adm->getEmpresas();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_ord_salida()
    {
        $exito = $this->ord->getOrdenesSalida();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    
    public function save_new_producto()
    {
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        $IdProveedor = (isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '';
        $Fecha = date('Y-m-d');
        $IdBodega = (isset($_REQUEST['IdBodega'])) ? $_REQUEST['IdBodega'] : '';
        $IdUMedida = (isset($_REQUEST['IdUMedida'])) ? $_REQUEST['IdUMedida'] : '';
        $Cantidad = strtoupper((isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '');
        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';
        $Prc_Utl = (isset($_REQUEST['Prc_Utl'])) ? $_REQUEST['Prc_Utl'] : '';
        $PVP = (isset($_REQUEST['PVP'])) ? $_REQUEST['PVP'] : '';
        $IdUsuario = $_SESSION["idusuario"];
        $exito = $this->prod->RegistroProducto($IdCatalogo, $IdProveedor, $Fecha, $IdBodega, $IdUMedida, $Cantidad, $Precio, $Prc_Utl, $PVP, $IdUsuario);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }

    public function get_pmod_producto()
    {
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $exito = $this->prod->getPModificarProductos($IdProducto);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_mod_producto()
    {
        date_default_timezone_set('America/Guayaquil');
        $Updated_At = date('m-d-Y h:i:s a', time());
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        $IdProveedor = (isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '';
        $IdBodega = (isset($_REQUEST['IdBodega'])) ? $_REQUEST['IdBodega'] : '';
        $IdUMedida = (isset($_REQUEST['IdUMedida'])) ? $_REQUEST['IdUMedida'] : '';
        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';
        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';
        $Prc_Utl = (isset($_REQUEST['Prc_Utl'])) ? $_REQUEST['Prc_Utl'] : '';
        $PVP = (isset($_REQUEST['PVP'])) ? $_REQUEST['PVP'] : '';
        $IdUsuario = $_SESSION["idusuario"];
        $IdEstado = (isset($_REQUEST['IdEstado'])) ? $_REQUEST['IdEstado'] : '';
        $exito = $this->prod->getModificarProductoCatalogo($IdProducto, $IdCatalogo, $IdProveedor, $IdBodega, $IdUMedida, $Cantidad ,$Precio, $Prc_Utl, $PVP, $IdUsuario,$Updated_At, $IdEstado);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function delete_producto()
    {
        date_default_timezone_set('America/Guayaquil');
        $Deleted_At = date('m-d-Y h:i:s a', time());
        $IdUsuario = $_SESSION["idusuario"];
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $exito = $this->prod->getEliminarProductoCatalogo($IdProducto,$IdUsuario,$Deleted_At);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_producto_id (){
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $exito = $this->prod->getProductoId($IdProducto);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
}