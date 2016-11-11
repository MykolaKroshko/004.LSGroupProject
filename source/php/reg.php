<?
  require_once 'connect.php';
  $name = strval($_POST['name']);
  $mail = strval($_POST['mail']);
  $password = strval($_POST['pas']);
  $addUser = $db->prepare("INSERT INTO users (`name`, `email`, `password`) VALUES ('$name', '$mail', '$password')");
  $addUser->execute();
  $insertid = $db->lastInsertId();
  print_r(json_encode(array('newUserId'=>$insertid)));