-- --------------------------------------------------------
-- Сервер:                       127.0.0.1
-- Версія сервера:               5.7.13 - MySQL Community Server (GPL)
-- ОС сервера:                   Win32
-- HeidiSQL Версія:              9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for ct61014_photo
DROP DATABASE IF EXISTS `ct61014_photo`;
CREATE DATABASE IF NOT EXISTS `ct61014_photo` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ct61014_photo`;


-- Dumping structure for таблиця ct61014_photo.albums
DROP TABLE IF EXISTS `albums`;
CREATE TABLE IF NOT EXISTS `albums` (
  `id_album` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `album_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `cover` varchar(255) NOT NULL,
  PRIMARY KEY (`id_album`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Dumping data for table ct61014_photo.albums: ~4 rows (приблизно)
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` (`id_album`, `id_user`, `album_name`, `description`, `cover`) VALUES
	(1, 1, 'forest', 'Мои прогулки по лесу', '/../database/user1/album1/forest1.png'),
	(2, 1, 'Мои велопрогулки', 'Велопрогулки по окрестностям в мой прошлый отпуск', '/../database/user1/album2/velo1.png'),
	(3, 3, 'Мое путешествие', 'Мое первое путешествие за пределами родины', '/../database/user3/album3/trip1.png'),
	(4, 4, 'Цветочки', 'Букет с дачи', '/../database/user4/album4/userBG.jpg');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;


-- Dumping structure for таблиця ct61014_photo.comments
DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id_comment` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL COMMENT 'кто оставил коммент',
  `id_photo` int(11) NOT NULL,
  `text_comment` longtext NOT NULL,
  PRIMARY KEY (`id_comment`),
  KEY `id_user` (`id_user`),
  KEY `id_photo` (`id_photo`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id_photo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table ct61014_photo.comments: ~5 rows (приблизно)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` (`id_comment`, `id_user`, `id_photo`, `text_comment`) VALUES
	(1, 1, 13, 'Мне нравится. Очень красиво'),
	(2, 3, 1, 'Хочу туда'),
	(3, 3, 10, 'Это где находится?'),
	(4, 3, 2, 'АААААААААА, как мне хочется в отпуск'),
	(5, 3, 10, 'Скоро поедешь!');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;


-- Dumping structure for таблиця ct61014_photo.likes
DROP TABLE IF EXISTS `likes`;
CREATE TABLE IF NOT EXISTS `likes` (
  `id_like` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL COMMENT 'кто оставил лайк',
  `id_photo` int(11) NOT NULL,
  PRIMARY KEY (`id_like`),
  KEY `id_user` (`id_user`),
  KEY `id_photo` (`id_photo`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id_photo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table ct61014_photo.likes: ~5 rows (приблизно)
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` (`id_like`, `id_user`, `id_photo`) VALUES
	(1, 1, 12),
	(2, 3, 15),
	(3, 1, 13),
	(4, 4, 1),
	(5, 3, 2);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;


-- Dumping structure for таблиця ct61014_photo.photo
DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `id_photo` int(11) NOT NULL AUTO_INCREMENT,
  `id_album` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `source` varchar(255) NOT NULL,
  PRIMARY KEY (`id_photo`),
  KEY `id_album` (`id_album`),
  KEY `id_album_2` (`id_album`),
  CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id_album`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- Dumping data for table ct61014_photo.photo: ~14 rows (приблизно)
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` (`id_photo`, `id_album`, `photo`, `description`, `source`) VALUES
	(1, 1, 'Осень в лесу', 'Как приятно побродить по осеннему лесу', '/../database/user1/album1/forest1.png'),
	(2, 1, 'Водопад', 'Местная достопримечательность. Наш водопад', '/../database/user1/album1/forest2.png'),
	(3, 1, 'Озеро', 'Что там, за деревьями? Ну конечно же, наше озеро', '/../database/user1/album1/forest3.png'),
	(4, 1, 'Зима', 'Самое красивое время года. Если бы еще так холодно не было', '/../database/user1/album1/forest4.png'),
	(5, 1, 'На краю обрыва', 'На краю обрыва за которым вечность', '/../database/user1/album1/forest5.jpg'),
	(8, 2, 'Дорога', 'Не мое, в сети нашел', '/../database/user1/album2/velo1.png'),
	(9, 2, 'Шоссе в лесу', 'А это уже мое. Хорошая дорога сквозь лес.', '/../database/user1/album2/velo2.png'),
	(10, 2, 'Девушка в гамаке', 'Какая красота!', '/../database/user1/album2/velo3.png'),
	(11, 2, 'Горное озеро', 'Вода, наверное, холодная-прехолодная.', '/../database/user1/album2/velo4.png'),
	(12, 2, 'Поехали!', 'Романтика начинается', '/../database/user1/album2/velo5.png'),
	(13, 3, 'Лошадки', 'Или мустанги в прерии?????', '/../database/user3/album3/trip1.png'),
	(14, 3, 'Наступает ночь', 'Только горы, ночь и я....', '/../database/user3/album3/trip2.png'),
	(15, 3, 'Вышел к морю', 'Искупаться не удалось, холодно и камни острые на дне', '/../database/user3/album3/trip3.png'),
	(16, 4, 'Ромашки....', 'Гадать не дам, мне самой мало', '/../database/user4/album4/userBG.jpg');
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;


-- Dumping structure for таблиця ct61014_photo.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_description` text,
  `avatar` varchar(255) DEFAULT NULL,
  `background` varchar(255) DEFAULT NULL,
  `vk` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `google` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table ct61014_photo.users: ~3 rows (приблизно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id_user`, `name`, `password`, `email`, `user_description`, `avatar`, `background`, `vk`, `facebook`, `google`, `twitter`) VALUES
	(1, 'Иван Иванов', '12345', 'ivanov@this.ru', 'Я веб-разработчик из Урюпинска', '/../database/user1/ava.jpg', '/../database/user1/back.jpg', 'https://vk.com', '', 'https://google.com', ''),
	(3, 'Петр Петров', '54321', 'petrov@this.ru', 'Я путешественник из Питера. Люблю кататься и саночки возить.', '/../database/user3/avatar.png', '', '', '', '', ''),
	(4, 'Вася Сидоров', '11111', 'sidoroFF@this.ru', 'Я веб-разработчик из Магадана. У нас холодно, но интересно. Приезжайте!', '', '/../database/user4/userBG.jpg', 'https://vk.com', 'https://www.facebook.com', 'https://google.com', 'https://twitter.com/');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
