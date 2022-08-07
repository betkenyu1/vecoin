<?php
require_once '../../config/conbd.php';
class ReporteModel  {
    private $db;
    public function __construct(){
        $this->db= Conexion::getConexion();
    }
    public function ReporteCabOrdenEntrada($IdSecuencial){
        $consulta = "SELECT OE.id_cabentrada,OE.fecha,OE.secuencial,OE.nro_factura,E.razon_social,P.proveedor,
        CONCAT(EP.nombres,' ',EP.apellidos) AS responsable,E.direccion,E.telefono
        FROM cab_oentrada OE
        INNER JOIN proveedores P ON (OE.id_proveedor = P.id_proveedor)
        INNER JOIN secuenciales SC ON (OE.id_secuencial = SC.id_secuencial)
        INNER JOIN usuarios US ON (SC.id_usuario = US.id_usuario)
        INNER JOIN empleados EP ON (US.id_empleado = EP.id_empleado)
        INNER JOIN empresas E ON (EP.id_empresa = E.id_empresa)
        WHERE OE.id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteTipoPersonaNatural($IdSecuencial){
        $consulta = "SELECT PN.Fecha,CONCAT(A.Nombres,' ',A.Apellidos) AS Asesor,A.Identificacion AS IdentAse,
        CONCAT(C.Nombres,' ',C.Apellidos) AS Cliente,C.Identificacion AS IdentCli,
        C.FechaNac,C.Tiempo,N.Nacionalidad,TP.Persona,S.Sexo,EC.Estado,PF.Profesion,AE.Actividad,CF.Carga,
        SB.Sep
        FROM persona_natural PN
        INNER JOIN terceros A ON (PN.IdAsesor=A.IdTercero)
        INNER JOIN terceros C ON (PN.IdTercero=C.IdTercero)
        INNER JOIN nacionalidad N ON (C.IdNacionalidad=N.IdNaci)
        INNER JOIN tipo_persona TP ON (PN.IdTPersona=TP.IdTPersona)
        INNER JOIN sexo S ON (PN.IdSexo=S.IdSexo)
        INNER JOIN estado_civil EC ON (PN.IdECivil=EC.IdECivil)
        INNER JOIN cargas_familiares CF ON (PN.IdCarga=CF.IdCarga)
        INNER JOIN profesiones PF ON (PN.IdProfesion=PF.IdProfesion)
        INNER JOIN actividad_economica AE ON (PN.IdActividad=AE.IdActividad)
        INNER JOIN separacion_bienes SB ON (PN.IdSepB=SB.IdSepB)
        WHERE PN.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReportePersonaNaturalConyuge($IdSecuencial){
        $consulta = "SELECT CONCAT(C.Nombres,' ',C.Apellidos) AS Conyuge,C.Identificacion AS IdentCg,
        C.FechaNac,N.Nacionalidad,C.Tiempo,PF.Profesion,AE.Actividad
        FROM persona_natural PN
        INNER JOIN terceros C ON (PN.IdConyuge=C.IdTercero)
        INNER JOIN nacionalidad N ON (C.IdNacionalidad=N.IdNaci)
        INNER JOIN profesiones PF ON (PN.IdProfesionCg=PF.IdProfesion)
        INNER JOIN actividad_economica AE ON (PN.IdActividadCg=AE.IdActividad)
        INNER JOIN separacion_bienes SB ON (PN.IdSepB=SB.IdSepB)
        WHERE PN.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteTipoPersonaJuridica($IdSecuencial){
        $consulta = "SELECT TP.Persona,E.Empresas,E.Ruc,PJ.FechaConst,AE.Actividad
        FROM persona_juridica PJ
        INNER JOIN empresas E ON (PJ.IdEmpresa=E.IdEmpresa)
        INNER JOIN tipo_persona TP ON (PJ.IdTPersona=TP.IdTPersona)
        INNER JOIN actividad_economica AE ON (PJ.IdActividad=AE.IdActividad)
        WHERE PJ.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteResidenciaActual($IdSecuencial){
        $consulta = "SELECT PB.Provincias,CT.Cantones,PQ.Parroquias,CD.Ciudades,RA.Telefonos,RA.Sector,
        RA.TResidencia,RA.Direccion,RA.Numero,RA.CTransversal,TV.Vivienda,RA.Celular
        FROM residencia_actual RA
        INNER JOIN provincias PB ON (RA.IdProvincia=PB.IdProvincia)
        INNER JOIN cantones CT ON (RA.IdCanton=CT.IdCanton)
        INNER JOIN parroquias PQ ON (RA.IdParroquia=PQ.IdParroquia)
        INNER JOIN ciudades CD ON (RA.IdCiudad=CD.IdCiudad)
        INNER JOIN tipo_vivienda TV ON (RA.IdTVivienda=TV.IdTVivienda)
        WHERE RA.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteActividadEconomica($IdSecuencial){
        $consulta = "SELECT E.Empresas,AEC.FIngreso,C.Cargos,TE.Tipo,TC.Contrato,
        E.Direccion,E.CTransversal,E.Numero,E.Telefono,E.Email
        FROM actividad_economica_client AEC
        INNER JOIN empresas E ON (AEC.IdEmpresa=E.IdEmpresa)
        INNER JOIN cargos C ON (AEC.IdCargo=C.IdCargo)
        INNER JOIN tipo_contrato_empleado TC ON (AEC.IdTcontrato=TC.IdTcontrato)
        INNER JOIN tipo_empleado TE ON (AEC.IdTEmpleado=TE.IdTipo)
        WHERE AEC.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteActividadEconomicaCg($IdSecuencial){
        $consulta = "SELECT ECG.Empresas AS 'EmpresaCg',CCG.Cargos AS 'CargoCg',AEC.FIngresoCg,
        ECG.Direccion,ECG.CTransversal,ECG.Numero,ECG.Telefono,ECG.Email
        FROM actividad_economica_client AEC
        INNER JOIN empresas ECG ON (AEC.IdEmpresaCg=ECG.IdEmpresa)
        INNER JOIN cargos CCG ON (AEC.IdCargoCg=CCG.IdCargo)
        WHERE AEC.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteFormaPago($IdSecuencial){
        $consulta = "SELECT TP.Tipo,BC.Bancos,FP.Detalle
        FROM forma_pago FP
        INNER JOIN tipo_pago TP ON (FP.IdTipo=TP.IdTipo)
        INNER JOIN bancos BC ON (FP.IdBanco=BC.IdBanco)
        WHERE FP.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ReporteFamiliaresExternos($IdSecuencial){
        $consulta = "SELECT PT.Parentescos,CONCAT(FE.Nombres,' ',FE.Apellidos) AS Familiar,FE.Direccion,FE.Telefono
        FROM familiares_externos FE
        INNER JOIN parentescos PT ON (FE.IdParentesco=PT.IdParentesco)
        WHERE FE.IdSecuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
}