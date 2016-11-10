<?
function commentsAndLikes($db,$photos_id){
  $photos_id_list = "'" . implode("', '", $photos_id) . "'";

  $photos_comments_data = $db->prepare("SELECT c.text_comment, c.id_photo, u.avatar, u.name FROM users u INNER JOIN comments c ON c.id_user = u.id_user INNER JOIN photo p ON c.id_photo = p.id_photo WHERE p.id_photo IN ($photos_id_list) ORDER BY c.id_comment");
  $photos_comments_data->execute();
  $photos_comments = $photos_comments_data->fetchAll(PDO::FETCH_ASSOC);

  $photos_likes_data = $db->prepare("SELECT id_user, id_photo FROM likes WHERE id_photo IN ($photos_id_list)");
  $photos_likes_data->execute();
  $photos_likes = $photos_likes_data->fetchAll(PDO::FETCH_ASSOC);

  return [$photos_comments,$photos_likes] ;
}