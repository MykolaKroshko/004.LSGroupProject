<?
require_once 'connect.php';
require_once 'selectUserInfo.php';

$UI = userInfo($db, $_POST['user_id']);

$resultClient = array('user'=>$UI[0],'albums'=>$UI[1]);
echo json_encode($resultClient);