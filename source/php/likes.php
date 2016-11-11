<?php
require 'connect.php';

$img=$_POST['img'];
$user=$_POST['user'];


$likes=$db->prepare('INSERT INTO likes(id_user, id_photo) VALUES(:id_user, :id_photo)');

$likearray=array('id_user'=>$user, 'id_photo'=>$img);

$likes->execute($likearray);


$ajax = array('post' => $_POST, );
echo json_encode($ajax);
