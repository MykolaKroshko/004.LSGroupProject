<?
include_once 'connect.php';
include_once 'lastInWorld.php';
$_POST["imageIdList"] = [14,15,11];
$imageIdList = "'" . implode("', '", $_POST["imageIdList"]) . "'";
$images = lastInWorld($db,$imageIdList);
print_r(json_encode($images));