<?
require_once 'selectCommentsAndLikes.php';
function lastInWorld($db,$imageIdList){
  $last_photos_data = $db->prepare("SELECT p.id_photo, p.id_album, p.photo, p.description, p.source, u.name, u.avatar, a.id_user, a.album_name FROM users u INNER JOIN albums a ON a.id_user = u.id_user INNER JOIN photo p ON p.id_album = a.id_album WHERE p.id_photo NOT IN ($imageIdList) ORDER BY p.id_photo DESC limit 6");
  $last_photos_data->execute();
  $last_photos = $last_photos_data->fetchAll(PDO::FETCH_ASSOC);
  $photos_id = array_map( function($photos){ return $photos['id_photo']; }, $last_photos);

  $CL = commentsAndLikes($db,$photos_id);
  $resultPhotos = array('photos'=>$last_photos,'comments'=>$CL[0],'likes'=>$CL[1]);
  return $resultPhotos;
}