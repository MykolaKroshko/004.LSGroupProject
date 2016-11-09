<?php
$commentText=$_POST["comment"];
$user=$_POST["name"];
$url=$_POST["url"];

echo('Привет с сервера');

$ajax = array('post' => $_POST, );
echo json_encode($ajax);