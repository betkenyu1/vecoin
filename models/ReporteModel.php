<?php
require_once '../../config/conbd.php';
class ReporteModel  {
    private $db;
    public function __construct(){
        $this->db= Conexion::getConexion();
    }
    public function ReporteCabOrdenEntrada($IdSecuencial){
        $consulta = "SELECT OE.id_secuencial,OE.fecha,OE.secuencial,OE.nro_factura,E.razon_social,P.proveedor,
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
    public function ReporteDetOrdenEntrada($IdSecuencial){
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
    public function ReporteCabOrdenSalida($IdSecuencial){
        $consulta = "SELECT OS.id_secuencial,OS.fecha,OS.secuencial,E.razon_social,
        CONCAT(EP.nombres,' ',EP.apellidos) AS responsable,E.direccion,E.telefono
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
    public function ReporteDetOrdenSalida($IdSecuencial){
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
}