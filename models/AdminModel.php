<?php
include_once 'config/conbd.php'; //obtener la conexion
class AdminModel
{
    private $db;

    public function __construct()
    {
        $this->db = Conexion::getConexion();
    }
    public function getEstados()
    {
        $consulta = "SELECT id_estado,estado FROM estados";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getRecuperarContrasena($usuario)
    {
        $consulta = "SELECT id_usuario,usuario FROM usuarios
        where usuario='$usuario'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }


    public function getUsuarios($usr)
    {
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


    public function ExisteSecuencial($IdTipo)
    {
        $consulta = "SELECT id_secuencial,secuencial
        FROM secuenciales
        WHERE id_tipo = '$IdTipo' AND id_estado =1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function RegistroSecuencial($Secuencial, $IdTipo)
    {
        $consulta = "INSERT INTO secuenciales (secuencial,id_tipo)
        VALUES(:secuencial,:id_tipo)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':secuencial', $Secuencial);
        $sentencia->bindParam(':id_tipo', $IdTipo);
        $sentencia->execute();
        if ($sentencia->rowCount() <= 0) {
            return false;
        }
        return true;
    }
    public function ActualizaSecuencial($IdSecuencial)
    {
        $consulta = "UPDATE secuenciales SET IdEstado = 2
        WHERE id_secuencial = '$IdSecuencial'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() <= 0) {
            return false;
        }
        return true;
    }
    public function getEmpresas()
    {
        $consulta = "SELECT id_empresa,ruc,razon_social,nombre_comercial,direccion,telefono,email,
        CASE WHEN id_estado='1' THEN 'Activo'
        ELSE 'Inactivo' END AS id_estado
        FROM empresas";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getEmpresasActivas()
    {
        $consulta = "SELECT id_empresa,ruc,razon_social,nombre_comercial,direccion,telefono,email,
        id_estado        
        FROM empresas
        WHERE id_estado=1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getClientes()
    {
        $consulta = "SELECT id_cliente,ruc, razon_social ,direccion,telefono,email,tiempo_credito,
        CASE WHEN id_estado = '1' THEN 'Activo' ELSE 'Inactivo'  END AS id_estado FROM clientes";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getClientesActivos()
    {
        $consulta = "SELECT id_cliente,ruc,razon_social,direccion,telefono,email,tiempo_credito FROM clientes
        where id_estado=1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getEmpresaId($IdEmpresa)
    {
        $consulta = "SELECT id_empresa,razon_social,nombre_comercial,direccion,ruc,telefono,email FROM empresas
        WHERE id_empresa = '$IdEmpresa' AND id_estado = 1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function RegistroEmpresa($RazonSocial, $NombreComercial, $Ruc, $Direccion, $Telefono, $Email)
    {
        $RazonSocialUPPER = mb_strtoupper($RazonSocial, 'UTF-8');
        $NombreComercialUPPER = mb_strtoupper($NombreComercial, 'UTF-8');
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $consulta = "INSERT INTO empresas (razon_social,nombre_comercial,ruc,direccion,telefono,email)
        VALUES(:razon_social,:nombre_comercial,:ruc,:direccion,:telefono,:email)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':razon_social', $RazonSocialUPPER);
        $sentencia->bindParam(':nombre_comercial', $NombreComercialUPPER);
        $sentencia->bindParam(':ruc', $Ruc);
        $sentencia->bindParam(':direccion', $DireccionCAPITAL);
        $sentencia->bindParam(':telefono', $Telefono);
        $sentencia->bindParam(':email', $EmailLOWER);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }

    public function RegistroCliente($Ruc, $RazonSocial, $Direccion, $Telefono, $Email, $Tiempocredito)
    {
        $RazonSocialUPPER = mb_strtoupper($RazonSocial, 'UTF-8');
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $TiempocreditoCAPITAL = ucwords(strtolower($Tiempocredito));
        $consulta = "INSERT INTO clientes (ruc,razon_social,direccion,telefono,email,tiempo_credito)
        VALUES(:ruc,:razon_social,:direccion,:telefono,:email,:tiempocredito)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':ruc', $Ruc);
        $sentencia->bindParam(':razon_social', $RazonSocialUPPER);
        $sentencia->bindParam(':direccion', $DireccionCAPITAL);
        $sentencia->bindParam(':telefono', $Telefono);
        $sentencia->bindParam(':email', $EmailLOWER);
        $sentencia->bindParam(':tiempocredito', $TiempocreditoCAPITAL);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }

    public function EliminarCliente($IdCliente)
    {
        $consulta = "UPDATE clientes SET id_estado = 2
        WHERE id_cliente = '$IdCliente'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }

    public function ModificarEmpresa($IdEmpresa, $RazonSocial, $NombreComercial, $Ruc, $Direccion, $Telefono, $Email, $IdEstado)
    {
        $RazonSocialUPPER = mb_strtoupper($RazonSocial, 'UTF-8');
        $NombreComercialUPPER = mb_strtoupper($NombreComercial, 'UTF-8');
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $consulta = "UPDATE empresas SET razon_social = '$RazonSocialUPPER', 
        nombre_comercial = '$NombreComercialUPPER',ruc = '$Ruc',
        direccion = '$DireccionCAPITAL', telefono = '$Telefono', 
        email = '$EmailLOWER',  id_estado='$IdEstado'
        WHERE id_empresa = '$IdEmpresa'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function ModificarProveedor($IdProveedor, $Ruc, $RazonSocial, $Direccion, $Telefono, $Email, $IdEstado)
    {
        $RazonSocialUPPER = mb_strtoupper($RazonSocial, 'UTF-8');
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $consulta = "UPDATE proveedores SET ruc = '$Ruc', proveedor = '$RazonSocialUPPER', 
        direccion = '$DireccionCAPITAL', telefono = '$Telefono', email = '$EmailLOWER', id_estado='$IdEstado'
        WHERE id_proveedor = '$IdProveedor'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }

    public function ModificarCliente($IdCliente, $Ruc, $RazonSocial, $Direccion, $Telefono, $Email, $Tiempocredito, $Estado)
    {
        $RazonSocialUPPER = mb_strtoupper($RazonSocial, 'UTF-8');
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $TiempocreditoCAPITAL = ucwords(strtolower($Tiempocredito));
        $consulta = "UPDATE clientes SET ruc = '$Ruc', razon_social = '$RazonSocialUPPER', 
        direccion = '$DireccionCAPITAL', telefono = '$Telefono', email = '$EmailLOWER', tiempo_credito='$TiempocreditoCAPITAL',id_estado='$Estado'
        WHERE id_cliente = '$IdCliente'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getClienteId($IdCliente)
    {
        $consulta = "SELECT id_cliente,ruc,razon_social,direccion,telefono,email,tiempo_credito,C.id_estado,E.estado FROM clientes C inner join estados E on E.id_estado=C.id_estado
        WHERE id_cliente = '$IdCliente'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
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
    public function RegistroEmpleado($IdEmpresa, $Nombres, $Nombres_2, $Apellidos, $Apellidos_2, $Direccion, $Telefono, $Email)
    {
        $NombresCAPITAL = ucwords(strtolower($Nombres));
        $Nombres_2CAPITAL = ucwords(strtolower($Nombres_2));
        $ApellidosCAPITAL = ucwords(strtolower($Apellidos));
        $Apellidos_2CAPITAL = ucwords(strtolower($Apellidos_2));
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $consulta = "INSERT INTO empleados (id_empresa,nombres,nombres_2,apellidos,apellidos_2,direccion,telefono,email)
        VALUES(:id_empresa,:nombres,:nombres_2,:apellidos,:apellidos_2,:direccion,:telefono,:email)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_empresa', $IdEmpresa);
        $sentencia->bindParam(':nombres', $NombresCAPITAL);
        $sentencia->bindParam(':nombres_2', $Nombres_2CAPITAL);
        $sentencia->bindParam(':apellidos', $ApellidosCAPITAL);
        $sentencia->bindParam(':apellidos_2', $Apellidos_2CAPITAL);
        $sentencia->bindParam(':direccion', $DireccionCAPITAL);
        $sentencia->bindParam(':telefono', $Telefono);
        $sentencia->bindParam(':email', $EmailLOWER);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function ModificarEmpleado($IdEmpleado, $IdEmpresa, $Nombres, $Nombres_2, $Apellidos, $Apellidos_2, $Direccion, $Telefono, $Email, $Estado)
    {
        $NombresCAPITAL = ucwords(strtolower($Nombres));
        $Nombres_2CAPITAL = ucwords(strtolower($Nombres_2));
        $ApellidosCAPITAL = ucwords(strtolower($Apellidos));
        $Apellidos_2CAPITAL = ucwords(strtolower($Apellidos_2));
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $consulta = "UPDATE empleados SET id_empresa = '$IdEmpresa',
        nombres = '$NombresCAPITAL',
        nombres_2 ='$Nombres_2CAPITAL',
        apellidos = '$ApellidosCAPITAL',
        apellidos_2 = '$Apellidos_2CAPITAL',direccion = '$DireccionCAPITAL',telefono = '$Telefono',email = '$EmailLOWER', id_estado='$Estado'
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
    public function getEmpleados()
    {
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

    public function getEmpleadosAdmin()
    {
        $consulta = "SELECT E.id_empleado, EP.razon_social, CONCAT(E.nombres,' ', E.nombres_2) AS nombres, CONCAT(E.apellidos,' ', E.apellidos_2) AS apellidos, E.telefono, E.direccion, E.email,
        CASE WHEN E.id_estado = '1' THEN 'Activo' ELSE 'Inactivo'  END AS id_estado 
        FROM empleados E
        INNER JOIN empresas EP
        ON (E.id_empresa=EP.id_empresa)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getEmpleadosId($IdEmpleado)
    {
        $consulta = "SELECT id_empleado,id_empresa,nombres,nombres_2,apellidos,apellidos_2,direccion,telefono,email,id_estado FROM empleados
        WHERE id_empleado = '$IdEmpleado'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getRoles()
    {
        $consulta = "SELECT id_rol,rol FROM roles";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function RegistroNewUsuario($IdEmpleado, $IdRol, $Usuario, $Password)
    {
        $consulta = "INSERT INTO usuarios (id_empleado, id_rol,usuario,password) VALUES (:id_empleado,:id_rol,:usuario,:password) ";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_empleado', $IdEmpleado);
        $sentencia->bindParam(':id_rol', $IdRol);
        $sentencia->bindParam(':usuario', $Usuario);
        $sentencia->bindParam(':password', $Password);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function getListaUsuarios()
    {
        $consulta = "SELECT id_usuario,
        CONCAT(E.nombres,' ',E.apellidos) AS Nombres,
        usuario,
        R.rol,
        password,
        ES.estado,
        EM.razon_social 
        FROM usuarios U
        INNER JOIN empleados E ON (U.id_empleado = E.id_empleado)
        INNER JOIN empresas EM ON (E.id_empresa = EM.id_empresa)
        INNER JOIN roles R ON (U.id_rol=R.id_rol)
        INNER JOIN estados ES ON (U.id_estado=ES.id_estado)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function registroSesion($IdUsuario)
    {
        date_default_timezone_set('America/Guayaquil');
        $FechaActual = date("Y-m-d H:i:s",time());
        $consulta = "INSERT INTO auditoria (id_usuario,observacion,registro_tiempo)
        VALUES(:id_usuario,'INGRESO AL SISTEMA',:registro_tiempo)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':id_usuario', $IdUsuario);
        $sentencia->bindParam(':registro_tiempo', $FechaActual);
        $sentencia->execute();
        if ($sentencia->rowCount() <= 0) {
            return false;
        }
        return true;
    }
    public function getListaAuditoriaSesiones()
    {
        $consulta = "SELECT A.id_auditoria,EM.razon_social,U.usuario,CONCAT (E.nombres,' ',E.apellidos) AS nombres,EM.razon_social,A.observacion,
        DATE_FORMAT(A.registro_tiempo ,'%d-%m-%Y %h:%i:%s') AS registro_tiempo
        FROM auditoria A
        INNER JOIN usuarios U 
        ON A.id_usuario=U.id_usuario
        INNER JOIN empleados E
        ON U.id_empleado = E.id_empleado
        INNER JOIN empresas EM
        ON E.id_empresa=EM.id_empresa
        ORDER BY 1 DESC";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }


    public function getUsuarioId($IdUsuario)
    {
        $consulta = "SELECT id_usuario,id_empleado,id_rol,usuario,password,id_estado
        FROM usuarios
        WHERE id_usuario = '$IdUsuario'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function ModificarUsuarioPass($IdUsuario, $PasswordHash)
    {
        $consulta = "UPDATE usuarios SET  password = '$PasswordHash'        
        WHERE id_usuario = '$IdUsuario'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function ModificarUsuario($IdUsuario, $IdRol, $Usuario, $IdEstado)
    {
        $consulta = "UPDATE usuarios SET id_rol = '$IdRol', usuario = '$Usuario',
        id_estado = '$IdEstado'
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
    public function getProveedores()
    {
        $consulta = "SELECT id_proveedor,ruc,proveedor,direccion,telefono,email,
        CASE WHEN id_estado = '1' THEN 'Activo' ELSE 'Inactivo'  END AS id_estado 
        FROM proveedores";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getProveedoresActivos()
    {
        $consulta = "SELECT id_proveedor,ruc,proveedor,direccion,telefono,email,
        CASE WHEN id_estado = '1' THEN 'Activo' ELSE 'Inactivo'  END AS id_estado 
        FROM proveedores
        WHERE id_estado=1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getProveedorId($IdProveedor)
    {
        $consulta = "SELECT id_proveedor,ruc,proveedor,direccion,telefono,email FROM proveedores
        WHERE id_proveedor = '$IdProveedor' AND id_estado = 1";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function getProveedorIdModificar($IdProveedor)
    {
        $consulta = "SELECT id_proveedor, ruc, proveedor, direccion, telefono, email, P.id_estado, E.estado 
        FROM proveedores P
        INNER JOIN estados E 
        ON E.id_estado=P.id_estado
        WHERE id_proveedor = '$IdProveedor'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }

    public function getEmpresaIdModificar($IdEmpresa)
    {
        $consulta = "SELECT id_empresa,ruc,razon_social,nombre_comercial,direccion,telefono,email,E.id_estado ,ES.estado
        FROM empresas E
        INNER JOIN estados ES
        ON E.id_estado=ES.id_estado
        WHERE id_empresa = '$IdEmpresa'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        $resultados = $sentencia->fetchAll(PDO::FETCH_ASSOC);
        return $resultados;
    }
    public function RegistroProveedor($Ruc, $RazonSocial, $Direccion, $Telefono, $Email)
    {
        $RazonSocialUPPER = mb_strtoupper($RazonSocial, 'UTF-8');
        $DireccionCAPITAL = ucwords(strtolower($Direccion));
        $EmailLOWER = mb_strtolower($Email, 'UTF-8');
        $consulta = "INSERT INTO proveedores(ruc,proveedor,direccion,telefono,email)
        VALUES(:ruc,:razon_social,:direccion,:telefono,:email)";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->bindParam(':ruc', $Ruc);
        $sentencia->bindParam(':razon_social', $RazonSocialUPPER);
        $sentencia->bindParam(':direccion', $DireccionCAPITAL);
        $sentencia->bindParam(':telefono', $Telefono);
        $sentencia->bindParam(':email', $EmailLOWER);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
    public function EliminarProveedor($IdProveedor)
    {
        $consulta = "UPDATE proveedores SET id_estado = 2
        WHERE id_proveedor = '$IdProveedor'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }

    public function getPassword($id_usuario, $Contrasena)
    {
        $consulta = " UPDATE usuarios SET password = '$Contrasena'
        WHERE id_usuario = '$id_usuario'";
        $sentencia = $this->db->prepare($consulta);
        $sentencia->execute();
        if ($sentencia->rowCount() < -0) {
            return false;
        }
        return true;
    }
}
