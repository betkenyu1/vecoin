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

        $consulta = "SELECT OS.id_det_osalida,CO.id_secuencial,DATE_FORMAT(CO.fecha_osalida ,'%d-%m-%Y')AS fecha,CO.secuencial,C.producto,

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
    public function idsecu_ordensalida()
    {
        $consulta = "SELECT OS.id_cabsalida,OS.id_secuencial,DATE_FORMAT(OS.fecha_osalida ,'%d-%m-%Y')AS fecha,OS.secuencial

    FROM cab_osalida OS

    WHERE OS.id_estado =1";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }
    public function GetOrdSalSecuencial($IdSecuencial){
        $consulta = "SELECT OS.id_det_osalida,CO.fecha,CO.secuencial,P.id_producto,C.producto,

        UM.umedida,B.bodega,OS.cantidad,OS.pvp

        FROM det_osalida OS

        INNER JOIN cab_osalida CO ON (OS.id_secuencial = CO.id_secuencial)

        INNER JOIN productos P ON (OS.id_producto = P.id_producto)

        INNER JOIN unidad_medida UM ON (P.id_umedida = UM.id_umedida)

        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)

        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)

        WHERE OS.id_secuencial = '$IdSecuencial'";
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

    public function getUltimaFactura()

    {

        $consulta = "SELECT OS.id_det_osalida,CO.fecha,CO.secuencial,P.id_producto,C.producto,

        UM.umedida,B.bodega,OS.cantidad,OS.pvp

        FROM det_osalida OS

        INNER JOIN cab_osalida CO ON (OS.id_secuencial = CO.id_secuencial)

        INNER JOIN productos P ON (OS.id_producto = P.id_producto)

        INNER JOIN unidad_medida UM ON (P.id_umedida = UM.id_umedida)

        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)

        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)

        WHERE id_det_osalida = '$'";

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

        WHERE U.id_rol =1 AND CV.id_estado =1";

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

        WHERE U.id_rol =3 AND DV.id_estado =1";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }

    public function GetVentasParams($IdFDesde, $IdFHasta)

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

    public function GetPagosParams($IdFDesde, $IdFHasta)

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

    public function GetVentasChartsParams($IdFDesde, $IdFHasta)

    {

        $consulta = "SELECT CV.fecha,DV.pvp AS PVP

        FROM det_venta DV

        INNER JOIN cab_venta CV ON (DV.id_cabventa=CV.id_cabventa)

        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)

        WHERE CV.fecha BETWEEN '$IdFDesde' AND '$IdFHasta' AND DV.id_estado =1";

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

        WHERE DV.id_estado =1

        GROUP BY P.id_producto

        ORDER BY SUM(DV.cantidad) DESC

        LIMIT 0 , 1";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }

    public function GetCtasxCobrar($IdFDesde, $IdFHasta)

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

    // NOTA DE CREDITO

    public function getListaVentas()

    {

        $consulta = "SELECT DV.id_detventa,

        CV.id_cabventa,DATE_FORMAT( CV.fecha,'%d-%m-%Y')  AS fecha,CV.nro_factura,C.producto,

        DV.cantidad,DV.pvp, CL.razon_social

        FROM det_venta DV

        INNER JOIN cab_venta CV ON (DV.id_cabventa = CV.id_cabventa)

        INNER JOIN productos P ON (DV.id_producto = P.id_producto)

        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)

        INNER JOIN clientes CL ON (CL.id_cliente = CV.id_cliente)

        WHERE DV.id_estado =1

        AND CV.id_estado=1;";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }

    public function getDetVenta($IdDetVenta)

    {

        $consulta = "SELECT DV.id_detventa,CV.freg,CV.nro_factura,P.id_producto,C.producto,

        DV.cantidad,DV.pvp,CL.id_cliente, CV.id_cabventa

        FROM det_venta DV

        INNER JOIN cab_venta CV ON (DV.id_cabventa = CV.id_cabventa)

        INNER JOIN productos P ON (DV.id_producto = P.id_producto)

        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo) 

        INNER JOIN clientes CL ON (CL.id_cliente = CV.id_cliente)       

        WHERE DV.id_detventa= '$IdDetVenta'";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }

    public function ExisteRegistroCabNCredito($NroNCredito)

    {

        $consulta = "SELECT id_cabncredito FROM cab_ncredito

        WHERE nro_ncredito = '$NroNCredito'";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }

    public function RegistroCabNCredito($FReg, $Fecha, $NroNCredito, $NroFactura, $IdCliente, $IdUsuario)

    {

        $consulta = "INSERT INTO cab_ncredito(freg,fecha,nro_ncredito,nro_factura,id_cliente,id_usuario)

        VALUES(:freg,:fecha,:nro_ncredito,:nro_factura,:id_cliente,:id_usuario)";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->bindParam(':freg', $FReg);

        $sentencia->bindParam(':fecha', $Fecha);

        $sentencia->bindParam(':nro_ncredito', $NroNCredito);

        $sentencia->bindParam(':nro_factura', $NroFactura);

        $sentencia->bindParam(':id_cliente', $IdCliente);

        $sentencia->bindParam(':id_usuario', $IdUsuario);

        $sentencia->execute();

        if ($sentencia->rowCount() < -0) {

            return false;
        }

        return true;
    }

    public function RegistroDetNCredito($IdCabNCredito, $IdProducto, $Cantidad, $Precio)

    {

        $consulta = "INSERT INTO det_ncredito(id_cabncredito,id_producto,cantidad,pvp)

        VALUES(:id_cabncredito,:id_producto,:cantidad,:pvp)";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->bindParam(':id_cabncredito', $IdCabNCredito);

        $sentencia->bindParam(':id_producto', $IdProducto);

        $sentencia->bindParam(':cantidad', $Cantidad);

        $sentencia->bindParam(':pvp', $Precio);

        $sentencia->execute();

        if ($sentencia->rowCount() < -0) {

            return false;
        }

        return true;
    }

    public function ActualizaEstadoDetVenta($IdDetVenta, $IdCabVenta)

    {

        $consulta = "UPDATE det_venta SET id_estado =2 WHERE id_detventa = '$IdDetVenta'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $consulta = "UPDATE cab_venta SET id_estado =2 WHERE id_cabventa = '$IdCabVenta'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {

            return false;
        }

        return true;
    }

    // PAGO

    // NOTA DE CREDITO

    public function getListaVentaPagos()

    {

        /*$consulta = "SELECT DV.id_detventa,

        CV.id_cabventa,DATE_FORMAT( CV.fecha,'%d-%m-%Y')  AS fecha,CV.nro_factura,C.producto,

        DV.cantidad,DV.pvp, CL.razon_social

        FROM det_venta DV

        INNER JOIN cab_venta CV ON (DV.id_cabventa = CV.id_cabventa)

        INNER JOIN productos P ON (DV.id_producto = P.id_producto)

        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)

        INNER JOIN clientes CL ON (CL.id_cliente = CV.id_cliente)

        WHERE DV.id_estado =1";*/

        $consulta = "SELECT DV.id_detventa,CV.id_cabventa, DATE_FORMAT( CV.fecha,'%d-%m-%Y') AS freg,CV.nro_factura, (DV.cantidad*DV.pvp) AS subtotal, ((DV.cantidad*DV.pvp)*0.12) AS iva,

        ((DV.cantidad*DV.pvp)*1.12) AS total,CV.id_estado AS estado_pago,DV.id_estado AS nota,C.producto,DV.cantidad,DV.pvp

        FROM cab_venta CV 

        INNER JOIN det_venta DV ON DV.id_cabventa=CV.id_cabventa

        INNER JOIN productos P ON (DV.id_producto = P.id_producto)

        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)

        WHERE CV.id_estado=1

        AND DV.id_estado =1;";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }

    public function getSumaFactura($IdCabVenta)

    {

        $consulta = "SELECT CV.nro_factura,CV.id_cabventa,CL.razon_social AS Cliente,SUM(DV.pvp) AS Valor

        FROM det_venta DV

        INNER JOIN cab_venta CV ON (DV.id_cabventa = CV.id_cabventa)

        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)

        WHERE CV.id_cabventa = '$IdCabVenta'";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }

    public function RegistroPago($FReg, $Fecha, $IdCabVenta, $NroFactura, $Valor, $IdUsuario)

    {

        $consulta = "INSERT INTO pagos(freg,fecha,id_cabventa,nro_factura,valor,id_usuario)

        VALUES(:freg,:fecha,:id_cabventa,:nro_factura,:valor,:id_usuario)";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->bindParam(':freg', $FReg);

        $sentencia->bindParam(':fecha', $Fecha);

        $sentencia->bindParam(':id_cabventa', $IdCabVenta);

        $sentencia->bindParam(':nro_factura', $NroFactura);

        $sentencia->bindParam(':valor', $Valor);

        $sentencia->bindParam(':id_usuario', $IdUsuario);

        $sentencia->execute();

        if ($sentencia->rowCount() < -0) {

            return false;
        }

        return true;
    }

    public function ActualizaEstadoCabVenta($IdCabVenta)

    {

        $consulta = "UPDATE cab_venta SET id_estado =3

        WHERE id_cabventa = '$IdCabVenta'";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        if ($sentencia->rowCount() < -0) {

            return false;
        }

        return true;
    }

    //LISTA REPORTES

    public function getRepCtasXCobrar()

    {

        $consulta = "SELECT CV.id_cabventa,CV.freg,CL.razon_social AS Cliente,CV.nro_factura,EV.estado

        FROM cab_venta CV

        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)

        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)

        WHERE CV.ID_ESTADO=1";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }



    public function getRepFactRegistradas()

    {

        $consulta = "SELECT CV.id_cabventa,CV.freg,CL.razon_social AS Cliente,CV.nro_factura,EV.estado

        FROM cab_venta CV

        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)

        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }
}
