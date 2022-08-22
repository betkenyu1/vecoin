/*
SQLyog Community v13.1.7 (64 bit)
MySQL - 10.6.9-MariaDB : Database - vecoin_bd
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`vecoin_bd` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `vecoin_bd`;

/*Table structure for table `bodegas` */

DROP TABLE IF EXISTS `bodegas`;

CREATE TABLE `bodegas` (
  `id_bodega` int(11) NOT NULL AUTO_INCREMENT,
  `bodega` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_bodega`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `bodegas` */

insert  into `bodegas`(`id_bodega`,`bodega`) values 
(1,'BODEGA IMPORTACIONES'),
(2,'BODEGA 002');

/*Table structure for table `cab_oentrada` */

DROP TABLE IF EXISTS `cab_oentrada`;

CREATE TABLE `cab_oentrada` (
  `id_cabentrada` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `fecha_compra` date DEFAULT NULL,
  `id_secuencial` int(11) DEFAULT NULL,
  `secuencial` varchar(9) DEFAULT NULL,
  `nro_factura` varchar(15) DEFAULT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  `observacion` varchar(500) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_cabentrada`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `cab_oentrada` */

insert  into `cab_oentrada`(`id_cabentrada`,`fecha`,`fecha_compra`,`id_secuencial`,`secuencial`,`nro_factura`,`id_proveedor`,`observacion`,`id_usuario`,`id_estado`) values 
(1,'2022-08-10','2022-08-10',9,'000000009','974897',1,'',3,1),
(2,'2022-08-10','2022-08-10',10,'000000010','1234',1,'',3,1);

/*Table structure for table `cab_osalida` */

DROP TABLE IF EXISTS `cab_osalida`;

CREATE TABLE `cab_osalida` (
  `id_cabsalida` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` varchar(50) DEFAULT NULL,
  `fecha_osalida` date DEFAULT NULL,
  `id_secuencial` int(11) DEFAULT NULL,
  `secuencial` varchar(9) DEFAULT NULL,
  `observacion` varchar(500) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_cabsalida`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `cab_osalida` */

insert  into `cab_osalida`(`id_cabsalida`,`fecha`,`fecha_osalida`,`id_secuencial`,`secuencial`,`observacion`,`id_usuario`,`id_estado`) values 
(1,'08-10-2022 06:31:05 pm','2022-08-10',6,'000000006','',3,1),
(2,'08-10-2022 07:25:41 pm','2022-08-09',7,'000000007','',3,1);

/*Table structure for table `cab_venta` */

DROP TABLE IF EXISTS `cab_venta`;

CREATE TABLE `cab_venta` (
  `id_cabventa` int(11) NOT NULL AUTO_INCREMENT,
  `freg` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `autorizacion` varchar(49) DEFAULT NULL,
  `id_cliente` int(11) DEFAULT NULL,
  `secuencial` varchar(20) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_cabventa`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `cab_venta` */

/*Table structure for table `catalogo` */

DROP TABLE IF EXISTS `catalogo`;

CREATE TABLE `catalogo` (
  `id_catalogo` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` varchar(50) DEFAULT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_catalogo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `catalogo` */

insert  into `catalogo`(`id_catalogo`,`id_empresa`,`codigo`,`producto`,`id_estado`) values 
(1,'1','001','PRODUCTO 001',1),
(2,'1','002','PRODUCTO 002',1),
(3,'1','003','PRODUCTO 003',1),
(4,'1','004','PRODUCTO 004',1),
(5,'1','005','PRODUCTO 005',1),
(6,'1','006','PRODUCTO 006',1),
(7,'1','007','PRODUCTO 003',1);

/*Table structure for table `clientes` */

DROP TABLE IF EXISTS `clientes`;

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `ruc` varchar(13) DEFAULT NULL,
  `razon_social` varchar(50) DEFAULT NULL,
  `direccion` varchar(55) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `tiempo_credito` varchar(30) DEFAULT NULL,
  `id_estado` varchar(1) DEFAULT '1',
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `clientes` */

insert  into `clientes`(`id_cliente`,`ruc`,`razon_social`,`direccion`,`telefono`,`email`,`tiempo_credito`,`id_estado`) values 
(1,'12345678912','BETH','VILLAMIL','123456789','BETH@OUTLOOK.COM','2 MESES','1'),
(2,'1234567','fredfeasasaswe','fvsdffffffffff','1848941847','sdsjfbse@klgmkdfm.com','undefined','2'),
(3,'9999999999999','Mi empresa','Guyaquil','0695985656','admin@hotmail.com','30','1'),
(4,'1','2','3','4','5','undefined','1'),
(5,'2','3','4','5','6','undefined','1'),
(6,'1','1','1','1','1','undefined','1'),
(7,'12345678912','12345678912','12345678912','12345678912','12345678912','undefined','1'),
(8,'3','2','2','2','2','undefined','1'),
(9,'8','8','MODIF','8','8','8','1'),
(10,'9','9','9','9','9','9','1'),
(11,'9999','lkj','lkjkl','jklj','kl','jklj','1');

/*Table structure for table `det_oentrada` */

DROP TABLE IF EXISTS `det_oentrada`;

CREATE TABLE `det_oentrada` (
  `id_det_oentrada` int(11) NOT NULL AUTO_INCREMENT,
  `id_secuencial` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_umedida` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` double(12,2) DEFAULT NULL,
  PRIMARY KEY (`id_det_oentrada`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `det_oentrada` */

insert  into `det_oentrada`(`id_det_oentrada`,`id_secuencial`,`id_producto`,`id_umedida`,`cantidad`,`precio`) values 
(1,9,1,2,550,73.41),
(2,9,1,1,20,2.35),
(3,10,2,1,10,5.00);

/*Table structure for table `det_osalida` */

DROP TABLE IF EXISTS `det_osalida`;

CREATE TABLE `det_osalida` (
  `id_det_osalida` int(11) NOT NULL AUTO_INCREMENT,
  `id_secuencial` int(11) DEFAULT NULL,
  `id_umedida` int(11) DEFAULT NULL,
  `id_percha` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `pvp` double(12,2) DEFAULT NULL,
  PRIMARY KEY (`id_det_osalida`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `det_osalida` */

insert  into `det_osalida`(`id_det_osalida`,`id_secuencial`,`id_umedida`,`id_percha`,`id_producto`,`cantidad`,`pvp`) values 
(1,6,1,1,1,20,8.51),
(2,6,1,2,2,10,38.07),
(3,7,1,1,1,22,8.51);

/*Table structure for table `det_venta` */

DROP TABLE IF EXISTS `det_venta`;

CREATE TABLE `det_venta` (
  `id_detventa` int(11) NOT NULL AUTO_INCREMENT,
  `id_stock` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `pvp` double(12,2) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_detventa`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `det_venta` */

/*Table structure for table `empleados` */

DROP TABLE IF EXISTS `empleados`;

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) DEFAULT NULL,
  `nombres` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_empleado`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `empleados` */

insert  into `empleados`(`id_empleado`,`id_empresa`,`nombres`,`apellidos`,`direccion`,`telefono`,`email`,`id_estado`) values 
(1,4,'Beth','Yulan','UrbanorGHGH','568974GHGH','nyegdGHGHGH',1),
(2,1,'Norman','Marcelo','rrrr','123dfdfdfdfd','123  fdgdfdfdfdf',1),
(3,1,'Admin','Admin','jjk','kkj','jkj',1),
(4,1,'fgfgfg','el man ghh','GUAYA','656565','empresa@hotmail.com',2),
(5,4,'fercho','pedro','GUAYA','656565','empresa@hotmail.com',2),
(6,2,'fyhftf','gfgf','gfgf','gfg','fgfg',2),
(7,3,'dfdfdf','dffdfd','fdf','dfdfd','fdfdf',2),
(8,2,'ghghgh','dffdfdyhthgh','ghgh','ghghghg','hghgh',2),
(9,2,'nnnnnnnnnnnnnnnnnnn','apeeeeeee','GUAYA','656565ghghgh','ghghgh',2),
(10,4,'n111111111','ap111111','GUAYA','uiui','uiui',2),
(11,3,'ghghgh','tyghghghg','hghgh','hghghh','ghg',2);

/*Table structure for table `empresas` */

DROP TABLE IF EXISTS `empresas`;

CREATE TABLE `empresas` (
  `id_empresa` int(11) NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(100) DEFAULT NULL,
  `nombre_comercial` varchar(100) DEFAULT NULL,
  `ruc` varchar(13) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `empresas` */

insert  into `empresas`(`id_empresa`,`razon_social`,`nombre_comercial`,`ruc`,`direccion`,`telefono`,`email`,`id_estado`) values 
(1,'VECOIN','VENTAS COMERCIALES','0991103376001','URDENOR II MANZANA 233 SOLAR 4','042316885','VENTAS@VECOIN.COM.EC',1),
(2,'EMPRESA 002','NOMBRE COMERCIAL 002sdgdg','06565565655','GUAYAquil','656565','empresa@hotmail.com',1),
(3,'EMPRESA 003','NOMBRE COMERCIAL 003','0656556565588','GUAYA','656565','empresa@hotmail.comj',1),
(4,'EMPRESA 004','NOMBRE COMERCIAL 003','06565565655','GUAYA','656565','empresa@hotmail.com',1),
(5,'EMPRESA 005','NOMBRE COMERCIAL 003','06565565655','GUAYA','656565','empresa@hotmail.com',1);

/*Table structure for table `estados` */

DROP TABLE IF EXISTS `estados`;

CREATE TABLE `estados` (
  `id_estado` int(11) NOT NULL AUTO_INCREMENT,
  `estado` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `estados` */

insert  into `estados`(`id_estado`,`estado`) values 
(1,'Activo'),
(2,'Inactivo');

/*Table structure for table `fotos_productos` */

DROP TABLE IF EXISTS `fotos_productos`;

CREATE TABLE `fotos_productos` (
  `id_foto` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) DEFAULT NULL,
  `ruta` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_foto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `fotos_productos` */

/*Table structure for table `perchas` */

DROP TABLE IF EXISTS `perchas`;

CREATE TABLE `perchas` (
  `id_percha` int(11) NOT NULL AUTO_INCREMENT,
  `percha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_percha`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `perchas` */

insert  into `perchas`(`id_percha`,`percha`) values 
(1,'PERCHA 001'),
(2,'PERCHA 002'),
(3,'PERCHA 003');

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `id_catalogo` int(11) DEFAULT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_bodega` int(11) DEFAULT NULL,
  `id_umedida` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` double(12,2) DEFAULT NULL,
  `prc_utl` int(3) DEFAULT NULL,
  `pvp` double(12,2) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `updated_at` varchar(50) DEFAULT NULL,
  `deleted_at` varchar(50) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  KEY `id_producto` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `productos` */

insert  into `productos`(`id_producto`,`id_catalogo`,`id_proveedor`,`fecha`,`id_bodega`,`id_umedida`,`cantidad`,`precio`,`prc_utl`,`pvp`,`id_usuario`,`updated_at`,`deleted_at`,`id_estado`) values 
(1,1,1,'2022-07-31',1,1,553,5.32,60,8.51,3,'08-10-2022 07:25:41 pm','07-31-2022 05:52:07 pm',1),
(2,2,2,'2022-08-07',2,1,5,25.38,50,38.07,3,'08-10-2022 09:14:39 pm',NULL,1);

/*Table structure for table `proveedores` */

DROP TABLE IF EXISTS `proveedores`;

CREATE TABLE `proveedores` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `ruc` varchar(13) DEFAULT NULL,
  `proveedor` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `proveedores` */

insert  into `proveedores`(`id_proveedor`,`ruc`,`proveedor`,`direccion`,`telefono`,`email`,`id_estado`) values 
(1,'9999999999999','ITW PROBRANDS','GEORGIA, ATLANTA','001','WENDY.WITCHET@ITWPROBRANDS.COM',1),
(2,'9999999999999','ITW PERFORMANCE POLYMERS','DANVERS, MASSACHUSETS','001','YADANNIS.VALDEZ@ITWPERFORMANCEPOLYMERS.COM',1),
(3,'34','567896545','6789987654','567890','98765',2);

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `roles` */

insert  into `roles`(`id_rol`,`rol`) values 
(1,'Administrador'),
(2,'Inventario'),
(3,'Ventas'),
(4,'Cobranzas');

/*Table structure for table `secuenciales` */

DROP TABLE IF EXISTS `secuenciales`;

CREATE TABLE `secuenciales` (
  `id_secuencial` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo` int(11) DEFAULT NULL,
  `secuencial` int(11) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_secuencial`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COMMENT='//Tipo 1: Orden entrada\r\n        //Tipo 2: Orden salida';

/*Data for the table `secuenciales` */

insert  into `secuenciales`(`id_secuencial`,`id_tipo`,`secuencial`,`id_estado`) values 
(1,1,11,1),
(3,2,7,1);

/*Table structure for table `stock` */

DROP TABLE IF EXISTS `stock`;

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL AUTO_INCREMENT,
  `id_secuencial` int(11) DEFAULT NULL,
  `id_percha` int(11) DEFAULT NULL,
  `id_umedida` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `pvp` double(12,2) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_stock`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `stock` */

insert  into `stock`(`id_stock`,`id_secuencial`,`id_percha`,`id_umedida`,`id_producto`,`cantidad`,`pvp`,`id_estado`) values 
(1,6,1,1,1,20,8.51,1),
(2,6,1,2,2,10,38.07,1),
(3,7,1,1,1,22,8.51,1);

/*Table structure for table `tipos_documento` */

DROP TABLE IF EXISTS `tipos_documento`;

CREATE TABLE `tipos_documento` (
  `id_tipo` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `tipos_documento` */

insert  into `tipos_documento`(`id_tipo`,`tipo`) values 
(1,'ORDEN DE ENTRADA'),
(2,'ORDEN DE SALIDA'),
(3,'FACTURA'),
(4,'NOTA DE CREDITO');

/*Table structure for table `unidad_medida` */

DROP TABLE IF EXISTS `unidad_medida`;

CREATE TABLE `unidad_medida` (
  `id_umedida` int(11) NOT NULL AUTO_INCREMENT,
  `umedida` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_umedida`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `unidad_medida` */

insert  into `unidad_medida`(`id_umedida`,`umedida`) values 
(1,'Unidad'),
(2,'Cajas');

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `id_empleado` int(11) DEFAULT NULL,
  `id_rol` int(1) DEFAULT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

/*Data for the table `usuarios` */

insert  into `usuarios`(`id_usuario`,`id_empleado`,`id_rol`,`usuario`,`password`,`id_estado`) values 
(1,1,4,'andres','$2y$10$9UAf2JgRhTbtJ.o014Ntq.dfP5vCWQHzBCYtf1hWd8gRggEHbCmfa',1),
(2,2,1,'norman','$2y$10$BPG9WWSUTUY3GoaF6hii.uGXV/T2xoeSdh7S9XT9ZSo2JLYgYY6Za',1),
(3,3,1,'admin','$2y$10$dtoakG4rh8TiCt2uLnEILuQ3nQvHcHMjRBVm/CuMGgcndrL0qSOQ6',1),
(4,11,2,'guidovvcxxcxc','43434',2),
(5,5,3,'pedro','$2y$10$r8e7b67qdkcvslyhgQUieuXxJwTzjs3KBnFFJM8ARhvN9DeocHzt6',2),
(6,2,2,'cc','dd',2),
(7,4,2,'gg','$2y$10$XIw2SLojuJa9JgkpGnLTce3NkEEdO7ke8majc.Fpj7XZWklgKFiYC',1),
(8,5,1,'sdddds','$2y$10$/141kbAK2xHobPFb9/sVfOQdREmowuqZw.QFx7bFEG/SJufvqvw2i',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
