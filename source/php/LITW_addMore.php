<?
require_once 'connect.php';
require_once 'lastInWorld.php';
$images = lastInWorld($db,$_POST["imageIdList"]);
print_r(json_encode($images));