<?php
require_once '../../reports/fpdf.php';
require_once '../../config/conbd.php';
require_once '../../models/ReporteModel.php';
if (!isset($_SESSION)) {
    session_start();
}
class PDF extends FPDF
{
    function Header()
    {
        $idimpresor = $_SESSION["user"];
        $rep = new ReporteModel();
        $sol_cred = $rep->ReporteInicioSesion();
        $title = 'EVENTOS AUDITADOS POR EL SISTEMA';
        //$ta = 'Responsable: ';
        //$fh = 'Fecha/Hora: ';
        $this->SetFont('Arial', 'B', 10);
        date_default_timezone_set('America/Guayaquil');
        $DateAndTime = date('d/m/Y h:i:s a', time());

        $fi = 'Generado por: ' . $idimpresor . ' | Fecha impresión: ';
        $fh = 'Ciudad y Fecha: Guayaquil ';
        $this->Image('../../assets/img/logo/logo_vecoin-1.png', 5, 8, 40);
        //$this->Image('../../assets/img/logo/fd.png', '50', '30', '200', '200', 'PNG');
        $this->SetFont('Arial', 'B', 14);
        $this->Ln(1);
        $this->SetTextColor(255, 0, 0);
        $this->Ln(10);
        $this->SetFont('Arial', 'B', 16);
        $this->SetTextColor(13, 119, 60);
        $this->Cell(0, 5, utf8_decode($title), 0, 1, 'C');
        $this->SetFont('Arial', 'I', 7);
        $this->Ln(10);
        $this->SetFont('Arial', 'I', 8);
        $this->SetTextColor(255, 0, 0);
        $this->SetFont('Arial', 'B', 8);
        $this->SetTextColor(13, 119, 60);
        $this->Cell(275, 5, utf8_decode($fi) . $DateAndTime, 0, 1, 'R', 0);
        $this->SetFont('Arial', 'I', 8);
    }
    //}
    //}
    function Footer()
    {
        $this->Ln(3);
        $this->SetFont('Arial', 'b', 8);
        $dir = 'Dirección: ';
        $tel = 'Teléfono: ';
        $this->SetY(-20);
        $this->Cell(0, 3, utf8_decode('Dirección: Urdenor II Manzana 233 Solar 4 | Teléfono: 042316885'), 0, 1, 'C', 0);
        //$this->Cell(190, 3, utf8_decode($tel . $_SESSION["tel"]), 0, 1, 'C', 0);
        $this->Ln(3);
        date_default_timezone_set('America/Guayaquil');
        $DateAndTime = date('d/m/Y h:i:s a', time());
        $this->SetFont('Arial', 'I', 7);
        $this->Cell(0, 3, utf8_decode('Fecha de impresión:') . $DateAndTime, 0, 1, 'C', 0);
        $this->SetFont('Arial', 'I', 8);
        $this->Ln(5);
        $this->Cell(0, 0, utf8_decode('Página') . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}

date_default_timezone_set('America/Guayaquil');
$DateAndTime = date('m-d-Y h:i:s a', time());
$sf = 'VECOIN_REGISTROS_INICIO_SESION';
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage('L');
$rep = new ReporteModel();
$pdf->SetFillColor(13, 119, 60);
$pdf->SetTextColor(3, 3, 3);
$resultados = $rep->ReporteInicioSesion();

if ($resultados) {
    $sum = 0;
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(275, 5, '', 1, 1, 'C', true);
    $pdf->SetFont('Arial', 'B', 8);
    $pdf->Cell(20, 5, utf8_decode('Codigo'), 1, 0, 'C', false);
    $pdf->Cell(50, 5, utf8_decode('Empresa'), 1, 0, 'C', false);
    $pdf->Cell(25, 5, utf8_decode('Usuario'), 1, 0, 'C', false);
    $pdf->Cell(70, 5, utf8_decode('Empleado'), 1, 0, 'C', false);
    $pdf->Cell(50, 5, utf8_decode('Acción'), 1, 0, 'C', false);
    $pdf->Cell(30, 5, utf8_decode('Fecha'), 1, 0, 'C', false);
    $pdf->Cell(30, 5, utf8_decode('Hora'), 1, 1, 'C', false);
    foreach ($resultados as $re) {
        date_default_timezone_set('America/Guayaquil');
        $pdf->SetFont('Arial', 'I', 8);
        $pdf->Cell(20, 5, utf8_decode($re["id_auditoria"]), 1, 0, 'C', false);
        $pdf->Cell(50, 5, utf8_decode($re["razon_social"]), 1, 0, 'C', false);
        $pdf->Cell(25, 5, utf8_decode($re["usuario"]), 1, 0, 'C', false);
        $pdf->Cell(70, 5, utf8_decode($re["nombres"]), 1, 0, 'C', false);
        $pdf->Cell(50, 5, utf8_decode($re["observacion"]), 1, 0, 'C', false);
        $pdf->Cell(30, 5, utf8_decode($re["fecha"]), 1, 0, 'C', false);
        $pdf->Cell(30, 5, utf8_decode($re["hora"]), 1, 1, 'C', false);
    }
}
//$IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
$sol_cred = $rep->ReporteInicioSesion();
$pdf->SetFont('Arial', 'I', 10);
if ($sol_cred) {
    foreach ($sol_cred as $sc) {
    }
    $pdf->Ln(5);
    $pdf->Close();
    $ext = '.pdf';
    $sb = '_';
    date_default_timezone_set('America/Guayaquil');
    $DateAndTime = date('m-d-Y h:i:s a', time());
    $pdf->Output('I', $sf . $sb . $sc["nombres"] . $sb . $DateAndTime . $ext);
} else {
    $alert = "No hay datos para el reporte!, revise la fecha y el cliente";
    echo json_encode($alert);
}
