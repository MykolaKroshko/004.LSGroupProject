<?
include_once 'connect.php';
include_once 'lastInWorld.php';

$user_id = 1;
#$user_id = $_POST['uid'];
$user_data = $db->prepare("SELECT * FROM users WHERE id_user = $user_id");
$user_data->execute();
$user = $user_data->fetch(PDO::FETCH_ASSOC);


$albums_data = $db->prepare("SELECT id_album, album_name, description, cover FROM albums WHERE id_user = $user_id");
$albums_data->execute();
$albums = $albums_data->fetchAll(PDO::FETCH_ASSOC);


$resultUser = array('user'=>$user,'albums'=>$albums);
echo '<br><br>'.json_encode($resultUser);