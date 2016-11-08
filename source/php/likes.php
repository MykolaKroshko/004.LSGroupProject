<?php
$img=$_POST['img'];
$likes=$_POST['likes'];
$user=$_POST['user'];

echo('Привет с сервера');

$ajax = array('post' => $_POST, );
echo json_encode($ajax);
