-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: hospital
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `diagnosis`
--

DROP TABLE IF EXISTS `diagnosis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnosis` (
  `DiagnosisID` int NOT NULL AUTO_INCREMENT,
  `DiagnosisDetails` varchar(45) NOT NULL,
  `DiagnosisRemarks` varchar(45) NOT NULL,
  PRIMARY KEY (`DiagnosisID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnosis`
--

LOCK TABLES `diagnosis` WRITE;
/*!40000 ALTER TABLE `diagnosis` DISABLE KEYS */;
INSERT INTO `diagnosis` VALUES (1,'Fever','cold,cough'),(2,'joint disorders','broken');
/*!40000 ALTER TABLE `diagnosis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `DoctorID` int NOT NULL AUTO_INCREMENT,
  `DoctorName` varchar(45) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Address` varchar(85) NOT NULL,
  `Designation` varchar(45) NOT NULL,
  `Role` varchar(45) NOT NULL,
  `Contact` varchar(12) NOT NULL,
  PRIMARY KEY (`DoctorID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'Dr.kathir','Male','22Q,East street,melagaram,Tenkasi','Cordiology','Doctor','8012811781'),(2,'Mala','Female','12A,North street,Kadayanallur','Ophthalmologists','Nurse','9708781478'),(3,'Dr.Kathir','Male','14F,New colony Road Courtallam','Ophthalmologists','Doctor','9708781478'),(4,'Dr.prasath','Male','45A,KTC Nagar,Tirunelveli','paediatric ','Doctor','8017847812'),(5,'Kala','Female','12A,KaliAmman Kovil Street,Tenkasi','paediatric ','Nurse','9894288465'),(6,'Madhu','Female','32F,ozone Complex,Kuthukalvalasai,Tenkasi','Ophthalmologists','Nurse','9500690231');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipment` (
  `EquipID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Details` varchar(45) NOT NULL,
  `ReceivedDate` varchar(45) NOT NULL,
  PRIMARY KEY (`EquipID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment`
--

LOCK TABLES `equipment` WRITE;
/*!40000 ALTER TABLE `equipment` DISABLE KEYS */;
INSERT INTO `equipment` VALUES (1,'Injection','neurolastic ','2023-05-20'),(2,'Patient Monitor','Adult,pediatric','2023-05-12');
/*!40000 ALTER TABLE `equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `BillNo` int NOT NULL AUTO_INCREMENT,
  `InvoiceDate` varchar(45) NOT NULL,
  `PatientID` varchar(45) NOT NULL,
  `PatientName` varchar(45) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Contact` varchar(45) NOT NULL,
  `Address` varchar(85) NOT NULL,
  `DoctorName` varchar(45) NOT NULL,
  `Amount` int NOT NULL,
  `PaymentMethod` varchar(45) NOT NULL,
  PRIMARY KEY (`BillNo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,'11-05-2023','1','Devi','Female','9708781478','12A,south street,melagaram','Dr.Shalini',12000,'cash'),(2,'11-05-2023','2','sujatha','Female','9894288465','12A,keezha street','Dr.kathir',4500,'UPI'),(3,'11-05-2023','4','Ganapathy','Male','9548745465','24H,KBK Flat,Coutrallam,Tenkasi','Dr.Selvam',1250,'cash'),(4,'11-05-2023','10','Sugumar','Male','9894288465','12,West street,Tenkasi','Dr.kathir',54000,'cash');
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `PatientID` int NOT NULL AUTO_INCREMENT,
  `PatientName` varchar(45) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Address` varchar(85) NOT NULL,
  `Contact` varchar(12) NOT NULL,
  `DoctorName` varchar(45) NOT NULL,
  `DiagnosisDetails` varchar(100) NOT NULL,
  PRIMARY KEY (`PatientID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Devi','Female','12A,south street,melagaram','9708781478','Dr.Shalini','Fever'),(2,'sujatha','Female','12A,keezha street','9894288465','Dr.kathir',''),(4,'Ganapathy','Male','24H,KBK Flat,Coutrallam,Tenkasi','9548745465','Dr.Selvam',''),(5,'Ajay','Male','78A,East street,Tenkasi','9677450845','Dr.Selvam',''),(10,'Sugumar','Male','12,West street,Tenkasi','9894288465','Dr.kathir','');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-11 18:43:43
