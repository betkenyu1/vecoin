<?php
include_once 'config/conbd.php';
class InventarioModel{
    private $db;
    
    public function __construct() {
        $this->db= Conexion::getConexion();
    }   
    public function getProductos(){
        $consulta = "SELECT P.id_producto,C.producto FROM productos P
        INNER JOIN catalogo C ON (P.id_catalogo=C.id_catalogo)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    //$exito = $this->inv->RegistroOrdenEntrada($Fecha, $FechaCompra ,$IdProducto, $IdProveedor, $Cantidad, $Precio, $Observacion);
    public function RegistroOrdenEntrada($Fecha, $FechaCompra ,$NroFactura, $IdProducto, $IdProveedor, $Cantidad, $Precio, $Observacion,$IdUsuario)
    {
        $consulta = "INSERT INTO ordenes_entrada (fecha,fecha_compra,nro_factura,id_producto,id_proveedor,cantidad,precio,observacion,id_usuario)
        VALUES(:fecha,:fecha_compra,:nro_factura,:id_producto,:id_proveedor,:cantidad,:precio,:observacion,:id_usuario)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':fecha', $Fecha);
        $sentencia->bindParam(':fecha_compra', $FechaCompra);
        $sentencia->bindParam(':nro_factura', $NroFactura);
        $sentencia->bindParam(':id_producto', $IdProducto);
        $sentencia->bindParam(':id_proveedor', $IdProveedor);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':precio', $Precio);
        $sentencia->bindParam(':observacion', $Observacion);
        $sentencia->bindParam(':id_usuario', $IdUsuario);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getPModificarItemCatalogo($IdCatalogo){
        $consulta = "SELECT id_catalogo,codigo,producto FROM catalogo
        WHERE id_catalogo = '$IdCatalogo'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getModificarItemCatalogo($IdCatalogo, $IdEmpresa, $Codigo ,$Descripcion, $IdEstado)
    {
        $consulta = "UPDATE catalogo SET id_empresa = '$IdEmpresa',
            codigo = '$Codigo',producto = '$Descripcion',id_estado = '$IdEstado'
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