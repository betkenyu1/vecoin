<?php
require_once 'models/InventarioModel.php';
require_once 'models/VentaModel.php';
if (!isset($_SESSION)) {
    session_start();
}
class VentaController
{
    private $inv;
    private $vta;
    public function __construct()
    {
        $this->vta = new VentaModel();
        $this->inv = new InventarioModel();
    }
    public function lista_ventas(){
        require_once 'views/ventas/lista_ventas.php';
    }
    public function save_new_cab_venta()
    {
        $aut = '';
        move_uploaded_file($_FILES['filexml']['tmp_name'], 'xml/' . $_FILES['filexml']['name']);
        $Ruta = 'xml/' . $_FILES['filexml']['name'];
        $xml = simplexml_load_file(utf8_encode($Ruta));
        $Autorizacion = $xml->numeroAutorizacion; //ok

        /*
        if ($XML_file = @simplexml_load_file($Ruta)) {
            $data = str_replace(array('<![CDATA[', ']]>'), array('', ''), $XML_file->asXML());
            $xml=simplexml_load_string($data);
            $secuencial = $xml->secuencial; //ok
           echo $secuencial;
        } else $data = '';
*/
        $doc = new DOMDocument();
       $doc->load($Ruta);

        $destinations = $doc->getElementsByTagName("infoTributaria");
        foreach ($destinations as $destination) {
            echo $destination->secuencial . "<br/>";
            
        } 
        //echo $data;
        //$xml = simplexml_load_file(utf8_encode($data));
        //echo $xml->numeroAutorizacion;

        //$xml2=str_replace("<![cdata["," ",$comprobante);    
        //$xml1=str_replace("]]"," ",$xml2); 


        //$lol = simplexml_load_file($Ruta, NULL, LIBXML_NOCDATA);
        //echo $lol;
        exit;
        /*
        $contenido = str_replace([
            '<![CDATA[<?xml version="1.0" encoding="utf-8" standalone="no"?>', // Apertura de CDATA y documento XML
            ']]' // Cierre simple de CDATA
        ], '', file_get_contents($Ruta));
        echo $contenido;
        
*/

    }
}
