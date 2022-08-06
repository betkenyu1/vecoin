<?php
if (!isset($_SESSION)) {
    session_start();
}
class IndexController
{
    public function index()
    {
        session_destroy();
        require_once 'views/secure/login.php';
    }
    public function home()
    {
        require_once 'views/secure/home.php';
    }
}
