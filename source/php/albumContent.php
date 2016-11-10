<?
require_once 'connect.php';
require_once 'selectCommentsAndLikes.php';

$album_id = $_POST['album_id'];
$album_data = $db->prepare("SELECT u.avatar, u.name, u.id_user, a.cover, a.album_name, a.description FROM users u INNER JOIN albums a ON a.id_user = u.id_user WHERE a.id_album = $album_id");
$album_data->execute();
$album = $album_data->fetch(PDO::FETCH_ASSOC);

$photos_data = $db->prepare("SELECT source, photo, description, id_photo FROM photo WHERE id_album = $album_id");
$photos_data->execute();
$photos = $photos_data->fetchAll(PDO::FETCH_ASSOC);

$photos_id = array_map( function($photo){ return $photo['id_photo']; }, $photos);
$CL = commentsAndLikes($db,$photos_id);

$result = array('album'=>$album,'photos'=>$photos,'comments'=>$CL[0],'likes'=>$CL[1]);
echo json_encode($result);