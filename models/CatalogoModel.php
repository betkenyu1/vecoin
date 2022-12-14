<?php
include_once 'config/conbd.php';
class CatalogoModel
{
    private $db;

    public function __construct()
    {
        $this->db = Conexion::getConexion();
    }
    public function getCatalogo($IdEmpresa)
    {
        $consulta = "SELECT C.id_catalogo,E.razon_social,C.codigo,C.producto,ES.estado FROM catalogo C
        INNER JOIN empresas E ON (C.id_empresa=E.id_empresa)
        INNER JOIN estados ES ON (C.id_estado=ES.id_estado)
        WHERE C.id_empresa = '$IdEmpresa'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getCatalogoActivosxEmpresa($IdEmpresa)
    {
        $consulta = "SELECT C.id_catalogo,E.razon_social,C.codigo,C.producto,ES.estado 
        FROM catalogo C
        INNER JOIN empresas E ON (C.id_empresa=E.id_empresa)
        INNER JOIN estados ES ON (C.id_estado=ES.id_estado)
        WHERE C.id_empresa = '$IdEmpresa'
        AND C.id_estado=1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getPerchas()
    {
        $consulta = "SELECT id_percha,percha FROM perchas";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function RegistroItemCatalogo($IdEmpresa, $Codigo, $Producto)
    {
        $ProductoUPPER = mb_strtoupper($Producto, 'UTF-8');
        $consulta = "INSERT INTO catalogo (id_empresa,codigo,producto)
        VALUES(:id_empresa,:codigo,:producto)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_empresa', $IdEmpresa);
        $sentencia->bindParam(':codigo', $Codigo);
        $sentencia->bindParam(':producto', $ProductoUPPER);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getPModificarItemCatalogo($IdCatalogo)
    {
        $consulta = "SELECT id_catalogo, id_empresa, codigo, producto, id_estado FROM catalogo WHERE id_catalogo= '$IdCatalogo'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getModificarItemCatalogo($IdCatalogo, $IdEmpresa, $Codigo, $Descripcion, $IdEstado)
    {
        $ProductoUPPER = mb_strtoupper($Descripcion, 'UTF-8');
        $consulta = "UPDATE catalogo SET id_empresa = '$IdEmpresa',
            codigo = '$Codigo',producto = '$ProductoUPPER',id_estado = '$IdEstado'
            WHERE id_catalogo = '$IdCatalogo'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getEliminarItemCatalogo($IdCatalogo)
    {
        $consulta = "UPDATE catalogo SET id_estado =2
            WHERE id_catalogo = '$IdCatalogo'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
}
