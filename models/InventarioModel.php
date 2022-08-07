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
    public function RegistroOrdenEntrada($Fecha, $FechaCompra ,$IdSecuencial, $IdSecu, $NroFactura, $IdProducto, $IdProveedor, $Cantidad, $Precio, $Observacion,$IdUsuario)
    {
        $consulta = "INSERT INTO ordenes_entrada (fecha,fecha_compra,id_secuencial,secuencial,nro_factura,id_producto,id_proveedor,cantidad,precio,observacion,id_usuario)
        VALUES(:fecha,:fecha_compra,:id_secuencial,:secuencial,:nro_factura,:id_producto,:id_proveedor,:cantidad,:precio,:observacion,:id_usuario)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':fecha', $Fecha);
        $sentencia->bindParam(':fecha_compra', $FechaCompra);
        $sentencia->bindParam(':id_secuencial', $IdSecuencial);
        $sentencia->bindParam(':secuencial', $IdSecu);
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
    public function getBuscarCantidadProducto($IdProducto){
        $consulta = "SELECT cantidad FROM productos
        WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ActualizaCantidadProducto($IdProducto, $Cantidad, $IdUsuario, $Updated_At)
    {
        $consulta = "UPDATE productos SET cantidad = '$Cantidad',updated_at = '$Updated_At',
        id_usuario = '$IdUsuario'
        WHERE id_producto = '$IdProducto'";
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