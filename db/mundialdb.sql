-- MySQL Administrator dump 1.4
--
-- ------------------------------------------------------
-- Server version	5.7.20-log


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


--
-- Create schema mundialdb
--

CREATE DATABASE IF NOT EXISTS mundialdb;
USE mundialdb;

--
-- Definition of table `matches`
--

DROP TABLE IF EXISTS `matches`;
CREATE TABLE `matches` (
  `id` int(11) NOT NULL,
  `date` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL,
  `matchday` int(11) NOT NULL,
  `level` varchar(8) NOT NULL,
  `stage` varchar(11) NOT NULL,
  `homeTeamName` varchar(30) NOT NULL,
  `awayTeamName` varchar(30) NOT NULL,
  `goalsHomeTeam` int(11) DEFAULT '0',
  `goalsAwayTeam` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `matches`
--

/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
INSERT INTO `matches` (`id`,`date`,`status`,`matchday`,`level`,`stage`,`homeTeamName`,`awayTeamName`,`goalsHomeTeam`,`goalsAwayTeam`) VALUES 
 (165069,'2018-06-14T15:00:00Z','TIMED',1,'group','A','Rosja','Arabia Saudyjska',0,0),
 (165070,'2018-06-17T18:00:00Z','TIMED',1,'group','E','Brazylia','Szwajcaria',0,0),
 (165071,'2018-06-16T16:00:00Z','TIMED',1,'group','C','Peru','Dania',0,0),
 (165072,'2018-06-16T10:00:00Z','TIMED',1,'group','C','Francja','Australia',0,0),
 (165073,'2018-06-16T13:00:00Z','TIMED',1,'group','D','Argentyna','Islandia',0,0),
 (165074,'2018-06-16T19:00:00Z','TIMED',1,'group','D','Chorwacja','Nigeria',0,0),
 (165075,'2018-06-17T12:00:00Z','TIMED',1,'group','E','Kostaryka','Serbia',0,0),
 (165076,'2018-06-15T18:00:00Z','TIMED',1,'group','B','Portugalia','Hiszpania',0,0),
 (165077,'2018-06-18T15:00:00Z','TIMED',1,'group','G','Belgia','Panama',0,0),
 (165078,'2018-06-18T18:00:00Z','TIMED',1,'group','G','Tunezja','Anglia',0,0),
 (165079,'2018-06-19T12:00:00Z','TIMED',1,'group','H','Kolumbia','Japonia',0,0),
 (165080,'2018-06-19T15:00:00Z','TIMED',1,'group','H','Polska','Senegal',0,0),
 (165081,'2018-06-18T12:00:00Z','TIMED',1,'group','F','Szwecja','Korea Południowa',0,0),
 (165082,'2018-06-17T15:00:00Z','TIMED',1,'group','F','Niemcy','Meksyk',0,0),
 (165083,'2018-06-15T15:00:00Z','TIMED',1,'group','B','Maroko','Iran',0,0),
 (165084,'2018-06-15T12:00:00Z','TIMED',1,'group','A','Egipt','Urugwaj',0,0),
 (165085,'2018-06-20T18:00:00Z','TIMED',2,'group','B','Iran','Hiszpania',0,0),
 (165086,'2018-06-20T15:00:00Z','TIMED',2,'group','A','Urugwaj','Arabia Saudyjska',0,0),
 (165087,'2018-06-20T12:00:00Z','TIMED',2,'group','B','Portugalia','Maroko',0,0),
 (165088,'2018-06-23T12:00:00Z','TIMED',2,'group','G','Belgia','Tunezja',0,0),
 (165089,'2018-06-23T18:00:00Z','TIMED',2,'group','F','Niemcy','Szwecja',0,0),
 (165090,'2018-06-23T15:00:00Z','TIMED',2,'group','F','Korea Południowa','Meksyk',0,0),
 (165091,'2018-06-22T18:00:00Z','TIMED',2,'group','E','Serbia','Szwajcaria',0,0),
 (165092,'2018-06-22T12:00:00Z','TIMED',2,'group','E','Brazylia','Kostaryka',0,0),
 (165093,'2018-06-24T12:00:00Z','TIMED',2,'group','G','Anglia','Panama',0,0),
 (165094,'2018-06-21T18:00:00Z','TIMED',2,'group','D','Argentyna','Chorwacja',0,0),
 (165095,'2018-06-24T15:00:00Z','TIMED',2,'group','H','Japonia','Senegal',0,0),
 (165096,'2018-06-21T12:00:00Z','TIMED',2,'group','C','Dania','Australia',0,0),
 (165097,'2018-06-24T18:00:00Z','TIMED',2,'group','H','Polska','Kolumbia',0,0),
 (165098,'2018-06-22T15:00:00Z','TIMED',2,'group','D','Nigeria','Islandia',0,0),
 (165099,'2018-06-21T15:00:00Z','TIMED',2,'group','C','Francja','Peru',0,0),
 (165100,'2018-06-19T18:00:00Z','TIMED',2,'group','A','Rosja','Egipt',0,0),
 (165101,'2018-06-25T14:00:00Z','TIMED',3,'group','A','Urugwaj','Rosja',0,0),
 (165102,'2018-06-27T14:00:00Z','TIMED',3,'group','E','Meksyk','Szwecja',0,0),
 (165103,'2018-06-28T14:00:00Z','TIMED',3,'group','H','Senegal','Kolumbia',0,0),
 (165104,'2018-06-28T14:00:00Z','TIMED',3,'group','H','Japonia','Polska',0,0),
 (165105,'2018-06-28T18:00:00Z','TIMED',3,'group','G','Anglia','Belgia',0,0),
 (165106,'2018-06-27T14:00:00Z','TIMED',3,'group','E','Korea Południowa','Niemcy',0,0),
 (165107,'2018-06-26T14:00:00Z','TIMED',3,'group','C','Australia','Peru',0,0),
 (165108,'2018-06-27T18:00:00Z','TIMED',3,'group','F','Szwajcaria','Kostaryka',0,0),
 (165109,'2018-06-25T18:00:00Z','TIMED',3,'group','B','Hiszpania','Maroko',0,0),
 (165110,'2018-06-28T18:00:00Z','TIMED',3,'group','G','Panama','Tunezja',0,0),
 (165111,'2018-06-25T14:00:00Z','TIMED',3,'group','A','Arabia Saudyjska','Egipt',0,0),
 (165112,'2018-06-25T18:00:00Z','TIMED',3,'group','B','Iran','Portugalia',0,0),
 (165113,'2018-06-26T14:00:00Z','TIMED',3,'group','C','Dania','Francja',0,0),
 (165114,'2018-06-26T18:00:00Z','TIMED',3,'group','D','Islandia','Chorwacja',0,0),
 (165115,'2018-06-26T18:00:00Z','TIMED',3,'group','D','Nigeria','Argentyna',0,0),
 (165116,'2018-06-27T18:00:00Z','TIMED',3,'group','F','Serbia','Brazylia',0,0),
 (165117,'2018-07-03T14:00:00Z','SCHEDULED',4,'knockout','of16','1F','2E',0,0),
 (165118,'2018-07-02T14:00:00Z','SCHEDULED',4,'knockout','of16','1E','2F',0,0),
 (165119,'2018-06-30T14:00:00Z','SCHEDULED',4,'knockout','of16','1C','2D',0,0),
 (165120,'2018-07-02T18:00:00Z','SCHEDULED',4,'knockout','of16','1G','2H',0,0),
 (165121,'2018-07-01T18:00:00Z','SCHEDULED',4,'knockout','of16','1D','2C',0,0),
 (165122,'2018-07-01T14:00:00Z','SCHEDULED',4,'knockout','of16','1B','2A',0,0),
 (165123,'2018-06-30T18:00:00Z','SCHEDULED',4,'knockout','of16','1A','2B',0,0),
 (165124,'2018-07-03T18:00:00Z','SCHEDULED',4,'knockout','of16','1H','2G',0,0),
 (165125,'2018-07-07T14:00:00Z','SCHEDULED',5,'knockout','quaterfinal','m55','m56',0,0),
 (165126,'2018-07-06T18:00:00Z','SCHEDULED',5,'knockout','quaterfinal','m53','m54',0,0),
 (165127,'2018-07-06T14:00:00Z','SCHEDULED',5,'knockout','quaterfinal','m49','m50',0,0),
 (165128,'2018-07-07T18:00:00Z','SCHEDULED',5,'knockout','quaterfinal','m51','m52',0,0),
 (165129,'2018-07-11T18:00:00Z','SCHEDULED',6,'knockout','semifinal','m59','m60',0,0),
 (165130,'2018-07-10T18:00:00Z','SCHEDULED',6,'knockout','semifinal','m57','m58',0,0),
 (165131,'2018-07-14T14:00:00Z','SCHEDULED',7,'knockout','bronze','p61','p62',0,0),
 (165132,'2018-07-15T15:00:00Z','SCHEDULED',8,'knockout','final','m61','m62',0,0);
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;


--
-- Definition of table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  `content` longtext NOT NULL,
  `photo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` (`id`,`date`,`title`,`content`,`photo`) VALUES 
 (7,'2018-05-28T10:29:27.462Z','Nowy news','Lorem ipsum dolor sit amet,\r\n consectetur adipiscing elit. Cras vel mi posuere, placerat lacus quis, finibus quam.\r\n Curabitur et est aliquam, volutpat tellus rhoncus, volutpat magna. \r\n Fusce hendrerit ante gravida orci malesuada placerat. Vivamus fringilla massa eget \r\n tellus ultrices facilisis. Aliquam quis tincidunt risus, et sagittis urna. \r\n Aenean in lacus malesuada justo egestas scelerisque. Etiam a pharetra orci. \r\n Sed suscipit eget dolor a efficitur. Nunc quis neque quam. Fusce sollicitudin elit quam, \r\n nec pretium quam euismod et. Nunc eget augue a est mollis ornare non ut dui. \r\n Maecenas in sodales est. Vestibulum sit amet hendrerit ipsum, a semper libero. \r\n Morbi vel vulputate eros. Donec ac vestibulum diam, et pretium elit. \r\n Aenean sit amet lorem vitae est pharetra maximus.',NULL);
/*!40000 ALTER TABLE `news` ENABLE KEYS */;


--
-- Definition of table `pages`
--

DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `content` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pages`
--

/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` (`id`,`name`,`content`) VALUES 
 (1,'regulamin','Lorem ipsum dolor sit amet,\r\n consectetur adipiscing elit. Cras vel mi posuere, placerat lacus quis, finibus quam.\r\n Curabitur et est aliquam, volutpat tellus rhoncus, volutpat magna. \r\n Fusce hendrerit ante gravida orci malesuada placerat. Vivamus fringilla massa eget \r\n tellus ultrices facilisis. Aliquam quis tincidunt risus, et sagittis urna. \r\n Aenean in lacus malesuada justo egestas scelerisque. Etiam a pharetra orci. \r\n Sed suscipit eget dolor a efficitur. Nunc quis neque quam. Fusce sollicitudin elit quam, \r\n nec pretium quam euismod et. Nunc eget augue a est mollis ornare non ut dui. \r\n Maecenas in sodales est. Vestibulum sit amet hendrerit ipsum, a semper libero. \r\n Morbi vel vulputate eros. Donec ac vestibulum diam, et pretium elit. \r\n Aenean sit amet lorem vitae est pharetra maximus.');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;


--
-- Definition of table `types`
--

DROP TABLE IF EXISTS `types`;
CREATE TABLE `types` (
  `id_user` int(10) unsigned NOT NULL,
  `id_match` int(11) NOT NULL,
  `home_score` int(10) unsigned DEFAULT '0',
  `away_score` int(10) unsigned DEFAULT '0',
  `points` int(10) unsigned NOT NULL,
  `typed` tinyint(1) NOT NULL DEFAULT '0',
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_user`,`id_match`) USING BTREE,
  KEY `match` (`id_match`),
  CONSTRAINT `match` FOREIGN KEY (`id_match`) REFERENCES `matches` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `types`
--

/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` (`id_user`,`id_match`,`home_score`,`away_score`,`points`,`typed`,`date`) VALUES 
 (2,165069,0,0,0,0,NULL),
 (2,165070,0,0,0,0,NULL),
 (2,165071,0,0,0,0,NULL),
 (2,165072,0,0,0,0,NULL),
 (2,165073,0,0,0,0,NULL),
 (2,165074,0,0,0,0,NULL),
 (2,165075,0,0,0,0,NULL),
 (2,165076,0,0,0,0,NULL),
 (2,165077,0,0,0,0,NULL),
 (2,165078,0,0,0,0,NULL),
 (2,165079,0,0,0,0,NULL),
 (2,165080,0,0,0,0,NULL),
 (2,165081,0,0,0,0,NULL),
 (2,165082,0,0,0,0,NULL),
 (2,165083,0,0,0,0,NULL),
 (2,165084,0,0,0,0,NULL),
 (2,165085,0,0,0,0,NULL),
 (2,165086,0,0,0,0,NULL),
 (2,165087,0,0,0,0,NULL),
 (2,165088,0,0,0,0,NULL),
 (2,165089,0,0,0,0,NULL),
 (2,165090,0,0,0,0,NULL),
 (2,165091,0,0,0,0,NULL),
 (2,165092,0,0,0,0,NULL),
 (2,165093,0,0,0,0,NULL),
 (2,165094,0,0,0,0,NULL),
 (2,165095,0,0,0,0,NULL),
 (2,165096,0,0,0,0,NULL),
 (2,165097,0,0,0,0,NULL),
 (2,165098,0,0,0,0,NULL),
 (2,165099,0,0,0,0,NULL),
 (2,165100,0,0,0,0,NULL),
 (2,165101,0,0,0,0,NULL),
 (2,165102,0,0,0,0,NULL),
 (2,165103,0,0,0,0,NULL),
 (2,165104,0,0,0,0,NULL),
 (2,165105,0,0,0,0,NULL),
 (2,165106,0,0,0,0,NULL),
 (2,165107,0,0,0,0,NULL),
 (2,165108,0,0,0,0,NULL),
 (2,165109,0,0,0,0,NULL),
 (2,165110,0,0,0,0,NULL),
 (2,165111,0,0,0,0,NULL),
 (2,165112,0,0,0,0,NULL),
 (2,165113,0,0,0,0,NULL),
 (2,165114,0,0,0,0,NULL),
 (2,165115,0,0,0,0,NULL),
 (2,165116,0,0,0,0,NULL),
 (2,165117,0,0,0,0,NULL),
 (2,165118,0,0,0,0,NULL),
 (2,165119,0,0,0,0,NULL),
 (2,165120,0,0,0,0,NULL),
 (2,165121,0,0,0,0,NULL),
 (2,165122,0,0,0,0,NULL),
 (2,165123,0,0,0,0,NULL),
 (2,165124,0,0,0,0,NULL),
 (2,165125,0,0,0,0,NULL),
 (2,165126,0,0,0,0,NULL),
 (2,165127,0,0,0,0,NULL),
 (2,165128,0,0,0,0,NULL),
 (2,165129,0,0,0,0,NULL),
 (2,165130,0,0,0,0,NULL),
 (2,165131,0,0,0,0,NULL),
 (2,165132,0,0,0,0,NULL);
/*!40000 ALTER TABLE `types` ENABLE KEYS */;


--
-- Definition of table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `range` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`,`login`,`name`,`email`,`password`,`range`,`date`,`active`) VALUES 
 (1,0x61646D696E,0x61646D696E6973747261746F72,'admin@admin.pl',0x2A35313338423339393141353234444633364333464546434337413939313237364342383141333637,'admin','2018-05-14T13:45:07.877Z',1),
 (2,0x7573657231,0x5573657231,'user@user.pl',0x2A35313338423339393141353234444633364333464546434337413939313237364342383141333637,'user','2018-05-28T10:15:07.877Z',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;


--
-- Definition of procedure `create_types`
--

DROP PROCEDURE IF EXISTS `create_types`;

DELIMITER $$

/*!50003 SET @TEMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_types`(IN us INT)
BEGIN
  DECLARE mecz INT DEFAULT 165069;
  DECLARE i INT DEFAULT 0;
  WHILE i < 64 DO
    INSERT INTO `types` (id_match, id_user, points) VALUES(mecz, us, 0);
    SET mecz = mecz +1;
    SET i = i+1;
  END WHILE;
END $$
/*!50003 SET SESSION SQL_MODE=@TEMP_SQL_MODE */  $$

DELIMITER ;



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
