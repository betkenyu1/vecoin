/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 5.7.33 : Database - vecoin_bd
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
(1,'BODEGA 001'),
(2,'BODEGA 002');

/*Table structure for table `catalogo` */

DROP TABLE IF EXISTS `catalogo`;

CREATE TABLE `catalogo` (
  `id_catalogo` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` varchar(50) DEFAULT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `id_estado` int(1) DEFAULT '1',
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
  `id_estado` int(1) DEFAULT '1',
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
  `id_estado` int(1) DEFAULT '1',
  PRIMARY KEY (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `empresas` */

insert  into `empresas`(`id_empresa`,`razon_social`,`nombre_comercial`,`ruc`,`direccion`,`telefono`,`email`,`id_estado`) values 
(1,'EMPRESA 001','VECOIN ','888778787854','GUAYAquil','06565598','aads@hotmail.com',1),
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

/*Table structure for table `ordenes_entrada` */

DROP TABLE IF EXISTS `ordenes_entrada`;

CREATE TABLE `ordenes_entrada` (
  `id_ord_entrada` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `nro_factura` varchar(9) DEFAULT NULL,
  `secuencial` varchar(9) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` double(12,2) DEFAULT NULL,
  `observacion` text,
  `id_usuario` int(11) DEFAULT NULL,
  `id_estado` int(1) DEFAULT '1',
  PRIMARY KEY (`id_ord_entrada`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `ordenes_entrada` */

insert  into `ordenes_entrada`(`id_ord_entrada`,`id_producto`,`fecha`,`nro_factura`,`secuencial`,`cantidad`,`precio`,`observacion`,`id_usuario`,`id_estado`) values 
(1,1,'2022-07-31','000045782','000000001',10,12.35,'Se registra productos de proveedores',1,1);

/*Table structure for table `perchas` */

DROP TABLE IF EXISTS `perchas`;

CREATE TABLE `perchas` (
  `id_percha` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_percha`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `perchas` */

insert  into `perchas`(`id_percha`,`descripcion`) values 
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
  `id_estado` int(1) DEFAULT '1',
  KEY `id_producto` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `productos` */

insert  into `productos`(`id_producto`,`id_catalogo`,`id_proveedor`,`fecha`,`id_bodega`,`id_umedida`,`cantidad`,`precio`,`prc_utl`,`pvp`,`id_usuario`,`updated_at`,`deleted_at`,`id_estado`) values 
(1,1,1,'2022-07-31',1,1,10000,5.32,60,8.51,3,'07-31-2022 05:52:21 pm','07-31-2022 05:52:07 pm',1);

/*Table structure for table `proveedores` */

DROP TABLE IF EXISTS `proveedores`;

CREATE TABLE `proveedores` (
  `id_proveedor` int(11) NOT NULL AUTO_INCREMENT,
  `ruc` varchar(13) DEFAULT NULL,
  `proveedor` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `proveedores` */

insert  into `proveedores`(`id_proveedor`,`ruc`,`proveedor`,`direccion`,`telefono`,`email`) values 
(1,'9999999999999','MULTINACIONAL 001','LA YONY','096898656','multin@hotmail.com');

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

/*Table structure for table `stock` */

DROP TABLE IF EXISTS `stock`;

CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) DEFAULT NULL,
  `id_percha` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `pvp` double(12,2) DEFAULT NULL,
  `id_estado` int(1) DEFAULT NULL,
  PRIMARY KEY (`id_stock`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `stock` */

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
  `id_estado` int(1) DEFAULT '1',
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
