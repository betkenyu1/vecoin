<?php
include_once 'config/conbd.php';
class ProductoModel{
    private $db;
    
    public function __construct() {
        $this->db= Conexion::getConexion();
    }   
    
    public function getBodegas(){
        $consulta = "SELECT id_bodega,bodega FROM bodegas";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getUmedidas(){
        $consulta = "SELECT id_umedida,umedida FROM unidad_medida";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProductosEmpresa($IdEmpresa){
        $consulta = "SELECT P.id_producto,EM.razon_social,C.codigo,C.producto,B.bodega,U.umedida,
        P.cantidad,P.precio,P.prc_utl,P.pvp,E.estado FROM productos P
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        INNER JOIN empresas EM ON (C.id_empresa = EM.id_empresa)
        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)
        INNER JOIN unidad_medida U ON (P.id_umedida = U.id_umedida)
        INNER JOIN estados E ON (P.id_estado = E.id_estado)
        WHERE P.id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProductos(){
        $consulta = "SELECT P.id_producto,EM.razon_social,C.codigo,C.producto,B.bodega,U.umedida,
        P.cantidad,P.precio,P.prc_utl,P.pvp,E.estado FROM productos P
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        INNER JOIN empresas EM ON (C.id_empresa = EM.id_empresa)
        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)
        INNER JOIN unidad_medida U ON (P.id_umedida = U.id_umedida)
        INNER JOIN estados E ON (P.id_estado = E.id_estado)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProductosChart(){
        $consulta = "SELECT SUM(cantidad) AS cantidad, SUM(prc_utl) AS utilidad FROM productos";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProductoId($IdProducto){
        $consulta = "SELECT cantidad,precio FROM productos
        WHERE id_producto = '$IdProducto' AND id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    
    public function getPModificarProductos($IdProducto){
        $consulta = "SELECT id_producto,cantidad,precio,prc_utl,pvp FROM productos
        WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getModificarProductoCatalogo($IdProducto, $IdCatalogo, $IdProveedor, $IdBodega, $IdUMedida, $Cantidad ,$Precio, $Prc_Utl, $PVP, $IdUsuario,$Updated_At,$IdEstado)
    {
        $consulta = "UPDATE productos SET id_catalogo = '$IdCatalogo',id_proveedor = '$IdProveedor',id_bodega = '$IdBodega',
            id_umedida = '$IdUMedida',cantidad = '$Cantidad',precio = '$Precio',prc_utl = '$Prc_Utl',
            pvp = '$PVP',id_usuario = '$IdUsuario',updated_at = '$Updated_At',id_estado = '$IdEstado'
            WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getEliminarProductoCatalogo($IdProducto,$IdUsuario,$Deleted_At)
    {
        $consulta = "UPDATE productos SET id_usuario = '$IdUsuario',deleted_at = '$Deleted_At',id_estado =2
            WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
}