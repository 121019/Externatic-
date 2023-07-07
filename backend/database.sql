-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: mvc_express
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
INSERT INTO `Admin` VALUES (1,'nils','nils.mehlhorn.fr@gmail.com','123');
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Candidats`
--

DROP TABLE IF EXISTS `Candidats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Candidats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `cv` text,
  `adress` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `postcode` int NOT NULL,
  `phone` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Candidats`
--

LOCK TABLES `Candidats` WRITE;
/*!40000 ALTER TABLE `Candidats` DISABLE KEYS */;
INSERT INTO `Candidats` VALUES (1,'julien2','beans','quiaimelesbaffes@gmail.com','1234','','35 rue de la betise','Wonderland',45786,457896545),(2,'julien','machin','julienquiaimelesbaffes@gmail.com','1234','','35 rue de la betise','Wonderland',45786,457896545),(4,'juliennnena','machin_bizzare','ttjulienquiaimelesbaffesssss@gmail.com','$2a$10$mmsoHiJl4aOOYxvH/u8AauZgr9dPpgKnbXB4pUF1AM4.O5ewCBzha','','45 rue de la betise','Wonderland',45786,457896545),(5,'wihlem','h','wil@gmail.com','$2a$10$lGjqg0./nomliONt4ub1w.P7pcoqnoFA3DITHuTZ6s21fzbWlmxse','','45 rue de la betise','Wonderland',45786,457896545);
/*!40000 ALTER TABLE `Candidats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Enterprise`
--

DROP TABLE IF EXISTS `Enterprise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Enterprise` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `Adress` varchar(255) NOT NULL,
  `City` varchar(100) NOT NULL,
  `Postcode` int NOT NULL,
  `Admin_id` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_Enterprise_Admin1_idx` (`Admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Enterprise`
--

LOCK TABLES `Enterprise` WRITE;
/*!40000 ALTER TABLE `Enterprise` DISABLE KEYS */;
INSERT INTO `Enterprise` VALUES (11,'Business 1','email1@example.com','password1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis ligula.','Address 1','City 1',26000,1),(12,'Business 2','email2@example.com','password2','Praesent euismod, mauris non ultricies pellentesque, felis erat consectetur.','Address 2','City 2',69000,1),(13,'Business 3','email3@example.com','password3','Nulla facilisi. Cras vestibulum tellus id iaculis consequat.','Address 3','City 3',56443,1),(14,'Business 4','email4@example.com','password4','Fusce vel consectetur sem, vel placerat odio. Sed id risus.','Address 4','City 4',564789,1),(15,'Business 5','email5@example.com','password5','Vestibulum ante ipsum primis in faucibus orci luctus et.','Address 5','City 5',54789,1),(16,'Business 6','email6@example.com','password6','In ac nisi velit. Nam sit amet lorem turpis.','Address 6','City 6',65789,1),(17,'Business 7','email7@example.com','password7','Suspendisse sed justo vitae erat facilisis ultricies ac.','Address 7','City 7',98745,1),(18,'Business 8','email8@example.com','password8','Ut placerat ipsum id erat pulvinar feugiat. Vestibulum eget.','Address 8','City 8',654123,1),(19,'Business 9','email9@example.com','password9','Cras a dui id massa vehicula pretium vel.','Address 9','City 9',5478,1),(20,'Business 10','email10@example.com','password10','Vestibulum at sem lacinia, eleifend neque ut, scelerisque.','Address 10','City 10',9875687,1);
/*!40000 ALTER TABLE `Enterprise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `JobOffer`
--

DROP TABLE IF EXISTS `JobOffer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `JobOffer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `JobTitle` varchar(255) NOT NULL,
  `Description` text,
  `Location` varchar(255) DEFAULT NULL,
  `Upload_Date` date DEFAULT NULL,
  `Contract_Type` varchar(45) DEFAULT NULL,
  `Enterprise_id` int NOT NULL DEFAULT '1',
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`Enterprise_id`),
  KEY `fk_JobOffer_Enterprise_idx` (`Enterprise_id`),
  CONSTRAINT `fk_JobOffer_Enterprise` FOREIGN KEY (`Enterprise_id`) REFERENCES `Enterprise` (`id`),
  CONSTRAINT `JobOffer_ibfk_1` FOREIGN KEY (`Enterprise_id`) REFERENCES `Enterprise` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `JobOffer`
--

LOCK TABLES `JobOffer` WRITE;
/*!40000 ALTER TABLE `JobOffer` DISABLE KEYS */;
INSERT INTO `JobOffer` VALUES (144,'Développeur PHP Symfony H/F Editeur Nantes Nord','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Nantes','2023-08-11','CDI',11,'Développeur'),(145,'Développeur Symfony / Agence @ Centre-ville H/F','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Grenoble','2023-08-11','CDD',12,'Développeur'),(146,'System Architect PEGA H/F - 2 jours remote / semaine','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Paris','2023-08-11','CDI',11,'Architecte système'),(147,'Développeur back-end H/F @agence','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Cholet','2023-08-11','CDI',16,'Développeur back-end'),(148,'Développeur Python Django H/F','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Paris','2023-08-11','Esclavage',18,'Développeur'),(149,'Développeur Windev expérimenté @éditeur de logiciel - F/H/X','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Bordeaux','2023-08-11','CDD',17,'Développeur'),(150,'Développeur expérimenté fullstack PHP/React @éditeur de logiciels - F/H/X','Your long job description','Bordeaux','2023-08-11','CDI',18,'Développeur'),(151,'Développeur SCALA H-F @édition de logiciel - nantes','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Nantes','2023-08-11','CDI',20,'Développeur'),(152,'Développeur SCALA H-F @édition de logiciel - nantes','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Nantes','2023-08-11','CDI',12,'Développeur'),(153,'Product Owner expérimenté(e) - @éditeur de logiciel - F/H/X','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Bordeaux','2023-08-11','CDI',14,'Product Owner'),(154,'Développeur expérimenté fullstack PHP / React - FULL REMOTE possible - @éditeur de logiciel @scale-up - F/H/X','Your long job description','Nantes','2023-08-11','CDI',15,'Développeur'),(155,'Developpeur Front-end React','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lyon','2023-06-20',NULL,11,'Développeur front-end'),(156,'Developpeur back-end','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Valence','2023-06-20',NULL,11,'Développeur back-end');
/*!40000 ALTER TABLE `JobOffer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-07  9:23:00
