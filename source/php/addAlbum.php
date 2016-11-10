<?php
$ajax = array('get' => $_GET,'post' => $_POST, );
//header('Content-Type: application/json');
//echo json_encode("it works");
echo json_encode($ajax);

//header('Access-Control-Allow-Origin: *');
exit;


//$data = array();
//$data[mes] = 'OK';
//header("Content-Type: application/json");
//echo json_encode($data);
//exit;