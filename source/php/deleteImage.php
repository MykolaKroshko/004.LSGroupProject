<?
  require_once 'connect.php';
  $imageID = $_POST['id_photo'];
  $deleteImage = "DELETE FROM `photo` WHERE id_photo = $imageID";
  $count = $db->exec($deleteImage);
  print_r(json_encode(array('numOfItems'=>$count)));