<?php

require_once 'connect.php';
//$ajax = array('get' => $_GET,'post' => $_POST, );
//header('Content-Type: application/json');
//echo json_encode("it works");
//echo json_encode($ajax);
//phpinfo();
//echo json_encode($_POST);
//echo $_FILES["albumCover"][name];
//header('Access-Control-Allow-Origin: *');
//exit;


//$data = array();
//$data[mes] = 'OK';
//header("Content-Type: application/json");
//echo json_encode($data);
//exit;

$user_id = $_POST['id'];
$album_name = $_POST['albumName'];
$description = $_POST['albumDesc'];
$album_id_last = $db->prepare("SELECT AUTO_INCREMENT FROM INFORMATION_SCHEMA.TABLES where TABLE_NAME = 'albums' and TABLE_SCHEMA = 'ct61014_photo';");
$album_id_last->execute();
$album_id = $album_id_last->fetch(PDO::FETCH_BOTH)[0];
//$album_id++;
print_r($album_id);

$realPathDB = realpath('../../database/');
$uploaddir = $realPathDB . '\\user' . $user_id . '\\album' . $album_id;
$uploadfile = $uploaddir . '\\' . basename($_FILES['albumCover']['name']);
$cover = '/../database/user' . $user_id . '/album' . $album_id . '/' . basename($_FILES['albumCover']['name']);
echo $uploaddir . "\n";
echo $uploadfile . "\n";
$add_album_data = $db->prepare("
INSERT INTO albums (id_user, album_name, description, cover) VALUES ('$user_id', '$album_name', '$description', '$cover');
INSERT INTO photo (id_user, album_name, description, cover) VALUES ('$user_id', '$album_name', '$description', '$cover')

");

echo "<p>";
//echo realpath('../../database/') . "\n";
//echo $uploadfile . "\n";
//echo getcwd() . "\n";
//echo ($_POST['albumCover']) . "\n";
if ( ! is_dir($uploaddir)) {
    mkdir($uploaddir);
}

if (move_uploaded_file($_FILES['albumCover']['tmp_name'], $uploadfile)) {
    echo "File is valid, and was successfully uploaded.\n";
    $add_album_data->execute();
} else {
    echo "Upload failed";
}

echo "</p>";
echo '<pre>';
echo 'Here is some more debugging info:';
print_r($_FILES);
print "</pre>";