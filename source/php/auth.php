<?
  require_once 'connect.php';
  $login = strval($_POST['login']);
  $password = strval($_POST['password']);
  $User_data = $db->prepare("SELECT id_user FROM users WHERE email = '$login' AND password = '$password'");
  $User_data->execute();
  $User_id = $User_data->fetch(PDO::FETCH_ASSOC);
  print_r(json_encode($User_id));