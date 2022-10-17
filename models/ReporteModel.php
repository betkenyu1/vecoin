<?php
require_once '../../config/conbd.php';
class ReporteModel
{
    private $db;
    public function __construct()
    {
        $this->db = Conexion::getConexion();
    }
    public function ReporteCabOrdenEntrada($IdSecuencial)
    {
        $consulta = "SELECT OE.id_secuencial,OE.fecha,OE.secuencial,OE.observacion,OE.nro_factura,E.razon_social,P.proveedor,
        CONCAT(EP.nombres,' ',EP.apellidos) AS responsable,E.direccion,E.telefono
        FROM cab_oentrada OE
        INNER JOIN proveedores P ON (OE.id_proveedor = P.id_proveedor)
        INNER JOIN usuarios US ON (OE.id_usuario = US.id_usuario)
        INNER JOIN empleados EP ON (US.id_empleado = EP.id_empleado)
        INNER JOIN empresas E ON (EP.id_empresa = E.id_empresa)
        WHERE OE.id_secuencial =  '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteDetOrdenEntrada($IdSecuencial)
    {
        $consulta = "SELECT DOE.id_det_oentrada,DOE.cantidad,U.umedida,C.producto,DOE.precio,(DOE.cantidad*DOE.precio) AS monto
        FROM det_oentrada DOE
        INNER JOIN unidad_medida U ON (DOE.id_umedida = U.id_umedida)
        INNER JOIN productos P ON (DOE.id_producto = P.id_producto)
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        WHERE DOE.id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteCabOrdenSalida($IdSecuencial)
    {
        $consulta = "SELECT OS.id_secuencial,OS.fecha_osalida,OS.secuencial,E.razon_social,
        CONCAT(EP.nombres,' ',EP.apellidos) AS responsable,E.direccion,E.telefono,OS.observacion
        FROM cab_osalida OS
        INNER JOIN usuarios US ON (OS.id_usuario = US.id_usuario)
        INNER JOIN empleados EP ON (US.id_empleado = EP.id_empleado)
        INNER JOIN empresas E ON (EP.id_empresa = E.id_empresa)
        WHERE OS.id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function ReporteCabFacturaIndividual($IdSecuencial)
    {
        $consulta = "SELECT CV.id_cabventa,DATE_FORMAT(CV.fecha,'%d-%m-%Y')  AS fecha, 
        CV.nro_factura,CV.id_cliente,C.razon_social,
        CV.id_usuario,U.id_empleado,
        CONCAT(E.nombres,' ', E.apellidos) AS creador,
        CV.id_estado, EV.estado, CV.id_orden_salida        
        FROM cab_venta CV
        INNER JOIN clientes C ON 
        C.id_cliente=CV.id_cliente
        INNER JOIN usuarios U ON
        CV.id_usuario=U.id_usuario
        INNER JOIN empleados E ON
        E.id_empleado=U.id_empleado
        INNER JOIN estado_ventas EV ON
        EV.id_estado = CV.id_estado
        WHERE id_cabventa='$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteDetFacturaIndividual($IdSecuencial)
    {
        $consulta = "SELECT DV.id_detventa,DV.id_cabventa,DV.id_producto,P.id_catalogo,C.codigo,DV.cantidad,C.producto,
        DV.pvp,(DV.pvp*DV.cantidad) AS subtotal,(DV.pvp*DV.cantidad*0.12) AS iva,(DV.pvp*DV.cantidad*1.12) AS total, DV.id_estado
        FROM det_venta DV
        INNER JOIN productos P ON (P.id_producto = DV.id_producto)
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        WHERE id_cabventa= '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function ReporteDetOrdenSalida($IdSecuencial)
    {
        $consulta = "SELECT OS.id_det_osalida,OS.cantidad,U.umedida,PH.percha,C.producto,OS.pvp,(OS.cantidad*OS.pvp) AS monto
        FROM det_osalida OS
        INNER JOIN unidad_medida U ON (OS.id_umedida = U.id_umedida)
        INNER JOIN perchas PH ON (OS.id_percha = PH.id_percha)
        INNER JOIN productos P ON (OS.id_producto = P.id_producto)
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        WHERE OS.id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteStockProductos()
    {
        $consulta = "SELECT C.codigo, E.razon_social AS compania,C.producto AS nombre_producto, P.proveedor,B.bodega,UM.umedida, PR.cantidad, PR.precio, PR.cantidad*PR.pvp AS 'valorizacion', 
        E.direccion,E.telefono, CASE WHEN PR.id_estado = '1' THEN 'Activo' ELSE 'Inactivo' END AS id_estado FROM productos PR
        INNER JOIN proveedores P ON P.id_proveedor = PR.id_proveedor
        INNER JOIN catalogo C ON C.id_catalogo = PR.id_catalogo
        INNER JOIN empresas E ON E.id_empresa = C.id_empresa
        INNER JOIN bodegas B ON B.id_bodega = PR.id_bodega
        INNER JOIN unidad_medida UM ON UM.id_umedida = PR.id_umedida
        ORDER BY nombre_producto ASC;";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function CabeceraReporteStockProductos()
    {
        $consulta = "SELECT CONCAT(E.nombres,' ',E.apellidos) AS responsable,B.bodega,EM.direccion,EM.telefono,DATE_FORMAT(NOW() ,'%d-%m-%Y') AS fecha
        FROM productos P
        INNER JOIN usuarios U ON U.id_usuario = P.id_usuario
        INNER JOIN empleados E ON U.id_empleado = E.id_empleado
        INNER JOIN bodegas B ON B.id_bodega=P.id_bodega
        INNER JOIN catalogo C ON C.id_catalogo=P.id_catalogo
        INNER JOIN empresas EM ON C.id_empresa=EM.id_empresa
        GROUP BY 2;";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function ReporteInicioSesion()
    {
        $consulta = "SELECT A.id_auditoria,EM.razon_social,U.usuario,CONCAT (E.nombres,' ',E.nombres_2,' ',E.apellidos,' ',E.apellidos_2) AS nombres,
        A.observacion, DATE_FORMAT(A.registro_tiempo ,'%d-%m-%Y %h:%i:%s') AS registro_tiempo,
                TIME_FORMAT(hora,'%H:%i:%s') AS hora,
                DATE_FORMAT(fecha,'%d-%m-%Y') AS fecha
                FROM auditoria A
                INNER JOIN usuarios U 
                ON A.id_usuario=U.id_usuario
                INNER JOIN empleados E
                ON U.id_empleado = E.id_empleado
                INNER JOIN empresas EM
                ON E.id_empresa=EM.id_empresa
                ORDER BY 1 DESC";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    // REPORTES
    public function getRepCtasXCobrar()
    {
        $consulta = "SELECT CV.id_cabventa AS id_1,
        DATE_FORMAT(CV.fecha ,'%d-%m-%Y') AS fecha,
        CL.razon_social AS Cliente,CV.nro_factura,EV.estado, CV.id_estado, SUM((DV.cantidad*DV.pvp)*1.12) AS monto,
        ABS (((SUM((DV.cantidad*DV.pvp)*1.12))-(IFNULL((SELECT SUM(valor) FROM pagos WHERE id_cabventa=id_1),0.00)))) AS deuda
        FROM cab_venta CV
        INNER JOIN det_venta DV ON (DV.id_cabventa = CV.id_cabventa)
        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        WHERE CV.id_estado=1
        GROUP BY nro_factura
        ORDER BY CL.razon_social, fecha DESC;";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getRepFactRegistradas($startDate, $endDate)
    {
        $formated_DATESTART =  date("Y-m-d", strtotime($startDate));
        $formated_DATEEND =  date("Y-m-d", strtotime($endDate));
        $consulta = "SELECT CV.id_cabventa,
        DATE_FORMAT(CV.fecha ,'%d-%m-%Y') AS fecha,
        CL.razon_social AS Cliente,CV.nro_factura,EV.estado, CV.id_estado
        FROM cab_venta CV
        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        WHERE CV.fecha BETWEEN ('$formated_DATESTART') AND ('$formated_DATEEND')
        ORDER BY 3;";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }


    public function getRepFactRetencionesAgrupadas($startDate, $endDate)

    {

        $formated_DATESTART =  date("Y-m-d", strtotime($startDate));
        $formated_DATEEND =  date("Y-m-d", strtotime($endDate));
        $consulta = "SELECT CV.id_cabventa AS id,CL.razon_social AS Cliente,CL.ruc, CV.id_cliente AS id_2,
        (SELECT COUNT(nro_factura)
        FROM cab_venta CV 
        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)
        WHERE  CV.id_cliente=id_2 AND CV.id_estado NOT LIKE(2) AND fecha BETWEEN ('$formated_DATESTART') AND ('$formated_DATEEND')  
        GROUP BY CL.id_cliente ORDER BY razon_social) AS fact_gen,
        (SELECT SUM(ROUND ((DV.pvp*DV.cantidad), 2))) AS subtotal,
        (SELECT SUM(ROUND ((DV.pvp*DV.cantidad*0.12),2)))AS iva,      
        (SELECT ROUND (SUM(((DV.pvp*DV.cantidad*0.12)*(CL.porc_ret_iva/100))),2) 
        FROM cab_venta CV             
        WHERE  CV.id_cliente=id_2 AND DV.id_cabventa=id  AND fecha BETWEEN ('$formated_DATESTART') AND ('$formated_DATEEND') AND CV.id_estado NOT LIKE (2)
        GROUP BY CL.id_cliente
        ORDER BY razon_social) AS ret_iva, 
        (SELECT ROUND (SUM(((DV.pvp*DV.cantidad)*(CL.porc_ret_renta/100))),2) 
        FROM cab_venta CV             
        WHERE  CV.id_cliente=id_2 AND DV.id_cabventa=id    AND fecha BETWEEN ('$formated_DATESTART') AND ('$formated_DATEEND') AND CV.id_estado NOT LIKE (2)
        GROUP BY CL.id_cliente
        ORDER BY razon_social) AS ret_renta
        FROM cab_venta CV
        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        INNER JOIN det_venta DV ON (CV.id_cabventa=DV.id_cabventa)
        WHERE CV.id_estado NOT LIKE(2)
        AND CV.fecha BETWEEN ('$formated_DATESTART') AND ('$formated_DATEEND')
        GROUP BY CL.razon_social
        ORDER BY CL.razon_social, CV.nro_factura ASC;";
        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }
    public function getRepFactRetenciones($startDate, $endDate)

    {
        $formated_DATESTART =  date("Y-m-d", strtotime($startDate));
        $formated_DATEEND =  date("Y-m-d", strtotime($endDate));
        $consulta = "SELECT CV.id_cabventa AS id,DATE_FORMAT(CV.fecha ,'%d-%m-%Y') AS fecha,CL.razon_social AS Cliente,CV.nro_factura,EV.estado, 
        (SELECT SUM(ROUND ((DV.pvp*DV.cantidad), 2))) AS subtotal,
        (SELECT SUM(ROUND ((DV.pvp*DV.cantidad*0.12),2)))AS iva,      
        (SELECT ROUND (SUM(((DV.pvp*DV.cantidad*0.12)*(CL.porc_ret_iva/100))),2) FROM det_venta DV WHERE DV.id_cabventa=id) AS ret_iva,       
        (SELECT ROUND (SUM(((DV.pvp*DV.cantidad)*(CL.porc_ret_renta/100))),2) FROM det_venta DV WHERE DV.id_cabventa=id)  AS ret_renta
        FROM cab_venta CV
        INNER JOIN clientes CL ON (CV.id_cliente=CL.id_cliente)
        INNER JOIN estado_ventas EV ON (CV.id_estado=EV.id_estado)
        INNER JOIN det_venta DV ON (CV.id_cabventa=DV.id_cabventa)
        WHERE CV.id_estado NOT LIKE(2)
        AND CV.fecha BETWEEN ('$formated_DATESTART') AND ('$formated_DATEEND')
        GROUP BY CV.nro_factura
        ORDER BY CL.razon_social, CV.nro_factura ASC;";

        $sentencia = $this->db->prepare($consulta);

        $sentencia->execute();

        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);

        return $resultados;
    }
}
