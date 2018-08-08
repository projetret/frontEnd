-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 27 juil. 2018 à 12:28
-- Version du serveur :  10.1.31-MariaDB
-- Version de PHP :  7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ret`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_id` mediumint(8) UNSIGNED NOT NULL,
  `Companycode` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(30) COLLATE utf8_bin NOT NULL,
  `reg_date` date NOT NULL,
  `fname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `lname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `salt` char(21) COLLATE utf8_bin NOT NULL,
  `password` char(60) COLLATE utf8_bin NOT NULL,
  `rolecode` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `users`
--
-- password is admin --
INSERT INTO `users` (`user_id`, `Companycode`, `email`, `reg_date`, `fname`, `lname`, `salt`, `password`, `rolecode`) VALUES
(1, '12345', 'aouissaoui.khalil@gmail.fr', '2018-07-02', 'Aouissaoui', 'Khalil', 'jHKA5Q9C2TkhtsuqXjhki', '$2a$05$jHKA5Q9C2TkhtsuqXjhki..Uu59IMRzvc.U879K7RHQLOM5xxdjRu', 'ADMIN');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `companyid` (`Companycode`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
