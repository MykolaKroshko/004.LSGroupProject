-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Ноя 01 2016 г., 23:13
-- Версия сервера: 5.5.51-38.1
-- Версия PHP: 5.6.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ct61014_photo`
--
CREATE DATABASE IF NOT EXISTS `ct61014_photo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ct61014_photo`;

-- --------------------------------------------------------

--
-- Структура таблицы `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
  `id_album` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `album_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `cover` varchar(255) NOT NULL,
  PRIMARY KEY (`id_album`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `albums`
--

INSERT INTO `albums` (`id_album`, `id_user`, `album_name`, `description`, `cover`) VALUES
(1, 1, 'forest', 'Мои прогулки по лесу', '/assets/img/user1/album1/forest1.png'),
(2, 1, 'Мои велопрогулки', 'Велопрогулки по окрестностям в мой прошлый отпуск', '/assets/img/user1/album2/velo1.png'),
(3, 3, 'Мое путешествие', 'Мое первое путешествие за пределами родины', '/assets/img/user3/album1/trip1.png'),
(4, 4, 'Цветочки', 'Букет с дачи', '/assets/img/user4/album1/userBG.png');

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id_comment` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL COMMENT 'кто оставил коммент',
  `id_photo` int(11) NOT NULL,
  `text_comment` longtext NOT NULL,
  PRIMARY KEY (`id_comment`),
  KEY `id_user` (`id_user`),
  KEY `id_photo` (`id_photo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`id_comment`, `id_user`, `id_photo`, `text_comment`) VALUES
(1, 1, 13, 'Мне нравится. Очень красиво'),
(2, 3, 1, 'Хочу туда'),
(3, 3, 10, 'Это где находится?'),
(4, 3, 2, 'АААААААААА, как мне хочется в отпуск'),
(5, 3, 10, 'Скоро поедешь!');

-- --------------------------------------------------------

--
-- Структура таблицы `likes`
--

CREATE TABLE IF NOT EXISTS `likes` (
  `id_like` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL COMMENT 'кто оставил лайк',
  `id_photo` int(11) NOT NULL,
  PRIMARY KEY (`id_like`),
  KEY `id_user` (`id_user`),
  KEY `id_photo` (`id_photo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `likes`
--

INSERT INTO `likes` (`id_like`, `id_user`, `id_photo`) VALUES
(1, 1, 12),
(2, 3, 15),
(3, 1, 13),
(4, 4, 1),
(5, 3, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `photo`
--

CREATE TABLE IF NOT EXISTS `photo` (
  `id_photo` int(11) NOT NULL AUTO_INCREMENT,
  `id_album` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `source` varchar(255) NOT NULL,
  PRIMARY KEY (`id_photo`),
  KEY `id_album` (`id_album`),
  KEY `id_album_2` (`id_album`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `photo`
--

INSERT INTO `photo` (`id_photo`, `id_album`, `photo`, `description`, `source`) VALUES
(1, 1, 'Осень в лесу', 'Как приятно побродить по осеннему лесу', '/assets/img/user1/album1/forest1.png'),
(2, 1, 'Водопад', 'Местная достопримечательность. Наш водопад', '/assets/img/user1/album1/forest2.png'),
(3, 1, 'Озеро', 'Что там, за деревьями? Ну конечно же, наше озеро', '/assets/img/user1/album1/forest3.png'),
(4, 1, 'Зима', 'Самое красивое время года. Если бы еще так холодно не было', '/assets/img/user1/album1/forest4.png'),
(5, 1, 'На краю обрыва', 'На краю обрыва за которым вечность', '/assets/img/user1/album1/forest5.png'),
(8, 2, 'Дорога', 'Не мое, в сети нашел', '/assets/img/user1/album2/velo1.png'),
(9, 2, 'Шоссе в лесу', 'А это уже мое. Хорошая дорога сквозь лес.', '/assets/img/user1/album2/velo2.png'),
(10, 2, 'Девушка в гамаке', 'Какая красота!', '/assets/img/user1/album2/velo3.png'),
(11, 2, 'Горное озеро', 'Вода, наверное, холодная-прехолодная.', '/assets/img/user1/album2/velo4.png'),
(12, 2, 'Поехали!', 'Романтика начинается', '/assets/img/user1/album2/velo5.png'),
(13, 3, 'Лошадки', 'Или мустанги в прерии?????', '/assets/img/user3/album1/trip1.png'),
(14, 3, 'Наступает ночь', 'Только горы, ночь и я....', '/assets/img/user3/album1/trip2.png'),
(15, 3, 'Вышел к морю', 'Искупаться не удалось, холодно и камни острые на дне', '/assets/img/user3/album1/trip3.png'),
(16, 4, 'Ромашки....', 'Гадать не дам, мне самой мало', '/assets/img/user3/album1/userBG.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_description` text NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `background` varchar(255) NOT NULL,
  `vk` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `google` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id_user`, `login`, `password`, `email`, `user_description`, `avatar`, `background`, `vk`, `facebook`, `google`, `twitter`) VALUES
(1, 'Иван Иванов', '12345', 'ivanov@this.ru', 'Я веб-разработчик из Урюпинска', '/assets/img/user1/album1/forest1', '/assets/img/user1/album1/forest2', 'https://vk.com', 'https://www.facebook.com', 'https://google.com', 'https://twitter.com'),
(3, 'Петр Петров', '54321', 'petrov@this.ru', 'Я путешественник из Питера. Люблю кататься и саночки возить.', '/assets/img/album1/trip1.png', '/assets/img/album1/trip1.png', 'https://vk.com', 'https://www.facebook.com', 'https://google.com', 'https://twitter.com'),
(4, 'Вася Сидоров', '11111', 'sidoroFF@this.ru', 'Я веб-разработчик из Магадана. У нас холодно, но интересно. Приезжайте!', '/assets/img/album1/userBG.jpg', '/assets/img/album1/userBG.jpg', 'https://vk.com', 'https://www.facebook.com', 'https://google.com', 'https://twitter.com/');

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id_photo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id_photo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id_album`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
