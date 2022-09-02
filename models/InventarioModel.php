<?php
include_once 'config/conbd.php';
class InventarioModel
{
    private $db;

    public function __construct()
    {
        $this->db = Conexion::getConexion();
    }
    public function getProductos()
    {
        $consulta = "SELECT P.id_producto,C.producto FROM productos P
        INNER JOIN catalogo C ON (P.id_catalogo=C.id_catalogo)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    
    public function getStockProductos()
    {
        $consulta = "SELECT PR.id_producto, E.razon_social AS compania,C.producto AS nombre_producto, P.proveedor,B.bodega,UM.umedida, PR.cantidad, PR.precio, PR.cantidad*PR.pvp AS 'valorizacion' 
        , CASE WHEN PR.id_estado = '1' THEN 'Activo' ELSE 'Inactivo' END AS id_estado FROM productos PR
        INNER JOIN proveedores P ON P.id_proveedor = PR.id_proveedor
        INNER JOIN catalogo C ON C.id_catalogo = PR.id_catalogo
        INNER JOIN empresas E ON E.id_empresa = C.id_empresa
        INNER JOIN bodegas B ON B.id_bodega = PR.id_bodega
        INNER JOIN unidad_medida UM ON UM.id_umedida = PR.id_umedida;";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getStockProductosSum()
    {
        $consulta = "SELECT SUM(cantidad) AS Cantidad, SUM(Precio) AS Precio, SUM(PVP) AS Valor 
        FROM productos";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getExistencias($IdProducto)
    {
        $consulta = "SELECT cantidad,pvp FROM productos
        WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function RegistroProducto($IdCatalogo, $IdProveedor, $Fecha, $IdBodega, $IdUMedida, $Cantidad, $Precio, $Prc_Utl, $PVP, $IdUsuario)
    {
        $consulta = "INSERT INTO productos (id_catalogo,id_proveedor,fecha,id_bodega,id_umedida,cantidad,precio,prc_utl,pvp,id_usuario)
        Values(:id_catalogo,:id_proveedor,:fecha,:id_bodega,:id_umedida,:cantidad,:precio,:prc_utl,:pvp,:id_usuario)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_catalogo', $IdCatalogo);
        $sentencia->bindParam(':id_proveedor', $IdProveedor);
        $sentencia->bindParam(':fecha', $Fecha);
        $sentencia->bindParam(':id_bodega', $IdBodega);
        $sentencia->bindParam(':id_umedida', $IdUMedida);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':precio', $Precio);
        $sentencia->bindParam(':prc_utl', $Prc_Utl);
        $sentencia->bindParam(':pvp', $PVP);
        $sentencia->bindParam(':id_usuario', $IdUsuario);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getOrdenesEntrada()
    {
        $consulta = "SELECT OE.id_secuencial,OE.fecha,OE.secuencial,OE.nro_factura,P.proveedor,
        E.estado FROM cab_oentrada OE
        INNER JOIN proveedores P ON (OE.id_proveedor = P.id_proveedor)
        INNER JOIN estados E ON (OE.id_estado = E.id_estado)
        WHERE OE.id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getOrdenesSalida()
    {
        $consulta = "SELECT OS.id_secuencial,OS.fecha,OS.secuencial,
        CONCAT(EM.nombres,' ',EM.apellidos) AS responsable,
        E.estado FROM cab_osalida OS
        INNER JOIN usuarios U ON (OS.id_usuario = U.id_usuario)
        INNER JOIN empleados EM ON (U.id_empleado = EM.id_empleado)
        INNER JOIN estados E ON (OS.id_estado = E.id_estado)
        WHERE OS.id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ExisteRegistroOrdenSalida($IdSecuencial)
    {
        $consulta = "SELECT id_secuencial FROM cab_osalida
        WHERE id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ExisteRegistroOrdenEntrada($IdSecuencial)
    {
        $consulta = "SELECT id_secuencial FROM cab_oentrada
        WHERE id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function RegistroCabOrdenSalida($Fecha, $FechaSalida, $IdSecuencial, $IdSecu, $Observacion, $IdUsuario)
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
