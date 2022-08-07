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
    public function ExisteRegistroOrdenEntrada($IdSecuencial){
        $consulta = "SELECT id_secuencial FROM cab_oentrada
        WHERE id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function RegistroCabOrdenEntrada($Fecha, $FechaCompra ,$IdSecuencial, $IdSecu, $NroFactura, $IdProveedor, $Observacion, $IdUsuario)
    {
        $consulta = "INSERT INTO cab_oentrada (fecha,fecha_compra,id_secuencial,secuencial,nro_factura,id_proveedor,observacion,id_usuario)
        VALUES(:fecha,:fecha_compra,:id_secuencial,:secuencial,:nro_factura,:id_proveedor,:observacion,:id_usuario)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':fecha', $Fecha);
        $sentencia->bindParam(':fecha_compra', $FechaCompra);
        $sentencia->bindParam(':id_secuencial', $IdSecuencial);
        $sentencia->bindParam(':secuencial', $IdSecu);
        $sentencia->bindParam(':nro_factura', $NroFactura);
        $sentencia->bindParam(':id_proveedor', $IdProveedor);
        $sentencia->bindParam(':observacion', $Observacion);
        $sentencia->bindParam(':id_usuario', $IdUsuario);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function RegistroDetOrdenEntrada($CabIdSecuencial, $IdProducto, $Cantidad, $Precio)
    {
        $consulta = "INSERT INTO det_oentrada (id_secuencial,id_producto,cantidad,precio)
        VALUES(:id_secuencial,:id_producto,:cantidad,:precio)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_secuencial', $CabIdSecuencial);
        $sentencia->bindParam(':id_producto', $IdProducto);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':precio', $Precio);
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
    public function ActualizaSecuencialOrdenEntrada($IdSecuencial)
    {
        $consulta = "UPDATE secuenciales SET id_estado = 2
        WHERE id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
}