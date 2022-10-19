<?php
require_once 'models/VentaModel.php';
if (!isset($_SESSION)) {
    session_start();
}
class ReporteController
{
    private $rep;
    public function __construct()
    {
        $this->rep = new VentaModel();
    }
    public function reporte_cxcobrar()
    {
        require_once 'views/ventas/gestion_ctasxcobrar.php';
    }

    public function reporte_facturas_retenciones()
    {
        require_once 'views/ventas/facturas_retenciones.php';
    }
    public function reporte_facturas_registradas()
    {
        require_once 'views/ventas/facturas_registradas.php';
    }
    public function reporte_prod_disponibles()
    {
        require_once 'views/inventario/lista_stock_productos.php';
    }
    public function get_rep_ctasxcobrar()
    {
        $exito = $this->rep->getRepCtasXCobrar();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_rep_facturas_registradas()
    {
        $exito = $this->rep->getRepFactRegistradas();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_rep_facturas_retenciones()
    {
        $exito = $this->rep->getRepFactRetenciones();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
}
