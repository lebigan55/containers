<?php

$recepient = "youmail@ya.ru";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$email = trim($_GET["email"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Ваше имя: $name \nВаш телефон: $phone \nВаш E-mail: $email";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");