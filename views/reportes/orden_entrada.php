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
        $rep = new ReporteModel();
        $IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
        $sol_cred = $rep->ReporteCabOrdenEntrada($IdSecuencial);
        if ($sol_cred) {
            foreach ($sol_cred as $scred) {
                $_SESSION["dir"] = $scred["direccion"];
                $_SESSION["tel"] = $scred["telefono"];
                $title = 'ÓRDEN DE ENTRADA';
                $ta = 'Elaborado por: ';
                $fh = 'Fecha/Hora: ';
                $this->SetFont('Arial', 'B', 10);
                date_default_timezone_set('America/Guayaquil');
                $DateAndTime = date('d/m/Y h:i:s a', time());
                $fi = 'Fecha impresión: ';
                $fh = 'Ciudad y Fecha: Guayaquil ';
                $this->Image('../../assets/img/logo/logo_vecoin-1.png', 5, 8, 40);
                //$this->Image('../../assets/img/logo/fd.png', '60', '90', '100', '100', 'PNG');
                $this->SetFont('Arial', 'B', 14);
                $this->Ln(1);
                $this->SetTextColor(255, 0, 0);
                $this->Cell(190, 5, utf8_decode('Nro. ' . $scred["secuencial"]), 0, 1, 'R');
                $this->SetTextColor(3, 3, 3);
                $this->Ln(10);
                $this->SetFont('Arial', 'B', 16);
                $this->SetTextColor(13, 119, 60);
                $this->Cell(190, 5, utf8_decode($title), 0, 1, 'C');
                $this->SetTextColor(0, 0, 0);
                $this->SetFont('Arial', 'I', 7);
                $this->Ln(10);
                $this->SetFont('Arial', 'I', 7);
                $this->Cell(190, 5, utf8_decode($fi) . $DateAndTime, 0, 1, 'R', 0);
                $this->SetFont('Arial', 'I', 8);
                $FechaCred = date('d/m/Y', strtotime($scred["fecha"]));
                //$this->Cell(30, 5, utf8_decode($fh . $FechaCred), 0, 1, '');
                $this->SetFont('Arial', 'B', 8);
                $this->SetTextColor(13, 119, 60);
                $this->Cell(30, 5, utf8_decode('Fecha de creación:'), 0, 0, '');
                $this->SetFont('Arial', 'I', 8);
                $this->SetTextColor(0, 0, 0);
                $this->Cell(30, 5, utf8_decode($FechaCred), 0, 1, '');
                $this->SetFont('Arial', 'B', 8);
                $this->SetTextColor(13, 119, 60);
                $this->Cell(30, 5, utf8_decode('Elaborado por:'), 0, 0, '');
                $this->SetFont('Arial', 'I', 8);
                $this->SetTextColor(0, 0, 0);
                $this->Cell(30, 5, utf8_decode($scred["responsable"]), 0, 1, '');
                $this->SetFont('Arial', 'B', 8);
                $this->SetTextColor(13, 119, 60);
                $this->Cell(30, 5, utf8_decode('Proveedor:'), 0, 0, '');
                $this->SetFont('Arial', 'I', 8);
                $this->SetTextColor(0, 0, 0);
                $this->Cell(30, 5, utf8_decode($scred["proveedor"]), 0, 1, '');
                $this->SetFont('Arial', 'B', 8);
                $this->SetTextColor(13, 119, 60);
                $this->Cell(30, 5, utf8_decode('Número de factura:'), 0, 0, '');
                $this->SetFont('Arial', 'I', 8);
                $this->SetTextColor(0, 0, 0);
                $this->Cell(30, 5, utf8_decode($scred["nro_factura"]), 0, 1, '');
                $this->SetFont('Arial', 'B', 8);
                $this->SetTextColor(13, 119, 60);
                $this->Cell(30, 5, utf8_decode('Observaciones:'), 0, 0, '');
                $this->SetFont('Arial', 'I', 8);
                $this->SetTextColor(0, 0, 0);
                $this->Cell(30, 5, utf8_decode($scred["observacion"]), 0, 1, '');
                $this->Ln(5);
            }
        }
    }
    function Footer()
    {
        $this->SetFont('Arial', 'b', 8);
        $dir = 'Dirección: ';
        $tel = 'Teléfono: ';
        $this->SetY(-25);
        $this->Cell(190, 3, utf8_decode($dir . $_SESSION["dir"] . ' | ' . $tel . $_SESSION["tel"]), 0, 1, 'C', 0);
        //$this->Cell(190, 3, utf8_decode($tel . $_SESSION["tel"]), 0, 1, 'C', 0);
        $this->Ln(3);
        date_default_timezone_set('America/Guayaquil');
        $DateAndTime = date('d/m/Y h:i:s a', time());
        $this->SetFont('Arial', 'I', 7);
        $this->Cell(190, 3, utf8_decode('Fecha de impresión:') . $DateAndTime, 0, 1, 'C', 0);
        $this->SetFont('Arial', 'I', 8);
        $this->Ln(5);
        $this->Cell(0, 0, utf8_decode('Página') . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}

date_default_timezone_set('America/Guayaquil');
$DateAndTime = date('m-d-Y h:i:s a', time());
$sf = 'VECOIN_ORDEN DE ENTRADA';
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$rep = new ReporteModel();
$pdf->SetFillColor(13, 119, 60);
$pdf->SetTextColor(255, 255, 255);
$IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
$resultados = $rep->ReporteDetOrdenEntrada($IdSecuencial);
if ($resultados) {
    $sum = 0;
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->Cell(190, 5, 'DETALLE DE PRODUCTOS INGRESADOS', 1, 1, 'C', true);
    $pdf->SetFont('Arial', 'B', 8);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(20, 5, utf8_decode('Cant.'), 1, 0, 'C', false);
    $pdf->Cell(30, 5, utf8_decode('U.Medida'), 1, 0, 'C', false);
    $pdf->Cell(70, 5, utf8_decode('Producto'), 1, 0, 'C', false);
    $pdf->Cell(35, 5, utf8_decode('Costo'), 1, 0, 'C', false);
    $pdf->Cell(35, 5, utf8_decode('Subtotal'), 1, 1, 'C', false);

    foreach ($resultados as $re) {
        $pdf->SetFont('Arial', 'I', 8);
        $pdf->Cell(20, 5, utf8_decode($re["cantidad"]), 1, 0, 'C', false);
        $pdf->Cell(30, 5, utf8_decode($re["umedida"]), 1, 0, 'C', false);
        $pdf->Cell(70, 5, utf8_decode($re["producto"]), 1, 0, 'L', false);
        $pdf->Cell(35, 5, utf8_decode($re["precio"]), 1, 0, 'C', false);
        $pdf->Cell(35, 5, '$ ' . utf8_decode(number_format($re["monto"], 2, ".", ",")), 1, 1, 'C', false);

        $sum += $re["cantidad"] * $re["precio"];
    }
    $pdf->SetFont('Arial', 'B', 10);
    $pdf->SetTextColor(255, 255, 255);
    $pdf->Cell(155, 5, 'TOTAL  ', 1, 0, 'R', true);
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(35, 5, '$ ' . number_format($sum, 2, ".", ","), 1, 1, 'C', false);
}
$IdSecuencial = (isset($_REQUEST['IdSecuencial'])) ? $_REQUEST['IdSecuencial'] : '';
$sol_cred = $rep->ReporteCabOrdenEntrada($IdSecuencial);
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
    $pdf->Output('I', $sf . $sb . $sc["proveedor"] . $sb . $DateAndTime . $ext);
} else {
    $alert = "No hay datos para el reporte!, revise la fecha y el cliente";
    echo json_encode($alert);
}
