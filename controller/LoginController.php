<?php
require_once 'models/AdminModel.php';
if (!isset($_SESSION)) {
    session_start();
}
$alert = '';
class LoginController
{
    private $usr;
    public function __construct()
    {
        $this->usr = new AdminModel();
    }
    public function login()
    {
        sleep(1);
        $idrol = 99;
        $usr = (isset($_REQUEST['usuario'])) ? $_REQUEST['usuario'] : '';
        $pass = (isset($_REQUEST['password'])) ? $_REQUEST['password'] : '';
        $existe = $this->usr->getUsuarios($usr);
        if ($existe) {
            foreach ($existe as $dat) {
                $passcifrada = password_verify($pass, $dat['password']);
                if ($passcifrada) {
                    $_SESSION["idempresa"] =  $dat['id_empresa'];
                    $_SESSION["n_comercial"] =  $dat['nombre_comercial'];
                    $_SESSION["idusuario"] =  $dat['id_usuario'];
                    $this->usr->registroSesion($dat['id_usuario']);
                    $_SESSION["user"] =  $dat['Nombres'];
                    $_SESSION["rol"] =  $dat['rol'];
                    $_SESSION["idrol"] = $dat['id_rol'];
                    $_SESSION["fotoperfil"] = $dat['foto_perfil'];
                    $_SESSION["fotofondo"] = $dat['foto_fondo'];
                    $idrol = $dat['id_rol'];
                }
            }
            echo $idrol;
        } else {
            echo 0;
        }
    }
}
