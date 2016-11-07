-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 07 2016 г., 15:45
-- Версия сервера: 5.7.13
-- Версия PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ct61014_photo`
--

-- --------------------------------------------------------

--
-- Структура таблицы `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
  `id_album` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `album_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `cover` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `albums`
--

INSERT INTO `albums` (`id_album`, `id_user`, `album_name`, `description`, `cover`) VALUES
(1, 1, 'forest', 'Мои прогулки по лесу', '/../database/user1/album1/forest1.png'),
(2, 1, 'Мои велопрогулки', 'Велопрогулки по окрестностям в мой прошлый отпуск', '/../database/user1/album2/velo1.png'),
(3, 3, 'Мое путешествие', 'Мое первое путешествие за пределами родины', '/../database/user3/album1/trip1.png'),
(4, 4, 'Цветочки', 'Букет с дачи', '/../database/user4/album1/userBG.png');

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
  `id_comment` int(11) NOT NULL,
  `id_user` int(11) NOT NULL COMMENT 'кто оставил коммент',
  `id_photo` int(11) NOT NULL,
  `text_comment` longtext NOT NULL
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
  `id_like` int(11) NOT NULL,
  `id_user` int(11) NOT NULL COMMENT 'кто оставил лайк',
  `id_photo` int(11) NOT NULL
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
  `id_photo` int(11) NOT NULL,
  `id_album` int(11) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `source` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `photo`
--

INSERT INTO `photo` (`id_photo`, `id_album`, `photo`, `description`, `source`) VALUES
(1, 1, 'Осень в лесу', 'Как приятно побродить по осеннему лесу', '/../database/user1/album1/forest1.png'),
(2, 1, 'Водопад', 'Местная достопримечательность. Наш водопад', '/../database/user1/album1/forest2.png'),
(3, 1, 'Озеро', 'Что там, за деревьями? Ну конечно же, наше озеро', '/../database/user1/album1/forest3.png'),
(4, 1, 'Зима', 'Самое красивое время года. Если бы еще так холодно не было', '/../database/user1/album1/forest4.png'),
(5, 1, 'На краю обрыва', 'На краю обрыва за которым вечность', '/../database/user1/album1/forest5.png'),
(8, 2, 'Дорога', 'Не мое, в сети нашел', '/../database/user1/album2/velo1.png'),
(9, 2, 'Шоссе в лесу', 'А это уже мое. Хорошая дорога сквозь лес.', '/../database/user1/album2/velo2.png'),
(10, 2, 'Девушка в гамаке', 'Какая красота!', '/../database/user1/album2/velo3.png'),
(11, 2, 'Горное озеро', 'Вода, наверное, холодная-прехолодная.', '/../database/user1/album2/velo4.png'),
(12, 2, 'Поехали!', 'Романтика начинается', '/../database/user1/album2/velo5.png'),
(13, 3, 'Лошадки', 'Или мустанги в прерии?????', '/../database/user3/album1/trip1.png'),
(14, 3, 'Наступает ночь', 'Только горы, ночь и я....', '/../database/user3/album1/trip2.png'),
(15, 3, 'Вышел к морю', 'Искупаться не удалось, холодно и камни острые на дне', '/../database/user3/album1/trip3.png'),
(16, 4, 'Ромашки....', 'Гадать не дам, мне самой мало', '/../database/user3/album1/userBG.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id_user` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_description` text NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `background` varchar(255) NOT NULL,
  `vk` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `google` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id_user`, `login`, `password`, `email`, `user_description`, `avatar`, `background`, `vk`, `facebook`, `google`, `twitter`) VALUES
(1, 'Иван Иванов', '12345', 'ivanov@this.ru', 'Я веб-разработчик из Урюпинска', '/../database/user1/album1/forest1', '/../database/user1/album1/forest2', 'https://vk.com', 'https://www.facebook.com', 'https://google.com', 'https://twitter.com'),
(3, 'Петр Петров', '54321', 'petrov@this.ru', 'Я путешественник из Питера. Люблю кататься и саночки возить.', '/../database/album1/trip1.png', '/../database/album1/trip1.png', 'https://vk.com', 'https://www.facebook.com', 'https://google.com', 'https://twitter.com'),
(4, 'Вася Сидоров', '11111', 'sidoroFF@this.ru', 'Я веб-разработчик из Магадана. У нас холодно, но интересно. Приезжайте!', '/../database/album1/userBG.jpg', '/../database/album1/userBG.jpg', 'https://vk.com', 'https://www.facebook.com', 'https://google.com', 'https://twitter.com/');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id_album`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_photo` (`id_photo`);

--
-- Индексы таблицы `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id_like`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_photo` (`id_photo`);

--
-- Индексы таблицы `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id_photo`),
  ADD KEY `id_album` (`id_album`),
  ADD KEY `id_album_2` (`id_album`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `albums`
--
ALTER TABLE `albums`
  MODIFY `id_album` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `likes`
--
ALTER TABLE `likes`
  MODIFY `id_like` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `photo`
--
ALTER TABLE `photo`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
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
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id_photo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id_photo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ограничения внешнего ключа таблицы `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id_album`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
