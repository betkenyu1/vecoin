<?php
include_once 'config/conbd.php';
class VentaModel
{
    private $db;

    public function __construct()
    {
        $this->db = Conexion::getConexion();
    }
    public function getClientes()
    {
        $consulta = "SELECT id_cliente,razon_social FROM clientes";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getStockVenta()
    {
        $consulta = "SELECT ST.id_stock,C.producto FROM stock ST
        INNER JOIN productos P ON (ST.id_producto = P.id_producto)
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getOSalidaProductos()
    {
        $consulta = "SELECT OS.id_det_osalida,CO.fecha,CO.secuencial,C.producto,
        UM.umedida,B.bodega,OS.cantidad,OS.pvp
        FROM det_osalida OS
        INNER JOIN cab_osalida CO ON (OS.id_secuencial = CO.id_secuencial)
        INNER JOIN productos P ON (OS.id_producto = P.id_producto)
        INNER JOIN unidad_medida UM ON (P.id_umedida = UM.id_umedida)
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getDetOSalida($IdDetOSalida)
    {
        $consulta = "SELECT OS.id_det_osalida,CO.fecha,CO.secuencial,C.producto,
        UM.umedida,B.bodega,OS.cantidad,OS.pvp
        FROM det_osalida OS
        INNER JOIN cab_osalida CO ON (OS.id_secuencial = CO.id_secuencial)
        INNER JOIN productos P ON (OS.id_producto = P.id_producto)
        INNER JOIN unidad_medida UM ON (P.id_umedida = UM.id_umedida)
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)
        WHERE id_det_osalida = '$IdDetOSalida'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ExisteRegistroCabVenta($IdDetPSalida)
    {
        $consulta = "SELECT id_secuencial FROM cab_osalida
        WHERE id_det_osalida = '$IdDetPSalida'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getRegistroCabVenta($Freg, $Fecha, $IdCliente, $NroFactura ,$IdDetPSalida)
    {
        $consulta = "INSERT INTO cab_osalida(fecha,fecha_osalida,id_secuencial,secuencial,observacion,id_usuario)
        VALUES(:fecha,:fecha_osalida,:id_secuencial,:secuencial,:observacion,:id_usuario)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':fecha', $Fecha);
        $sentencia->bindParam(':fecha_osalida', $FechaSalida);
        $sentencia->bindParam(':id_secuencial', $IdSecuencial);
        $sentencia->bindParam(':secuencial', $IdSecu);
        $sentencia->bindParam(':observacion', $Observacion);
        $sentencia->bindParam(':id_usuario', $IdUsuario);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function RegistroCabOrdenEntrada($Fecha, $FechaCompra, $IdSecuencial, $IdSecu, $NroFactura, $IdProveedor, $Observacion, $IdUsuario)
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
    public function RegistroDetOrdenEntrada($CabIdSecuencial, $IdProducto, $IdUMedida, $Cantidad, $Precio)
    {
        $consulta = "INSERT INTO det_oentrada (id_secuencial,id_producto,id_umedida,cantidad,precio)
        VALUES(:id_secuencial,:id_producto,:id_umedida,:cantidad,:precio)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_secuencial', $CabIdSecuencial);
        $sentencia->bindParam(':id_producto', $IdProducto);
        $sentencia->bindParam(':id_umedida', $IdUMedida);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':precio', $Precio);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function RegistroDetOrdenSalida($CabIdSecuencial, $IdUMedida, $IdPercha, $IdProducto, $Cantidad, $Precio)
    {
        $consulta = "INSERT INTO det_osalida (id_secuencial,id_umedida,id_percha,id_producto,cantidad,pvp)
        VALUES(:id_secuencial,:id_umedida,:id_percha,:id_producto,:cantidad,:pvp)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_secuencial', $CabIdSecuencial);
        $sentencia->bindParam(':id_umedida', $IdUMedida);
        $sentencia->bindParam(':id_percha', $IdPercha);
        $sentencia->bindParam(':id_producto', $IdProducto);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':pvp', $Precio);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function RegistroStockOrdenSalida($CabIdSecuencial, $IdPercha, $IdUMedida, $IdProducto, $Cantidad, $Precio)
    {
        $consulta = "INSERT INTO stock (id_secuencial,id_percha,id_umedida,id_producto,cantidad,pvp)
        VALUES(:id_secuencial,:id_percha,:id_umedida,:id_producto,:cantidad,:pvp)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_secuencial', $CabIdSecuencial);
        $sentencia->bindParam(':id_percha', $IdPercha);
        $sentencia->bindParam(':id_umedida', $IdUMedida);
        $sentencia->bindParam(':id_producto', $IdProducto);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':pvp', $Precio);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getBuscarCantidadProducto($IdProducto)
    {
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
    public function ExisteSecuencialIdTipo($IdTipo, $Secuencial)
    {
        $consulta = "SELECT id_secuencial,secuencial
        FROM secuenciales
        WHERE id_tipo = '$IdTipo' AND secuencial = '$Secuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ActualizaSecuencialOrdenEntrada($IdSecuencial, $Secuencial)
    {
        $consulta = "UPDATE secuenciales SET secuencial = '$Secuencial'
        WHERE id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }

    public function ActualizaSecuencialOrdenSalida($IdSecuencial, $Secuencial)
    {
        $consulta = "UPDATE secuenciales SET secuencial = '$Secuencial'
        WHERE id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
}