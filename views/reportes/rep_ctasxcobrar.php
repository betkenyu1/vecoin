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
        $title = 'REPORTE DE CUENTAS POR COBRAR';
        $this->SetFont('Arial', 'B', 10);
        date_default_timezone_set('America/Guayaquil');
        $DateAndTime = date('d/m/Y h:i:s a', time());
        $fi = 'Fecha impresión: ';
        $this->Image('../../assets/img/logo/logo_vecoin-1.png', 5, 8, 40);
        $this->Image('../../assets/img/logo/fd.png', '96', '90', '35', '35', 'PNG');
        $this->SetFont('Arial', 'B', 14);
        $this->Ln(1);
        $this->SetTextColor(255, 0, 0);
        $this->Ln(10);
        $this->SetFont('Arial', 'B', 12);
        $this->Cell(200, 5, utf8_decode($title), 0, 1, 'C');
        $this->SetFont('Arial', 'I', 7);
        $this->Ln(10);
        $this->SetFont('Arial', 'I', 7);
        $this->Cell(275, 5, utf8_decode($fi) . $DateAndTime, 0, 1, 'R', 0);
        $this->SetFont('Arial', 'I', 8);
    }
    function Footer()
    {
        $this->SetFont('Arial', 'b', 8);
        $dir = 'Dirección: Urdenor II Manzana 233 Solar 4';
        $tel = 'Teléfono: (04) 2136875';
        $this->SetY(-15);
        $this->Cell(275, 3, utf8_decode($dir), 0, 1, 'C', 0);
        $this->Cell(275, 3, utf8_decode($tel), 0, 1, 'C', 0);
        $this->Ln(3);
        $this->SetFont('Arial', 'I', 8);
        $this->Ln(5);
        $this->Cell(0, 0, utf8_decode('Página') . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}

date_default_timezone_set('America/Guayaquil');
$DateAndTime = date('m-d-Y h:i:s a', time());
$sf = 'VECOIN_CTASXCOBRAR';
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage('P');
$rep = new ReporteModel();
$pdf->SetFillColor(150, 150, 150);
$pdf->SetTextColor(3, 3, 3);
$resultados = $rep->getRepCtasXCobrar();

if ($resultados) {
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(180, 5, 'ESTADO DE CUENTAS X COBRAR A LA FECHA DE IMPRESION', 1, 1, 'C', true);
    $pdf->SetFont('Arial', 'B', 8);
    $pdf->Cell(20, 5, utf8_decode('NRO'), 1, 0, 'C', false);
    $pdf->Cell(40, 5, utf8_decode('FECHA'), 1, 0, 'C', false);
    $pdf->Cell(60, 5, utf8_decode('CLIENTE'), 1, 0, 'C', false);
    $pdf->Cell(30, 5, utf8_decode('FACTURA'), 1, 0, 'C', false);
    $pdf->Cell(30, 5, utf8_decode('Estado'), 1, 1, 'C', false);
    foreach ($resultados as $re) {
        $pdf->SetFont('Arial', 'I', 8);
        $pdf->Cell(20, 5, utf8_decode($re["id_cabventa"]), 1, 0, 'C', false);
        $pdf->Cell(40, 5, utf8_decode($re["freg"]), 1, 0, 'C', false);
        $pdf->Cell(60, 5, utf8_decode($re["Cliente"]), 1, 0, 'C', false);
        $pdf->Cell(30, 5, utf8_decode($re["nro_factura"]), 1, 0, 'C', false);
        $pdf->Cell(30, 5, utf8_decode($re["estado"]), 1, 1, 'C', false);
    }
}
$sol_cred = $rep->getRepCtasXCobrar();
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
    $pdf->Output('I', $sf . $sb . $sc["Cliente"] . $sb . $DateAndTime . $ext);
} else {
    $alert = "No hay datos para el reporte!, revise la fecha y el cliente";
    echo json_encode($alert);
}