<?php
require_once 'models/ProductoModel.php';
require_once 'models/AdminModel.php';
if (!isset($_SESSION)) {
    session_start();
}
class ProductoController
{
    private $prod;
    private $adm;
    public function __construct()
    {
        $this->adm = new AdminModel();
         $this->prod = new ProductoModel();
    }

    public function lista_productos()
    {
        require_once 'views/inventario/lista_productos.php';
    }
    public function lista_ordenes_entrada(){
        require_once 'views/inventario/lista_ordenes_entrada.php';
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
    public function get_productos_empresa()
    {
        $IdEmpresa = $_SESSION['idempresa'];
        $exito = $this->prod->getProductosEmpresa($IdEmpresa);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_productos()
    {
        $exito = $this->prod->getProductos();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_producto_chart(){
        $result = array();
        $exito = $this->prod->getProductosChart();
        /*
        foreach($exito as $ex){
            //$result = $ex['id_umedida'] ;
            $result = array_push($result, array($ex['id_umedida'],$ex['cantidad']));
            echo json_encode($result);
        }*/
           
           //echo json_encode($result,JSON_NUMERIC_CHECK);
           
           echo json_encode($exito);
           // echo json_encode(array_push($exito));
            /*
            foreach($exito as $ex){
                $resultado = array_push($result['id_umedida'],$result['cantidad']);
                echo json_encode($resultado);
            }*/
        
    }
    public function get_bodegas()
    {
        $exito = $this->prod->getBodegas();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_umedidas()
    {
        $exito = $this->prod->getUmedidas();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
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