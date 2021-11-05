CREATE DATABASE  IF NOT EXISTS `veterinariabd`;
USE `veterinariabd`;

CREATE TABLE `colaborador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `cargo` varchar(255) NOT NULL,
  `especialidad` varchar(255) NOT NULL,
  `tipo_documento` varchar(3) NOT NULL,
  `documento_identificacion` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ;

--
-- Dumping data for table `colaborador`
--


INSERT INTO `colaborador` VALUES (1,'esteban','franco','desarrollador','sistemas','C.C',2444),(3,'diego','idrobo','Arqui','lumion','C.C',2455);


--
-- Table structure for table `detalle_historia_clinica`
--

CREATE TABLE `detalle_historia_clinica` (
  `id` int NOT NULL AUTO_INCREMENT,
  `temperatura` varchar(255) NOT NULL,
  `peso` decimal(19,2) NOT NULL,
  `frecuencia_cardiaca` decimal(19,2) NOT NULL,
  `frecuencia_respiratoria` decimal(19,2) NOT NULL,
  `fecha_hora` timestamp NOT NULL,
  `alimentacion` varchar(255) NOT NULL,
  `habitad` varchar(255) NOT NULL,
  `observacion` varchar(255) NOT NULL,
  `colaborador_id` int NOT NULL,
  `historia_clinica_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `historia_clinica_id_idx` (`historia_clinica_id`),
  KEY `colaborador_id_idx` (`colaborador_id`),
  CONSTRAINT `colaborador_id` FOREIGN KEY (`colaborador_id`) REFERENCES `colaborador` (`id`),
  CONSTRAINT `historia_clinica_id` FOREIGN KEY (`historia_clinica_id`) REFERENCES `historia_clinica` (`id`)
) ;

--
-- Dumping data for table `detalle_historia_clinica`
--



--
-- Table structure for table `historia_clinica`
--


CREATE TABLE `historia_clinica` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mascota_id` int NOT NULL,
  `fecha_creacion` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `mascota_id_idx` (`mascota_id`),
  CONSTRAINT `mascota_id` FOREIGN KEY (`mascota_id`) REFERENCES `mascota` (`id`)
) ;
--
-- Dumping data for table `historia_clinica`
--

--
-- Table structure for table `mascota`
--

CREATE TABLE `mascota` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `usuario_id` int NOT NULL,
  `sexo` char(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `usuario_id_idx` (`usuario_id`),
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ;
--
-- Dumping data for table `mascota`
--

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `tipo_documento` char(255) NOT NULL,
  `documento_identificacion` int NOT NULL,
  `estado` char(255) NOT NULL,
  `sexo` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idUsuario_UNIQUE` (`id`)
) ;
--
-- Dumping data for table `usuario`
--


-- Dump completed on 2021-10-15  9:52:09
