<?php
include_once 'config/conbd.php'; //obtener la conexion
class AdminModel{
    private $db;
    
    public function __construct() {
        $this->db= Conexion::getConexion();
    }   
    public function getEstados(){
        $consulta = "SELECT id_estado,estado FROM estados";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getUsuarios($usr){
        $consulta = "SELECT id_usuario,usuario,password,
        CONCAT(E.nombres,' ',E.apellidos) AS Nombres,EM.id_empresa,EM.nombre_comercial,
        R.id_rol,R.rol FROM usuarios U
        INNER JOIN empleados E ON (U.id_empleado = E.id_empleado)
        INNER JOIN empresas EM ON (E.id_empresa = EM.id_empresa)
        INNER JOIN roles R ON (U.id_rol=R.id_rol)
        WHERE U.usuario = '$usr' AND U.id_estado=1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ExisteSecuencial($IdUsuario){
        $consulta = "SELECT id_secuencial
        FROM secuenciales
        WHERE id_usuario = '$IdUsuario' AND id_estado = 1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function RegistroSecuencial($IdUsuario){
        $consulta = "INSERT INTO secuenciales (id_usuario)
        VALUES(:id_usuario)";			
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_usuario',$IdUsuario);
        $sentencia->execute();
        if ($sentencia->rowCount() <= 0) { 
            return false;
        }
        return true;
    }
    public function ActualizaSecuencial($IdSecuencial){
        $consulta = "UPDATE secuenciales SET IdEstado = 2
        WHERE id_secuencial = '$IdSecuencial'";			
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() <= 0) { 
            return false;
        }
        return true;
    }
    public function getEmpresas(){
        $consulta = "SELECT id_empresa,razon_social,ruc,telefono,email FROM empresas
        WHERE id_estado = 1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getEmpresaId($IdEmpresa){
        $consulta = "SELECT id_empresa,razon_social,nombre_comercial,direccion,ruc,telefono,email FROM empresas
        WHERE id_empresa = '$IdEmpresa' AND id_estado = 1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function RegistroEmpresa($RazonSocial,$NombreComercial,$Ruc,$Direccion,$Telefono,$Email)
    {
        $consulta = "INSERT INTO empresas (razon_social,nombre_comercial,ruc,direccion,telefono,email)
        VALUES(:razon_social,:nombre_comercial,:ruc,:direccion,:telefono,:email)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':razon_social', $RazonSocial);
        $sentencia->bindParam(':nombre_comercial', $NombreComercial);
        $sentencia->bindParam(':ruc', $Ruc);
        $sentencia->bindParam(':direccion', $Direccion);
        $sentencia->bindParam(':telefono', $Telefono);
        $sentencia->bindParam(':email', $Email);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function ModificarEmpresa($IdEmpresa,$RazonSocial, $NombreComercial, $Ruc, $Direccion, $Telefono, $Email)
    {
        $consulta = "UPDATE empresas SET razon_social = '$RazonSocial', 
        nombre_comercial = '$NombreComercial',ruc = '$Ruc',
        direccion = '$Direccion', telefono = '$Telefono', email = '$Email'
        WHERE id_empresa = '$IdEmpresa'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function EliminarEmpresa($IdEmpresa)
    {
        $consulta = "UPDATE empresas SET id_estado = 2
        WHERE id_empresa = '$IdEmpresa'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function RegistroEmpleado($IdEmpresa,$Nombres,$Apellidos,$Direccion,$Telefono,$Email)
    {
        $consulta = "INSERT INTO empleados (id_empresa,nombres,apellidos,direccion,telefono,email)
        VALUES(:id_empresa,:nombres,:apellidos,:direccion,:telefono,:email)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_empresa', $IdEmpresa);
        $sentencia->bindParam(':nombres', $Nombres);
        $sentencia->bindParam(':apellidos', $Apellidos);
        $sentencia->bindParam(':direccion', $Direccion);
        $sentencia->bindParam(':telefono', $Telefono);
        $sentencia->bindParam(':email', $Email);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function ModificarEmpleado($IdEmpleado,$IdEmpresa,$Nombres,$Apellidos,$Direccion,$Telefono,$Email)
    {
        $consulta = "UPDATE empleados SET id_empresa = '$IdEmpresa',nombres = '$Nombres',
        apellidos = '$Apellidos',direccion = '$Direccion',telefono = '$Telefono',email = '$Email'
        WHERE id_empleado = '$IdEmpleado'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function EliminarEmpleado($IdEmpleado)
    {
        $consulta = "UPDATE empleados SET id_estado = 2
        WHERE id_empleado = '$IdEmpleado'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getEmpleados(){
        $consulta = "SELECT E.id_empleado,EP.razon_social,CONCAT(E.nombres,' ',E.apellidos) AS Empleados,
        E.telefono,E.email
        FROM empleados E
        INNER JOIN empresas EP ON (E.id_empresa=EP.id_empresa)
        WHERE E.id_estado = 1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getEmpleadosId($IdEmpleado ){
        $consulta = "SELECT id_empleado,nombres,apellidos,direccion,telefono,email FROM empleados
        WHERE id_empleado = '$IdEmpleado'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getRoles(){
        $consulta = "SELECT id_rol,rol FROM roles";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function RegistroNewUsuario($IdEmpleado ,$IdRol, $Usuario, $Password)
    {
        $consulta = "INSERT INTO usuarios (id_empleado, id_rol,usuario,password) VALUES (:id_empleado,:id_rol,:usuario,:password) ";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_empleado',$IdEmpleado);
        $sentencia->bindParam(':id_rol',$IdRol);
        $sentencia->bindParam(':usuario',$Usuario);
        $sentencia->bindParam(':password',$Password);
        $sentencia->execute();
        if($sentencia->rowCount()<-0)
        {
        return false;
        }
        return true;
    }
    public function getListaUsuarios(){
        $consulta = "SELECT id_usuario,CONCAT(E.nombres,' ',E.apellidos) AS Nombres,
        usuario,R.rol,password,ES.estado FROM usuarios U
        INNER JOIN empleados E ON (U.id_empleado = E.id_empleado)
        INNER JOIN empresas EM ON (E.id_empresa = EM.id_empresa)
        INNER JOIN roles R ON (U.id_rol=R.id_rol)
        INNER JOIN estados ES ON (U.id_estado=ES.id_estado)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getUsuarioId($IdUsuario){
        $consulta = "SELECT id_usuario,CONCAT(E.nombres,' ',E.apellidos) AS Nombres,
        usuario,password FROM usuarios U
        INNER JOIN empleados E ON (U.id_empleado = E.id_empleado)
        WHERE U.id_usuario = '$IdUsuario'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function ModificarUsuario($IdUsuario,$IdRol,$Usuario,$IdEstado)
    {
        $consulta = "UPDATE usuarios SET id_rol = '$IdRol',
        usuario = '$Usuario',id_estado = '$IdEstado'
        WHERE id_usuario = '$IdUsuario'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function EliminarUsuario($IdUsuario)
    {
        $consulta = "UPDATE usuarios SET id_estado = 2
        WHERE id_usuario = '$IdUsuario'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getProveedores(){
        $consulta = "SELECT id_proveedor,ruc,proveedor,direccion,telefono,email
        FROM proveedores";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
}