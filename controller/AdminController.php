<?php
require_once 'models/AdminModel.php';
if (!isset($_SESSION)) {
    session_start();
}
$alert = '';
class AdminController
{
    private $adm;
    public function __construct()
    {
        $this->adm = new AdminModel();
    }
    public function login()
    {
        $usr = (isset($_REQUEST['usuario'])) ? $_REQUEST['usuario'] : '';
        $pass = (isset($_REQUEST['password'])) ? $_REQUEST['password'] : '';
        $existe = $this->adm->getUsuarios($usr, $pass);
        if ($existe) {
            foreach ($existe as $dat) {
                $_SESSION["idempresa"] =  $dat['id_empresa'];
                $_SESSION["n_comercial"] =  $dat['nombre_comercial'];
                $_SESSION["idusuario"] =  $dat['id_usuario'];
                $_SESSION["user"] =  $dat['Nombres'];
                $_SESSION["rol"] =  $dat['rol'];
                $idrol = $dat['id_rol'];
            }
            echo $idrol;
        } else {
            echo 0;
        }
    }

    public function lista_empresas()
    {
         require_once 'views/parametrizacion/lista_empresas.php';
    }
    public function lista_clientes()
    {
         require_once 'views/parametrizacion/lista_clientes.php';
    }

    public function lista_empleados()
    {
         require_once 'views/parametrizacion/lista_empleados.php';
    }
    public function lista_proveedores()
    {
         require_once 'views/parametrizacion/lista_proveedores.php';
    }
    public function get_secuencial()
    {
        $IdUsuario = $_SESSION["idusuario"];
        $existe = $this->adm->ExisteSecuencial($IdUsuario);
        if ($existe) {
        } else {
            $exito = $this->adm->RegistroSecuencial($IdUsuario);
        }
        $existe = $this->adm->ExisteSecuencial($IdUsuario);
        if ($existe) {
            echo json_encode($existe);
            
        } else {
            $exito = array();
            echo json_encode($exito);
        }
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
    public function get_empresa_id()
    {
        $IdEmpresa = (isset($_REQUEST['IdEmpresa'])) ? $_REQUEST['IdEmpresa'] : '';
        $exito = $this->adm->getEmpresaId($IdEmpresa);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_clientes()
    {
        $exito = $this->adm->getClientes();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_proveedor_id()
    {
        $IdProveedor = (isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '';
        $exito = $this->adm->getProveedorId($IdProveedor);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function save_new_empresa(){
        $RazonSocial = (isset($_REQUEST['RazonSocial'])) ? $_REQUEST['RazonSocial'] : '';
        $NombreComercial = (isset($_REQUEST['NombreComercial'])) ? $_REQUEST['NombreComercial'] : '';
        $Ruc = (isset($_REQUEST['Ruc'])) ? $_REQUEST['Ruc'] : '';
        $Direccion = (isset($_REQUEST['Direccion'])) ? $_REQUEST['Direccion'] : '';
        $Telefono = (isset($_REQUEST['Telefono'])) ? $_REQUEST['Telefono'] : '';
        $Email = (isset($_REQUEST['Email'])) ? $_REQUEST['Email'] : '';
        $exito = $this->adm->RegistroEmpresa($RazonSocial,$NombreComercial,$Ruc,$Direccion,$Telefono,$Email);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function save_new_proveedor(){
        $Ruc = (isset($_REQUEST['Ruc'])) ? $_REQUEST['Ruc'] : '';
        $RazonSocial = (isset($_REQUEST['RazonSocial'])) ? $_REQUEST['RazonSocial'] : '';             
        $Direccion = (isset($_REQUEST['Direccion'])) ? $_REQUEST['Direccion'] : '';
        $Telefono = (isset($_REQUEST['Telefono'])) ? $_REQUEST['Telefono'] : '';
        $Email = (isset($_REQUEST['Email'])) ? $_REQUEST['Email'] : '';
        $exito = $this->adm->RegistroProveedor($Ruc,$RazonSocial,$Direccion,$Telefono,$Email);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_elim_proveedor(){
        $IdProveedor = (isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '';
        $exito = $this->adm->EliminarProveedor($IdProveedor);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_mod_proveedor(){
        $IdProveedor = (isset($_REQUEST['IdProveedor'])) ? $_REQUEST['IdProveedor'] : '';
        $Ruc = (isset($_REQUEST['Ruc'])) ? $_REQUEST['Ruc'] : '';
        $RazonSocial = (isset($_REQUEST['RazonSocial'])) ? $_REQUEST['RazonSocial'] : '';
        $Direccion = (isset($_REQUEST['Direccion'])) ? $_REQUEST['Direccion'] : '';
        $Telefono = (isset($_REQUEST['Telefono'])) ? $_REQUEST['Telefono'] : '';
        $Email = (isset($_REQUEST['Email'])) ? $_REQUEST['Email'] : '';
        $exito = $this->adm->ModificarProveedor($IdProveedor,$Ruc,$RazonSocial,$Direccion,$Telefono,$Email);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_mod_empresa(){
        $IdEmpresa = (isset($_REQUEST['IdEmpresa'])) ? $_REQUEST['IdEmpresa'] : '';
        $RazonSocial = (isset($_REQUEST['RazonSocial'])) ? $_REQUEST['RazonSocial'] : '';
        $NombreComercial = (isset($_REQUEST['NombreComercial'])) ? $_REQUEST['NombreComercial'] : '';
        $Ruc = (isset($_REQUEST['Ruc'])) ? $_REQUEST['Ruc'] : '';
        $Direccion = (isset($_REQUEST['Direccion'])) ? $_REQUEST['Direccion'] : '';
        $Telefono = (isset($_REQUEST['Telefono'])) ? $_REQUEST['Telefono'] : '';
        $Email = (isset($_REQUEST['Email'])) ? $_REQUEST['Email'] : '';
        $exito = $this->adm->ModificarEmpresa($IdEmpresa,$RazonSocial,$NombreComercial,$Ruc,$Direccion,$Telefono,$Email);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_elim_empresa(){
        $IdEmpresa = (isset($_REQUEST['IdEmpresa'])) ? $_REQUEST['IdEmpresa'] : '';
        $exito = $this->adm->EliminarEmpresa($IdEmpresa);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function save_new_empleado(){
        $IdEmpresa = (isset($_REQUEST['IdEmpresa'])) ? $_REQUEST['IdEmpresa'] : '';
        $Nombres = (isset($_REQUEST['Nombres'])) ? $_REQUEST['Nombres'] : '';
        $Apellidos = (isset($_REQUEST['Apellidos'])) ? $_REQUEST['Apellidos'] : '';
        $Direccion = (isset($_REQUEST['Direccion'])) ? $_REQUEST['Direccion'] : '';
        $Telefono = (isset($_REQUEST['Telefono'])) ? $_REQUEST['Telefono'] : '';
        $Email = (isset($_REQUEST['Email'])) ? $_REQUEST['Email'] : '';
        $exito = $this->adm->RegistroEmpleado($IdEmpresa,$Nombres,$Apellidos,$Direccion,$Telefono,$Email);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_mod_empleado(){
        $IdEmpleado = (isset($_REQUEST['IdEmpleado'])) ? $_REQUEST['IdEmpleado'] : '';
        $IdEmpresa = (isset($_REQUEST['IdEmpresa'])) ? $_REQUEST['IdEmpresa'] : '';
        $Nombres = (isset($_REQUEST['Nombres'])) ? $_REQUEST['Nombres'] : '';
        $Apellidos = (isset($_REQUEST['Apellidos'])) ? $_REQUEST['Apellidos'] : '';
        $Direccion = (isset($_REQUEST['Direccion'])) ? $_REQUEST['Direccion'] : '';
        $Telefono = (isset($_REQUEST['Telefono'])) ? $_REQUEST['Telefono'] : '';
        $Email = (isset($_REQUEST['Email'])) ? $_REQUEST['Email'] : '';
        $exito = $this->adm->ModificarEmpleado($IdEmpleado,$IdEmpresa,$Nombres,$Apellidos,$Direccion,$Telefono,$Email);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_elim_empleado(){
        $IdEmpleado = (isset($_REQUEST['IdEmpleado'])) ? $_REQUEST['IdEmpleado'] : '';
        $exito = $this->adm->EliminarEmpleado($IdEmpleado);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function lista_usuarios()
    {
         require_once 'views/secure/lista_usuarios.php';
    }
    public function get_empleados()
    {
        $exito = $this->adm->getEmpleados();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    
    public function get_empleado_id(){
        $IdEmpleado = (isset($_REQUEST['IdEmpleado'])) ? $_REQUEST['IdEmpleado'] : '';
        $exito = $this->adm->getEmpleadosId($IdEmpleado);
        if ($exito) {
            echo json_encode($exito);
        } else {
            echo 2;
        }
    }
    public function get_roles()
    {
        $exito = $this->adm->getRoles();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function new_usuario()
    {
        $IdEmpleado = (isset($_REQUEST['IdEmpleado'])) ? $_REQUEST['IdEmpleado'] : '';//request arreglo que lee 3 formatos get, post y cookies
        $IdRol = (isset($_REQUEST['IdRol'])) ? $_REQUEST['IdRol'] : '';
        $Usuario = (isset($_REQUEST['Usuario'])) ? $_REQUEST['Usuario'] : '';
        $Password = (isset($_REQUEST['Password'])) ? $_REQUEST['Password'] : '';
        $PasswordHash = password_hash($Password, PASSWORD_DEFAULT, [19]);//password_hash es una funcion de cifrado
        $exito = $this->adm->RegistroNewUsuario($IdEmpleado ,$IdRol, $Usuario, $PasswordHash);
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_usuarios(){
        $exito = $this->adm->getListaUsuarios();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_usuario_id(){
        $IdUsuario = (isset($_REQUEST['IdUsuario'])) ? $_REQUEST['IdUsuario'] : '';
        $exito = $this->adm->getUsuarioId($IdUsuario);
        if ($exito) {
            echo json_encode($exito);
        } else {
            echo 2;
        }
    }
    public function get_mod_usuario(){
        $IdUsuario = (isset($_REQUEST['IdUsuario'])) ? $_REQUEST['IdUsuario'] : '';
        $IdRol = (isset($_REQUEST['IdRol'])) ? $_REQUEST['IdRol'] : '';
        $Usuario = (isset($_REQUEST['Usuario'])) ? $_REQUEST['Usuario'] : '';
        $IdEstado = (isset($_REQUEST['IdEstado'])) ? $_REQUEST['IdEstado'] : '';
        $exito = $this->adm->ModificarUsuario($IdUsuario,$IdRol,$Usuario,$IdEstado);
        if ($exito) {
            echo json_encode($exito);
        } else {
            echo 2;
        }
    }
    public function get_elim_usuario(){
        $IdUsuario = (isset($_REQUEST['IdUsuario'])) ? $_REQUEST['IdUsuario'] : '';
        $exito = $this->adm->EliminarUsuario($IdUsuario);
        if ($exito) {
            echo 1;
        } else {
            echo 2;
        }
    }
    public function get_proveedor()
    {
        $exito = $this->adm->getProveedores();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_estados()
    {
        $exito = $this->adm->getEstados();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
}