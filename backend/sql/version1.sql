/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 100422
 Source Host           : localhost:3306
 Source Schema         : rutahogar

 Target Server Type    : MySQL
 Target Server Version : 100422
 File Encoding         : 65001

 Date: 30/11/2022 21:28:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for producto
-- ----------------------------
DROP TABLE IF EXISTS `producto`;
CREATE TABLE `producto`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `precio` decimal(19, 4) NOT NULL,
  `descripcion` varchar(999) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `img_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sn_nuevo` tinyint NULL DEFAULT 0,
  `sn_home` tinyint NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of producto
-- ----------------------------
INSERT INTO `producto` VALUES (1, 'Combo x6 Uni. Silla Andina Chenille Chocolate', 50999.0000, 'Silla Andina. Estructura Pino con refuerzo en patas.,Combo disponible x 6 unidades,Disponible para entrega inmediata', 'ofg2jydyq0jmlwqfi1pk', 0, 0);
INSERT INTO `producto` VALUES (3, 'Combo x6 Uni. Silla Andina Chenille Cielo', 50999.0000, 'Silla Andina. Estructura Pino con refuerzo en patas.,Combo disponible x 6 unidades,Disponible para entrega inmediata', 'vrfbl3rougkvpcudxclr', 0, 0);
INSERT INTO `producto` VALUES (4, 'Sillón Herradura Pana gris Medio', 18999.0000, 'Sillón Individual Herradura. Tela pana gamuzada color Gris Medio.,Disponible para entrega inmediata', 'ttexnu8ikswllseakbz5', 0, 0);
INSERT INTO `producto` VALUES (5, 'Sillón Individual con apoya Brazos 1 cuerpo Gris Claro', 13999.0000, 'Sillón Matero de 1 cuerpo con Apoya brazo. Tela Chenille Gris claro.,Disponible para entrega inmediata', 'elexxlyze0aebm9ajrav', 0, 0);
INSERT INTO `producto` VALUES (6, 'Sillón Individual con apoya Brazos 1 cuerpo Tostado', 13999.0000, 'Sillón Matero de 1 cuerpo con Apoya brazo. Tela Chenille Tostado,Disponible para entrega inmediata', 'mfxgkis2b83ci23a0pax', 0, 0);
INSERT INTO `producto` VALUES (7, 'Almohada viscoelastica Clasica Bed&Co', 4950.0000, 'Sillón Matero de 1 cuerpo. Tela Chenille Gris Claro,Disponible para entrega inmediata', 'cjvthwlgj3aekzhdygkx', 0, 0);
INSERT INTO `producto` VALUES (8, 'Combo x6 Uni. Silla Andina Chenille Chocolate', 50999.0000, '', 'ggl6rdacn9tlomkfnydf', 1, 0);
INSERT INTO `producto` VALUES (9, 'Combo x6 Uni. Silla Andina Chenille Cielo', 50999.0000, '', 'pe9q2qex6nya54sz3k4m', 1, 0);
INSERT INTO `producto` VALUES (10, 'Sofá Esquinero de 2.10 Mts Hammer Gris Oscuro', 69999.0000, '', 'y5gih9hhru6dfqknykxg', 1, 0);
INSERT INTO `producto` VALUES (11, 'Sillón Matero de 1 Cuerpo Chenille Gris Oscuro', 9999.0000, '', 'phfgczkzrzg7isxjg6xw', 1, 0);
INSERT INTO `producto` VALUES (12, 'Sillón Matero de 1 Cuerpo Chenille Gris Claro', 9999.0000, '', 'fk4jshdwmvm4wpkkw28p', 1, 0);
INSERT INTO `producto` VALUES (13, 'Sillón Individual con apoya Brazos 1 cuerpo Tostado', 13999.0000, '', 'fe8ljakpalk5paxtml6w', 1, 0);
INSERT INTO `producto` VALUES (14, 'Sillón Individual con apoya Brazos 1 cuerpo Gris Oscuro', 13999.0000, '', 'pw3iryaoe0tl6hw3teps', 1, 0);
INSERT INTO `producto` VALUES (15, 'Sillón Individual con apoya Brazos 1 cuerpo Gris Claro', 13999.0000, '', 'ekx0l07poxc5unksbdmm', 1, 0);
INSERT INTO `producto` VALUES (16, 'Almohada Viscoelastica King Bed & Co', 6350.0000, '', 'wxwlrqrrk0iweffy6uze', 0, 1);
INSERT INTO `producto` VALUES (17, 'Almohada Sublime Cannon', 4699.0000, '', 'ttx1drnpedwkzoplvixr', 0, 1);
INSERT INTO `producto` VALUES (18, 'Almohada Viscoelástica Kids Bed & Co.', 3099.0000, '', 'ccrr27zxs43wob3tc5ls', 0, 1);
INSERT INTO `producto` VALUES (19, 'Almohada Viscoelástica Relax Bed & Co.', 3799.0000, '', 'tmkvvmcffpisgxglciqd', 0, 1);
INSERT INTO `producto` VALUES (20, 'Almohada viscoelastica Cervical Bed&Co', 4950.0000, '', 'gjr8vgdozs6hr6iunofu', 0, 1);
INSERT INTO `producto` VALUES (21, 'Almohada viscoelastica Clasica Bed&Co', 4950.0000, '', 'lofqp92afbtlkfa6d2iy', 0, 1);

SET FOREIGN_KEY_CHECKS = 1;

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
