-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 01, 2019 at 06:24 PM
-- Server version: 5.6.41-84.1-log
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `urquesep_my_book_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(254) NOT NULL,
  `phone` varchar(254) NOT NULL,
  `address` varchar(254) NOT NULL,
  `city` varchar(254) NOT NULL,
  `is_super` int(11) NOT NULL COMMENT '1=super admin',
  `role_id` int(11) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `phone`, `address`, `city`, `is_super`, `role_id`, `is_active`, `is_deleted`) VALUES
(1, 'Admin', 'admin@gmail.com', '21232f297a57a5a743894a0e4a801fc3', '1234567890', 'Kolkata', 'Kolkata', 1, 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `bank_accounts`
--

CREATE TABLE `bank_accounts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(254) NOT NULL,
  `branch_address` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `acc_no` varchar(254) NOT NULL,
  `acc_type` varchar(254) NOT NULL,
  `ifsc_code` varchar(254) NOT NULL,
  `micr_code` varchar(254) NOT NULL,
  `debit_card` varchar(254) NOT NULL,
  `cheque_book` varchar(254) NOT NULL,
  `net_banking_id` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `mobile` varchar(254) NOT NULL,
  `help_line` varchar(254) NOT NULL,
  `rm_name` varchar(254) NOT NULL,
  `rm_mobile` varchar(254) NOT NULL,
  `manager_name` varchar(254) NOT NULL,
  `manager_mobile` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bank_accounts`
--

INSERT INTO `bank_accounts` (`id`, `user_id`, `bank_name`, `branch_address`, `holder_name`, `acc_no`, `acc_type`, `ifsc_code`, `micr_code`, `debit_card`, `cheque_book`, `net_banking_id`, `email`, `mobile`, `help_line`, `rm_name`, `rm_mobile`, `manager_name`, `manager_mobile`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test Bank', 'Test Bank Address', 'Test Holder', '123456789012', 'Savings', 'BANK000ABC', 'BANK123', 'Yes', 'Yes', 'test1234', 'test@testmail.com', '8989898989', '1234567890', 'Test RM', '6666666666', 'Test Manager', '5555555555', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'SBI ', 'Test Branch', 'Test User', '12210000000', 'Savings', 'SBIN0001234', '12345678', 'YES', 'YES', 'test9999', 'test@testmail.com', '8888888888', '1234567890', 'Test', '6666666666', 'Tet', '555555555', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 2, 'XYZ Bank', 'Test Bank Address', 'Test Holder', '123456789012', 'Savings', 'BANK000ABC', 'BANK123', 'Yes', 'Yes', 'test1234', 'test@testmail.com', '8989898989', '1234567890', 'Test RM', '6666666666', 'Test Manager', '5555555555', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 'PQR Bank', 'Test Bank Address', 'Test Holder', '123456789012', 'Savings', 'BANK000ABC', 'BANK123', 'Yes', 'Yes', 'test1234', 'test@testmail.com', '8989898989', '1234567890', 'Test RM', '6666666666', 'Test Manager', '5555555555', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL,
  `title` varchar(254) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `name`, `title`, `created_at`, `updated_at`, `is_active`, `is_deleted`) VALUES
(1, 'banner1.jpg', '', '2019-02-10 20:30:00', '0000-00-00 00:00:00', 1, 0),
(2, 'banner2.jpg', '', '2019-02-10 18:30:00', '0000-00-00 00:00:00', 1, 0),
(3, 'banner3.jpg', '', '2019-02-10 18:30:00', '0000-00-00 00:00:00', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `credit_cards`
--

CREATE TABLE `credit_cards` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(254) NOT NULL,
  `card_no` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `credit_limit` varchar(254) NOT NULL,
  `validity_date` varchar(254) NOT NULL,
  `login_id` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `credit_cards`
--

INSERT INTO `credit_cards` (`id`, `user_id`, `bank_name`, `card_no`, `holder_name`, `credit_limit`, `validity_date`, `login_id`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test Bank', '4123456789012346', 'Test', '50000', '04/21', 'test1234', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'SBI', '411111111111111', 'Test', '25000', '2019-12', 'test1234', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `demat_accounts`
--

CREATE TABLE `demat_accounts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `company_name` varchar(254) NOT NULL,
  `acc_no` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `helpdesk_no` varchar(254) NOT NULL,
  `portal_login_id` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL,
  `is_deleted` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `demat_accounts`
--

INSERT INTO `demat_accounts` (`id`, `user_id`, `company_name`, `acc_no`, `holder_name`, `helpdesk_no`, `portal_login_id`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test Company', '1234567890', 'Test', '12345678', 'test1234', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'Test Comp', '884411223344', 'Test Cust', '1234567890', 'test1234', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(254) NOT NULL,
  `type` varchar(254) NOT NULL,
  `image` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `user_id`, `title`, `type`, `image`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 0, '0', '0', '0', 1, 0, '2019-03-18 15:19:23', '0000-00-00 00:00:00'),
(2, 13, '0', '0', '1552902575', 1, 0, '2019-03-18 15:19:35', '0000-00-00 00:00:00'),
(3, 13, '0', '0', '1552903736', 1, 0, '2019-03-18 15:38:56', '0000-00-00 00:00:00'),
(4, 13, '0', '0', '1552909288', 1, 0, '2019-03-18 17:11:28', '0000-00-00 00:00:00'),
(5, 13, '0', '0', '1552909293', 1, 0, '2019-03-18 17:11:33', '0000-00-00 00:00:00'),
(6, 13, '0', '0', '1552909296', 1, 0, '2019-03-18 17:11:36', '0000-00-00 00:00:00'),
(8, 2, 'test file', 'Insurance Policies', '1553836061_2_doc.jpg', 1, 0, '2019-03-29 10:37:41', '0000-00-00 00:00:00'),
(9, 2, 'Hhhnj', 'Loan', '1553853131_2_doc.jpg', 1, 0, '2019-03-29 15:22:11', '0000-00-00 00:00:00'),
(10, 0, '', '', '', 1, 0, '2019-03-29 15:24:22', '0000-00-00 00:00:00'),
(11, 2, 'Tree', 'Insurance Policies', '1553853299_2_doc.jpg', 1, 0, '2019-03-29 15:24:59', '0000-00-00 00:00:00'),
(12, 1, 'Test', 'Insurance Policies', '1555908354_1_doc.jpg', 1, 0, '2019-04-22 10:15:54', '0000-00-00 00:00:00'),
(13, 1, 'Test 2', 'Bank Details', '1555909306_1_doc.jpg', 1, 0, '2019-04-22 10:31:46', '0000-00-00 00:00:00'),
(14, 2, 'Test file', 'Loan', '1557120122_2_doc.jpg', 1, 0, '2019-05-06 10:52:02', '0000-00-00 00:00:00'),
(15, 0, '', '', '', 1, 0, '2019-05-30 17:27:50', '0000-00-00 00:00:00'),
(16, 17, 'Test', 'Bank Details', '1559217487_17_doc.jpg', 1, 0, '2019-05-30 17:28:07', '0000-00-00 00:00:00'),
(17, 17, 'Fhjj', 'Bank Details', '1559217539_17_doc.jpg', 1, 0, '2019-05-30 17:28:59', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `enquiries`
--

CREATE TABLE `enquiries` (
  `id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone` varchar(254) NOT NULL,
  `message` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiries`
--

INSERT INTO `enquiries` (`id`, `name`, `email`, `phone`, `message`, `is_active`, `is_deleted`) VALUES
(1, 'Demo User', 'demo@testmail.com', '1122334455', 'Test message from demo', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `family_members`
--

CREATE TABLE `family_members` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL,
  `mobile` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `blood_group` varchar(254) NOT NULL,
  `dob` date NOT NULL,
  `relation` varchar(254) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `family_members`
--

INSERT INTO `family_members` (`id`, `user_id`, `name`, `mobile`, `email`, `blood_group`, `dob`, `relation`, `created_at`, `updated_at`, `is_active`, `is_deleted`) VALUES
(1, 2, 'Family1', '7777777777', 'family@testmail.com', 'O ', '1995-02-04', 'Wife', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(2, 2, 'Family2', '5656565656', 'family2@gmail.com', 'A ', '1991-03-08', 'Brother', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(3, 13, 'Test1', '1111111111', 'Test1@test.com', 'O ', '2019-03-18', 'Brother', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(4, 17, 'Sfhjdd', '666599', 'Gjjfvh', 'B-', '2019-05-30', 'Brother', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `fixed_deposits`
--

CREATE TABLE `fixed_deposits` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(254) NOT NULL,
  `branch_address` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `fd_no` varchar(254) NOT NULL,
  `amount` varchar(254) NOT NULL,
  `invest_date` varchar(254) NOT NULL,
  `duration` varchar(254) NOT NULL,
  `rate` varchar(254) NOT NULL,
  `maturity_date` varchar(254) NOT NULL,
  `maturity_amount` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fixed_deposits`
--

INSERT INTO `fixed_deposits` (`id`, `user_id`, `bank_name`, `branch_address`, `holder_name`, `fd_no`, `amount`, `invest_date`, `duration`, `rate`, `maturity_date`, `maturity_amount`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test Bank', 'Test Bank Address', 'Test', '1234567800', '500000', '01/01/2019', '5', '5', '01/01/2024', '800000', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `health_insurance_policies`
--

CREATE TABLE `health_insurance_policies` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `company_name` varchar(254) NOT NULL,
  `plan_name` varchar(254) NOT NULL,
  `policy_no` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `family_members` varchar(254) NOT NULL,
  `sum` varchar(254) NOT NULL,
  `start_date` varchar(254) NOT NULL,
  `premium_amount` varchar(254) NOT NULL,
  `renewel_date` varchar(254) NOT NULL,
  `adviser_name` varchar(254) NOT NULL,
  `adviser_mobile` varchar(254) NOT NULL,
  `company_help_desk` varchar(254) NOT NULL,
  `customer_portal_login_id` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `health_insurance_policies`
--

INSERT INTO `health_insurance_policies` (`id`, `user_id`, `company_name`, `plan_name`, `policy_no`, `holder_name`, `family_members`, `sum`, `start_date`, `premium_amount`, `renewel_date`, `adviser_name`, `adviser_mobile`, `company_help_desk`, `customer_portal_login_id`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test', 'test123', '0123456789', 'test', 'test1', '200000', '2019-03-01', '5000', '2019-03-07', 'test', '6565656565', 'test', '12345', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'Test Company', 'Test Plan', '9999999874565', 'Test', 'Test1', '150000', '2010-03-07', '1500', '2019-03-09', 'Test', '7777777777', 'test', '12345', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `home_property_insurance_policies`
--

CREATE TABLE `home_property_insurance_policies` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `property_details` varchar(254) NOT NULL,
  `company_name` varchar(254) NOT NULL,
  `plan_name` varchar(254) NOT NULL,
  `policy_no` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `coverage_amount` varchar(254) NOT NULL,
  `coverage_type` varchar(254) NOT NULL,
  `start_date` varchar(254) NOT NULL,
  `premium_amount` varchar(254) NOT NULL,
  `renewel_date` varchar(254) NOT NULL,
  `renewel_amount` varchar(254) NOT NULL,
  `adviser_name` varchar(254) NOT NULL,
  `adviser_mobile` varchar(254) NOT NULL,
  `company_help_desk` varchar(254) NOT NULL,
  `customer_portal_login_id` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `life_insurance_policies`
--

CREATE TABLE `life_insurance_policies` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `company_name` varchar(254) NOT NULL,
  `plan_name` varchar(254) NOT NULL,
  `policy_no` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `nominee_name` varchar(254) NOT NULL,
  `sum` varchar(254) NOT NULL,
  `start_date` varchar(254) NOT NULL,
  `maturity_date` varchar(254) NOT NULL,
  `policy_term` varchar(254) NOT NULL,
  `premium_amount` varchar(254) NOT NULL,
  `renewel_date` varchar(254) NOT NULL,
  `adviser_name` varchar(254) NOT NULL,
  `adviser_mobile` varchar(254) NOT NULL,
  `e_insurance_repository_name` varchar(254) NOT NULL,
  `e_insurance_login_id` varchar(254) NOT NULL,
  `company_help_desk` varchar(254) NOT NULL,
  `customer_portal_login_id` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `life_insurance_policies`
--

INSERT INTO `life_insurance_policies` (`id`, `user_id`, `company_name`, `plan_name`, `policy_no`, `holder_name`, `nominee_name`, `sum`, `start_date`, `maturity_date`, `policy_term`, `premium_amount`, `renewel_date`, `adviser_name`, `adviser_mobile`, `e_insurance_repository_name`, `e_insurance_login_id`, `company_help_desk`, `customer_portal_login_id`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test', 'test', '1234567890', 'Test', 'test', '250000', '2010-03-01', '2020-03-01', '10', '5000', '2019-03-09', 'test', 'test', '', '', 'test', '12345', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 13, 'Supertron', 'Test', '25800852', 'Abhishek', 'Test', '100000', '2024-03-18', '2011-03-18', '10', '800', '1996-03-18', 'Test', '1234567890', '', '', 'Test', 'Asffgjkl', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 15, 'Bajaj Life Insurance', 'Life Benefit plan', '1234567890', 'Sharmistha', 'Sharmistha', '300000', '2019-04-01', '2029-04-01', '10', '25000', '2027-04-01', 'Advisor 1', '4567893210', '', '', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 13, 'Test', 'Test plan', '123456', 'Abhishek', 'Avro', '100000', '2011-05-07', '2032-05-07', 'Ten10', '1000', '2020-05-07', 'Testing', '7894561230', '', '', 'Hdudbjdnd', 'Bdjdnxindnd', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 14, 'Life insurance', 'Jeevsn', '3216654478998', 'Ashish', 'Sakshi', '20000', '2019-05-26', '2024-05-26', '5', '1', '2019-12-26', 'Rrrr', '9999999999', '', '', '9999999999', 'Gdssjdgb', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 17, 'Test company', 'Test plan', '56886', 'Rest policy holder', 'Test nominee', '56886369886', '2014-05-30', '2024-05-30', '3', '1234566', '2024-05-30', 'Test advidor', '1265668899', '', '', 'Wtygcvbnnkkjj', 'Fhjgfvh', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 2, 'Luc', 'Hhhh', '666666', 'Ggggg', 'Ggghh', '666666', '2017-05-30', '2019-05-30', 'Yyyyy', '6666', '2019-05-31', 'Yyyyyy', '666666', '', '', 'Hhhh', 'Hhhhh', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `loans`
--

CREATE TABLE `loans` (
  `id` int(11) NOT NULL,
  `type` varchar(254) NOT NULL COMMENT 'home, auto, personal, gold',
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(254) NOT NULL,
  `loan_acc_no` varchar(254) NOT NULL,
  `loan_amount` varchar(254) NOT NULL,
  `start_date` varchar(254) NOT NULL,
  `end_date` varchar(254) NOT NULL,
  `emi_amount` varchar(254) NOT NULL,
  `contact_person_name` varchar(254) NOT NULL,
  `contact_person_mobile` varchar(254) NOT NULL,
  `bank_details_ecs` varchar(254) NOT NULL,
  `date_of_ecs` varchar(254) NOT NULL,
  `web_login_id` varchar(254) NOT NULL,
  `vehicle_no` varchar(254) NOT NULL,
  `loan_taken_for` varchar(254) NOT NULL,
  `property_details` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loans`
--

INSERT INTO `loans` (`id`, `type`, `user_id`, `bank_name`, `loan_acc_no`, `loan_amount`, `start_date`, `end_date`, `emi_amount`, `contact_person_name`, `contact_person_mobile`, `bank_details_ecs`, `date_of_ecs`, `web_login_id`, `vehicle_no`, `loan_taken_for`, `property_details`, `is_active`, `is_deleted`, `created_at`, `deleted_at`) VALUES
(1, 'home', 2, 'Test National Bank', '1234567890', '500000', '2014-02-01', '2018-02-01', '6000', 'Test', '8989898989', 'Test', '2018-02-01', 'test123', '', '', 'Test Address, Test City', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'auto', 2, 'Test Bank', '1234567890', '300000', '01/01/2019', '01/01/2029', '3000', 'Test', '8989898989', 'Test', '01/01/2020', 'test123', 'WB1234', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'personal', 2, 'Test Bank', '1234567890', '300000', '01/01/2019', '01/01/2029', '3000', 'Test', '8989898989', 'Test', '01/01/2020', 'test123', '', 'Test Person\r\n', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'gold', 2, 'Test Bank', '1234567890', '500000', '01/01/2019', '01/01/2029', '5000', 'Test', '8989898989', 'Test', '01/01/2020', 'test123', '', 'ABC', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'home', 13, 'Test', 'Fjvkghfkcuhch', '12345', '2050-03-18', '2012-03-18', '12345', 'Test1', '8528528520', 'Test', '2019-03-18', 'Uehdhx', '', '', 'Hfbjj', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'home', 2, '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'home', 13, 'Icici', 'Loan test account', '100000', '2023-05-07', '2013-05-07', '1150', 'Ghhgbn', '8563214969', 'Hgjhcbnnb', '2017-05-07', 'Jvbbbbnk', '', '', 'Vhvkbivh', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'home', 13, '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'home', 13, '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'personal', 13, '', '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'home', 15, 'Icici', 'Hxjdjxk', '1000000', '2025-05-07', '2013-05-07', '10000', 'Gdjdjxj', '98989898', 'Hxbxbx', '2019-05-07', 'Gxbxhxh', '', '', 'Hdnxnnx', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'home', 15, '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'home', 16, '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'personal', 16, '', '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'personal', 17, '', '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'home', 17, '', '', '', '', '', '', '', '', '', '', '', 'undefined', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'home', 2, 'Test Bank', '123456', '15000', '2016-06-06', '2030-06-06', '2000', 'test', '8888888888', 'test', '2019-06-06', 'test', '', '', 'Test ', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'gold', 2, 'Yes Bank', '50000', '1500', '2016-06-06', '2025-06-06', '1000', 'test', 'test', 'test', '2019-06-06', 'test123', '', 'test', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'personal', 2, 'Sbi', '123456887578', '50000', '2016-06-12', '2021-06-12', '10000', 'Trst', '9999999999', 'Test', '2019-06-12', 'Test', '', 'Tesf', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'home', 17, 'Test bank', '23656656688889', '566889808669', '2019-06-14', '2017-12-22', '86528666', 'Chjrcjo', '56 56  655', 'Dthxghtd', '2019-06-14', 'Fhhfxa', 'Dhjfsuk', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'home', 17, 'Test bank', '23656656688889', '566889808669', '2019-06-14', '2017-12-22', '86528666', 'Chjrcjo', '56 56  655', 'Dthxghtd', '2019-06-14', 'Fhhfxa', 'Dhjfsuk', '', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `lockers`
--

CREATE TABLE `lockers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(254) NOT NULL,
  `branch_address` varchar(254) NOT NULL,
  `locker_no` varchar(254) NOT NULL,
  `holder_name` varchar(254) NOT NULL,
  `items` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL,
  `is_deleted` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lockers`
--

INSERT INTO `lockers` (`id`, `user_id`, `bank_name`, `branch_address`, `locker_no`, `holder_name`, `items`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test Bank', 'Test Bank Address', '1234567890', 'Test', 'Test Items', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'SBI', 'Test Branch', '12345678', 'Test', 'test', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `motor_insurance_policies`
--

CREATE TABLE `motor_insurance_policies` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `vehicle_reg_no` varchar(254) NOT NULL,
  `make` varchar(254) NOT NULL,
  `model` varchar(254) NOT NULL,
  `year` varchar(254) NOT NULL,
  `company_name` varchar(254) NOT NULL,
  `policy_no` varchar(254) NOT NULL,
  `declared_amount` varchar(254) NOT NULL,
  `coverage_type` varchar(254) NOT NULL,
  `start_date` varchar(254) NOT NULL,
  `premium_amount` varchar(254) NOT NULL,
  `renewel_date` varchar(254) NOT NULL,
  `renewel_amount` varchar(254) NOT NULL,
  `adviser_mobile` varchar(254) NOT NULL,
  `adviser_name` varchar(254) NOT NULL,
  `company_help_desk` varchar(254) NOT NULL,
  `customer_portal_login_id` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `motor_insurance_policies`
--

INSERT INTO `motor_insurance_policies` (`id`, `user_id`, `vehicle_reg_no`, `make`, `model`, `year`, `company_name`, `policy_no`, `declared_amount`, `coverage_type`, `start_date`, `premium_amount`, `renewel_date`, `renewel_amount`, `adviser_mobile`, `adviser_name`, `company_help_desk`, `customer_portal_login_id`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 17, 'Fufdh', 'Fhjvcc', 'Fuhcvh', 'Chfdgh', 'Fufdh', '5668096', '8669', 'Fhgcv', '2019-05-30', 'Fhjgdyjfdghdgjg', '2019-05-30', '56686', '56988', 'Fhjvv', 'Chnvc', '', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `mutual_funds`
--

CREATE TABLE `mutual_funds` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `scheme_name` varchar(254) NOT NULL,
  `folio_no` varchar(254) NOT NULL,
  `fund_opted` varchar(254) NOT NULL,
  `fund_type` varchar(254) NOT NULL,
  `payout_option` varchar(254) NOT NULL,
  `sip_sum` varchar(254) NOT NULL,
  `sip_tenure` varchar(254) NOT NULL,
  `portal_login_id` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mutual_funds`
--

INSERT INTO `mutual_funds` (`id`, `user_id`, `scheme_name`, `folio_no`, `fund_opted`, `fund_type`, `payout_option`, `sip_sum`, `sip_tenure`, `portal_login_id`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Xyz Scheme', 'test', '15000', 'test', 'test', '100000', '12', 'test123\r\n', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'Abc Scheme', '12345', '1000', 'test', 'test', '5000', '5 years', 'test', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 1, 'Test mf fund', '12345', '10000', 'Test', 'Test', '5000', '10years', '123456', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `notification` text NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `notification`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'You have health insurance policy to be renewed on tomorrow. policy no : 9999999874565, plan : Test Plan, Amount: 1500', 1, 0, '2019-03-08 03:55:10', '0000-00-00 00:00:00'),
(2, 2, 'You have life insurance policy to be renewed on tomorrow. policy no : 1234567890, plan : test, Amount: 5000', 1, 0, '2019-03-08 03:56:00', '0000-00-00 00:00:00'),
(3, 2, 'Today is Family2\'s birth day. Do not forget to wish him.', 1, 0, '2019-03-08 04:18:28', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `ppf_investments`
--

CREATE TABLE `ppf_investments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bank_name` varchar(254) NOT NULL,
  `branch_address` varchar(254) NOT NULL,
  `acc_no` varchar(254) NOT NULL,
  `payment_date` varchar(254) NOT NULL,
  `deposit_made` varchar(254) NOT NULL,
  `payment_made` varchar(254) NOT NULL,
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ppf_investments`
--

INSERT INTO `ppf_investments` (`id`, `user_id`, `bank_name`, `branch_address`, `acc_no`, `payment_date`, `deposit_made`, `payment_made`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 2, 'Test Bank', 'Test Address', '1234567890', '01/01/2019', 'Cheque', '15000', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 'Test Bank', 'Test Branch', '5566445566', '2019-01-01', '50000', '5000000', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 2, 'Test Xyz Bank', 'Test Address', '1234567890', '2019-02-20', 'Cheque', '15000', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 17, 'Rygfcb', 'Fhb c', 'Chjc cb', '2019-05-30', 'Cghjjhf', 'Fuhfg', 1, 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `about_us` text NOT NULL,
  `mission` text NOT NULL,
  `vission` text NOT NULL,
  `terms` text NOT NULL,
  `privacy` text NOT NULL,
  `address` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone1` varchar(254) NOT NULL,
  `phone2` varchar(254) NOT NULL,
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `about_us`, `mission`, `vission`, `terms`, `privacy`, `address`, `email`, `phone1`, `phone2`, `is_deleted`) VALUES
(1, '<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n', '<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n', '<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n', '<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n', '<div>\r\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n</div>\r\n', 'Test Address', 'test@gmail.com', '1234567890', '9988774444', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `mobile` varchar(254) NOT NULL,
  `new_mobile` varchar(254) NOT NULL,
  `phone` varchar(254) NOT NULL,
  `residence_address` varchar(254) NOT NULL,
  `office_address` varchar(254) NOT NULL,
  `fax` varchar(254) NOT NULL,
  `dob` varchar(254) NOT NULL,
  `blood_group` varchar(254) NOT NULL,
  `pan_no` varchar(254) NOT NULL,
  `driving_license_no` varchar(254) NOT NULL,
  `aadhar_no` varchar(254) NOT NULL,
  `passport_no` varchar(254) NOT NULL,
  `otp` int(11) NOT NULL,
  `is_verified` int(11) NOT NULL COMMENT '1=verified',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_active` int(11) NOT NULL COMMENT '1=active',
  `is_deleted` int(11) NOT NULL COMMENT '1=deleted'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `new_mobile`, `phone`, `residence_address`, `office_address`, `fax`, `dob`, `blood_group`, `pan_no`, `driving_license_no`, `aadhar_no`, `passport_no`, `otp`, `is_verified`, `created_at`, `updated_at`, `is_active`, `is_deleted`) VALUES
(2, 'Test', 'test@testmail.com', '8888888888', '1234567890', '22223333', 'Test Addressirrt the way home 5togk', 'Test Office Address', 'Tesr', '1985-04-15', 'undefined', '2_pan.jpg', '2_driving.jpg', '2_aadhar.jpg', '2_passport.jpg', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(3, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '25146664', 'Test Address', 'Test', 'test', '1990-01-21', 'o ', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(4, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(5, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(6, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(7, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(8, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(9, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(10, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(11, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(12, 'Soham', 'gsoham.51@gmail.com', '8335852184', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(13, 'Abhishek', 'dataentry3.supertron@gmil.com', '7980390306', '7980390306', '8336044457', 'Test lane', 'Tedt lane 223', '', '1988-08-12', 'undefined', '13_pan.jpg', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(14, 'Ashish', 'aashishgarwal@gmail.com', '9831325316', '', '9831325316', 'Kolkata', 'Kolkata', '12345678', '1996-03-29', 'undefined', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(15, 'Sharmistha', 'shar24mistha@gmail.com', '9831829209', '9831829209', '9830862000', 'Test', 'Test kfjn', '', '1986-05-07', 'undefined', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(16, 'Abhishek Dhar', 'dataentry3.supertron@gmail.com', '8336044457', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(17, 'Sharmistha', 'test@test.com', '8777816120', '8777816120', '2355665569866696669', 'Fhhjkkj', 'Dgujgfh', 'Fghjjg', '2019-06-14', 'B-', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(18, 'Sanjay Chaudhary', 'we@chaudhary.family', '9831063230', '', '2122222222222', 'Ggggggg', 'Ggggg', '', '', 'A ', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(19, 'Sharmistha', 'sharmustha@duoertroninfotech.ij', '9830862000', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(20, 'Sanjay', 'sanjay1408@gmail.com', '9888888888', '', '99999999999999', 'Hhhhb', 'Gggb', '', '2019-05-30', 'B-', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(21, 'Test account', 'testnew@gmail.com', '8777816120', '', '', '', '', '', '', '', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0),
(22, 'Ashish', 'aaaaadffgghhcv@gmas.com', '5656565656', '', '5656565656', 'Ggggj', 'Ghjgg', '', '1987-06-25', 'A ', '', '', '', '', 123456, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bank_accounts`
--
ALTER TABLE `bank_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `credit_cards`
--
ALTER TABLE `credit_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `demat_accounts`
--
ALTER TABLE `demat_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiries`
--
ALTER TABLE `enquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `family_members`
--
ALTER TABLE `family_members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fixed_deposits`
--
ALTER TABLE `fixed_deposits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `health_insurance_policies`
--
ALTER TABLE `health_insurance_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_property_insurance_policies`
--
ALTER TABLE `home_property_insurance_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `life_insurance_policies`
--
ALTER TABLE `life_insurance_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loans`
--
ALTER TABLE `loans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lockers`
--
ALTER TABLE `lockers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `motor_insurance_policies`
--
ALTER TABLE `motor_insurance_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mutual_funds`
--
ALTER TABLE `mutual_funds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ppf_investments`
--
ALTER TABLE `ppf_investments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bank_accounts`
--
ALTER TABLE `bank_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `credit_cards`
--
ALTER TABLE `credit_cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `demat_accounts`
--
ALTER TABLE `demat_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `enquiries`
--
ALTER TABLE `enquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `family_members`
--
ALTER TABLE `family_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `fixed_deposits`
--
ALTER TABLE `fixed_deposits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `health_insurance_policies`
--
ALTER TABLE `health_insurance_policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `home_property_insurance_policies`
--
ALTER TABLE `home_property_insurance_policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `life_insurance_policies`
--
ALTER TABLE `life_insurance_policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `loans`
--
ALTER TABLE `loans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `lockers`
--
ALTER TABLE `lockers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `motor_insurance_policies`
--
ALTER TABLE `motor_insurance_policies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `mutual_funds`
--
ALTER TABLE `mutual_funds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ppf_investments`
--
ALTER TABLE `ppf_investments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
