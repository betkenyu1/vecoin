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
        $title = 'REPORTE DE FACTURAS CON RETENCIONES';
        $this->SetFont('Arial', 'B', 10);
        date_default_timezone_set('America/Guayaquil');
        $DateAndTime = date('d/m/Y h:i:s a', time());
        $fi = 'Fecha impresión: ';
        $this->Image('../../assets/img/logo/logo_vecoin-1.png', 5, 8, 40);
        //$this->Image('../../assets/img/logo/fd.png', '96', '90', '35', '35', 'PNG');
        $this->SetFont('Arial', 'B', 14);
        $this->Ln(1);
        $this->SetTextColor(255, 0, 0);
        $this->Ln(10);
        $this->SetFont('Arial', 'B', 16);
        $this->SetTextColor(13, 119, 60);
        $this->Ln(10);
        $this->Cell(0, 5, utf8_decode($title), 0, 1, 'C');
        $this->SetFont('Arial', 'I', 7);
        $this->Ln(10);
        $this->SetFont('Arial', 'B', 8);
        $this->SetTextColor(13, 119, 60);
        $this->Cell(30, 5, utf8_decode('Fecha de consulta:'), 0, 0, '');
        $this->SetFont('Arial', 'I', 8);
        $this->SetTextColor(0, 0, 0);
        $this->Cell(30, 5, utf8_decode($DateAndTime), 0, 1, '');
        $this->SetFont('Arial', 'B', 8);
        $this->SetTextColor(13, 119, 60);
        $this->Cell(30, 5, utf8_decode('Generado por:'), 0, 0, '');
        $this->SetFont('Arial', 'I', 8);
        $this->SetTextColor(0, 0, 0);
        $this->Cell(30, 5, utf8_decode($_SESSION["user"]), 0, 1, '');
        $this->SetFont('Arial', 'I', 7);
        $this->Cell(275, 5, utf8_decode($fi) . $DateAndTime, 0, 1, 'R', 0);
        $this->SetFont('Arial', 'I', 8);
    }
    function Footer()
    {
        $this->SetFont('Arial', 'b', 8);
        $dir = 'Dirección: ';
        $tel = 'Teléfono: ';
        $this->SetY(-25);
        $this->Cell(0, 3, utf8_decode($dir . $_SESSION["dir"] . ' | ' . $tel . $_SESSION["tel"]), 0, 1, 'C', 0);
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
$sf = 'VECOIN_CTAS_X_COBRAR';
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage('P');
$rep = new ReporteModel();
$pdf->SetFillColor(13, 119, 60);
$pdf->SetTextColor(255, 255, 255);
$resultados = $rep->getRepFactRetenciones();
$sum_subt = 0;
$sum_iva = 0;
$sum_ret_renta = 0;
$sum_ret_iva = 0;
if ($resultados) {
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(0, 8, 'FACTURAS REGISTRADAS A LA FECHA DE CONSULTA', 1, 1, 'C', true);
    $pdf->SetFont('Arial', 'B', 8);
    $pdf->SetTextColor(0, 0, 0);
    //$pdf->Cell(15, 5, utf8_decode('N°'), 1, 0, 'C', false);
    $pdf->Cell(50, 5, utf8_decode('Cliente'), 1, 0, 'C', false);
    $pdf->Cell(24, 5, utf8_decode('Fecha Factura'), 1, 0, 'C', false);
    $pdf->Cell(28, 5, utf8_decode('N° de Factura'), 1, 0, 'C', false);
    $pdf->Cell(22, 5, utf8_decode('Subtotal'), 1, 0, 'C', false);
    $pdf->Cell(22, 5, utf8_decode('IVA'), 1, 0, 'C', false);
    $pdf->Cell(22, 5, utf8_decode('% Ret. Renta'), 1, 0, 'C', false);
    $pdf->Cell(22, 5, utf8_decode('% Ret. IVA'), 1, 1, 'C', false);
    //$pdf->Cell(35, 5, utf8_decode('Monto'), 1, 0, 'C', false);    
    foreach ($resultados as $re) {
        $pdf->SetFont('Arial', 'I', 8);
        //$pdf->Cell(15, 5, utf8_decode($re["id_cabventa"]), 1, 0, 'C', false);
        $pdf->Cell(50, 5, utf8_decode($re["Cliente"]), 1, 0, 'L', false);
        $pdf->Cell(24, 5, utf8_decode($re["fecha"]), 1, 0, 'C', false);
        $pdf->Cell(28, 5, utf8_decode($re["nro_factura"]), 1, 0, 'C', false);
        $pdf->Cell(22, 5, "$ " . utf8_decode($re["subtotal"]), 1, 0, 'C', false);
        $pdf->Cell(22, 5, "$ " . utf8_decode($re["iva"]), 1, 0, 'C', false);
        $pdf->Cell(22, 5, "$ " . utf8_decode($re["ret_renta"]), 1, 0, 'C', false);
        $pdf->Cell(22, 5, "$ " . utf8_decode($re["ret_iva"]), 1, 1, 'C', false);
        $sum_subt += $re["subtotal"];
        $sum_iva += $re["iva"];
        $sum_ret_renta += $re["ret_renta"];
        $sum_ret_iva += $re["ret_iva"];
    }
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(74, 0, ' ', 0, 0, 'R', false);
    $pdf->SetTextColor(255, 255, 255);
    $pdf->Cell(28, 6, 'TOTALES', 1, 0, 'C', true);
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(22, 6, '$ ' . number_format($sum_subt, 2, ".", ","), 1, 0, 'C', false);
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(22, 6, '$ ' . number_format($sum_iva, 2, ".", ","), 1, 0, 'C', false);
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(22, 6, '$ ' . number_format($sum_ret_renta, 2, ".", ","), 1, 0, 'C', false);
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(22, 6, '$ ' . number_format($sum_ret_iva, 2, ".", ","), 1, 0, 'C', false);
}
$sol_cred = $rep->getRepFactRetenciones();
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
