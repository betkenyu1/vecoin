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
    public function lista_ordenes_entrada()
    {
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

    public function get_productos_x_empresa()
    {
        $IdEmpresa = $_SESSION['idempresa'];
        $exito = $this->prod->getProductosxEmpresa($IdEmpresa);
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
        $IdEmpresa = $_SESSION['idempresa'];
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $exito = $this->prod->getPModificarProductos($IdProducto, $IdEmpresa);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_mod_producto()
    {
        //date_default_timezone_set('America/Guayaquil');
        //$Updated_At = date('m-d-Y h:i:s a', time());
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $IdProveedor = (isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '';
        //$IdBodega = (isset($_REQUEST['IdBodega'])) ? $_REQUEST['IdBodega'] : '';
        $IdUMedida = (isset($_REQUEST['IdUMedida'])) ? $_REQUEST['IdUMedida'] : '';
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';
        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';
        $Prc_Utl = (isset($_REQUEST['Prc_Utl'])) ? $_REQUEST['Prc_Utl'] : '';
        $Utilidad = (isset($_REQUEST['Utilidad'])) ? $_REQUEST['Utilidad'] : '';
        $PVP = (isset($_REQUEST['PVP'])) ? $_REQUEST['PVP'] : '';
        //$IdUsuario = $_SESSION["idusuario"];
        //$IdEstado = (isset($_REQUEST['IdEstado'])) ? $_REQUEST['IdEstado'] : '';
        $exito = $this->prod->getModificarProductoCatalogo($IdProducto, $IdCatalogo, $IdProveedor, $IdUMedida, $Cantidad, $Precio, $Prc_Utl, $Utilidad, $PVP);
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
        $exito = $this->prod->getEliminarProductoCatalogo($IdProducto, $IdUsuario, $Deleted_At);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_producto_id()
    {
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
