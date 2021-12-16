-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2021 a las 16:15:07
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cfedent`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acceder`
--

CREATE TABLE `acceder` (
  `id_odontologo` int(11) NOT NULL,
  `id_tons` int(11) NOT NULL,
  `rut` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficha`
--

CREATE TABLE `ficha` (
  `folio` int(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `fecha_ficha` date NOT NULL,
  `padre_con_vida` tinyint(1) NOT NULL,
  `enfermedad_padre` varchar(50) NOT NULL,
  `madre_con_vida` tinyint(1) NOT NULL,
  `enfermedad_madre` varchar(50) NOT NULL,
  `paciente_enfermo` tinyint(1) NOT NULL,
  `tratamiento_paciente` varchar(50) NOT NULL,
  `medicamentos` varchar(50) NOT NULL,
  `medicamentos_cinco_años` varchar(50) NOT NULL,
  `alegico_droga_alimento` tinyint(1) NOT NULL,
  `que_drogra_alimento` varchar(50) NOT NULL,
  `cicatriza_bien` varchar(50) NOT NULL,
  `tiene_fiebre_reumatica` tinyint(1) NOT NULL,
  `tratamiento_fiebre_reumatica` varchar(50) NOT NULL,
  `diabetico` tinyint(1) NOT NULL,
  `diabetes_controlada_con` varchar(50) NOT NULL,
  `problema_cardiaco` tinyint(1) NOT NULL,
  `que_problema_cardiaco` varchar(50) NOT NULL,
  `toma_seguido_aspirina` tinyint(1) NOT NULL,
  `frecuencia` varchar(50) NOT NULL,
  `tiene_presion_alta` tinyint(1) NOT NULL,
  `tratamiento_presion` varchar(50) NOT NULL,
  `problemas_renales` tinyint(1) NOT NULL,
  `ulcera_gastrica` tinyint(1) NOT NULL,
  `hepatitis` tinyint(1) NOT NULL,
  `tipo_hepatitis` varchar(50) NOT NULL,
  `problema_hepatico` tinyint(1) NOT NULL,
  `cual_problema_hepatico` varchar(50) NOT NULL,
  `convulsiones` tinyint(1) NOT NULL,
  `epileptico` tinyint(1) NOT NULL,
  `medicamento_epilepcia` varchar(50) NOT NULL,
  `fue_operado` tinyint(1) NOT NULL,
  `operado_de` varchar(50) NOT NULL,
  `problemas_respiratorio` tinyint(1) NOT NULL,
  `que_problema_respiratorio` varchar(50) NOT NULL,
  `fuma` tinyint(1) NOT NULL,
  `cuantos_fuma` int(50) NOT NULL,
  `esta_embarazada` tinyint(1) NOT NULL,
  `de_cuantos_meses` int(50) NOT NULL,
  `constancia` tinyint(1) NOT NULL,
  `que_constancia` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial_clinico`
--

CREATE TABLE `historial_clinico` (
  `id_historial_clinico` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `razon_ingreso` varchar(50) NOT NULL,
  `detalles` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `odontograma`
--

CREATE TABLE `odontograma` (
  `id_odontograma` int(50) NOT NULL,
  `fecha` date NOT NULL,
  `rut` varchar(50) NOT NULL,
  `diagnostico` varchar(50) NOT NULL,
  `pieza` varchar(50) NOT NULL,
  `cara` varchar(50) NOT NULL,
  `procedimiento` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `odontologos`
--

CREATE TABLE `odontologos` (
  `id_odontologo` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `telefono` int(50) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `odontologos_tons`
--

CREATE TABLE `odontologos_tons` (
  `id_odontologo` int(50) NOT NULL,
  `id_tons` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `rut` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `telefono` int(50) NOT NULL,
  `celular` int(50) NOT NULL,
  `estado_civil` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `domicilio` varchar(50) NOT NULL,
  `profesion` varchar(50) NOT NULL,
  `lugar_trabajo` varchar(50) NOT NULL,
  `id_odontologo` int(50) NOT NULL,
  `sexo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `piezas`
--

CREATE TABLE `piezas` (
  `id_pieza` int(50) NOT NULL,
  `numero` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `zona` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `piezas`
--

INSERT INTO `piezas` (`id_pieza`, `numero`, `nombre`, `zona`) VALUES
(1, 1, 'Tercer Molar', 'Superior Derecha'),
(2, 2, 'Segundo Molar', 'Superior Derecha'),
(3, 3, 'Primer Molar', 'Superior Derecha'),
(4, 4, 'Segundo Premolar', 'Superior Derecha'),
(5, 5, 'Primer Premolar', 'Superior Derecha'),
(6, 6, 'Canino', 'Superior Derecha'),
(7, 7, 'Incisivo Lateral', 'Superior Derecha'),
(8, 8, 'Incisivo Central', 'Superior Derecha'),
(9, 9, 'Incisivo Central', 'Superior Izquierda'),
(10, 10, 'Incisivo Lateral', 'Superior Izquierda'),
(11, 11, 'Canino', 'Superior Izquierda'),
(12, 12, 'Primer Premolar', 'Superior Izquierda'),
(13, 13, 'Segundo Premolar', 'Superior Izquierda'),
(14, 14, 'Primer Molar', 'Superior Izquierda'),
(15, 15, 'Segundo Molar', 'Superior Izquierda'),
(16, 16, 'Tercer Molar', 'Superior Izquierda'),
(17, 17, 'Tercer Molar', 'Inferior Izquierda'),
(18, 18, 'Segundo Molar', 'Inferior Izquierda'),
(19, 19, 'Primer Molar', 'Inferior Izquierda'),
(20, 20, 'Segundo Premolar', 'Inferior Izquierda'),
(21, 21, 'Primer Premolar', 'Inferior Izquierda'),
(22, 22, 'Canino', 'Inferior Izquierda'),
(23, 23, 'Incisivo Lateral', 'Inferior Izquierda'),
(24, 24, 'Incisivo Central', 'Inferior Izquierda'),
(25, 25, 'Incisivo Central', 'Inferior Derecha'),
(26, 26, 'Incisivo Lateral', 'Inferior Derecha'),
(27, 27, 'Canino', 'Inferior Derecha'),
(28, 28, 'Primer Premolar', 'Inferior Derecha'),
(29, 29, 'Segundo Premolar', 'Inferior Derecha'),
(30, 30, 'Primer Molar', 'Inferior Derecha'),
(31, 31, 'Segundo Molar', 'Inferior Derecha'),
(32, 32, 'Tercer Molar', 'Inferior Derecha');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tons`
--

CREATE TABLE `tons` (
  `id_tons` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `telefono` int(50) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `password`, `nombre`, `rut`, `correo`, `telefono`, `rol`) VALUES
(1, 'admin', 'admin', 'Nombre Administrador', 'XX.XXX.XXX-X', 'administrador@gmail.com', '45125487', 'Administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acceder`
--
ALTER TABLE `acceder`
  ADD KEY `id_odontologo` (`id_odontologo`),
  ADD KEY `id_tons` (`id_tons`),
  ADD KEY `rut` (`rut`);

--
-- Indices de la tabla `ficha`
--
ALTER TABLE `ficha`
  ADD PRIMARY KEY (`folio`),
  ADD KEY `rut` (`rut`);

--
-- Indices de la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  ADD PRIMARY KEY (`id_historial_clinico`),
  ADD KEY `rut` (`rut`);

--
-- Indices de la tabla `odontograma`
--
ALTER TABLE `odontograma`
  ADD PRIMARY KEY (`id_odontograma`),
  ADD KEY `rut` (`rut`);

--
-- Indices de la tabla `odontologos`
--
ALTER TABLE `odontologos`
  ADD PRIMARY KEY (`id_odontologo`);

--
-- Indices de la tabla `odontologos_tons`
--
ALTER TABLE `odontologos_tons`
  ADD KEY `id_odontologo` (`id_odontologo`),
  ADD KEY `id_tons` (`id_tons`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`rut`),
  ADD KEY `id_odontologo` (`id_odontologo`);

--
-- Indices de la tabla `piezas`
--
ALTER TABLE `piezas`
  ADD PRIMARY KEY (`id_pieza`);

--
-- Indices de la tabla `tons`
--
ALTER TABLE `tons`
  ADD PRIMARY KEY (`id_tons`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ficha`
--
ALTER TABLE `ficha`
  MODIFY `folio` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  MODIFY `id_historial_clinico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `odontograma`
--
ALTER TABLE `odontograma`
  MODIFY `id_odontograma` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `odontologos`
--
ALTER TABLE `odontologos`
  MODIFY `id_odontologo` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `piezas`
--
ALTER TABLE `piezas`
  MODIFY `id_pieza` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `tons`
--
ALTER TABLE `tons`
  MODIFY `id_tons` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acceder`
--
ALTER TABLE `acceder`
  ADD CONSTRAINT `acceder_ibfk_1` FOREIGN KEY (`rut`) REFERENCES `paciente` (`rut`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `acceder_ibfk_2` FOREIGN KEY (`id_odontologo`) REFERENCES `odontologos` (`id_odontologo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `acceder_ibfk_3` FOREIGN KEY (`id_tons`) REFERENCES `tons` (`id_tons`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `ficha`
--
ALTER TABLE `ficha`
  ADD CONSTRAINT `ficha_ibfk_1` FOREIGN KEY (`rut`) REFERENCES `paciente` (`rut`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  ADD CONSTRAINT `historial_clinico_ibfk_1` FOREIGN KEY (`rut`) REFERENCES `paciente` (`rut`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `odontograma`
--
ALTER TABLE `odontograma`
  ADD CONSTRAINT `odontograma_ibfk_1` FOREIGN KEY (`rut`) REFERENCES `paciente` (`rut`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `odontologos_tons`
--
ALTER TABLE `odontologos_tons`
  ADD CONSTRAINT `odontologos_tons_ibfk_1` FOREIGN KEY (`id_odontologo`) REFERENCES `odontologos` (`id_odontologo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `odontologos_tons_ibfk_2` FOREIGN KEY (`id_tons`) REFERENCES `tons` (`id_tons`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `paciente_ibfk_1` FOREIGN KEY (`id_odontologo`) REFERENCES `odontologos` (`id_odontologo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
