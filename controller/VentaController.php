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
    public function get_clientes()
    {
        $exito = $this->vta->getClientes();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }
    public function get_stock()
    {
        $exito = $this->vta->getStockVenta();
        if ($exito) {
            echo json_encode($exito);
        } else {
            $vacio = array('');
            echo json_encode($vacio);
        }
    }

    public function save_new_cab_venta()
    {
        $aut = '';
        move_uploaded_file($_FILES['filexml']['tmp_name'], 'xml/' . $_FILES['filexml']['name']);
        $Ruta = 'xml/' . $_FILES['filexml']['name'];
        //$xml = simplexml_load_file(utf8_encode($Ruta));
       // $Autorizacion = $xml->numeroAutorizacion; //ok
       //$obj = simplexml_load_string(file_get_contents($Ruta),'SimpleXMLElement', LIBXML_NOCDATA);
       //$json = json_encode($obj);
       //$inputArray = json_decode($json,TRUE);
       //echo $inputArray;
        
       $xml = simplexml_load_string($Ruta);
       foreach ($xml as $item) {
           var_dump((string)$item->numeroAutorizacion);
       }

        echo $xml;
/*
        if ($XML_file = @simplexml_load_file($Ruta)) {
            $data = str_replace(array('<![CDATA[', ']]>'), array('', ''), $XML_file->asXML());
            //$xml = simplexml_load_file(utf8_encode($data));

            $xml=simplexml_load_string($data);
            $valor=$xml->numeroAutorizacion;

            //$xml = simplexml_load_string($data);
            //$books = $xml->infoTributaria;
            //foreach ($books as $book) {
                //$id = $book->numeroAutorizacion;
                //echo  $id;
                //$title = $book->name;
                //$price = $book->price;
                //print_r("The title of the book $id is $title and it costs $price." . "\n");
            //}
            //$data1 = simplexml_load_file(utf8_encode($data));
            //$Autorizacion = $data1->factura; //ok
            //$secuencial = $xml->secuencial; //ok
            // $memcachedConfig = array("host" => "127.0.0.1","port" => "11211"); 
            //$memcachedConfig = array("secuencial" );
            //$memcachedConfig['host'];
            //$data['secuencial'] = ['secuencial']; //ok
            //$xml = simplexml_load_file("017-php-simplexml02.xml");
            //$xml = simplexml_load_string($data);
           

           // $xml=simplexml_load_string($data) or die("Error: Cannot create object");
            //print_r($xml);
            


            //$address = simplexml_load_string($data, "SimpleXMLElement", LIBXML_NOCDATA);

            //$address = json_encode($address);
            //$address = json_decode($address, TRUE);
           //
            //$da->getFirstName();
            


           echo $valor;

        } else {
            $data = '';
        }/*

    /*
            $address = new SimpleXMLElement($data);
            echo $address->getName(), PHP_EOL;
            foreach ($address as $name => $part) {
                echo "$name: $part", PHP_EOL;
            }
            //echo $data;
            //echo $data;
        } else {
            $data = '';
        }/*
        $doc = new DOMDocument();
        $doc->load($Ruta);
        $destinations = $doc->getElementsByTagName("numeroAutorizacion");
        foreach ($destinations as $destination) {
            foreach ($destination->childNodes as $child) {
                if ($child->nodeType == XML_CDATA_SECTION_NODE) {
                    echo $child->textContent . "<br/>";
                }
            }
        }

        /*
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
