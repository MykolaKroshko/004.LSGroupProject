<?
$ajax = array('get' => $_GET,'post' => $_POST, );
echo json_encode($ajax);
header('Access-Control-Allow-Origin: *');
