<?php
include_once 'config/conbd.php';
class VentaModel
{
    private $db;

    public function __construct()
    {
        $this->db = Conexion::getConexion();
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
        $consulta = "SELECT OS.id_det_osalida,CO.id_secuencial,CO.fecha,CO.secuencial,C.producto,
        UM.umedida,B.bodega,OS.cantidad,OS.pvp
        FROM det_osalida OS
        INNER JOIN cab_osalida CO ON (OS.id_secuencial = CO.id_secuencial)
        INNER JOIN productos P ON (OS.id_producto = P.id_producto)
        INNER JOIN unidad_medida UM ON (P.id_umedida = UM.id_umedida)
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)
        WHERE OS.id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getDetOSalida($IdDetOSalida)
    {
        $consulta = "SELECT OS.id_det_osalida,CO.fecha,CO.secuencial,P.id_producto,C.producto,
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
    public function ExisteRegistroCabVenta($NroFactura)
    {
        $consulta = "SELECT id_cabventa FROM cab_venta
        WHERE nro_factura = '$NroFactura'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function RegistroCabVenta($Fecha, $FechaFactura, $NroFactura, $IdCliente, $IdUsuario)
    {
        $consulta = "INSERT INTO cab_venta(freg,fecha,nro_factura,id_cliente,id_usuario)
        VALUES(:freg,:fecha,:nro_factura,:id_cliente,:id_usuario)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':freg', $Fecha);
        $sentencia->bindParam(':fecha', $FechaFactura);
        $sentencia->bindParam(':nro_factura', $NroFactura);
        $sentencia->bindParam(':id_cliente', $IdCliente);
        $sentencia->bindParam(':id_usuario', $IdUsuario);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function RegistroDetVenta($IdCabVenta, $IdProducto, $Cantidad, $Precio)
    {
        $consulta = "INSERT INTO det_venta(id_cabventa,id_producto,cantidad,pvp)
        VALUES(:id_cabventa,:id_producto,:cantidad,:pvp)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_cabventa', $IdCabVenta);
        $sentencia->bindParam(':id_producto', $IdProducto);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':pvp', $Precio);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function ActualizaDetOSalida($IdDetPSalida)
    {
        $consulta = "UPDATE det_osalida SET id_estado =2
        WHERE id_det_osalida = '$IdDetPSalida'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function GetVentasAdministrador()
    {
        $consulta = "SELECT CONCAT(E.Nombres,' ',E.Apellidos) AS Empleado,SUM(DV.pvp) AS PVP,R.rol
        FROM det_venta DV
        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)
        INNER JOIN usuarios U ON (CV.id_usuario=U.id_usuario)
        INNER JOIN empleados E ON (U.id_empleado=E.id_empleado)
        INNER JOIN roles R ON (U.id_rol=R.id_rol)
        WHERE U.id_rol =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function GetVentasVendedor()
    {
        $consulta = "SELECT CONCAT(E.Nombres,' ',E.Apellidos) AS Empleado,SUM(DV.pvp) AS PVP,R.rol
        FROM det_venta DV
        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)
        INNER JOIN usuarios U ON (CV.id_usuario=U.id_usuario)
        INNER JOIN empleados E ON (U.id_empleado=E.id_empleado)
        INNER JOIN roles R ON (U.id_rol=R.id_rol)
        WHERE U.id_rol =3";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function GetVentasParams($IdFDesde,$IdFHasta)
    {
        $consulta = "SELECT DV.pvp AS TotalVentas
        FROM det_venta DV
        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        WHERE CV.fecha BETWEEN '$IdFDesde' AND '$IdFHasta' AND CV.id_estado=1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function GetPagosParams($IdFDesde,$IdFHasta)
    {
        $consulta = "SELECT DV.pvp AS TotalPagos
        FROM det_venta DV
        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        WHERE CV.fecha BETWEEN '$IdFDesde' AND '$IdFHasta' AND CV.id_estado=2";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function GetVentasChartsParams($IdFDesde,$IdFHasta)
    {
        $consulta = "SELECT CV.fecha,DV.pvp AS PVP
        FROM det_venta DV
        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        WHERE CV.fecha BETWEEN '$IdFDesde' AND '$IdFHasta'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProductoMasVendido()
    {
        $consulta = "SELECT CT.producto AS Producto,SUM(DV.cantidad) AS Cantidad,SUM(DV.pvp) AS Valor
        FROM det_venta DV
        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)
        INNER JOIN productos P ON (DV.id_producto=P.id_producto)
        INNER JOIN catalogo CT ON (P.id_catalogo=CT.id_catalogo)
        GROUP BY P.id_producto
        ORDER BY SUM(DV.cantidad) DESC
        LIMIT 0 , 1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function GetCtasxCobrar($IdFDesde,$IdFHasta)
    {
        $consulta = "SELECT CV.nro_factura AS NroFactura,DV.pvp AS Valor
        FROM det_venta DV
        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        WHERE CV.fecha BETWEEN '$IdFDesde' AND '$IdFHasta' AND CV.id_estado=1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
}