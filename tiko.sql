-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Waktu pembuatan: 19 Des 2022 pada 04.30
-- Versi server: 5.7.34
-- Versi PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tiko`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `artis`
--

CREATE TABLE `artis` (
  `id` int(11) NOT NULL,
  `nama` varchar(64) NOT NULL,
  `pengemar` int(11) NOT NULL,
  `path_image` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `artis`
--

INSERT INTO `artis` (`id`, `nama`, `pengemar`, `path_image`) VALUES
(1, 'Ardhito Pramono', 100, '/artis/ardhito.png'),
(2, 'Lyodra Ginting', 120, '/artis/lyodra.png'),
(3, 'Mahalini', 120, '/artis/mahalini.png'),
(4, 'Juicy Luicy', 60, '/artis/juicy-luicy.png'),
(5, 'The Overtunes', 67, '/artis/the-overtunes.png'),
(6, 'JKT 48', 150, '/artis/jkt48.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `bank`
--

CREATE TABLE `bank` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `bank`
--

INSERT INTO `bank` (`id`, `name`) VALUES
(2, 'BANK BRI'),
(3, 'BANK EKSPOR INDONESIA'),
(8, 'BANK MANDIRI'),
(9, 'BANK BNI'),
(11, 'BANK DANAMON'),
(13, 'PERMATA BANK'),
(14, 'BANK BCA'),
(16, 'BANK BII'),
(19, 'BANK PANIN'),
(20, 'BANK ARTA NIAGA KENCANA'),
(22, 'BANK NIAGA'),
(23, 'BANK BUANA IND'),
(26, 'BANK LIPPO'),
(28, 'BANK NISP'),
(30, 'AMERICAN EXPRESS BANK LTD'),
(31, 'CITIBANK N.A.'),
(32, 'JP. MORGAN CHASE BANK, N.A.'),
(33, 'BANK OF AMERICA, N.A'),
(34, 'ING INDONESIA BANK'),
(36, 'BANK MULTICOR TBK.'),
(37, 'BANK ARTHA GRAHA'),
(39, 'BANK CREDIT AGRICOLE INDOSUEZ'),
(40, 'THE BANGKOK BANK COMP. LTD'),
(41, 'THE HONGKONG & SHANGHAI B.C.'),
(42, 'THE BANK OF TOKYO MITSUBISHI UFJ LTD'),
(45, 'BANK SUMITOMO MITSUI INDONESIA'),
(46, 'BANK DBS INDONESIA'),
(47, 'BANK RESONA PERDANIA'),
(48, 'BANK MIZUHO INDONESIA'),
(50, 'STANDARD CHARTERED BANK'),
(52, 'BANK ABN AMRO'),
(53, 'BANK KEPPEL TATLEE BUANA'),
(54, 'BANK CAPITAL INDONESIA, TBK.'),
(57, 'BANK BNP PARIBAS INDONESIA'),
(58, 'BANK UOB INDONESIA'),
(59, 'KOREA EXCHANGE BANK DANAMON'),
(60, 'RABOBANK INTERNASIONAL INDONESIA'),
(61, 'ANZ PANIN BANK'),
(67, 'DEUTSCHE BANK AG.'),
(68, 'BANK WOORI INDONESIA'),
(69, 'BANK OF CHINA LIMITED'),
(76, 'BANK BUMI ARTA'),
(87, 'BANK EKONOMI'),
(88, 'BANK ANTARDAERAH'),
(89, 'BANK HAGA'),
(93, 'BANK IFI'),
(95, 'BANK CENTURY, TBK.'),
(97, 'BANK MAYAPADA'),
(110, 'BANK JABAR'),
(111, 'BANK DKI'),
(112, 'BPD DIY'),
(113, 'BANK JATENG'),
(114, 'BANK JATIM'),
(115, 'BPD JAMBI'),
(116, 'BPD ACEH');

-- --------------------------------------------------------

--
-- Struktur dari tabel `event`
--

CREATE TABLE `event` (
  `id` varchar(64) NOT NULL,
  `nama_event` varchar(32) NOT NULL,
  `tempat` varchar(32) NOT NULL,
  `tanggal` varchar(64) NOT NULL,
  `harga` decimal(12,0) NOT NULL,
  `deskripsi` text NOT NULL,
  `path_image` varchar(32) NOT NULL,
  `user_id` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `event`
--

INSERT INTO `event` (`id`, `nama_event`, `tempat`, `tanggal`, `harga`, `deskripsi`, `path_image`, `user_id`) VALUES
('1', 'Robby Konser', 'Jakarta Convention Center', '2022-12-16', '150000', 'Merupakan Konser yang diadakan oleh Robby Ulung Pambudi Untuk memerikaan ulang tahunya', '/images/event/event-1.png', '613a02fe-ee3f-4af6-b4b0-fb847cb9aa47'),
('2', 'Schematics Reeva ITS', 'Jatim Expo Surabaya', '2022-12-12', '200000', 'Schematics Merupakan acara tahunan dari departemen Informatika ITS', '/images/event/event-2.png', 'e61fc30d-beb7-4797-9891-a5a614cc2b79'),
('267995d8-6315-4774-8c89-b67650f571fc', 'Compfest 1123', 'Magetan', '2022/12/28', '400000', 'bhbshbdhasbdhasbdhbsahdbas dahb dhsadabdha sdhsabd asdahdb sbh', '/images/event/event-1.png', '92dc8d71-fd5a-4ea4-885b-98dbc314eec5'),
('2eb11797-5a2f-40d7-9e99-6759b33258b4', 'Compfest', 'Magetan ', '2022/12/28', '3000000', 'Ini adalah event untuk ', '/images/event/event-1.png', 'ed180d62-210e-4731-8e3a-9ba62ae0bce0'),
('3', 'ITS Expo', 'Jatim Expo Surabaya', '2022-12-12', '200000', 'ITS Expo Merupakan acara tahunan dari Kampus Institut Teknologi Sepuluh Nopemeber untuk mengenalkan kampus tercinta kepada masyarakat luas', '/images/event/event-3.png', '92dc8d71-fd5a-4ea4-885b-98dbc314eec5'),
('b7058f0e-e2ee-4309-915b-a43f9a325ba6', 'Dicord', 'Surabaya', '2022/01/20', '100000000', 'bnabdahbsdhabsdhasbdhasbdhabdhasbdsa bd asdbash', '/images/event/event-1.png', 'e61fc30d-beb7-4797-9891-a5a614cc2b79');

-- --------------------------------------------------------

--
-- Struktur dari tabel `guest_star`
--

CREATE TABLE `guest_star` (
  `waktu_tampil` time NOT NULL,
  `artis_id` int(64) NOT NULL,
  `event_id` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `guest_star`
--

INSERT INTO `guest_star` (`waktu_tampil`, `artis_id`, `event_id`) VALUES
('12:30:00', 1, '1'),
('12:40:00', 2, '1'),
('00:00:18', 6, '2'),
('00:00:19', 5, '2'),
('00:00:21', 4, '2'),
('10:00:00', 3, '3'),
('10:00:00', 4, '3'),
('03:04:00', 3, 'b7058f0e-e2ee-4309-915b-a43f9a325ba6'),
('12:00:00', 6, '267995d8-6315-4774-8c89-b67650f571fc');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id` varchar(16) NOT NULL,
  `bukti_bayar` varchar(64) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `jumlah_tiket` int(11) NOT NULL,
  `user_id` varchar(16) NOT NULL,
  `bank_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `pesanan_tiket`
--

CREATE TABLE `pesanan_tiket` (
  `id` varchar(64) NOT NULL,
  `nama_depan` varchar(16) NOT NULL,
  `nama_belakang` varchar(16) NOT NULL,
  `email` varchar(32) NOT NULL,
  `no_telp` varchar(16) NOT NULL,
  `nik` varchar(16) NOT NULL,
  `tanggal_lahir` varchar(64) NOT NULL,
  `wa_chat` tinyint(1) NOT NULL,
  `jenis_kelamin` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `pesanan_tiket`
--

INSERT INTO `pesanan_tiket` (`id`, `nama_depan`, `nama_belakang`, `email`, `no_telp`, `nik`, `tanggal_lahir`, `wa_chat`, `jenis_kelamin`) VALUES
('05191acd-4405-482f-83c1-d57273f605d2', 'Heru', 'Kurniawan', 'robby.pambudi100@gmail.com', '085257188594', '3523190904030002', '2022-12-13T17:00:00.000Z', 1, '1'),
('2595da74-fc38-4139-afbb-bc75a05ce3a7', 'bbb', 'Kurniawan', 'robby.pambudi100@gmail.com', '085257188594', '3523190904030002', '2022-12-13T17:00:00.000Z', 1, '1'),
('302223d3-8d27-4f07-b809-8943a999930b', 'Heru', 'Kurniawan', 'robby.pambudi100@gmail.com', '085257188594', '3523190904030002', '2022-12-13T17:00:00.000Z', 1, '1'),
('52fec9e0-daf8-4245-99d6-e891494ff5d8', 'Tulip', 'Kurniawan', 'tulip@gmail.com', '0821321321312', '3523190904030002', '2022-12-09T17:00:00.000Z', 1, '1'),
('6999ea77-f3ad-43c5-bc1e-725f790de489', 'Heru', 'Kurniawan', 'robby.pambudi10@gmail.com', '+6285257188594', '3523190904030002', '2022-12-18T17:00:00.000Z', 1, '1'),
('b1e71897-b9fa-4d59-91c5-edf960c8430f', 'Heru', 'Kurniawan', 'robby.pambudi10@gmail.com', '085257188594', '3523190904030002', '2022-12-13T17:00:00.000Z', 1, '1'),
('cf1b5640-13c8-4a1f-a41f-82ed14d346f7', 'bbb', 'Kurniawan', 'robby.pambudi100@gmail.com', '085257188594', '3523190904030002', '2022-12-13T17:00:00.000Z', 1, '1'),
('d7f8a352-126f-45c4-96be-c55a9925dff2', 'ITS', 'Surabaya', 'its@gmail.com', '08621232131', '3523190904030002', '2022-12-22T17:00:00.000Z', 1, '1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peserta_event`
--

CREATE TABLE `peserta_event` (
  `event_id` varchar(64) NOT NULL,
  `user_id` varchar(16) DEFAULT NULL,
  `pesanan_tiket_id` varchar(16) DEFAULT NULL,
  `pembayaran_id` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `peserta_event`
--

INSERT INTO `peserta_event` (`event_id`, `user_id`, `pesanan_tiket_id`, `pembayaran_id`) VALUES
('2', NULL, NULL, NULL),
('3', NULL, NULL, NULL),
('2', NULL, NULL, NULL),
('2', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Struktur dari tabel `session`
--

CREATE TABLE `session` (
  `user_id` varchar(64) NOT NULL,
  `token` varchar(64) NOT NULL,
  `expirate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` varchar(64) NOT NULL,
  `nama_depan` varchar(32) NOT NULL,
  `nama_belakang` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `no_telp` varchar(16) NOT NULL,
  `password` varchar(264) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama_depan`, `nama_belakang`, `email`, `no_telp`, `password`, `role_id`) VALUES
('367a548e-d788-40b1-bd54-c9e3a99a0d97', 'ITS', 'Surabaya', 'admin@inilho.its.ac.id', '+628525718859', '$2b$10$FJ1MQmWaJVoPkVVsHBjVUuwzaJPxGqOjnYs5DZlxa4yyO8mm3flia', 1),
('5906e2c0-4acc-41ed-bd37-1ad3142586d8', 'Dewi', 'Fatima', 'dewi@gmail.com', '0821321321312', '$2b$10$7Yz3OPmPX9/eS/5N/.z4rOilXtR4r2bTqVQxKf75gtuJqYJdewLmm', 1),
('613a02fe-ee3f-4af6-b4b0-fb847cb9aa47', 'Robby', 'Pambudi', 'robby.pambudi10@gmail.com', '085257188594', '$2b$10$6yoIs0AV2z6hLNOW7gA1M.pRyRCqfGS/ZNLORsBw5sDoGYPaEq.Ay', 1),
('92dc8d71-fd5a-4ea4-885b-98dbc314eec5', 'ITS', 'EXPO', 'its@expo.com', '085257188594', '$2b$10$BY3vv4QByVEzcosbpcPwpORnCjHM/7GY8fK3VsoAPFZgv82xOcdd2', 1),
('b664fd12-8152-4fde-9cac-a743e2a6b7f5', 'Heru', 'EXPO', 'eventmabacup2022@gmail.com', '+62852571885947', '$2b$10$S1mQ/xnbwAuUmiVEOSI2Z.lbPf2MTUAgTbg.KzEtA8ruIKtBvHUcS', 1),
('e61fc30d-beb7-4797-9891-a5a614cc2b79', 'Schematics ', 'ITS', 'schematics@gmail.com', '085257188594', '$2b$10$Oaw.5VEFUi7hn3cpQVDbS./s7V34TZn68Vz.j/jqC2Vcsxjo3MckW', 1),
('ed180d62-210e-4731-8e3a-9ba62ae0bce0', 'Heru ', 'Kurniawan', 'herudwikurniawan@gmail.com', '085257188594', '$2b$10$rhl/EcV2opctaOkt0GKkde9peatCL4O6jplXHN6G.3J6unhZRuYc2', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `artis`
--
ALTER TABLE `artis`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event_user` (`user_id`);

--
-- Indeks untuk tabel `guest_star`
--
ALTER TABLE `guest_star`
  ADD KEY `guest_star_artis` (`artis_id`),
  ADD KEY `envent_id_pk` (`event_id`) USING BTREE;

--
-- Indeks untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pembayaran_bank` (`bank_id`),
  ADD KEY `pembayaran_user` (`user_id`);

--
-- Indeks untuk tabel `pesanan_tiket`
--
ALTER TABLE `pesanan_tiket`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `peserta_event`
--
ALTER TABLE `peserta_event`
  ADD KEY `peserta_event_pembayaran` (`pembayaran_id`),
  ADD KEY `peserta_event_pesanan_tiket` (`pesanan_tiket_id`),
  ADD KEY `peserta_event_user` (`user_id`),
  ADD KEY `event_id` (`event_id`) USING BTREE;

--
-- Indeks untuk tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `session`
--
ALTER TABLE `session`
  ADD KEY `user_id_fk` (`user_id`) USING BTREE;

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `event_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `guest_star`
--
ALTER TABLE `guest_star`
  ADD CONSTRAINT `guest_star_artis` FOREIGN KEY (`artis_id`) REFERENCES `artis` (`id`),
  ADD CONSTRAINT `guest_star_event` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

--
-- Ketidakleluasaan untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_bank` FOREIGN KEY (`bank_id`) REFERENCES `bank` (`id`),
  ADD CONSTRAINT `pembayaran_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `peserta_event`
--
ALTER TABLE `peserta_event`
  ADD CONSTRAINT `peserta_event_event` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`),
  ADD CONSTRAINT `peserta_event_pembayaran` FOREIGN KEY (`pembayaran_id`) REFERENCES `pembayaran` (`id`),
  ADD CONSTRAINT `peserta_event_pesanan_tiket` FOREIGN KEY (`pesanan_tiket_id`) REFERENCES `pesanan_tiket` (`id`),
  ADD CONSTRAINT `peserta_event_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `session_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
