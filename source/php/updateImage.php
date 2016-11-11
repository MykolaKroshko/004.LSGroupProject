<?
  require_once 'connect.php';
  $imageID = $_POST['id_photo'];
  $imageName = $_POST['photo'];
  $imageDesc = $_POST['description'];
  $updateImage = "UPDATE `photo` SET `photo`='$imageName',`description`='$imageDesc' WHERE id_photo = $imageID";
  $count = $db->exec($updateImage);
  print_r(json_encode(array('numOfItems'=>$count)));