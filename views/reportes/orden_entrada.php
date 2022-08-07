<?php
require_once '../../reports/fpdf.php';
require_once '../../config/conbd.php';
require_once '../../models/ReporteModel.php';
if (!isset($_SESSION)) {
    session_start();
    //$_SESSION["idcta"] = $_SESSION["idcuenta"];
}
class PDF extends FPDF
{
    function Header()
    {
        $rep = new ReporteModel();
        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $sol_cred = $rep->ReporteCabOrdenEntrada($IdSecuencial);
        if ($sol_cred) {
            foreach ($sol_cred as $scred) {
                $_SESSION["dir"] = $scred["direccion"];
                $_SESSION["tel"] = $scred["telefono"];
                $title = 'ORDEN DE ENTRADA';
                $ta = 'Responsable: ';
                $fh = 'Fecha/Hora: ';
                $this->SetFont('Arial', 'B', 10);
                date_default_timezone_set('America/Guayaquil');
                $DateAndTime = date('d/m/Y h:i:s a', time());
                $fi = 'Fecha impresión: ';
                $fh = 'Ciudad y Fecha: Guayaquil ';

                $this->Image('../../assets/img/logo/logo_vecoin-1.png', 5, 8, 40);
                $this->Image('../../assets/img/logo/fd.png', '60', '90', '100', '100', 'PNG');
                $this->SetFont('Arial', 'B', 14);
                $this->Ln(1);
                $this->SetTextColor(255, 0, 0);
                $this->Cell(190, 5, utf8_decode('Nro: ' . $scred["secuencial"]), 0, 1, 'R');
                $this->SetTextColor(3, 3, 3);
                $this->Ln(10);
                $this->SetFont('Arial', 'B', 12);
                $this->Cell(190, 5, utf8_decode($title), 0, 1, 'C');
                $this->SetFont('Arial', 'I', 7);
                $this->Ln(10);
                $this->SetFont('Arial', 'I', 7);
                $this->Cell(190, 5, utf8_decode($fi) . $DateAndTime, 0, 1, 'R', 0);
                $this->SetFont('Arial', 'I', 8);
                $FechaCred = date('d/m/Y', strtotime($scred["fecha"]));
                $this->Cell(30, 5, utf8_decode($fh . $FechaCred . '  -  ' . $ta . $scred["responsable"]), 0, 1, '');
            }
        }
        $this->SetFillColor(150, 150, 150);
        $this->SetTextColor(3, 3, 3);
        $this->Cell(190, 5, 'PRODUCTOS', 1, 1, 'C', true);
        /*
        $resultados = $rep->ReporteTipoPersonaNatural($IdSecuencial);
        if ($resultados) {
            foreach ($resultados as $re) {
            }
            $this->SetFont('Arial', 'B', 10);
            $this->Cell(190, 5, 'DATOS PERSONALES', 1, 1, 'C', true);
            $this->SetFont('Arial', 'B', 8);
            $this->Cell(50, 5, utf8_decode('Nombres y Apellidos:'), 1, 0, 'L', false);
            $this->SetFont('Arial', 'I', 8);
            $this->Cell(140, 5, utf8_decode($re["Cliente"]), 1, 1, 'L', false);
            $this->SetFont('Arial', 'B', 8);
            $this->Cell(50, 5, utf8_decode('Cedula/Pasaporte/Ruc:'), 1, 0, 'L', false);
            $this->SetFont('Arial', 'I', 8);
            $this->Cell(60, 5, utf8_decode($re["IdentCli"]), 1, 0, 'L', false);

            $tp_pn = $rep->ReporteTipoPersonaNatural($IdSecuencial);
            if ($tp_pn) {
                foreach ($tp_pn as $tpn) {
                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(20, 5, utf8_decode('Persona:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->MultiCell(60, 5, utf8_decode($tpn["Persona"]), 1, 'L', '', 0);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Fecha Nacimiento:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(60, 5, utf8_decode($tpn["FechaNac"]), 1, 0, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(20, 5, utf8_decode('Sexo:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->MultiCell(60, 5, utf8_decode($tpn["Sexo"]), 1, 'L', '', 0);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Estado civil:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(30, 5, utf8_decode($tpn["Estado"]), 1, 0, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(40, 5, utf8_decode('Separacion de bienes:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(10, 5, utf8_decode($tpn["Sep"]), 1, 0, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(30, 5, utf8_decode('Cargas familiares:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->MultiCell(30, 5, utf8_decode($tpn["Carga"]), 1, 'L', '', 0);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Nacionalidad:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(60, 5, utf8_decode($tpn["Nacionalidad"]), 1, 0, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Extranjero tiempo residencia:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(30, 5, utf8_decode($tpn["Tiempo"]), 1, 1, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(20, 5, utf8_decode('Profesion:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(70, 5, utf8_decode($tpn["Profesion"]), 1, 0, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(20, 5, utf8_decode('Actividad:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(80, 5, utf8_decode($tpn["Actividad"]), 1, 1, 'L', false);
                }
            }


            $tp_pn = $rep->ReportePersonaNaturalConyuge($IdSecuencial);
            if ($tp_pn) {
                foreach ($tp_pn as $cg) {
                    $this->SetFont('Arial', 'B', 10);
                    $this->Cell(190, 5, 'DATOS DEL CONYUGE', 1, 1, 'C', true);
                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Nombres y Apellidos:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(140, 5, utf8_decode($cg["Conyuge"]), 1, 1, 'L', false);
                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Cedula/Pasaporte:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(60, 5, utf8_decode($cg["IdentCg"]), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(30, 5, utf8_decode('Fecha Nacimiento:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(50, 5, utf8_decode($cg["FechaNac"]), 1, 1, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Nacionalidad:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(60, 5, utf8_decode($cg["Nacionalidad"]), 1, 0, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(50, 5, utf8_decode('Extranjero tiempo residencia:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(30, 5, utf8_decode($cg["Tiempo"]), 1, 1, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(20, 5, utf8_decode('Profesion:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(70, 5, utf8_decode($cg["Profesion"]), 1, 0, 'L', false);

                    $this->SetFont('Arial', 'B', 8);
                    $this->Cell(20, 5, utf8_decode('Actividad:'), 1, 0, 'L', false);
                    $this->SetFont('Arial', 'I', 8);
                    $this->Cell(80, 5, utf8_decode($cg["Actividad"]), 1, 1, 'L', false);
                }
            }
        }
        $tp_pj = $rep->ReporteTipoPersonaJuridica($IdSecuencial);
        if ($tp_pj) {
            foreach ($tp_pj as $tpjl) {
                $this->SetFont('Arial', 'B', 10);
                $this->Cell(190, 5, 'DATOS PERSONA JURIDICA', 1, 1, 'C', true);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(50, 5, utf8_decode('Empresa:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(140, 5, utf8_decode($tpjl["Empresas"]), 1, 1, 'L', false);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(50, 5, utf8_decode('Ruc:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(60, 5, utf8_decode($tpjl["Ruc"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(50, 5, utf8_decode('Fecha Constitucion:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($tpjl["FechaConst"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Actividad:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(130, 5, utf8_decode($tpjl["Actividad"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Persona:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($tpjl["Persona"]), 1, 1, 'L', false);
            }
        }
        $res_act = $rep->ReporteResidenciaActual($IdSecuencial);
        if ($res_act) {
            foreach ($res_act as $ra) {
                $this->SetFont('Arial', 'B', 10);
                $this->Cell(190, 5, 'RESIDENCIA ACTUAL', 1, 1, 'C', true);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Provincia:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($ra["Provincias"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(15, 5, utf8_decode('Canton:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(35, 5, utf8_decode($ra["Cantones"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(18, 5, utf8_decode('Parroquia:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(28, 5, utf8_decode($ra["Parroquias"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(14, 5, utf8_decode('Ciudad:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($ra["Ciudades"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Tefefonos:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(50, 5, utf8_decode($ra["Telefonos"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(12, 5, utf8_decode('Sector:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(50, 5, utf8_decode($ra["Sector"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(30, 5, utf8_decode('Tiempo Residencia:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(28, 5, utf8_decode($ra["TResidencia"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(37, 5, utf8_decode('Direccion Calle Principal:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(119, 5, utf8_decode($ra["Direccion"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(14, 5, utf8_decode('Numero:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($ra["Numero"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(27, 5, utf8_decode('Calle Transversal:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(77, 5, utf8_decode($ra["CTransversal"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(22, 5, utf8_decode('Tipo Vivienda:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($ra["Vivienda"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(14, 5, utf8_decode('Celular:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($ra["Celular"]), 1, 1, 'L', false);
            }
        }

        $res_act = $rep->ReporteActividadEconomica($IdSecuencial);
        if ($res_act) {
            foreach ($res_act as $ra) {
                $this->SetFont('Arial', 'B', 10);
                $this->Cell(190, 5, 'ACTIVIDAD ECONOMICA', 1, 1, 'C', true);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Empresa:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(128, 5, utf8_decode($ra["Empresas"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(22, 5, utf8_decode('Fecha Ingreso:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($ra["FIngreso"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Cargo:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(63, 5, utf8_decode($ra["Cargos"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(25, 5, utf8_decode('Tipo Empleado:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($ra["Tipo"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(22, 5, utf8_decode('Tipo Contrato:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($ra["Contrato"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Telf Empresa:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(55, 5, utf8_decode($ra["Telefono"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Email:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(95, 5, utf8_decode($ra["Email"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(37, 5, utf8_decode('Direccion Calle Principal:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(119, 5, utf8_decode($ra["Direccion"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(14, 5, utf8_decode('Numero:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($ra["Numero"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(37, 5, utf8_decode('Calle Transversal:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(153, 5, utf8_decode($ra["CTransversal"]), 1, 1, 'L', false);
            }
        }

        $res_actcg = $rep->ReporteActividadEconomicaCg($IdSecuencial);
        if ($res_actcg) {
            foreach ($res_actcg as $racg) {
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(37, 5, utf8_decode('Empresa Conyuge:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(111, 5, utf8_decode($racg["EmpresaCg"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(22, 5, utf8_decode('Fecha Ingreso:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($racg["FIngresoCg"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Cargo:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(60, 5, utf8_decode($racg["CargoCg"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Telf Empresa:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($racg["Telefono"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(10, 5, utf8_decode('Email:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(50, 5, utf8_decode($racg["Email"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(37, 5, utf8_decode('Direccion Calle Principal:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(119, 5, utf8_decode($racg["Direccion"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(14, 5, utf8_decode('Numero:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($racg["Numero"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(37, 5, utf8_decode('Calle Transversal:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(153, 5, utf8_decode($racg["CTransversal"]), 1, 1, 'L', false);
            }
        }

        $fpago = $rep->ReporteFormaPago($IdSecuencial);
        if ($fpago) {
            foreach ($fpago as $ra) {
                $this->SetFont('Arial', 'B', 10);
                $this->Cell(190, 5, 'FORMA DE PAGO', 1, 1, 'C', true);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Tipo de Pago:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(25, 5, utf8_decode($ra["Tipo"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(15, 5, utf8_decode('Banco:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($ra["Bancos"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(15, 5, utf8_decode('Detalle:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(85, 5, utf8_decode($ra["Detalle"]), 1, 1, 'L', false);
            }
        }

        $fext = $rep->ReporteFamiliaresExternos($IdSecuencial);
        if ($fext) {
            foreach ($fext as $fex) {
                $this->SetFont('Arial', 'B', 10);
                $this->Cell(190, 5, 'FAMILARES EXTERNOS', 1, 1, 'C', true);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(37, 5, utf8_decode('Nombres y Apellidos:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(110, 5, utf8_decode($fex["Familiar"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Parentesco:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(23, 5, utf8_decode($fex["Parentescos"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Direccion:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(127, 5, utf8_decode($fex["Direccion"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Telefono:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(23, 5, utf8_decode($fex["Telefono"]), 1, 1, 'L', false);
            }
        }

        $scred = $rep->ReporteSolicitudCredito($IdSecuencial);
        if ($scred) {
            foreach ($scred as $sc) {
                $this->SetFont('Arial', 'B', 10);
                $this->Cell(190, 5, 'DATOS DEL PLAN ELEGIDO', 1, 1, 'C', true);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Descripcion:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(110, 5, utf8_decode($sc["Descripcion"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(15, 5, utf8_decode('Codigo:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(10, 5, utf8_decode($sc["Codigo"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(15, 5, utf8_decode('Valor:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(20, 5, utf8_decode($sc["Valor"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Plazo:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(50, 5, utf8_decode($sc["Plazo"] . ' Meses'), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(30, 5, utf8_decode('Cuota Mensual:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($sc["CMensual"]), 1, 0, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(30, 5, utf8_decode('Cuota Inscripcion:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(30, 5, utf8_decode($sc["CInscripcion"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(20, 5, utf8_decode('Observacion:'), 1, 0, 'L', false);
                $this->SetFont('Arial', 'I', 8);
                $this->Cell(170, 5, utf8_decode($sc["Observacion"]), 1, 1, 'L', false);

                $this->SetFont('Arial', 'B', 8);
                $this->Cell(11, 30, utf8_decode('FIRMA DEL CLIENTE'), 0, 1, '', false);
                $this->SetFont('Arial', 'B', 8);
                $this->Cell(84, 5, utf8_decode($sc["Cliente"]), 0, 1, 'L', false);

                $this->SetFont('Arial', 'B', 0);
                $this->Cell(5, 1, utf8_decode('C.I.'), 0, 0, 'L', false);
                $this->SetFont('Arial', 'B', 0);
                $this->Cell(5, 1, utf8_decode($sc["IdentCli"]), 0, 1, 'L', false);
            }
        }
        $this->Ln(2);*/
    }
    function Footer()
    {
        $this->SetFont('Arial', 'b', 8);
        $dir = 'Dirección: ';
        $tel = 'Teléfono: ';
        $this->SetY(-15);
        $this->Cell(190, 5, utf8_decode($_SESSION["dir"]), 0, 0, 'C', 0);
        $this->Ln(3);
        $this->SetFont('Arial', 'I', 8);
        $this->Ln(5);
        $this->Cell(0, 0, utf8_decode('Página') . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}
date_default_timezone_set('America/Guayaquil');
$DateAndTime = date('m-d-Y h:i:s a', time());
$sf = 'SOLICITUD_CREDITO';
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$rep = new ReporteModel();
$IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
$sol_cred = $rep->ReporteCabOrdenEntrada($IdSecuencial);
$pdf->SetFont('Arial', 'I', 10);
if ($sol_cred) {
    foreach ($sol_cred as $sc) {
    }
    $pdf->Ln(5);
    $pdf->Close();
    $ext = '.pdf';
    $sb = ' ';
    date_default_timezone_set('America/Guayaquil');
    $DateAndTime = date('m-d-Y h:i:s a', time());
    $pdf->Output('I', $sf . $sb. $sc["proveedor"] . $sb . $DateAndTime . $ext);
} else {
    $alert = "No hay datos para el reporte!, revise la fecha y el cliente";
    echo json_encode($alert);
}
