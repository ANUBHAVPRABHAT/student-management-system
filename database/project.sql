CREATE DATABASE  IF NOT EXISTS `project` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `username` varchar(30) NOT NULL,
  `emailid` varchar(30) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('prabhattomar290@gmail.com','prabhattomar290@gmail.com','prabhat','root');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attandance`
--

DROP TABLE IF EXISTS `attandance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attandance` (
  `date` date NOT NULL,
  `sid` int NOT NULL,
  `session` varchar(15) DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  `aid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`date`,`sid`),
  UNIQUE KEY `UK_e5eb58nb2u13yglledgj5kgm8` (`aid`),
  KEY `FKq7nyhvo6e3wcuydds9l16pkmy` (`sid`),
  CONSTRAINT `FKq7nyhvo6e3wcuydds9l16pkmy` FOREIGN KEY (`sid`) REFERENCES `student` (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attandance`
--

LOCK TABLES `attandance` WRITE;
/*!40000 ALTER TABLE `attandance` DISABLE KEYS */;
INSERT INTO `attandance` VALUES ('2022-04-01',1027,'2021-2022','P',113),('2022-04-01',1028,'2021-2022','A',0),('2022-04-02',1027,'2021-2022','A',115),('2022-04-02',1028,'2021-2022','P',128),('2022-04-04',1027,'2021-2022','P',117),('2022-04-04',1028,'2021-2022','P',129),('2022-04-05',1027,'2021-2022','P',119),('2022-04-05',1028,'2021-2022','P',130),('2022-04-06',1027,'2021-2022','P',121),('2022-04-07',1027,'2021-2022','A',124),('2022-04-09',1027,'2021-2022','A',126);
/*!40000 ALTER TABLE `attandance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam`
--

DROP TABLE IF EXISTS `exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam` (
  `examid` varchar(15) NOT NULL,
  `max_mark` int NOT NULL,
  PRIMARY KEY (`examid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam`
--

LOCK TABLES `exam` WRITE;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` VALUES ('Practical',30),('Theory',70);
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `result`
--

DROP TABLE IF EXISTS `result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result` (
  `examid` varchar(15) NOT NULL,
  `session` varchar(10) NOT NULL,
  `sid` int NOT NULL,
  `subject` varchar(15) NOT NULL,
  `classes` varchar(5) DEFAULT NULL,
  `marks` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `rid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`examid`,`session`,`sid`,`subject`),
  UNIQUE KEY `UK_qdy9c1ot5oscr7sj74vm6u4pj` (`rid`),
  KEY `studentresult_fk_idx` (`sid`),
  CONSTRAINT `examresul_fk` FOREIGN KEY (`examid`) REFERENCES `exam` (`examid`),
  CONSTRAINT `studentresult_fk` FOREIGN KEY (`sid`) REFERENCES `student` (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `result`
--

LOCK TABLES `result` WRITE;
/*!40000 ALTER TABLE `result` DISABLE KEYS */;
/*!40000 ALTER TABLE `result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `classes` varchar(5) NOT NULL,
  `name` varchar(45) NOT NULL,
  `addmissiondate` date NOT NULL,
  `father_name` varchar(45) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `dob` date NOT NULL,
  `emailid` varchar(30) NOT NULL,
  `mobile_no` varchar(20) NOT NULL,
  `address` varchar(45) NOT NULL,
  `pincode` int NOT NULL,
  `status` varchar(10) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=1029 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1027,'2','PANKAJ','2022-04-01','SANJIV','male','2014-10-24','rama@gmail.com','7383838773','Bhopal',462042,'active','1234'),(1028,'1','ANUBHAV PRABHAT KUMAR SINGH','2022-04-01','RAJIV','male','2022-04-05','prabhattomar290@gmail.com','7389240234','Bhopal',462041,'active','1234');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'project'
--
/*!50003 DROP PROCEDURE IF EXISTS `attandancereport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `attandancereport`(id int)
begin
 select count(*) as count from attandance where sid=id and status="P"and session=(select max(session) from attandance where sid=id)
union
 select count(*) as count from attandance where sid=id and status="A" and session=(select max(session) from attandance where sid=id);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `examresult` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `examresult`(id int)
begin
select a.*,b.max_mark from result a inner join exam b on a.examid=b.examid and a.sid=id  and a.session=(select max(session) from result where sid=id) order by examid desc;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `resultbyid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `resultbyid`(id int)
begin
select *  from result where sid=id order by examid desc;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `resultbysid` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `resultbysid`(id int)
begin
select a.*,b.subject as tsubject,b.marks as tmark  from result a,result b where a.examid="Practical" and b.examid="Theory" and a.subject=b.subject and  a.sid=id and b.sid=id and a.session=(select max(session) from result c where c.sid=id) and b.session=(select max(session) from result d where d.sid=id);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-11 11:14:51
