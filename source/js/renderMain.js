function renderMainPage(){
  console.log(dataStoreObject);
  updateUserInfo();
  addLastPhotos();
  addAlbums();
}

function updateUserInfo(){
  $("#userName").text(dataStoreObject.user.name);
  $("#userAbout").text(dataStoreObject.user.user_description);
  $("#userMAIL").attr("href","mailto:"+dataStoreObject.user.email);
  if (dataStoreObject.user.avatar){
    $("#userPhoto").attr("src",dataStoreObject.user.avatar);
  }
  if (dataStoreObject.user.vk){
    $("#userVK").attr("href",dataStoreObject.user.vk);
  }
  if (dataStoreObject.user.facebook){
    $("#userFB").attr("href",dataStoreObject.user.facebook);
  }
  if (dataStoreObject.user.twitter){
    $("#userTWIT").attr("href",dataStoreObject.user.twitter);
  }
  if (dataStoreObject.user.google){
    $("#userGO").attr("href",dataStoreObject.user.google);
  }
  if (dataStoreObject.user.background){
    $(".headerContainer").css("background-image","url("+dataStoreObject.user.background+")").css("background-size", "cover");
    $(".footer").css("background-image","url("+dataStoreObject.user.background+")").css("background-size", "cover");
  }
}

function addLastPhotos(){
  var photosInfo = dataStoreObject.images,
    photos = photosInfo.photos,
    $container = $("#pictupeContainer");
  $container.html("");
  if (photos.length){     //check if images exist
    for (var i = 0; i < photos.length; i++) {
      var avatar = photos[i].avatar ? photos[i].avatar : 'assets/img/default_avatar.jpg',  //check if user have avatar. else default
        likeCount = 0,
        commentCount = 0;

      for (var j = 0; j < photosInfo.comments.length; j++){    //counting comments for each picture
        if(photosInfo.comments[j].id_photo == photos[i].id_photo){
          ++commentCount;
        }
      }

      for (var k = 0; k < photosInfo.likes.length; k++){    //counting likes for each picture
        if(photosInfo.likes[k].id_photo == photos[i].id_photo){
          ++likeCount;
        }
      }

            //creating image & filling it with data
      var addPhoto = "<div class='new-photo'>\
                      <div class='new-photo__img'><img src='"+photos[i].source+"' alt='image# "+photos[i].id_photo+"'>\
                        <div class='new-photo__img__loupe'><i class='fa fa-search-plus' aria-hidden='true'></i></div>\
                      </div>\
                      <div class='new-photo__about'>\
                        <div class='new-photo__about__wrapp-imgs'>\
                          <div class='new-photo__about__img'>\
                            <a href='/user.html?id="+photos[i].id_user+"'>\
                              <img src='"+ avatar+"' alt='"+photos[i].name+"'>\
                            </a>\
                          </div>\
                        </div>\
                        <div class='new-photo__about__detail clearfix'>\
                          <div class='new-photo__about__detail__description'>"+photos[i].photo+"</div>\
                          <div class='new-photo__about__detail__like clearfix'>\
                            <div class='new-photo__about__detail__like__amount clearfix'><i class='new-photo__about__detail__like__amount_item fa fa-commenting' aria-hidden='true'></i>"+commentCount+"</div>\
                            <div class='new-photo__about__detail__like__amount'><i class='new-photo__about__detail__like__amount_item fa fa-heart' aria-hidden='true'></i>"+likeCount+"</div>\
                          </div>\
                        </div>\
                      </div>\
                      <div class='new-photo__albom clearfix'>\
                        <a href='/album.html?id="+photos[i].id_album+"'>\
                          <div class='new-photo__albom__name'>\
                            <i class='new-photo__albom__name_img fa fa-folder' aria-hidden='true'></i>\
                            <span class='new-album__detail__name__text'>"+photos[i].album_name+"</span>\
                          </div>\
                        </a>\
                      </div>\
                    </div>";
      $container.append(addPhoto);
    } 
  }
}

function addAlbums(){
  var albums = dataStoreObject.albums,
    $container = $("#albumsContainer");
  if (albums.length){
    for (var i = 0; i < albums.length; i++) {
      var newAlbum = '<div class="new-album">\
                        <div class="new-album__img"><img class="new-album__img__item" src="'+albums[i].cover+'" alt="'+albums[i].album_name+'"></div>\
                        <div class="new-album__detail">\
                          <div class="new-album__name clearfix">\
                            <span class="editButton editAlbum" id="editAlbum">\
                              <svg>\
                                <use class="editButton_svg" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="assets/img/sprite.svg#edit"></use>\
                              </svg>\
                            </span>\
                            <a href="/album.html?id='+albums[i].id_album+'">\
                              <span class="new-album__detail__name__text">'+albums[i].album_name+'</span></div>\
                            </a>\
                        </div>\
                      </div>';
      $container.append(newAlbum);
    } 
  }
}