-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Admin` (
  `id` INT NOT NULL,
  `Name` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `mydb`.`Enterprise`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Enterprise` (
  `id` INT NOT NULL,
  `Name` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(100) NOT NULL,
  `Description` TEXT(10000) NOT NULL,
  `Adress` VARCHAR(255) NOT NULL,
  `City` VARCHAR(100) NOT NULL,
  `Postcode` INT NOT NULL,
  `Admin_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Admin_id`),
  INDEX `fk_Enterprise_Admin1_idx` (`Admin_id` ASC) VISIBLE,
  CONSTRAINT `fk_Enterprise_Admin1`
    FOREIGN KEY (`Admin_id`)
    REFERENCES `mydb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`Candidats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Candidats` (
  `id` INT NOT NULL,
  `Name` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `Password` VARCHAR(100) NOT NULL,
  `CV` TEXT(10000) NOT NULL,
  `Adress` VARCHAR(255) NOT NULL,
  `City` VARCHAR(100) NOT NULL,
  `Postcode` INT NOT NULL,
  `Phone` INT NOT NULL,
  `Admin_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Admin_id`),
  INDEX `fk_Candidats_Admin1_idx` (`Admin_id` ASC) VISIBLE,
  CONSTRAINT `fk_Candidats_Admin1`
    FOREIGN KEY (`Admin_id`)
    REFERENCES `mydb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`JobOffer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`JobOffer` (
  `id` INT NOT NULL,
  `JobTitle` VARCHAR(255) NOT NULL,
  `Description` TEXT(10000) NOT NULL,
  `Location` VARCHAR(255) NOT NULL,
  `Entreprise` VARCHAR(255) NOT NULL,
  `Upload_Date` INT NOT NULL,
  `Contract_Type` VARCHAR(45) NULL,
  `Enterprise_id` INT NOT NULL,
  `Admin_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Enterprise_id`, `Admin_id`),
  INDEX `fk_JobOffer_Enterprise_idx` (`Enterprise_id` ASC) VISIBLE,
  INDEX `fk_JobOffer_Admin1_idx` (`Admin_id` ASC) VISIBLE,
  CONSTRAINT `fk_JobOffer_Enterprise`
    FOREIGN KEY (`Enterprise_id`)
    REFERENCES `mydb`.`Enterprise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_JobOffer_Admin1`
    FOREIGN KEY (`Admin_id`)
    REFERENCES `mydb`.`Admin` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`Application`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Application` (
  `JobOffer_id` INT NOT NULL,
  `Candidats_id` INT NOT NULL,
  `Enterprise_id` INT NOT NULL,
  PRIMARY KEY (`JobOffer_id`, `Candidats_id`, `Enterprise_id`),
  INDEX `fk_JobOffer_has_Candidats_Candidats1_idx` (`Candidats_id` ASC) VISIBLE,
  INDEX `fk_JobOffer_has_Candidats_JobOffer1_idx` (`JobOffer_id` ASC) VISIBLE,
  INDEX `fk_Application_Enterprise1_idx` (`Enterprise_id` ASC) VISIBLE,
  CONSTRAINT `fk_JobOffer_has_Candidats_JobOffer1`
    FOREIGN KEY (`JobOffer_id`)
    REFERENCES `mydb`.`JobOffer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_JobOffer_has_Candidats_Candidats1`
    FOREIGN KEY (`Candidats_id`)
    REFERENCES `mydb`.`Candidats` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Application_Enterprise1`
    FOREIGN KEY (`Enterprise_id`)
    REFERENCES `mydb`.`Enterprise` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `mydb`.`Favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Favorite` (
  `JobOffer_id` INT NOT NULL,
  `Candidats_id` INT NOT NULL,
  PRIMARY KEY (`JobOffer_id`, `Candidats_id`),
  INDEX `fk_JobOffer_has_Candidats1_Candidats1_idx` (`Candidats_id` ASC) VISIBLE,
  INDEX `fk_JobOffer_has_Candidats1_JobOffer1_idx` (`JobOffer_id` ASC) VISIBLE,
  CONSTRAINT `fk_JobOffer_has_Candidats1_JobOffer1`
    FOREIGN KEY (`JobOffer_id`)
    REFERENCES `mydb`.`JobOffer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_JobOffer_has_Candidats1_Candidats1`
    FOREIGN KEY (`Candidats_id`)
    REFERENCES `mydb`.`Candidats` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
