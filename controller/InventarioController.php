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

    public function get_productos_activos_x_empresa()
    {
        $IdEmpresa = $_SESSION['idempresa'];
        $exito = $this->inv->getProductosActivosxEmpresa($IdEmpresa);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_stock_productos()
    {
        $exito = $this->inv->getStockProductos();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_stock_productos_sum()
    {
        $exito = $this->inv->getStockProductosSum();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_existencias()
    {
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $exito = $this->inv->getExistencias($IdProducto);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function save_new_producto()
    {
        $IdProveedor = (isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '';
        $IdUMedida = (isset($_REQUEST['IdUMedida'])) ? $_REQUEST['IdUMedida'] : '';
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        //$Fecha = date('Y-m-d');
        //$IdBodega = (isset($_REQUEST['IdBodega'])) ? $_REQUEST['IdBodega'] : '';        
        $Cantidad = strtoupper((isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '');
        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';
        $Prc_Utl = (isset($_REQUEST['Prc_Utl'])) ? $_REQUEST['Prc_Utl'] : '';
        $Utilidad = (isset($_REQUEST['Utilidad'])) ? $_REQUEST['Utilidad'] : '';
        $PVP = (isset($_REQUEST['PVP'])) ? $_REQUEST['PVP'] : '';
        //$IdUsuario = $_SESSION["idusuario"];
        //$exito = $this->inv->RegistroProducto($IdCatalogo, $IdProveedor, $Fecha, $IdBodega, $IdUMedida, $Cantidad, $Precio, $Prc_Utl, $Utilidad, $PVP, $IdUsuario);
        $exito = $this->inv->RegistroProducto($IdCatalogo, $IdProveedor, $IdUMedida, $Cantidad, $Precio, $Prc_Utl, $Utilidad, $PVP);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function lista_ordenes_entrada()
    {
        require_once 'views/inventario/lista_ordenes_entrada.php';
    }
    public function lista_stock_productos()
    {
        require_once 'views/inventario/lista_stock_productos.php';
    }
    public function get_ord_entrda()
    {
        $exito = $this->inv->getOrdenesEntrada();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_det_ord_salida()
    {
        $exito = $this->inv->getDetalleOrdenSalida();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_det_ord_entrda()
    {
        $exito = $this->inv->getDetalleOrdenEntrada();
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
        $existe = $this->inv->ExisteRegistroOrdenEntrada($IdSecuencial);
        if ($existe) {
        } else {
            $reg_cab = $this->inv->RegistroCabOrdenEntrada($Fecha, $FechaCompra, $IdSecuencial, $IdSecu, $NroFactura, $IdProveedor, $Observacion, $IdUsuario);
        }
        $existe = $this->inv->ExisteRegistroOrdenEntrada($IdSecuencial);
        if ($existe) {
            foreach ($existe as $ex) {
                $CabIdSecuencial = $ex['id_secuencial'];
            }
            $exito = $this->inv->RegistroDetOrdenEntrada($CabIdSecuencial, $IdProducto, $Cantidad, $Precio);
            if ($exito) {
                echo 1;
                $act = $this->inv->getBuscarCantidadProducto($IdProducto);
                if ($act) {
                    foreach ($act as $cant) {
                        $CantAct = $cant['cantidad'];
                        $CantAct = ($CantAct + $Cantidad);
                    }
                }
                $act = $this->inv->ActualizaCantidadProducto($IdProducto, $CantAct, $IdUsuario, $Updated_At);
            } else {
                echo 2;
            }
        }
    }
    public function lista_ordenes_salida()
    {
        require_once 'views/inventario/lista_ordenes_salida.php';
    }
    public function get_ord_salida()
    {
        $exito = $this->inv->getOrdenesSalida();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function save_new_orden_salida()
    {
        date_default_timezone_set('America/Guayaquil');
        $Updated_At = date('m-d-Y h:i:s a', time());
        $Fecha = $Updated_At;
        $FechaSalida = (isset($_REQUEST['Fecha'])) ? $_REQUEST['Fecha'] : '';
        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $IdSecu = (isset($_REQUEST['IdSecu'])) ? $_REQUEST['IdSecu'] : '';
        $IdPercha = (isset($_REQUEST['IdPercha'])) ? $_REQUEST['IdPercha'] : '';
        $IdProducto = (isset($_REQUEST['IdProducto'])) ? $_REQUEST['IdProducto'] : '';
        $Cantidad = (isset($_REQUEST['Cantidad'])) ? $_REQUEST['Cantidad'] : '';
        $Precio = (isset($_REQUEST['Precio'])) ? $_REQUEST['Precio'] : '';
        $Observacion = (isset($_REQUEST['Observacion'])) ? $_REQUEST['Observacion'] : '';
        $IdUsuario = $_SESSION['idusuario'];
        $existe = $this->inv->ExisteRegistroOrdenSalida($IdSecuencial);
        if ($existe) {
        } else {
            $reg_cab = $this->inv->RegistroCabOrdenSalida($Fecha, $FechaSalida, $IdSecuencial, $IdSecu, $Observacion, $IdUsuario);
        }
        $existe = $this->inv->ExisteRegistroOrdenSalida($IdSecuencial);
        if ($existe) {
            foreach ($existe as $ex) {
                $CabIdSecuencial = $ex['id_secuencial'];
            }
            $exito = $this->inv->RegistroDetOrdenSalida($CabIdSecuencial, $IdPercha, $IdProducto, $Cantidad, $Precio);
            if ($exito) {
                echo 1;
                $st = $this->inv->RegistroStockOrdenSalida($CabIdSecuencial, $IdPercha, $IdProducto, $Cantidad, $Precio);
                $act = $this->inv->getBuscarCantidadProducto($IdProducto);
                if ($act) {
                    foreach ($act as $cant) {
                        $CantAct = $cant['cantidad'];
                        $CantAct = ($CantAct - $Cantidad);
                    }
                }
                $act = $this->inv->ActualizaCantidadProducto($IdProducto, $CantAct, $IdUsuario, $Updated_At);
            } else {
                echo 2;
            }
        }
    }

    public function cerrar_orden_entrada()
    {
        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $Secuencial = (isset($_REQUEST['Secuencial'])) ? $_REQUEST['Secuencial'] : '';
        $exito = $this->inv->ActualizaSecuencialOrdenEntrada($IdSecuencial, $Secuencial);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function cerrar_orden_salida()
    {
        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $Secuencial = (isset($_REQUEST['Secuencial'])) ? $_REQUEST['Secuencial'] : '';
        $exito = $this->inv->ActualizaSecuencialOrdenSalida($IdSecuencial, $Secuencial);
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
