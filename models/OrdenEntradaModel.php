<?php
include_once 'config/conbd.php';
class OrdenEntradaModel{
    private $db;
    
    public function __construct() {
        $this->db= Conexion::getConexion();
    }   
    
    public function getBodegas(){
        $consulta = "SELECT id_bodega,bodega FROM bodegas";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getUmedidas(){
        $consulta = "SELECT id_umedida,umedida FROM unidad_medida";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getOrdenesEntrada(){
        $consulta = "SELECT OE.id_secuencial,OE.fecha,OE.secuencial,OE.nro_factura,P.proveedor,
        SUM(DOE.cantidad*DOE.precio) AS monto,E.estado FROM cab_oentrada OE
        INNER JOIN det_oentrada DOE ON (OE.id_secuencial = DOE.id_secuencial)
        INNER JOIN proveedores P ON (OE.id_proveedor = P.id_proveedor)
        INNER JOIN estados E ON (OE.id_estado = E.id_estado)
        WHERE OE.id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProductos(){
        $consulta = "SELECT P.id_producto,EM.razon_social,C.codigo,C.producto,B.bodega,U.umedida,
        P.cantidad,P.precio,P.prc_utl,P.pvp,E.estado FROM productos P
        INNER JOIN catalogo C ON (P.id_catalogo = C.id_catalogo)
        INNER JOIN empresas EM ON (C.id_empresa = EM.id_empresa)
        INNER JOIN bodegas B ON (P.id_bodega = B.id_bodega)
        INNER JOIN unidad_medida U ON (P.id_umedida = U.id_umedida)
        INNER JOIN estados E ON (P.id_estado = E.id_estado)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProductoId($IdProducto){
        $consulta = "SELECT cantidad,precio FROM productos
        WHERE id_producto = '$IdProducto' AND id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function RegistroProducto($IdCatalogo, $IdProveedor, $Fecha, $IdBodega, $IdUMedida, $Cantidad, $Precio, $Prc_Utl, $PVP, $IdUsuario){
        $consulta = "INSERT INTO productos (id_catalogo,id_proveedor,fecha,id_bodega,id_umedida,cantidad,precio,prc_utl,pvp,id_usuario)
        Values(:id_catalogo,:id_proveedor,:fecha,:id_bodega,:id_umedida,:cantidad,:precio,:prc_utl,:pvp,:id_usuario)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_catalogo', $IdCatalogo);
        $sentencia->bindParam(':id_proveedor', $IdProveedor);
        $sentencia->bindParam(':fecha', $Fecha);
        $sentencia->bindParam(':id_bodega', $IdBodega);
        $sentencia->bindParam(':id_umedida', $IdUMedida);
        $sentencia->bindParam(':cantidad', $Cantidad);
        $sentencia->bindParam(':precio', $Precio);
        $sentencia->bindParam(':prc_utl', $Prc_Utl);
        $sentencia->bindParam(':pvp', $PVP);
        $sentencia->bindParam(':id_usuario', $IdUsuario);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getPModificarProductos($IdProducto){
        $consulta = "SELECT id_producto,cantidad,precio,prc_utl,pvp FROM productos
        WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getModificarProductoCatalogo($IdProducto, $IdCatalogo, $IdProveedor, $IdBodega, $IdUMedida, $Cantidad ,$Precio, $Prc_Utl, $PVP, $IdUsuario,$Updated_At,$IdEstado)
    {
        $consulta = "UPDATE productos SET id_catalogo = '$IdCatalogo',id_proveedor = '$IdProveedor',id_bodega = '$IdBodega',
            id_umedida = '$IdUMedida',cantidad = '$Cantidad',precio = '$Precio',prc_utl = '$Prc_Utl',
            pvp = '$PVP',id_usuario = '$IdUsuario',updated_at = '$Updated_At',id_estado = '$IdEstado'
            WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getEliminarProductoCatalogo($IdProducto,$IdUsuario,$Deleted_At)
    {
        $consulta = "UPDATE productos SET id_usuario = '$IdUsuario',deleted_at = '$Deleted_At',id_estado =2
            WHERE id_producto = '$IdProducto'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
}