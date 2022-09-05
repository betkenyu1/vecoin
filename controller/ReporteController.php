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
    public function reporte_cxcobrar(){
        require_once 'views/reportes/rep_ctasxcobrar.php';
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
}