<?php
require 'connect.php';

$commentText=$_POST["comment"];
$user=$_POST["name"];
$photo=$_POST["url"];

$comment=$db->prepare('INSERT INTO comments(id_user, id_photo, text_comment) VALUES(:id_user, :id_photo, :text)');

$commarray=array('id_user'=>$user, 'id_photo'=>$photo, 'text'=>$commentText);

$comment->execute($commarray);



$ajax = array('post' => $_POST, );
echo json_encode($ajax);