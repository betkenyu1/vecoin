<?php
require_once 'config/config.php';
$controlador = CONTROLADOR_PRINCIPAL;
$accion = ACCION_PRINCIPAL;

if (isset($_GET['c']) && !empty($_GET['c'])) {
    $controlador = $_GET['c'];
    if (isset($_GET['a']) && !empty($_GET['a'])) {
        $accion = $_GET['a'];
    } else {
        header("Location: index.php?c=Index&a=index");
    }
} else {
    header("Location: index.php?c=Index&a=index");
}
$nombreControlador = ucwords(strtolower($controlador)) . "Controller";
$archivoControlador = 'controller/' . $nombreControlador . '.php';

if (!is_file($archivoControlador)) {
    $nombreControlador = CONTROLADOR_PRINCIPAL . "Controller";
    $archivoControlador = 'controller/' . CONTROLADOR_PRINCIPAL . 'Controller' . '.php';
    $accion = ACCION_PRINCIPAL;
}
require_once $archivoControlador;
$objControlador = new $nombreControlador();
$objControlador->$accion();
