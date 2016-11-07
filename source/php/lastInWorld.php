<?
include_once 'connect.php';

$last_photos_data = $db->prepare("SELECT p.id_photo, p.id_album, p.photo, p.description, p.source, u.name, u.avatar FROM users u INNER JOIN albums a ON a.id_user = u.id_user INNER JOIN photo p ON p.id_album = a.id_album ORDER BY p.id_photo DESC limit 6");
$last_photos_data->execute();
$last_photos = $last_photos_data->fetchAll(PDO::FETCH_ASSOC);


$photos_id = array_map( function($photos){ return $photos['id_photo']; }, $last_photos);
$photos_id_list = "'" . implode("', '", $photos_id) . "'";
$last_photos_comments_data = $db->prepare("SELECT c.text_comment, c.id_comment, u.avatar, u.name FROM users u INNER JOIN comments c ON c.id_user = u.id_user INNER JOIN photo p ON c.id_photo = p.id_photo WHERE p.id_photo IN ($photos_id_list) ORDER BY c.id_comment");
$last_photos_comments_data->execute();
$last_photos_comments = $last_photos_comments_data->fetchAll(PDO::FETCH_ASSOC);


$last_photos_likes_data = $db->prepare("SELECT id_user, id_photo FROM likes WHERE id_photo IN ($photos_id_list)");
$last_photos_likes_data->execute();
$last_photos_likes = $last_photos_likes_data->fetchAll(PDO::FETCH_ASSOC);

$resultPhotos = array('photos'=>$last_photos,'comments'=>$last_photos_comments,'likes'=>$last_photos_likes);
echo json_encode($resultPhotos);