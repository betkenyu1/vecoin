<?php
require_once 'models/CatalogoModel.php';
require_once 'models/AdminModel.php';
if (!isset($_SESSION)) {
    session_start();
}
class CatalogoController
{
    private $cat;
    private $adm;
    public function __construct()
    {
        $this->adm = new AdminModel();
         $this->cat = new CatalogoModel();
    }
    public function lista_catalogo()
    {
        require_once 'views/parametrizacion/lista_catalogo.php';
    }
    public function get_catalogo()
    {
        $IdEmpresa = $_SESSION['idempresa'];
        $exito = $this->cat->getCatalogo($IdEmpresa);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_perchas()
    {
        $exito = $this->cat->getPerchas();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function save_new_item()
    {
        $IdEmpresa = (isset($_REQUEST['IdEmpresa'])) ? $_REQUEST['IdEmpresa'] : '';
        $Codigo = (isset($_REQUEST['Codigo'])) ? $_REQUEST['Codigo'] : '';
        $Producto = strtoupper((isset($_REQUEST['Descripcion'])) ? $_REQUEST['Descripcion'] : '');
        $exito = $this->cat->RegistroItemCatalogo($IdEmpresa, $Codigo ,$Producto);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    
    public function get_mod_item()
    {
        $IdCatalogo = (isset($_REQUEST['IdCatalogo'])) ? $_REQUEST['IdCatalogo'] : '';
        $exito = $this->cat->getPModificarItemCatalogo($IdCatalogo);
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