-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2021 a las 16:10:58
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica_fedent`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acceder`
--

CREATE TABLE `acceder` (
  `id` int(50) NOT NULL,
  `id_odontologo` int(50) NOT NULL,
  `id_tons` int(50) NOT NULL,
  `folio` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_clinicos`
--

CREATE TABLE `datos_clinicos` (
  `id_datos_clinicos` int(50) NOT NULL,
  `folio` int(50) NOT NULL,
  `padre_vivo` tinyint(1) NOT NULL,
  `enfermedad_padre` varchar(50) NOT NULL,
  `madre_viva` tinyint(1) NOT NULL,
  `enfermedad_madre` varchar(50) NOT NULL,
  `paciente_enfermo` tinyint(1) NOT NULL,
  `enfermedad_paciente` varchar(50) NOT NULL,
  `esta_tratamiento_medico` tinyint(1) NOT NULL,
  `tratamiento_medico` varchar(50) NOT NULL,
  `medicamentos_consumidos_habitualmente` varchar(50) NOT NULL,
  `medicamentos_ultimos_cinco_a` varchar(50) NOT NULL,
  `alergico` tinyint(1) NOT NULL,
  `alergia_a` varchar(50) NOT NULL,
  `cicatriza_bien` varchar(50) NOT NULL,
  `diabetico` tinyint(1) NOT NULL,
  `diabetes_controlada` varchar(50) NOT NULL,
  `fuma` tinyint(1) NOT NULL,
  `cuantos` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `datos_clinicos`
--

INSERT INTO `datos_clinicos` (`id_datos_clinicos`, `folio`, `padre_vivo`, `enfermedad_padre`, `madre_viva`, `enfermedad_madre`, `paciente_enfermo`, `enfermedad_paciente`, `esta_tratamiento_medico`, `tratamiento_medico`, `medicamentos_consumidos_habitualmente`, `medicamentos_ultimos_cinco_a`, `alergico`, `alergia_a`, `cicatriza_bien`, `diabetico`, `diabetes_controlada`, `fuma`, `cuantos`) VALUES
(1, 1, 1, 'ninguna', 1, 'ninguna', 0, 'ninguna', 0, 'ninguno', 'Rigotax', '[rigotax, loratadina, paracetamol]', 1, '[primavera, polvo]', 'si, ningún problema', 0, 'no', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ficha`
--

CREATE TABLE `ficha` (
  `folio` int(50) NOT NULL,
  `id_paciente` int(50) NOT NULL,
  `fecha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ficha`
--

INSERT INTO `ficha` (`folio`, `id_paciente`, `fecha`) VALUES
(1, 1, '30/10/2021'),
(2, 2, '28/10/2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial_clinico`
--

CREATE TABLE `historial_clinico` (
  `id_historial_clinico` int(50) NOT NULL,
  `folio` int(50) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `razon_ingreso` varchar(50) NOT NULL,
  `detalles` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `historial_clinico`
--

INSERT INTO `historial_clinico` (`id_historial_clinico`, `folio`, `fecha`, `razon_ingreso`, `detalles`) VALUES
(1, 1, '28/10/2021', 'se rompio un diente', 'se le hara una endodoncia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `odontograma`
--

CREATE TABLE `odontograma` (
  `id_odontograma` int(50) NOT NULL,
  `folio` int(50) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `detalles` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `odontograma`
--

INSERT INTO `odontograma` (`id_odontograma`, `folio`, `fecha`, `detalles`) VALUES
(1, 1, '30/10/2021', 'se realizo una endodoncia'),
(2, 1, '31/10/2021', 'se realizo una limpieza bocal'),
(3, 2, '28/10/2021', 'ningun detalle'),
(4, 2, '30/10/2021', 'se realizo una limpieza bocal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `odontologo`
--

CREATE TABLE `odontologo` (
  `id_odontologo` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `odontologo`
--

INSERT INTO `odontologo` (`id_odontologo`, `nombre`, `rut`, `telefono`, `correo`) VALUES
(1, 'Bruno Araneda', '14569234-4', '56421536', 'brunoaraneda@gmail.com'),
(2, 'Carlos Vidal', '14222147-4', '45128796', 'carlosvidal@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `odontologo_tons`
--

CREATE TABLE `odontologo_tons` (
  `id` int(50) NOT NULL,
  `id_odontologo` int(50) NOT NULL,
  `id_tons` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `odontologo_tons`
--

INSERT INTO `odontologo_tons` (`id`, `id_odontologo`, `id_tons`) VALUES
(1, 1, 2),
(2, 1, 1),
(3, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(50) NOT NULL,
  `id_odontologo` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `celular` varchar(50) NOT NULL,
  `estado_civil` varchar(50) NOT NULL,
  `edad` int(50) NOT NULL,
  `domicilio` varchar(50) NOT NULL,
  `profesion` varchar(50) NOT NULL,
  `lugar trabajo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `id_odontologo`, `nombre`, `rut`, `telefono`, `celular`, `estado_civil`, `edad`, `domicilio`, `profesion`, `lugar trabajo`) VALUES
(1, 1, 'Reinaldo Bustamante', '19555874-4', '45632514', '85962145', 'Soltero', 24, 'soto aguilar', 'estudiante ', 'ninguna'),
(2, 2, 'Felipe Vidal', '19111111-1', '54632185', '45879765', 'Soltero', 24, 'asd', 'asd', 'asd');

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
-- Estructura de tabla para la tabla `pieza_odontograma`
--

CREATE TABLE `pieza_odontograma` (
  `id` int(50) NOT NULL,
  `id_odontograma` int(50) NOT NULL,
  `id_pieza` int(50) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `diagnostico` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pieza_odontograma`
--

INSERT INTO `pieza_odontograma` (`id`, `id_odontograma`, `id_pieza`, `estado`, `diagnostico`) VALUES
(1, 1, 6, 'buen estado', 'carie'),
(2, 1, 24, 'en tratamiento', 'carie');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tons`
--

CREATE TABLE `tons` (
  `id_tons` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `rut` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tons`
--

INSERT INTO `tons` (`id_tons`, `nombre`, `rut`, `telefono`, `correo`) VALUES
(1, 'Pedro reyes', '14562324-2', '45128796', 'pedroreyes@gmail.com'),
(2, 'Juan rosales', '14575462-5', '54863214', 'juanrosales@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `acceder`
--
ALTER TABLE `acceder`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_odontologo` (`id_odontologo`),
  ADD KEY `id_tons` (`id_tons`),
  ADD KEY `folio` (`folio`);

--
-- Indices de la tabla `datos_clinicos`
--
ALTER TABLE `datos_clinicos`
  ADD PRIMARY KEY (`id_datos_clinicos`),
  ADD KEY `folio` (`folio`);

--
-- Indices de la tabla `ficha`
--
ALTER TABLE `ficha`
  ADD PRIMARY KEY (`folio`),
  ADD KEY `id_paciente` (`id_paciente`);

--
-- Indices de la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  ADD PRIMARY KEY (`id_historial_clinico`),
  ADD KEY `folio` (`folio`);

--
-- Indices de la tabla `odontograma`
--
ALTER TABLE `odontograma`
  ADD PRIMARY KEY (`id_odontograma`),
  ADD KEY `folio` (`folio`);

--
-- Indices de la tabla `odontologo`
--
ALTER TABLE `odontologo`
  ADD PRIMARY KEY (`id_odontologo`);

--
-- Indices de la tabla `odontologo_tons`
--
ALTER TABLE `odontologo_tons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_odontologo` (`id_odontologo`),
  ADD KEY `id_tons` (`id_tons`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`),
  ADD KEY `id_odontologo` (`id_odontologo`);

--
-- Indices de la tabla `piezas`
--
ALTER TABLE `piezas`
  ADD PRIMARY KEY (`id_pieza`);

--
-- Indices de la tabla `pieza_odontograma`
--
ALTER TABLE `pieza_odontograma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_odontograma` (`id_odontograma`),
  ADD KEY `id_pieza` (`id_pieza`);

--
-- Indices de la tabla `tons`
--
ALTER TABLE `tons`
  ADD PRIMARY KEY (`id_tons`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acceder`
--
ALTER TABLE `acceder`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datos_clinicos`
--
ALTER TABLE `datos_clinicos`
  MODIFY `id_datos_clinicos` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ficha`
--
ALTER TABLE `ficha`
  MODIFY `folio` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  MODIFY `id_historial_clinico` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `odontograma`
--
ALTER TABLE `odontograma`
  MODIFY `id_odontograma` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `odontologo`
--
ALTER TABLE `odontologo`
  MODIFY `id_odontologo` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `odontologo_tons`
--
ALTER TABLE `odontologo_tons`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `piezas`
--
ALTER TABLE `piezas`
  MODIFY `id_pieza` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `pieza_odontograma`
--
ALTER TABLE `pieza_odontograma`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tons`
--
ALTER TABLE `tons`
  MODIFY `id_tons` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `acceder`
--
ALTER TABLE `acceder`
  ADD CONSTRAINT `acceder_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `ficha` (`folio`),
  ADD CONSTRAINT `acceder_ibfk_2` FOREIGN KEY (`id_tons`) REFERENCES `tons` (`id_tons`),
  ADD CONSTRAINT `acceder_ibfk_3` FOREIGN KEY (`id_odontologo`) REFERENCES `odontologo` (`id_odontologo`);

--
-- Filtros para la tabla `datos_clinicos`
--
ALTER TABLE `datos_clinicos`
  ADD CONSTRAINT `datos_clinicos_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `ficha` (`folio`);

--
-- Filtros para la tabla `ficha`
--
ALTER TABLE `ficha`
  ADD CONSTRAINT `ficha_ibfk_1` FOREIGN KEY (`id_paciente`) REFERENCES `pacientes` (`id_paciente`);

--
-- Filtros para la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  ADD CONSTRAINT `historial_clinico_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `ficha` (`folio`);

--
-- Filtros para la tabla `odontograma`
--
ALTER TABLE `odontograma`
  ADD CONSTRAINT `odontograma_ibfk_1` FOREIGN KEY (`folio`) REFERENCES `ficha` (`folio`);

--
-- Filtros para la tabla `odontologo_tons`
--
ALTER TABLE `odontologo_tons`
  ADD CONSTRAINT `odontologo_tons_ibfk_1` FOREIGN KEY (`id_odontologo`) REFERENCES `odontologo` (`id_odontologo`),
  ADD CONSTRAINT `odontologo_tons_ibfk_2` FOREIGN KEY (`id_tons`) REFERENCES `tons` (`id_tons`);

--
-- Filtros para la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD CONSTRAINT `pacientes_ibfk_1` FOREIGN KEY (`id_odontologo`) REFERENCES `odontologo` (`id_odontologo`);

--
-- Filtros para la tabla `pieza_odontograma`
--
ALTER TABLE `pieza_odontograma`
  ADD CONSTRAINT `pieza_odontograma_ibfk_1` FOREIGN KEY (`id_odontograma`) REFERENCES `odontograma` (`id_odontograma`),
  ADD CONSTRAINT `pieza_odontograma_ibfk_2` FOREIGN KEY (`id_pieza`) REFERENCES `piezas` (`id_pieza`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
