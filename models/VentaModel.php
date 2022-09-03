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
        INNER JOIN det_osalida CS ON (DV.id_secuencial=CS.id_secuencial)
        INNER JOIN productos P ON (CS.id_producto=P.id_producto)
        INNER JOIN catalogo CT ON (P.id_catalogo=CT.id_catalogo)
        GROUP BY CS.id_producto
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