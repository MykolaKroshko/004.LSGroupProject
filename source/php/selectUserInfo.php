<?
function userInfo($db, $client_id){
  $client_data = $db->prepare("SELECT avatar, background, user_description, email, facebook, google, name, twitter, vk FROM users WHERE id_user = $client_id");
  $client_data->execute();
  $client = $client_data->fetch(PDO::FETCH_ASSOC);

  $albums_data = $db->prepare("SELECT id_album, album_name, description, cover FROM albums WHERE id_user = $client_id");
  $albums_data->execute();
  $albums = $albums_data->fetchAll(PDO::FETCH_ASSOC);

  return [$client,$albums];
}