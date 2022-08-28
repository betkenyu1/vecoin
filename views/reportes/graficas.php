<?php
require_once '../../reports/fpdf.php';
require_once '../../config/conbd.php';
require_once '../../models/ReporteModel.php';

$result = array('hola');
    $consulta = "SELECT P.id_producto,EM.razon_social,P.fecha,C.codigo,C.producto,B.bodega,U.id_umedida,U.umedida,
    P.cantidad,P.precio,P.prc_utl,P.pvp,E.estado FROM productos P
    INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
    INNER JOIN empresas EM ON (C.id_empresa = EM.id_empresa)
    INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)
    INNER JOIN unidad_medida U ON (P.id_umedida = U.id_umedida)
    INNER JOIN estados E ON (P.id_estado = E.id_estado) GROUP BY P.fecha ASC ";
    $sentencia = $this->db->prepare($consulta);
    $sentencia->execute();
    $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    /*
    while($fila =$sentencia->fetchAll(PDO::FETCH_ASSOC)){
        array_push($resultado, array($fila['id_umedida'],$fila['cantidad']));
    }*/
    echo json_encode($result);
