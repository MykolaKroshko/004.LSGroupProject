<?
include_once 'connect.php';
include_once 'lastInWorld.php';
$images = lastInWorld($db,$_POST["imageIdList"]);
print_r(json_encode($images));