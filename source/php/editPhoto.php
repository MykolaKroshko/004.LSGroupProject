<?php

require_once 'connect.php';

$album_id = $_POST['id'];
$photo_name = $_POST['photoName'];
$description = $_POST['photoDesc'];

//print_r($album_id . "\n");
//print_r($user_id . "\n");

$realPathDB = realpath('../../database/');
$uploaddir = $realPathDB . '\\user' . $user_id . '\\album' . $album_id;

for ($i = 0; $i < count($_FILES['addPhoto']['name']); $i++) {
    $uploadfile = $uploaddir . '\\' . basename($_FILES['addPhoto']['name'][$i]);
    $source = '/../database/user' . $user_id . '/album' . $album_id . '/' . basename($_FILES['addPhoto']['name'][$i]);
//echo $uploaddir . "\n";
//echo $uploadfile . "\n";
//echo count($_FILES['addPhoto']['name']) . "\n";

    $add_photo_data = $db->prepare("
INSERT INTO photo (id_album, photo, description, source) VALUES ('$album_id', '', '', '$source');
");

    echo "<p>";
//echo realpath('../../database/') . "\n";
//echo $uploadfile . "\n";
//echo getcwd() . "\n";
//echo ($_POST['albumCover']) . "\n";


    if (move_uploaded_file($_FILES['addPhoto']['tmp_name'][$i], $uploadfile)) {
        echo "File is valid, and was successfully uploaded.\n";
        $add_photo_data->execute();
    } else {
        echo "Upload failed";
    }
}
//echo "</p>";
//echo '<pre>';
//echo 'Here is some more debugging info:';
//print_r($_FILES);
//print "</pre>";