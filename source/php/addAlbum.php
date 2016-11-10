<?php
//$ajax = array('get' => $_GET,'post' => $_POST, );
//header('Content-Type: application/json');
//echo json_encode("it works");
//echo json_encode($ajax);
//phpinfo();
//echo json_encode($_POST);
//echo $_POST['albumName'];
//echo $_FILES["albumCover"][name];
//header('Access-Control-Allow-Origin: *');
//exit;


//$data = array();
//$data[mes] = 'OK';
//header("Content-Type: application/json");
//echo json_encode($data);
//exit;

$uploaddir = realpath('../../database/');
$uploadfile = $uploaddir . '\\' . basename($_FILES['albumCover']['name']);

echo "<p>";
//echo realpath('../../database/') . "\n";
echo $uploadfile . "\n";
echo getcwd() . "\n";
if (move_uploaded_file($_FILES['albumCover']['tmp_name'], $uploadfile)) {
    echo "File is valid, and was successfully uploaded.\n";
} else {
    echo "Upload failed";
}

echo "</p>";
echo '<pre>';
echo 'Here is some more debugging info:';
print_r($_FILES);
print "</pre>";